# Etapa 1 - build da imagem
FROM node:20.19.0-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação no modo desenvolvimento
CMD ["npm", "run", "start:dev"]
