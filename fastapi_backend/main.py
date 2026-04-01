from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(title="Banking Scheme Guidance API")


# Enable CORS for frontend integration during development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalyzeRequest(BaseModel):
    income: float
    category: str
    needs: List[str]


def select_schemes(income: float, category: str, needs: List[str]) -> List[dict]:
    category_normalized = category.strip().lower()
    needs_normalized = [item.strip().lower() for item in needs]

    recommendations = []

    if category_normalized == "loan":
        if income <= 700000:
            recommendations.append(
                {
                    "scheme": "Pradhan Mantri Awas Yojana (PMAY)",
                    "reason": "Useful for affordable housing with interest subsidy support.",
                }
            )
        if "education" in needs_normalized:
            recommendations.append(
                {
                    "scheme": "Dr. Ambedkar Central Sector Scheme",
                    "reason": "Supports students from eligible categories pursuing higher studies.",
                }
            )
        if "business" in needs_normalized or income <= 1000000:
            recommendations.append(
                {
                    "scheme": "PM Mudra Yojana",
                    "reason": "Supports micro and small business loans without collateral in many cases.",
                }
            )

    elif category_normalized == "savings":
        recommendations.append(
            {
                "scheme": "Public Provident Fund (PPF)",
                "reason": "Long-term, low-risk savings with tax benefits.",
            }
        )
        if "girl child" in needs_normalized:
            recommendations.append(
                {
                    "scheme": "Sukanya Samriddhi Yojana",
                    "reason": "Focused savings plan for a girl child with attractive interest rates.",
                }
            )
        if "senior citizen" in needs_normalized:
            recommendations.append(
                {
                    "scheme": "Senior Citizens Savings Scheme (SCSS)",
                    "reason": "Designed for senior citizens with regular interest payouts.",
                }
            )

    elif category_normalized == "insurance":
        recommendations.append(
            {
                "scheme": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
                "reason": "Affordable life insurance for eligible account holders.",
            }
        )
        recommendations.append(
            {
                "scheme": "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
                "reason": "Low-cost accident insurance cover.",
            }
        )
        if "health" in needs_normalized or income <= 800000:
            recommendations.append(
                {
                    "scheme": "Ayushman Bharat (PM-JAY)",
                    "reason": "Health coverage support for eligible families.",
                }
            )

    if not recommendations:
        recommendations.append(
            {
                "scheme": "Jan Dhan + Social Security Bundle",
                "reason": "A starter combination for savings, insurance, and direct benefit transfers.",
            }
        )

    return recommendations


@app.post("/analyze")
def analyze(request: AnalyzeRequest):
    best_schemes = select_schemes(request.income, request.category, request.needs)

    return {
        "input": request.model_dump(),
        "best_government_schemes": best_schemes,
    }
