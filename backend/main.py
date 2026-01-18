from fastapi import FastAPI

app = FastAPI(title="ARES AI System")

@app.get("/")
def root():
    return {"message": "Backend is running successfully"}
