# 📸 Pasta de Imagens dos Personagens

## Como adicionar imagens dos personagens:

1. **Baixe imagens dos personagens do Genshin Impact**
   - Procure por imagens oficiais ou de alta qualidade
   - Formatos aceitos: `.jpg`, `.png`, `.webp`
   - Tamanho recomendado: mínimo 400x400px

2. **Salve as imagens nesta pasta** (`public/characters/`)
   - Nomeie os arquivos de forma clara, exemplo:
     - `columbina.png`
     - `raiden-shogun.png`
     - `yae-miko.png`
     - `ganyu.png`
     - `hu-tao.png`
     - `ayaka.png`

3. **Atualize o código em `app/page.tsx`**
   
   No array `characters`, atualize o campo `image`:
   
   ```tsx
   {
     name: 'Columbina',
     description: 'A nova personagem que você está esperando ansiosamente!',
     emoji: '🕊️',
     color: '#ffb6c1',
     image: '/characters/columbina.png', // Caminho relativo à pasta public
   },
   ```

## Exemplo de estrutura:

```
public/
  └── characters/
      ├── columbina.png
      ├── raiden-shogun.png
      ├── yae-miko.png
      ├── ganyu.png
      ├── hu-tao.png
      └── ayaka.png
```

## Onde encontrar imagens:

- [Genshin Impact Wiki](https://genshin-impact.fandom.com/)
- [Hoyolab](https://www.hoyolab.com/)
- Sites de fan art (certifique-se de ter permissão)

**⚠️ Importante:** Certifique-se de que as imagens são de uso permitido e não violam direitos autorais.
