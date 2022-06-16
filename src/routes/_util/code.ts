export const javascriptValue = (): string => `/**
 * Reduce calls to the passed function.
 *
 * @param func - Function to debounce.
 * @param threshold - The delay to avoid recalling the function.
 * @param execAsap - If true, the Function is called at the start of the threshold, otherwise the Function is called at the end of the threshold.
 */
export function debounce(func, threshold, execAsap = false) {
  let timeout;

  return function debounced(...args) {
    const self = this;

    if (timeout) clearTimeout(timeout);
    else if (execAsap) func.apply(self, args);

    timeout = setTimeout(delayed, threshold || 100);

    function delayed() {
      if (!execAsap) func.apply(self, args);
      timeout = null;
    }
  };
}`;

export const typescriptValue = (): string => `/**
 * Reduce calls to the passed function.
 *
 * @param func - Function to debounce.
 * @param threshold - The delay to avoid recalling the function.
 * @param execAsap - If true, the Function is called at the start of the threshold, otherwise the Function is called at the end of the threshold.
 */
export function debounce<T extends (...args: any[]) => any>(func: T, threshold: number, execAsap = false): T {
  let timeout: any;

  return function debounced(...args: any[]): any {
    const self = this;

    if (timeout) clearTimeout(timeout);
    else if (execAsap) func.apply(self, args);

    timeout = setTimeout(delayed, threshold || 100);

    function delayed(): void {
      if (!execAsap) func.apply(self, args);
      timeout = null;
    }
  } as T;
}`;

export const htmlValue = (): string => `<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      html {
        font-family: sans-serif;
      }

      h1 {
        text-align: center;
        margin-bottom: 3rem;
      }  

      main {
        margin: 2rem 0;
      }
    </style>
  </head>
  <body>
    <h1>Hello world!</h1>
    <main>
      <p>Welcome on Codemirror</p>
    </main>
    <script>
      /**
       * Reduce calls to the passed function.
       *
       * @param func - Function to debounce.
       * @param threshold - The delay to avoid recalling the function.
       * @param execAsap - If true, the Function is called at the start of the threshold, otherwise the Function is called at the end of the threshold.
       */
      function debounce(func, threshold, execAsap = false) {
        let timeout;

        return function debounced(...args) {
          const self = this;

          if (timeout) clearTimeout(timeout);
          else if (execAsap) func.apply(self, args);

          timeout = setTimeout(delayed, threshold || 100);

          function delayed() {
            if (!execAsap) func.apply(self, args);
            timeout = null;
          }
        };
      }
    </script>
  </body>
</html>`;

export const cssValue = (): string => `html {
  font-family: sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
}

main {
  margin: 2rem 0;
}`;
