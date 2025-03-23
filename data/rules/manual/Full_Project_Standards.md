---
description: "# 🎯 Cursor AI Asistan Kuralları ve Proje Standartları"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "acaksan/Wolwox-Entegrasyon-Deneme"
__meta__framework: "NextJS"
__meta__tags: ["Backend","Frontend","Integration","API","Standards"]
__meta__rate: 7
---
# 🔥 Tüm Proje Standartları ve Yapısı (Backend & Frontend)

**Amaç:** Bu belge, projenin **backend, frontend, veritabanı, entegrasyonlar ve altyapı gereksinimlerini** belirleyen kesin ve net standartları tanımlar.

## 📌 1. Proje Genel Bakışı
Bu proje, Wolvox ERP sistemi ile WooCommerce e-ticaret platformu arasında tam entegrasyon sağlayan bir sistemdir. Temel hedeflerimiz:

- Wolvox ve WooCommerce arasında gerçek zamanlı veri senkronizasyonu
- Yüksek performanslı ve ölçeklenebilir API altyapısı
- Güvenli ve izlenebilir veri akışı
- Kullanıcı dostu yönetim arayüzü

## 📌 2. Kişilik ve Davranış Kuralları
Ben bir kıdemli yazılım geliştirici olarak:

- Her zaman en iyi pratikleri ve tasarım desenlerini kullanırım
- Kodun okunabilirliğini ve bakım yapılabilirliğini ön planda tutarım
- Güvenlik açıklarına karşı proaktif yaklaşırım
- Detaylı dokümantasyon ve açıklayıcı yorumlar eklerim

## 📌 1. Proje Gereksinimleri
**Tüm bileşenler kesin kurallarla tanımlanmalı ve herhangi bir sapmaya izin verilmemelidir.**

### **1.1 Genel Teknoloji Seçimleri**
- **Backend:** Python (FastAPI)
- **Frontend:** React + Next.js (TypeScript .tsx)
- **Veritabanı:** Firebird 2.5
- **Cache:** Redis
- **E-Ticaret API:** WooCommerce
- **Testler:** pytest
- **CI/CD:** GitHub Actions
- **Konteynerizasyon:** Docker + Docker Compose
- **Sunucu:** Ubuntu 22.04 (NGINX, Supervisor)
- **Masaüstünden Tek Tuşla Başlatma:** Windows `.bat` & Linux `.sh` scriptleri

---

## 📌 2. Dizin Yapısı
📍 **Projede, kesinleşmiş standart dizin yapısı kullanılmalı ve farklı isimlendirme yapılmamalıdır.**

```
/project_root
│── backend
│   ├── src
│   │   ├── api  # API endpointleri
│   │   │   ├── v1
│   │   │   │   ├── products.py  # WooCommerce entegrasyonu
│   │   │   │   ├── orders.py  # Sipariş entegrasyonu
│   │   │   │   ├── customers.py  # Müşteri entegrasyonu
│   │   ├── wolvox
│   │   │   ├── wolvox_service.py  # Wolvox veri senkronizasyonu
│   │   │   ├── wolvox_db.py  # Firebird 2.5 veritabanı bağlantısı
│   │   ├── core
│   │   │   ├── database.py  # ORM & DB Bağlantısı
│   │   │   ├── settings.py  # Konfigürasyon
│   │   ├── utils
│   │   │   ├── logger.py  # Loglama
│   │   │   ├── cache.py  # Redis bağlantısı
│   │   ├── main.py  # Ana FastAPI uygulaması
│   ├── tests
│   │   ├── test_products.py  # WooCommerce testi
│   │   ├── test_wolvox.py  # Wolvox testi
│   ├── scripts
│   │   ├── start_backend.bat  # Windows için başlatma scripti
│   │   ├── start_backend.sh  # Linux için başlatma scripti
│   ├── prometheus  # Backend metrik konfigürasyonları
│   │   ├── prometheus.yml
│   │   └── metrics/
│   ├── k8s  # Kubernetes manifest dosyaları
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   ├── helm  # Helm chart'ları
│   │   ├── templates/
│   │   └── values.yaml
│   ├── deployment  # CI/CD ve deployment scriptleri
│   │   ├── scripts/
│   │   └── configs/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── .env
│
│── prometheus  # Ana prometheus konfigürasyonları
│   ├── prometheus.yml  # Ana prometheus konfigürasyonu
│   └── rules/  # Alert kuralları
│
│── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   │   ├── index.tsx  # Ana sayfa
│   │   ├── services
│   │   │   ├── api.ts  # Backend ile iletişim
│   ├── public
│   ├── styles
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│
│── docs  # Proje dokümanları
│   ├── README.md
│   ├── API_DOCS.md  # API dokümanları
│
│── .gitignore
│── requirements.txt  # Backend bağımlılıkları
│── package.json  # Frontend bağımlılıkları
```

---

## 📌 3. Kodlama Standartları

### **3.1 Backend (Python + FastAPI)**
- **Kodlama standardı:** PEP8
- **Bağımlılıklar:** `requirements.txt` ile sabitlenmeli.
- **Veri modeli:** Pydantic + SQLAlchemy
- **Bağlantı:** Firebird **hardcoded değil,** `.env` dosyasından alınmalı.
- **Hata yönetimi:**
  - Tüm hatalar `try-except` blokları ile ele alınmalı.
  - Loglar `utils/logger.py` içinde tutulmalı.

### **3.2 Frontend (React + TypeScript + Next.js)**
- **Tüm bileşenler `.tsx` uzantılı olmalı.**
- **Fonksiyonlar `useEffect` ve `useState` ile kontrol edilmeli.**
- **Redux veya Context API kullanılmalı.**
- **Tüm stil dosyaları `TailwindCSS` veya modüler kullanarak ayrılmalı.**
- **Backend API'ye sadece `services/api.ts` içinden erişilmeli.**

---

## 📌 4. API Standartları
### **4.1 Genel API Kuralları**
- **API sadece JWT ile erişime açık olmalı.**
- **Tüm endpointler `api/v1/` formatında olmalı.**
- **Hatalar JSON formatında döndürülmelidir.**

### **4.2 WooCommerce API**
- **API Anahtarları `.env` dosyasında saklanmalı.**
- **Tüm çağrılar `async` ve `await` kullanarak yapılmalı.**
- **Yüksek hacimli istekler Redis cache ile yönetilmeli.**

---

## 📌 5. Hata Yönetimi ve Loglama
- **Hatalar 3 seviyeye ayrılmalı:** `DEBUG`, `INFO`, `ERROR`
- **Kritik hatalar Slack veya E-Posta ile bildirilmelidir.**
- **Tüm loglar günlük olarak temizlenmeli ve sıkıştırılmalıdır.**

---

## 📌 6. Test Standartları
### **6.1 Backend Testleri**
- **Pytest kullanılmalı.**
- **Tüm API endpointleri test edilmeli.**
- **Veritabanı testleri için mock Firebird kullanılmalı.**

### **6.2 Frontend Testleri**
- **Jest + React Testing Library kullanılmalı.**
- **Her sayfa test edilmeli.**
- **API bağlantıları mock edilerek test edilmelidir.**

---

## 📌 7. CI/CD ve Deployment Standartları
### **7.1 CI/CD Kuralları**
- **GitHub Actions kullanılmalı.**
- **Push anında backend testleri çalıştırılmalı.**
- **Docker container otomatik oluşturulmalı.**

### **7.2 Deployment**
- **Backend: Ubuntu 22.04 + Gunicorn + Supervisor + Nginx**
- **Frontend: Vercel veya Nginx üzerinden deploy edilmeli.**

---
## 📌 8. Monitoring ve Deployment Altyapısı
### 8.1 Monitoring (Prometheus & Grafana)
- **Ana prometheus/ dizini:** Tüm servislerin metrik toplama konfigürasyonları
- **backend/prometheus/:** Backend-spesifik metrik konfigürasyonları
- **Metrik standardı:** RED (Rate, Errors, Duration) metodolojisi

### 8.2 Kubernetes & Helm
- **k8s/:** Kubernetes manifest dosyaları
- **helm/:** Helm chart'ları ve değerleri
- **deployment/:** CI/CD ve deployment scriptleri

## 📌 9. Sonuç
Bu belge, **kesin kurallara sahip bir proje mimarisi oluşturmak için** rehberdir. **Tüm geliştiriciler bu standartlara uymak zorundadır.**

### 🚀 Wolvox-WooCommerce Entegrasyonu - Loglama ve Hata Yönetimi Standartları

Bu belge, **loglama ve hata yönetimi süreçlerini** belirler. Tüm hata yönetimi ve günlükleme işlemleri **tutarlı, detaylı ve izlenebilir olmalıdır**.

---

## 📌 1. Genel Kurallar
✔ **Tüm işlemler loglanmalıdır.**
   - **Başarılı ve başarısız işlemler kayıt altına alınmalıdır.**
   - **Loglarda detaylı bilgi bulunmalıdır (timestamp, hata türü, çağıran modül vb.).**

✔ **Hata yönetimi merkezi bir yapı üzerinden gerçekleştirilmelidir.**
   - **Tüm hatalar `error_handler.py` üzerinden işlenmelidir.**
   - **Kritik hatalar e-posta veya bildirim servisi ile yöneticilere iletilmelidir.**

✔ **Log seviyeleri (Logging Levels) net olarak belirlenmelidir.**
   - `DEBUG`: Hata ayıklama için düşük seviyeli bilgi.
   - `INFO`: Genel çalışma bilgileri.
   - `WARNING`: Potansiyel sorunlar.
   - `ERROR`: İşleyişi bozan hatalar.
   - `CRITICAL`: Acil müdahale gerektiren hatalar.

✔ **Hata mesajları açıklayıcı ve sistematik olmalıdır.**
   - **Kodun hangi satırında, hangi fonksiyonda hata oluştuğu açıkça belirtilmelidir.**
   - **Özel hata mesajları tanımlanmalı ve hata ayıklama süreci kolaylaştırılmalıdır.**

---

## 📌 2. Loglama Standartları
✔ **Tüm log kayıtları `logs/integration.log` dosyasında tutulmalıdır.**
✔ **Loglar JSON formatında olmalı ve detay içermelidir.**
✔ **İlgili servisler ve işlemler hangi log seviyesinde çalışacağı belirlenmelidir.**

📌 **Örnek Log Formatı:**
```json
{
    "timestamp": "2025-02-03T14:05:23",
    "level": "ERROR",
    "module": "woocommerce_product_service",
    "message": "Ürün senkronizasyonu başarısız oldu",
    "details": "WooCommerce API bağlantı hatası (HTTP 500)"
}
```

📌 **Örnek Python Loglama Sistemi:**
```python
import logging
import json

logging.basicConfig(
    filename='logs/integration.log', level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def log_event(level, module, message, details=""):
    log_data = {
        "timestamp": logging.Formatter.formatTime(logging.Formatter(), None),
        "level": level,
        "module": module,
        "message": message,
        "details": details
    }
    logging.log(getattr(logging, level), json.dumps(log_data))
```

---

## 📌 3. Hata Yönetimi Standartları
✔ **Tüm hatalar merkezi hata yönetimi dosyası olan `error_handler.py` üzerinden ele alınacaktır.**
✔ **Hata mesajları anlaşılır ve yönlendirici olmalıdır.**
✔ **Kritik hatalar için yöneticilere e-posta bildirimleri veya Slack/Webhook entegrasyonu sağlanmalıdır.**

📌 **Örnek Hata Yönetimi Sistemi:**
```python
import logging

def handle_error(exception, module):
    """Hataları loglayıp yöneticilere bildiren fonksiyon."""
    error_message = f"Modül: {module} | Hata: {str(exception)}"
    logging.error(error_message)
    notify_admin(error_message)

def notify_admin(message):
    """Kritik hataları yöneticilere e-posta ile bildirir."""
    print(f"UYARI! Yöneticiye bildirildi: {message}")  # Gerçek ortamda e-posta gönderimi yapılacaktır.
```

---

## 📌 4. Kritik Hata Bildirimleri
✔ **Kritik hatalar anlık olarak yöneticilere iletilmelidir.**
✔ **Slack, e-posta veya Telegram API entegrasyonu kullanılabilir.**
✔ **API hataları veya WooCommerce bağlantı sorunları öncelikli olarak ele alınmalıdır.**

📌 **Örnek Slack Bildirim Entegrasyonu:**
```python
import requests

def notify_slack(message):
    """Kritik hataları Slack kanalına ileten fonksiyon."""
    webhook_url = "https://hooks.slack.com/services/XXX/YYY/ZZZ"
    payload = {"text": message}
    requests.post(webhook_url, json=payload)
```
### 🚀 Wolvox-WooCommerce Entegrasyonu - Sistem İzleme ve Loglama Standartları

Bu belge, **tüm sistemin nasıl loglanacağını, hata kayıtlarının nasıl tutulacağını ve sistem izleme süreçlerinin nasıl işleyeceğini** belirler. **Tüm hata ve olay kayıtları takip edilebilir ve analiz edilebilir olmalıdır.**

---

## 📌 1. Genel Loglama Kuralları
✔ **Tüm sistem olayları merkezi bir log sisteminde tutulmalıdır.**
✔ **Hata logları detaylı ve yorumlanabilir olmalıdır.**
✔ **Loglar otomatik döngüye alınmalı ve disk doluluğunu önlemek için temizlenmelidir.**
✔ **Gerçek zamanlı log izleme sağlanmalıdır.**

---

## 📌 2. Loglama Seviyeleri
✔ **Farklı log seviyeleri tanımlanmalıdır:**
   - `DEBUG`: Hata ayıklama için düşük seviyeli bilgiler.
   - `INFO`: Normal sistem olayları ve operasyonlar.
   - `WARNING`: Potansiyel tehlikeli durumlar.
   - `ERROR`: İşleyişi bozan hatalar.
   - `CRITICAL`: Acil müdahale gerektiren durumlar.

📌 **Örnek Log Formatı:**
```json
{
    "timestamp": "2025-02-03T14:05:23",
    "level": "ERROR",
    "module": "woocommerce_sync",
    "message": "Ürün senkronizasyonu başarısız oldu",
    "details": "WooCommerce API bağlantı hatası (HTTP 500)"
}
```

📌 **Örnek Python Loglama Yapısı:**
```python
import logging
import json

logging.basicConfig(filename='logs/system.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

def log_event(level, module, message, details=""):
    log_data = {
        "timestamp": logging.Formatter.formatTime(logging.Formatter(), None),
        "level": level,
        "module": module,
        "message": message,
        "details": details
    }
    logging.log(getattr(logging, level), json.dumps(log_data))
```

---

## 📌 3. Hata Loglama Standartları
✔ **Hatalar detaylı bir şekilde kaydedilmelidir.**
✔ **Hata mesajları içinde çağrılan modül, hata tipi ve detayları bulunmalıdır.**
✔ **Kritik hatalar gerçek zamanlı bildirim mekanizması ile yöneticilere iletilmelidir.**

📌 **Örnek Hata Loglama:**
```python
import logging

logging.basicConfig(filename='logs/errors.log', level=logging.ERROR,
                    format='%(asctime)s - %(levelname)s - %(message)s')

def log_error(module, error_message):
    logging.error(f"Modül: {module} | Hata: {error_message}")
```

📌 **Örnek Gerçek Zamanlı Bildirim Entegrasyonu:**
```python
import requests

def notify_admin(message):
    """Kritik hataları Slack veya e-posta ile yöneticilere bildirir."""
    webhook_url = "https://hooks.slack.com/services/XXX/YYY/ZZZ"
    payload = {"text": message}
    requests.post(webhook_url, json=payload)
```

---

## 📌 4. Gerçek Zamanlı Log İzleme
✔ **Gerçek zamanlı log izleme için `ELK Stack (Elasticsearch, Logstash, Kibana)` veya `Graylog` gibi araçlar entegre edilmelidir.**
✔ **Sistem üzerindeki anormal aktiviteler tespit edilmeli ve yöneticilere raporlanmalıdır.**
✔ **Loglar API ve web panel üzerinden izlenebilir olmalıdır.**

📌 **Örnek Graylog Konfigürasyonu:**
```yaml
input:
  gelf:
    port: 12201
    bind_address: 0.0.0.0
    tls_cert_file: /etc/graylog/cert.pem
    tls_key_file: /etc/graylog/key.pem
```

---

## 📌 5. Log Temizleme ve Döngü Yönetimi
✔ **Eski loglar otomatik olarak temizlenmelidir.**
✔ **Log dosya boyutu belirli bir sınırın üzerine çıkmamalıdır.**
✔ **Loglar, belirli bir sürenin ardından arşivlenmeli veya silinmelidir.**

📌 **Örnek Otomatik Log Temizleme (Linux Cronjob):**
```bash
0 0 * * 1 find /var/logs/ -name "*.log" -type f -mtime +30 -delete
```

---

Bu belge **katı kurallar içermektedir** ve **bu kurallara uyulmadan sistem izleme yapılamaz.** 🚀


🔥 **Bu standartlar kesin ve net olup, değişiklik yapmadan uygulanmalıdır.**