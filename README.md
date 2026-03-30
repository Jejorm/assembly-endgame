# Assembly: Endgame 🚀

¡Bienvenido a **Assembly: Endgame**! Un juego de adivinanza de palabras (estilo Hangman) donde tu misión es salvar al mundo del desarrollo de ser forzado a programar exclusivamente en Assembly. ¿Tienes lo que se necesita para mantener vivos los lenguajes de alto nivel?

## 🎯 Propósito del Juego

El objetivo es simple pero vital: adivinar la palabra oculta letra por letra antes de que se agoten tus intentos. En este universo, tus "vidas" son 8 lenguajes de programación icónicos (HTML, CSS, JavaScript, React, TypeScript, Node.js, Python y Ruby). Cada error elimina un lenguaje; si los perdés todos, el mundo cae en las garras de **Assembly** y el juego termina.

## 🕹️ Cómo Jugar

1.  **Observa la palabra oculta:** Al iniciar, verás espacios en blanco que representan las letras de la palabra a adivinar.
2.  **Elige una letra:** Usa el teclado en pantalla para seleccionar letras.
3.  **Aciertos:** Si la letra está en la palabra, se revelará en su posición correspondiente.
4.  **Errores:** Si la letra no está, uno de los lenguajes de programación "morirá" y recibirás un mensaje de despedida (¡algunos son muy divertidos!).
5.  **Victoria:** Adivina todas las letras antes de perder los 8 lenguajes para ganar y celebrar con un poco de confeti. 🎊
6.  **Derrota:** Si pierdes todos los lenguajes, el juego termina y se revelará la palabra que no pudiste adivinar.

## ✨ Características Únicas

-   **Teclado Dinámico:** Las teclas cambian de color según tus intentos (verde para aciertos, gris para errores) para ayudarte a visualizar qué letras ya usaste.
-   **Mensajes de Despedida:** Cuando un lenguaje es eliminado, aparece un mensaje aleatorio rindiéndole tributo (o burlándose un poco).
-   **Accesibilidad (ARIA):** Implementación de regiones `aria-live` para que los lectores de pantalla anuncien el estado del juego, intentos restantes y resultados.
-   **Estética Moderna:** Interfaz limpia con animaciones suaves, construida con React 19 y CSS puro (Flexbox/Grid).
-   **Celebración de Victoria:** Uso de `react-confetti` para marcar tus triunfos.

## 🖥️ Interfaz

La aplicación está dividida en componentes modulares para una mejor organización:

-   **Status Section:** Muestra mensajes de victoria, derrota o avisos del juego.
-   **Language Chips:** Representan tus "vidas" con los logos y colores de cada lenguaje.
-   **Word Display:** El área central donde se revelan las letras de la palabra secreta.
-   **Keyboard:** Un teclado interactivo optimizado para una gran experiencia de usuario.

## 🚀 Cómo descargar y correr el proyecto

Para tener este juego corriendo en tu dispositivo local, seguí estos pasos:

### Pre-requisitos
-   Tener instalado **Node.js** (versión 18 o superior recomendada).
-   Un gestor de paquetes como **npm** (viene con Node) o **pnpm**.

### Instalación

1.  **Cloná el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/assembly-endgame.git
    ```
2.  **Entrá a la carpeta del proyecto:**
    ```bash
    cd assembly-endgame
    ```
3.  **Instalá las dependencias:**
    Usando npm:
    ```bash
    npm install
    ```
    O usando pnpm:
    ```bash
    pnpm install
    ```

### Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Una vez ejecutado, abrí tu navegador en la dirección que te indique la terminal (usualmente `http://localhost:5173`) y ¡empieza a jugar!

---
*Desarrollado con pasión, React y muchas ganas de no terminar programando en Assembly.* 💻✨
