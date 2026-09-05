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

O site é estático, então qualquer hospedagem de sites estáticos funciona **de graça**.
O arquivo `vercel.json` já deixa tudo pronto para o **Vercel** (recomendado).

### Vercel (recomendado) — passo a passo
1. Crie uma conta grátis em <https://vercel.com> e conecte a sua conta do GitHub.
2. **Add New → Project** e escolha o repositório `mari`.
3. O Vercel detecta que é um site estático — é só clicar em **Deploy** (sem configurar build).
4. Em poucos segundos o site fica no ar num endereço tipo `maricota.vercel.app` (para testar).
5. Para usar o domínio próprio: **Settings → Domains → Add** e digite `maricotadecor.com.br`.
   O Vercel mostra 2 registros de DNS para colar no painel onde o domínio está registrado.
   HTTPS (cadeado) é ativado automaticamente e sem custo.

> Domínios `.com.br` são geridos pelo **Registro.br** (<https://registro.br>). É lá, ou no
> painel do provedor/hospedagem atual, que os registros de DNS acima devem ser configurados.

### Alternativa: GitHub Pages
Em *Settings → Pages*, escolha a branch e a pasta raiz. O arquivo `CNAME` já aponta para
`maricotadecor.com.br`; depois é só configurar o DNS do domínio.

### Ver localmente antes de publicar
```bash
python3 -m http.server
# abra http://localhost:8000
```

## ♿ Detalhes técnicos
- Responsivo (celular, tablet e desktop) e com bom contraste.
- Sem cookies, sem rastreadores e sem servidor — nada para dar erro nos bastidores.
- Respeita a preferência de "reduzir movimento" do sistema.
