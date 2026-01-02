---
layout: "../../../layouts/BlogPost.astro"
title: "Panduan Lengkap Setup Home Server dengan Docker & Portainer"
description: "Optimalkan komputer bekas lo jadi server tangguh untuk file hosting, ad-blocker, dan media center."
date: 2024-05-25
category: "Server"
tags: ["Home Lab", "Docker", "Ubuntu", "Self-Hosted"]
reference: "home-server-guide"
cover: "./cover.png"
---

Punya laptop atau PC lama yang berdebu di pojokan? Jangan dibuang! PC lawas lo bisa disulap jadi **Home Server** yang powerful. Di artikel ini, kita bakal bahas step-by-step cara setup server dari nol sampai jalanin dashboard Docker.

---

## Persiapan Hardware dan OS

Sebelum masuk ke teknis, lo harus pastiin hardware lo siap tempur 24/7. 

### Pemilihan Hardware
- **CPU**: Minimal Core i3 atau sekelasnya udah cukup banget buat home lab.
- **RAM**: Minimal 8GB kalau mau lancar jalanin banyak container Docker.
- **Storage**: Disarankan pake SSD buat OS, dan HDD kapasitas besar buat penyimpanan data.

### Instalasi OS (Ubuntu Server)
Gue sangat saranin pake **Ubuntu Server 24.04 LTS** karena komunitasnya paling gede dan stabil buat jangka panjang. Jangan lupa setup SSH biar lo bisa remote server-nya dari laptop utama lo.

---

## Instalasi Docker dan Engine-nya

Kenapa Docker? Karena dengan Docker, server lo bakal tetep bersih. Setiap aplikasi jalan di "isolasinya" masing-masing.

### Step 1: Install Docker Engine
Jalanin perintah ini buat update repository dan install docker:

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable --now docker