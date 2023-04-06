<script>
  import { users } from "../stores";

  const form = {
    username: "",
    email: "",
    pw: "",
  };

  const addUser = () => {
    // $users = $users.concat({ ...form })
    $users = $users.concat({
      username: form.username,
      email: form.email,
      pw: form.pw,
    });

    form.username = '';
    form.email = '';
    form.pw = '';

    alert('usuário inserido');
  };
</script>

<form on:submit|preventDefault={addUser}>
  <fieldset>
    <legend>Cadastro</legend>
    <input
      type="text"
      name="username"
      bind:value={form.username}
      placeholder="username"
      required
    />
    <input
    type="text"
    name="email"
    bind:value={form.email}
    placeholder="email"
    required
  />
    <input
      type="password"
      name="pw"
      bind:value={form.pw}
      placeholder="password"
      required
    />
    <button>Cadastrar</button>
  </fieldset>
</form>

<style>
  form {
    margin-top: 2em;
  }
</style>
