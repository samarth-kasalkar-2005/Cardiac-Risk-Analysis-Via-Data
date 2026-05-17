# Cardiac Risk Analysis Via Data ❤️  
**Machine Learning Based Heart Disease Prediction System**

Cardiac Risk Analysis Via Data is a machine learning powered healthcare application that predicts the possibility of cardiac disease using patient clinical data and health parameters.

The project combines a responsive frontend with a Flask backend and trained ML model to provide real-time cardiac risk prediction.

---

## 🔹 Key Features

- ❤️ Heart disease prediction using ML
- 📊 Probability-based prediction results
- ⚡ Real-time frontend + backend integration
- 🧠 Trained machine learning model
- 🎨 Clean and responsive UI
- 🔌 Flask REST API integration
- 📋 Patient health parameter analysis

---

## 🧱 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask
- Flask-CORS

### Machine Learning
- Scikit-learn
- Pandas
- NumPy
- Joblib

---

## 📁 Project Structure

```text
Cardiac-Risk-Analysis-Via-Data/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── model/
│   ├── heart_model.pkl
│   └── scaler.pkl
│
├── dataset/
│   └── heart.csv
│
├── requirements.txt
└── README.md
```

---

## 📸 Screenshots

### 🖥️ Terminal Output
<img width="939" height="673" alt="Screenshot 2026-05-16 225653" src="https://github.com/user-attachments/assets/a71f4de4-6437-49f8-8163-d6c09b830cc0" />


---

### 🎨 Frontend Interface
<img width="870" height="901" alt="Screenshot 2026-05-16 225555" src="https://github.com/user-attachments/assets/6d60f94c-d29f-4707-932a-cea7eb57b0f1" />


---

### ❤️ Prediction Output
<img width="873" height="902" alt="Screenshot 2026-05-16 225056" src="https://github.com/user-attachments/assets/d28d76d9-b8fd-4f80-9a95-1b2a4e856bac" />


---

## 🧩 System Architecture

```Architecture
Patient Health Data
        ↓
Data Preprocessing
        ↓
ML Prediction Model
        ↓
Flask Backend API
        ↓
Frontend Interface
        ↓
Prediction Result & Risk Analysis
```

---

## ⚙️ How It Works

1. User enters patient health details
2. Frontend sends data to Flask backend
3. Backend preprocesses the input data
4. Trained ML model predicts cardiac disease risk
5. Prediction probability is calculated
6. Results are displayed on frontend interface

---

## 🛠️ Installation & Setup

### Backend Setup

```bash
git clone https://github.com/samarth-kasalkar-2005/Cardiac-Risk-Analysis-Via-Data-.git

cd "Cardiac Disease Detection"

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

---

### Run Backend Server

```bash
cd backend

python app.py
```

Server will start at:

```text
http://127.0.0.1:5000
```

---

### Run Frontend

Open:

```text
frontend/index.html
```

in your browser

OR use VS Code Live Server extension.

---

## 🧠 Input Parameters

The model predicts cardiac disease using:

- Age
- Gender
- Chest Pain Type
- Resting Blood Pressure
- Cholesterol
- Fasting Blood Sugar
- ECG Results
- Maximum Heart Rate
- Exercise Induced Angina
- Oldpeak
- Slope
- Major Vessels
- Thalassemia

---

## 📌 Example Prediction

| Result | Risk Probability |
|---|---|
| No Heart Disease | 27.5% |

---

## 🚧 Future Enhancements

- 📷 X-ray based cardiac disease detection
- 🧠 Deep learning integration
- ☁️ Cloud deployment
- 📱 Mobile responsive improvements
- 🔐 User authentication system
- 📊 Prediction history tracking

---

## 🎓 What I Learned

- Machine Learning model integration
- Flask API development
- Frontend–backend communication
- Healthcare dataset preprocessing
- Model serialization using Joblib
- Real-time prediction systems

---

## ⚠️ Important Note

This project is developed for:

- Educational purposes
- Academic mini project/internship project
- Learning ML healthcare applications

This application should **not** be used for real medical diagnosis.

---

## 👨‍💻 Project By

**Samarth Kasalkar**  
SYBSc Computer Science  
Machine Learning & AI Enthusiast 🚀  

GitHub: https://github.com/samarth-kasalkar-2005
