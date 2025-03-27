
        // JavaScript for Loan Details Modal
        function openLoanDetails(loanType) {
            const modal = document.getElementById("loan-modal");
            const title = document.getElementById("loan-title");
            const description = document.getElementById("loan-description");
            const interest = document.getElementById("loan-interest");
            const eligibility = document.getElementById("loan-eligibility");
            const steps = document.getElementById("loan-steps");

            // Example data for loan details
            const loanData = {
                personal: {
                    title: "Personal (Salary) Loan",
                    description: "For employees and salaried individuals.",
                    interest: "6% per annum",
                    eligibility: "Must be employed for at least 1 year.",
                    steps: ["Submit application form.", "Provide proof of income.", "Wait for approval."]
                },
                vehicle: {
                    title: "Vehicle Loan",
                    description: "Finance your dream car or motorcycle.",
                    interest: "7% per annum",
                    eligibility: "Must have a valid driver's license.",
                    steps: ["Choose your vehicle.", "Submit required documents.", "Get financing."]
                },
                housing: {
                    title: "Housing Loan",
                    description: "Make your dream home a reality.",
                    interest: "4.5% per annum",
                    eligibility: "Must have a stable income.",
                    steps: ["Submit property plan.", "Get appraisal.", "Loan approval."]
                },
                agriculture: {
                    title: "Agricultural Loan",
                    description: "For farmers and agribusiness owners.",
                    interest: "5% per annum",
                    eligibility: "Must own or lease agricultural land.",
                    steps: ["Submit farm details.", "Provide proof of ownership.", "Loan disbursement."]
                },
                pension: {
                    title: "Pension Loan (SSS/GSIS)",
                    description: "Special loans for pensioners.",
                    interest: "5.5% per annum",
                    eligibility: "Must be a registered pensioner.",
                    steps: ["Submit pension details.", "Provide valid ID.", "Loan approval."]
                },
                fishing: {
                    title: "Fishing Loan",
                    description: "Credit assistance to existing fishing operators.",
                    interest: "6.5% per annum",
                    eligibility: "Must have an active fishing business.",
                    steps: ["Submit business details.", "Provide proof of operation.", "Loan disbursement."]
                },
                crop: {
                    title: "Crop Loan",
                    description: "For helping farmers with labor, marketing, and other operating costs.",
                    interest: "5% per annum",
                    eligibility: "Must own or lease farmland.",
                    steps: ["Submit crop details.", "Provide proof of ownership.", "Loan approval."]
                }
            };

            const data = loanData[loanType];
            title.textContent = data.title;
            description.textContent = data.description;
            interest.textContent = data.interest;
            eligibility.textContent = data.eligibility;
            steps.innerHTML = data.steps.map(step => `<li>${step}</li>`).join("");

            modal.style.display = "block";
        }

        function closeLoanDetails() {
            const modal = document.getElementById("loan-modal");
            modal.style.display = "none";
        }

        // JavaScript for Loan Calculator
        function calculateLoan() {
            const loanAmount = parseFloat(document.getElementById("loanAmount").value);
            const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
            const loanTerm = parseFloat(document.getElementById("loanTerm").value) * 12;

            const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
            document.getElementById("monthlyPayment").textContent = `Monthly Payment: ₱${monthlyPayment.toFixed(2)}`;
        }



function closeLoanDetails() {
    document.getElementById("loan-modal").style.display = "none";
}


function calculateLoan() {
    let amount = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    let term = parseFloat(document.getElementById("loanTerm").value) * 12;

    if (amount && rate && term) {
        let monthly = (amount * rate) / (1 - Math.pow(1 + rate, -term));
        document.getElementById("monthlyPayment").innerText = 
            `Estimated Monthly Payment: PHP ${monthly.toFixed(2)}`;
    } else {
        document.getElementById("monthlyPayment").innerText = "Please enter valid values.";
    }
}

function toggleChat() {
    let chat = document.querySelector(".chat-body");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function sendChat() {
    alert("Message sent! Our team will respond soon.");
}

function toggleFAQ(id) {
    let content = document.getElementById(`faq${id}`);
    content.style.display = content.style.display === "block" ? "none" : "block";
}

function toggleLoanDetails(loanId) {
    let summary = document.getElementById(loanId + "-summary");

    if (summary.style.maxHeight) {
        summary.style.maxHeight = null;
        summary.style.opacity = "0";
    } else {
        summary.style.maxHeight = summary.scrollHeight + "px";
        summary.style.opacity = "1";
    }
}

// Show loading screen when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Get all links on the page
    const loadingScreen = document.getElementById("loading-screen");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            // Check if the link is internal (not an external link or anchor link)
            if (link.href && !link.href.startsWith("javascript:") && !link.href.startsWith("#")) {
                e.preventDefault(); // Prevent the default link behavior
                loadingScreen.classList.add("active"); // Show the loading screen

                // Navigate to the new page after a short delay (to allow the loading screen to show)
                setTimeout(() => {
                    window.location.href = link.href;
                }, 1000); // Adjust the delay as needed
            }
        });
    });
});

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Example conversion rates (replace with real-time API data)
    const rates = {
        USD: { PHP: 56.0, EUR: 0.85 },
        PHP: { USD: 0.018, EUR: 0.015 },
        EUR: { USD: 1.18, PHP: 66.67 },
    };

    if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
        const convertedAmount = (amount * rates[fromCurrency][toCurrency]).toFixed(2);
        document.getElementById("convertedAmount").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById("convertedAmount").textContent = "Conversion not available.";
    }
}
