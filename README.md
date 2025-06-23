# 🚗 BMS-RideShare

**BMS-RideShare** is a secure, smart, and college-exclusive ride-sharing platform built for the students and faculty of **BMS College of Engineering (BMSCE)**. It allows users to offer or request rides and get matched based on destination, time, and proximity — helping reduce travel costs, carbon footprint, and make commuting safer and more social.

---

## 🎯 Project Objective

> To create a private, trusted ride-sharing web platform that enables the BMSCE community to safely and efficiently share transportation expenses by matching rides based on location and time.

---

## 🧰 Tech Stack

| Layer       | Tools / Tech                        |
|-------------|-------------------------------------|
| Frontend    | HTML/CSS/JS, Bootstrap *(React later)* |
| Backend     | Python (FastAPI)                    |
| Database    | MongoDB *(PostgreSQL optional)*     |
| Geo Logic   | R-Tree or K-D Tree (Python)         |
| Optional    | C/C++ modules for geo matching, logs|
| Hosting     | Render / Railway / Vercel *(TBD)*   |

---

✍️ Contributors

z3r0 – Developer / Architect </br>
Ankit – Developer 

---

## 📅 Development Checklist

### ✅ Phase 1: Minimum Viable Product (MVP)

- [ ] Set up GitHub repo with full folder structure
- [ ] FastAPI backend setup with test route
- [ ] MongoDB Atlas integration
- [ ] Email OTP-based registration (BMSCE-only)
- [ ] Basic user dashboard (active rides)
- [ ] Ride offer/request posting
- [ ] Simple location-to-location matching (exact match or basic proximity)
- [ ] Basic ride result page (contact visible only after mutual match)
- [ ] Mobile-friendly UI using Bootstrap
- [ ] Add `.env` and `.gitignore`

---

### 🔧 Phase 2: Core Extensions

- [ ] Integrate R-Tree / KD-Tree for spatial filtering (5–10km radius)
- [ ] Scheduled rides (e.g., every weekday at 8AM)
- [ ] Ride filters: driver/passenger, time, location
- [ ] Admin dashboard: view logs, flag users
- [ ] Ride rating system (1–5 stars or thumbs)
- [ ] Google Maps integration for pickup location selector
- [ ] Email/SMS notifications on match

---

### 🚀 Phase 3: Advanced Features

- [ ] Group pooling (3–4 users to same destination)
- [ ] AI-based recurring ride suggestions
- [ ] Emergency contact feature
- [ ] Cross-college support (BMSIT, BMSCA)
- [ ] C modules for distance calculation (Haversine formula)
- [ ] Gamification (eco score, badges)

---

## 🔐 Security & Privacy

- Institutional email-only registration
- No public sharing of contact info
- Show contact only after both parties confirm
- Admin moderation tools for abuse and reports
- Ride logs stored with user access controls

---

## 🏁 Setup Instructions

### Coming soon...


