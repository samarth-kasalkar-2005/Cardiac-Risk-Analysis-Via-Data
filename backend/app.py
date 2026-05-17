from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)   # <-- THIS LINE ENABLES CORS

# Load model and scaler
model = joblib.load('../model/heart_model.pkl')
scaler = joblib.load('../model/scaler.pkl')

@app.route('/')
def home():
    return "Cardiac Disease Detection API is Running"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    input_features = [
        data['age'],
        data['sex'],
        data['cp'],
        data['trestbps'],
        data['chol'],
        data['fbs'],
        data['restecg'],
        data['thalach'],
        data['exang'],
        data['oldpeak'],
        data['slope'],
        data['ca'],
        data['thal']
    ]

    input_array = np.array([input_features])
    input_scaled = scaler.transform(input_array)
    prediction = model.predict(input_scaled)[0]
    probability = model.predict_proba(input_scaled)[0][1] * 100

    result = "Heart Disease Detected" if prediction == 1 else "No Heart Disease"

    return jsonify({
        "prediction": result,
        "probability": round(probability, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)