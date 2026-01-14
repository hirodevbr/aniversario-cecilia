# 🚀 Guia de Deploy Gratuito

## Opção 1: Vercel (RECOMENDADO - Mais fácil!)

### Passo a passo:

1. **Criar conta no GitHub (se ainda não tiver)**
   - Acesse: https://github.com
   - Crie uma conta gratuita

2. **Fazer upload do código para o GitHub**
   ```bash
   # No terminal, na pasta do projeto:
   git init
   git add .
   git commit -m "Site de aniversário para Cecilia"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/se2z.git
   git push -u origin main
   ```
   (Substitua SEU_USUARIO pelo seu nome de usuário do GitHub)

3. **Conectar com Vercel**
   - Acesse: https://vercel.com
   - Clique em "Sign Up" e faça login com sua conta do GitHub
   - Clique em "Add New Project"
   - Importe o repositório que você acabou de criar
   - Vercel detecta automaticamente que é Next.js
   - Clique em "Deploy"

4. **Pronto!**
   - Em 1-2 minutos seu site estará no ar
   - Você receberá uma URL tipo: `seu-site.vercel.app`
   - Pode personalizar o domínio depois se quiser

### Vantagens do Vercel:
- ✅ Grátis para sempre
- ✅ Deploy automático quando você atualizar o código
- ✅ HTTPS automático
- ✅ CDN global (site rápido no mundo todo)
- ✅ Suporte perfeito para Next.js

---

## Opção 2: Netlify

### Passo a passo:

1. **Mesmo processo do GitHub** (passos 1 e 2 acima)

2. **Conectar com Netlify**
   - Acesse: https://www.netlify.com
   - Clique em "Sign up" e faça login com GitHub
   - Clique em "Add new site" > "Import an existing project"
   - Escolha seu repositório
   - Configurações:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Clique em "Deploy site"

### Vantagens do Netlify:
- ✅ Grátis para sempre
- ✅ Deploy automático
- ✅ HTTPS automático
- ✅ Boa performance

---

## Opção 3: GitHub Pages (Mais trabalhoso)

Para Next.js no GitHub Pages, você precisa:
- Usar `next export` (modo estático)
- Configurar GitHub Actions

**Não recomendado** para este projeto porque usa recursos do Next.js que funcionam melhor no Vercel/Netlify.

---

## 🎯 Recomendação Final

**Use Vercel!** É a opção mais fácil e perfeita para Next.js. O processo todo leva menos de 10 minutos.

---

## 📝 Dicas importantes:

1. **Domínio personalizado (opcional):**
   - No Vercel/Netlify você pode adicionar um domínio próprio
   - Exemplo: `aniversario-cecilia.com`
   - Você precisaria comprar o domínio (R$ 30-50/ano)

2. **Atualizar o site:**
   - Basta fazer `git push` no GitHub
   - Vercel/Netlify atualiza automaticamente

3. **Testar antes de publicar:**
   - Sempre teste localmente com `npm run dev`
   - Depois faça `npm run build` para verificar se compila sem erros

---

## ⚠️ Importante sobre a data:

O site está configurado para desbloquear em **15/01/2026**. Certifique-se de que:
- A data está correta no código (`app/page.tsx`)
- O horário está em UTC-3 (Brasília)
- Teste antes de publicar!
