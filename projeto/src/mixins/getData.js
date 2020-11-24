export default {
  data() {
    return {
      data: null,
      loading: true
    };
  },
  methods: {
    getData(url) {
      this.loading = true;
      this.data = null;
      fetch(`http://localhost:3000${url}`)
        .then(resp => resp.json())
        .then(resp => {
          this.data = resp;
          this.loading = false;
        });
    }
  }
};
