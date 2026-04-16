# Lumina Contabilidade

Uma landing page moderna, responsiva e de alto padrão desenvolvida para uma agência de contabilidade fictícia. O projeto utiliza um design focado em UI/UX corporativo, transmitindo credibilidade, luxo e transparência por meio de uma paleta de cores escura com detalhes em tom de champanhe.

## Visão Geral do Projeto

Este projeto foi construído para simular a presença digital de uma firma contábil voltada para clientes exigentes e gestão de patrimônio. A estrutura foi otimizada para conversão (com chamadas para ação estratégicas) e fluidez de navegação.

### Principais Funcionalidades e Seções
- **Header:** Cabeçalho fixo com efeito de desfoque (blur) e retração suave ao rolar a página (via JavaScript).
- **Hero Section:** Área de destaque com tipografia elegante e forte impacto visual.
- **Serviços (Grid):** Apresentação clara das soluções oferecidas com microinterações (hover effects) nos cartões.
- **Diferenciais:** Layout assimétrico mesclando imagem de alta qualidade e lista de benefícios.
- **Depoimentos:** Prova social estruturada em cards minimalistas.
- **Call to Action (CTA):** Chamada final para contato via WhatsApp ou E-mail.
- **Responsividade:** Layout totalmente adaptado para dispositivos móveis (Mobile First e Media Queries).

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web fundamentais, sem dependência de frameworks externos pesados:

* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Estilização com Custom Properties (Variáveis CSS), Flexbox, CSS Grid e animações suaves.
* **JavaScript (Vanilla):** Lógica simples para manipulação do DOM e eventos de scroll.
* **Tipografia:** [Google Fonts](https://fonts.google.com/) (Cormorant Garamond para títulos clássicos e Jost para leitura limpa).
* **Imagens:** [Unsplash](https://unsplash.com/) (Uso de imagens em alta resolução com filtros CSS de brilho e saturação).

## Estrutura de Arquivos

```text
├── index.html          # Estrutura principal da página
├── src/
│   ├── css/
│   │   └── styles.css  # Folha de estilos, variáveis de cor e media queries
│   └── js/
│       └── scripts.js  # Interações e animações de interface
└── README.md           # Documentação do projeto
```

## Paleta de Cores
O design system baseia-se nas seguintes variáveis CSS principais:
- --coal: #141414 (Fundo principal)
- --coal-mid: #1e1e1e (Fundo de cartões)
- --champagne: #c9a96e (Cor de destaque primária)
- --warm-gray: #8a8378 (Textos secundários e descrições)
- --off-white: #f7f5f0 (Textos principais)