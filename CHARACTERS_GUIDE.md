# 🎮 Guia para Adicionar Imagens dos Personagens

## Como adicionar imagens dos personagens do Genshin Impact

### Opção 1: Usar imagens da pasta `public`

1. **Criar pasta para imagens:**
   ```bash
   mkdir public/characters
   ```

2. **Baixar imagens dos personagens:**
   - Procure por imagens oficiais do Genshin Impact
   - Sites recomendados:
     - [Genshin Impact Wiki](https://genshin-impact.fandom.com/)
     - [Hoyolab](https://www.hoyolab.com/)
   - Salve as imagens na pasta `public/characters/`

3. **Atualizar o código em `app/page.tsx`:**
   
   Adicione o import do Image do Next.js no topo:
   ```tsx
   import Image from 'next/image';
   ```
   
   E atualize o array de personagens para incluir o caminho da imagem:
   ```tsx
   const characters = [
     {
       name: 'Columbina',
       description: 'A nova personagem que você está esperando ansiosamente!',
       emoji: '🕊️',
       image: '/characters/columbina.jpg', // caminho da imagem
       color: '#ffb6c1',
     },
     // ... outros personagens
   ];
   ```

4. **Atualizar o componente CharacterCard:**
   ```tsx
   <div className="character-card">
     {char.image && (
       <div className="character-image-wrapper">
         <Image
           src={char.image}
           alt={char.name}
           width={120}
           height={120}
           className="character-image"
         />
       </div>
     )}
     <div className="character-emoji">{char.emoji}</div>
     <h3 className="character-name">{char.name}</h3>
     <p className="character-desc">{char.description}</p>
   </div>
   ```

### Opção 2: Usar URLs de imagens online

Você pode usar URLs diretas de imagens hospedadas online:

```tsx
const characters = [
  {
    name: 'Columbina',
    description: 'A nova personagem que você está esperando ansiosamente!',
    emoji: '🕊️',
    image: 'https://exemplo.com/imagens/columbina.jpg',
    color: '#ffb6c1',
  },
];
```

**⚠️ Importante:** Certifique-se de que as imagens são de uso permitido e não violam direitos autorais.

### Estilos CSS adicionais (se usar imagens)

Adicione no `app/globals.css`:

```css
.character-image-wrapper {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.1), rgba(255, 192, 203, 0.05));
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.3);
}
```

## Personagens sugeridos para adicionar:

- **Columbina** 🕊️ (favorita da Cecilia!)
- **Raiden Shogun** ⚡
- **Yae Miko** 🦊
- **Ganyu** ❄️
- **Hu Tao** 🔥
- **Ayaka** ❄️
- **Nilou** 💃
- **Nahida** 🌱
- **Furina** 💧
- **Dehya** 🔥

## Dicas:

1. Use imagens de alta qualidade (mínimo 400x400px)
2. Formato recomendado: JPG ou PNG
3. Otimize as imagens antes de adicionar (use ferramentas como TinyPNG)
4. Mantenha um tamanho consistente para todas as imagens
