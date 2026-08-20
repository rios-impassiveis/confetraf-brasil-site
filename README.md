# CONFETRAF-BRASIL — Site institucional

Site institucional da **Confederação Nacional dos Trabalhadores e Trabalhadoras da Agricultura Familiar do Brasil (CONFETRAF-BRASIL)**.

Site estático construído com [Astro](https://astro.build), hospedado no GitHub Pages e administrado pela equipe através do [Pages CMS](https://pagescms.org).

## Stack

- [Astro](https://astro.build) — geração do site estático
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [React](https://react.dev) — componentes interativos (busca)
- [Pages CMS](https://pagescms.org) — edição de conteúdo sem tocar em código
- GitHub Actions — build e deploy automático para o GitHub Pages

## Estrutura do conteúdo

Todo o conteúdo editável pela equipe fica em `src/content/` e em algumas páginas de `src/pages/`, e é administrado pelo Pages CMS (arquivo de configuração: `.pages.yml`):

| Seção pública  | Onde mora o conteúdo        | Editável pelo CMS |
| -------------- | --------------------------- | ----------------- |
| Notícias       | `src/content/blog/`         | Sim               |
| Documentos     | `src/content/documents/`    | Sim               |
| A Confederação | `src/pages/confederacao.md` | Sim               |
| Organização    | `src/pages/organizacao.md`  | Sim               |
| Contato        | `src/pages/contato.md`      | Sim               |

> A coleção de notícias mantém o nome interno `blog` por compatibilidade com o schema do Astro, mas aparece publicamente como **Notícias**.

## Desenvolvimento local

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # gera o site estático em ./dist
npm run preview   # serve o build de produção localmente
```

Alternativamente, com Docker (não é necessário ter Node instalado):

```bash
docker compose up
```

## Deploy

O deploy para o GitHub Pages é automático via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`. No GitHub, em **Settings → Pages**, a opção **Source** deve estar configurada como **GitHub Actions**.

O `site`/`base` do Astro (em `astro.config.ts` e `src/config.ts`) estão configurados para o GitHub Pages de projeto (`https://<usuário>.github.io/confetraf-brasil-site/`). Caso o site passe a usar um domínio próprio, ambos precisam ser atualizados.

## Créditos

Este projeto começou a partir do tema [AstroPaper](https://github.com/satnaing/astro-paper), de Sat Naing, distribuído sob licença MIT (ver `LICENSE`).
