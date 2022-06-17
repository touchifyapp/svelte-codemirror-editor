<script lang="ts">
    import "../styles.css";

    import { page } from "$app/stores";
    import { base } from "$app/paths";

    const nav = [
        { path: `${base}`, text: "Configurator" },
        { path: `${base}/javascript`, text: "Javascript" },
        { path: `${base}/typescript`, text: "Typescript" },
        { path: `${base}/html`, text: "HTML" },
        { path: `${base}/css`, text: "CSS" },
    ];
</script>

<svelte:head>
    <title>svelte-codemirror-editor</title>
</svelte:head>

<section class="layout">
    <header class="header">
        <h1><a href={base}>svelte-codemirror-editor</a></h1>
    </header>

    <nav class="menu">
        {#each nav as item (item.path)}
            <a href={item.path} class="menu__item {$page.url.pathname === item.path ? 'menu__item_active' : ''}">
                {item.text}
            </a>
        {/each}
    </nav>

    <main>
        <slot />
    </main>
</section>

<style>
    .layout {
        height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 3rem auto 1fr;
        grid-template-areas:
            "header header"
            "menu menu"
            "main main";
    }

    .header {
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1f1f23;
    }
    .header > h1 {
        font-size: 1.3rem;
        font-weight: 700;
    }
    .header > h1 > a {
        color: white;
        text-decoration: none;
    }

    main {
        grid-area: main;
        overflow: hidden;
    }

    .menu {
        grid-area: menu;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: #edf2ff;
        overflow: hidden;
        padding: 0.5rem 0;
    }

    .menu__item {
        padding: 0.5rem;
        text-align: center;
        font-size: 0.9rem;
        transition: color 0.2s linear, background-color 0.2s linear;
    }
    .menu__item:link,
    .menu__item:visited {
        color: #333;
        text-decoration: none;
    }
    .menu__item:hover {
        color: #99b4ff;
    }
    .menu__item.menu__item_active {
        color: #5236dd;
    }

    @media screen and (min-width: 640px) {
        .layout {
            grid-template-areas:
                "header header"
                "menu main"
                "menu main";
        }

        .header {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            z-index: 2;
        }

        .menu {
            flex-direction: column;
            align-items: stretch;
            justify-content: start;
            width: 10rem;
            padding: 0;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            z-index: 1;
        }

        .menu__item {
            padding: 0.5rem;
        }
        .menu__item:link,
        .menu__item:visited {
            color: #333;
            text-decoration: none;
        }
        .menu__item:hover {
            color: #fff;
            background: #333;
        }
        .menu__item.menu__item_active {
            color: white;
            background: #5236dd;
        }
    }
</style>
