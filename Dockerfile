# Pobieramy obraz Python
FROM python:3.10

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki backendu
COPY . .

# Instalujemy zależności
RUN pip install --no-cache-dir -r requirements.txt

# Otwieramy port
EXPOSE 8000

# Uruchamiamy aplikację
CMD ["python", "app.py"]
