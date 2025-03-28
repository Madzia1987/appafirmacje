# Wybieramy Node.js jako bazowy obraz
FROM node:18

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki package.json i package-lock.json
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy kod źródłowy
COPY . .

# Eksponujemy port aplikacji
EXPOSE 3000

# Uruchamiamy aplikację
CMD ["npm", "run", "start"]

