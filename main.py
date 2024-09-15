from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FAQ(BaseModel):
    id: Optional[int] = None
    question: str
    answer: str

faqs = []

@app.get("/faqs", response_model=List[FAQ])
async def get_faqs():
    return faqs

@app.post("/faqs", response_model=FAQ)
async def create_faq(faq: FAQ):
    faq.id = len(faqs) + 1
    faqs.append(faq)
    return faq

@app.put("/faqs/{faq_id}", response_model=FAQ)
async def update_faq(faq_id: int, updated_faq: FAQ):
    for i, faq in enumerate(faqs):
        if faq.id == faq_id:
            updated_faq.id = faq_id
            faqs[i] = updated_faq
            return updated_faq
    raise HTTPException(status_code=404, detail="FAQ not found")

@app.delete("/faqs/{faq_id}")
async def delete_faq(faq_id: int):
    for i, faq in enumerate(faqs):
        if faq.id == faq_id:
            del faqs[i]
            return {"message": "FAQ deleted successfully"}
    raise HTTPException(status_code=404, detail="FAQ not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)