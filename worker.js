export default {
  /**
   * Cloudflare Worker entry point
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} ctx
   */
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Простой лендинг</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: system-ui, sans-serif;
        background: linear-gradient(120deg, #00B4DB, #0083B0);
        color: #fff;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
      }
      h1 {
        font-size: 3rem;
        margin: 0 0 1rem;
      }
      p {
        font-size: 1.25rem;
        max-width: 600px;
        line-height: 1.4;
      }
      a.button {
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        background: #fff;
        color: #0083B0;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Добро пожаловать!</h1>
      <p>Это минимальный лендинг, раздаваемый через Cloudflare Workers.<br/>Отредактируйте его по своему вкусу ✨</p>
      <a class="button" href="https://example.com">Узнать больше</a>
    </div>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8"
      }
    });
  }
};
