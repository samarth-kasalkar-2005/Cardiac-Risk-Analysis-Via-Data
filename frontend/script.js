document.getElementById("predictionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        age: parseInt(document.getElementById("age").value),
        sex: parseInt(document.getElementById("sex").value),
        cp: parseInt(document.getElementById("cp").value),
        trestbps: parseInt(document.getElementById("trestbps").value),
        chol: parseInt(document.getElementById("chol").value),
        fbs: parseInt(document.getElementById("fbs").value),
        restecg: parseInt(document.getElementById("restecg").value),
        thalach: parseInt(document.getElementById("thalach").value),
        exang: parseInt(document.getElementById("exang").value),
        oldpeak: parseFloat(document.getElementById("oldpeak").value),
        slope: parseInt(document.getElementById("slope").value),
        ca: parseInt(document.getElementById("ca").value),
        thal: parseInt(document.getElementById("thal").value)
    };

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
        .then(result => {
            const resultText = document.getElementById("result");
            const probabilityText = document.getElementById("probability");
            const card = document.getElementById("resultCard");
    
            resultText.innerText = result.prediction;
            probabilityText.innerText = "Risk Probability: " + result.probability + "%";
    
            if (result.prediction.includes("Detected")) {
                card.style.backgroundColor = "#3a0000";
            } else {
                card.style.backgroundColor = "#003a00";
            }
        })
        .catch(error => console.error("Error:", error));
    });