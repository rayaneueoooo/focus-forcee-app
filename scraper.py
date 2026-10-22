import requests
from bs4 import BeautifulSoup
import json
import time

BASE_URL = "https://www.dzexams.com"
BAC_MAIN_URL = f"{BASE_URL}/ar/3as"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
}

def get_soup(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            return BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"[-] خطأ في جلب الصفحة {url}: {e}")
    return None

def scrape_dzexams_bac():
    print("\n[+] بدء عملية استخراج روابط البكالوريا من dzexams...")
    data_structure = {}
    
    soup = get_soup(BAC_MAIN_URL)
    if not soup:
        print("[-] تعذر الوصول للموقع الرئيسي.")
        return

    # 1. استخراج روابط المواد والقواسم
    subject_links = []
    for a in soup.find_all('a', href=True):
        href = a['href']
        if '/ar/3as/' in href:
            full_url = href if href.startswith('http') else BASE_URL + href
            subject_name = a.text.strip()
            if subject_name and full_url not in [s['url'] for s in subject_links]:
                subject_links.append({"name": subject_name, "url": full_url})

    print(f"[+] تم إيجاد {len(subject_links)} مادة/قسم.")

    # 2. الدخول لكل مادة واستخراج ملفات الـ PDF
    for subj in subject_links:
        subj_name = subj['name']
        print(f"[>] جاري معالجة: {subj_name}...")
        
        subj_soup = get_soup(subj['url'])
        if not subj_soup:
            continue

        pdf_files = []

        for a in subj_soup.find_all('a', href=True):
            href = a['href']
            title = a.text.strip()
            
            # رابط مباشر لـ PDF
            if href.endswith('.pdf'):
                pdf_url = href if href.startswith('http') else BASE_URL + href
                pdf_files.append({
                    "title": title or "ملف PDF",
                    "pdf_url": pdf_url
                })
            # رابط لصفحة الموضوع الداخلية
            elif '/ar/3as/' in href and any(keyword in href for keyword in ['examen', 'devoir', 'bac', 'sujet']):
                topic_url = href if href.startswith('http') else BASE_URL + href
                topic_soup = get_soup(topic_url)
                if topic_soup:
                    for pdf_a in topic_soup.find_all('a', href=True):
                        if pdf_a['href'].endswith('.pdf'):
                            direct_pdf = pdf_a['href'] if pdf_a['href'].startswith('http') else BASE_URL + pdf_a['href']
                            pdf_files.append({
                                "title": title or pdf_a.text.strip() or "موضوع بكالوريا / اختبار",
                                "pdf_url": direct_pdf
                            })
                            break
                time.sleep(0.3)

        # تجميع العناصر وتفادي التكرار
        unique_pdfs = list({f['pdf_url']: f for f in pdf_files}.values())
        
        if unique_pdfs:
            data_structure[subj_name] = unique_pdfs
            print(f"    [✔] تم استخراج {len(unique_pdfs)} ملف PDF.")
        
        time.sleep(0.5)

    # 3. حفظ قاعدة البيانات في ملف JSON
    output_filename = "dzexams_bac_library.json"
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(data_structure, f, ensure_ascii=False, indent=4)
        
    print(f"\n[🎉] تم الانتهاء بنجاح! تم تحديث الملف: {output_filename}")

if __name__ == "__main__":
    # تحديد مدة الانتظار بين كل فحص (86400 ثانية = 24 ساعة)
    UPDATE_INTERVAL = 86400

    print("=== السكريبت يعمل الآن بشكل مستمر ===")
    while True:
        try:
            scrape_dzexams_bac()
        except Exception as e:
            print(f"[-] حدث خطأ غير متوقع أثناء الفحص: {e}")
        
        print(f"\n[⏳] سيتم الفحص والتحديث التالي بعد 24 ساعة...")
        time.sleep(UPDATE_INTERVAL)
