import sys
import os

pdf_path = "assets/FIN529_Group17_Home Depot_V_Lowe's.pdf"

# Check if file exists
if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
    sys.exit(1)

try:
    from pypdf import PdfReader
    print("Using pypdf")
except ImportError:
    try:
        from PyPDF2 import PdfReader
        print("Using PyPDF2")
    except ImportError:
        print("ERROR: No PDF library (pypdf/PyPDF2) found.")
        sys.exit(0)

try:
    reader = PdfReader(pdf_path)
    print(f"Pages: {len(reader.pages)}")
    text = ""
    # Extract first 3 pages to get Summary/Intro
    for i in range(min(3, len(reader.pages))): 
        page = reader.pages[i]
        text += page.extract_text() + "\n"
    print("--- TEXT START ---")
    print(text.encode('utf-8', errors='ignore').decode('utf-8'))
    print("--- TEXT END ---")
except Exception as e:
    print(f"Error reading PDF: {e}")
