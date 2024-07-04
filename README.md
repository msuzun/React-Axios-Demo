
# Unsplash API ile React Projesi

Bu proje, React ve Axios kullanarak Unsplash API'den veri çeken ve görüntüleyen bir web uygulamasıdır. Uygulama, kullanıcıların çeşitli fotoğrafları keşfetmelerine olanak tanır. Hooks olarak `useState` kullanılmıştır.

## Başlarken

Bu talimatlar, projenin yerel makinenizde çalıştırılmasını sağlayacaktır.

### Gereksinimler

- Node.js (v12.0.0 veya üstü)
- NPM (v6.0.0 veya üstü) veya Yarn (v1.22.0 veya üstü)

### Kurulum

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/msuzun/React-Axios-Demo.git
    ```

2. Proje dizinine gidin:
    ```bash
    cd ReactIleAPIKullanimi
    ```

3. Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```
    veya
    ```bash
    yarn install
    ```

4.  `imageSearchService` dosyası içerisinde Unsplash API anahtarınızı ekleyin:
    ```bash
    Authorization:your_access_key_here
    ```

### Çalıştırma

Uygulamayı geliştirme modunda başlatmak için:
```bash
npm start
```
veya
```bash
yarn start
```
Tarayıcınızı açın ve [http://localhost:3000](http://localhost:3000) adresine gidin. Uygulama otomatik olarak yeniden yüklenir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **Axios**: HTTP isteklerini yönetmek için.
- **Unsplash API**: Fotoğraf verilerini almak için.
- **CSS**: Basit stillendirme için.

## Proje Yapısı

```bash
ReactIleAPIKullanimi/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── services/
│   │       └── imageSearchService.js
│   ├── assets/
│   ├── Component/
│   │   ├── ImageItem.jsx
│   │   ├── ImageList.jsx
│   │   └── SearchHeader.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslint.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```

## Öne Çıkan Özellikler

- **Resim Galerisi**: Unsplash API'den alınan resimlerin grid formatında görüntülenmesi.
- **Arama Fonksiyonu**: Kullanıcıların belirli anahtar kelimelerle resim arayabilmesi.
- **Responsive Tasarım**: Mobil uyumlu kullanıcı arayüzü.

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen önce bir konu açarak neyi değiştirmek istediğinizi tartışın.

1. Depoyu fork edin
2. Yeni bir dal oluşturun (`git checkout -b feature/isim`)
3. Değişikliklerinizi commitleyin (`git commit -m 'Özellik ekle: isim'`)
4. Dala push edin (`git push origin feature/isim`)
5. Bir Pull Request açın

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - daha fazla bilgi için `LICENSE` dosyasına bakın.

## Teşekkür

- [Unsplash](https://unsplash.com) - Harika fotoğraf API'si için
- [React](https://reactjs.org) - Kullanıcı arayüzü kütüphanesi için
- [Axios](https://axios-http.com) - HTTP istemcisi için
