<script>
  import { currentUser, products, addProduct, removeProduct } from "../stores";

  const form = {
    name: "",
  };

  function handleForm() {
    // @ts-ignore
    addProduct(form.name, form.descri, form.preco, form.data, $currentUser.id)

    form.name = '';
    form.descri = '';
    form.preco = '';
    form.data = '';
  }

  function remove(id) {
    removeProduct(id, $currentUser.id)
  }
</script>

{#if $currentUser}
  <div>
    <h2>Produtos</h2>
    {#each $products as prod}
        <div>{prod.name}, {prod.descri}, {prod.preco}, {prod.data}<a href="0" on:click|preventDefault={() => remove(prod.id)}>remover</a></div>
    {/each}
    <form on:submit|preventDefault={handleForm}>
      <fieldset>
        <legend>Adicionar produto</legend>
        <input
          type="text"
          name="name"
          bind:value={form.name}
          placeholder="nome do produto"
          required
        />
        <input
          type="text"
          name="descri"
          bind:value={form.descri}
          placeholder="descrição do produto"
          required
        />
        <input
          type="text"
          name="preco"
          bind:value={form.preco}
          placeholder="preco do produto"
          required
        />
        <input
          type="text"
          name="data"
          bind:value={form.data}
          placeholder="data de compra do produto"
          required
        />
        <button>Adicionar</button>
      </fieldset>
    </form>
  </div>
{/if}
