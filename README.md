# Maricota Decór — site

Site institucional (vitrine) da **Maricota Decór**: decoração artesanal feita sob medida —
colchas, cortinas, persianas, almofadas e dormitórios. Feito em **HTML + CSS + JavaScript puro**,
sem framework e sem etapa de build. É só abrir o `index.html` no navegador.

## 📁 Estrutura

```
index.html              → a página (todo o conteúdo/textos)
assets/css/styles.css   → cores, fontes e layout
assets/js/main.js       → interações (menu, galeria, WhatsApp, formulário)
assets/img/             → logo, ilustração e imagens
CNAME                   → domínio (usado só na publicação via GitHub Pages)
```

## ✏️ Como editar (o essencial)

### 1. Trocar o número do WhatsApp  ⚠️ importante
Abra `assets/js/main.js` e, logo no começo, edite:

```js
const CONFIG = {
  whatsapp: "5511999999999",   // ← troque pelo número REAL (código do país + DDD + número, só dígitos)
  ...
};
```

Exemplo: para o número (11) 98765-4321 use `"5511987654321"`.
Enquanto estiver `5511999999999`, os botões de WhatsApp ainda funcionam, mas apontam para um número de exemplo.

### 2. Trocar textos
Todos os textos estão no `index.html`. Procure a seção que quer mudar (elas são marcadas com
comentários, ex.: `<!-- ============ SOBRE ============ -->`) e edite o texto entre as tags.

### 3. Trocar as fotos
As imagens de exemplo ficam em `assets/img/`. Para usar as fotos reais:

- **Produtos:** substitua `prod-colchas.svg`, `prod-cortinas.svg`, `prod-persianas.svg`,
  `prod-almofadas.svg`, `prod-dormitorios.svg` (pode trocar por `.jpg`/`.png` — nesse caso,
  atualize o `src` da imagem no `index.html`).
- **Galeria:** substitua `gal-1.svg` … `gal-8.svg`.
- **Logo/ilustração:** `brand-mark.svg` (a cômoda com o vaso). O nome "MARICOTA decór" é escrito
  como texto (não é imagem), então fica nítido em qualquer tamanho.

> Dica: use fotos com boa iluminação, de preferência quadradas (galeria) ou 4:3 (produtos).

### 4. Redes sociais e e-mail
Estão no `index.html` (seção **Contato** e no rodapé) — já apontam para Instagram, Facebook,
Shopee e o e-mail `mh@maricotadecor.com.br`. Edite os links se mudarem.

## 🌐 Como publicar (gratuito)

Qualquer uma das opções abaixo hospeda o site de graça:

- **GitHub Pages:** em *Settings → Pages*, escolha a branch e a pasta raiz. O arquivo `CNAME`
  já aponta para `maricotadecor.com.br` — depois é só configurar o DNS do domínio.
- **Netlify** ou **Vercel:** arraste a pasta do projeto (ou conecte o repositório) e pronto.
  Depois adicione o domínio `maricotadecor.com.br` nas configurações.

Para ver localmente antes de publicar:

```bash
python3 -m http.server
# abra http://localhost:8000
```

## ♿ Detalhes técnicos
- Responsivo (celular, tablet e desktop) e com bom contraste.
- Sem cookies, sem rastreadores e sem servidor — nada para dar erro nos bastidores.
- Respeita a preferência de "reduzir movimento" do sistema.
