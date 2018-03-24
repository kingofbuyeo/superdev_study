export default {
  name: 'view',
  components: {},
  props: [],
  data () {
    return {
      board : {}
    }
  },
  computed: {

  },
  created: function () {
     let id = this.$route.params.id;
     if(id == null || id == ""){
      this.$router.push('/board/list');
      return;
     }
     this.$http.get(`/api/board/view/${id}`).then((response) => {
       this.board = response.data;
       console.log(response.data);
     }).catch((err) => {
       alert('게시글을 가져올 수 없습니다.');
       this.$router.push('/board/list');
     });
   },
  beforeCreate: function () {
    if (!this.$session.exists()) {

      this.$router.push('/');
    }
  },
  mounted () {

  },
  methods: {
    goList(){
      this.$router.push('/board/list');
    },
    boardDelete(){
      let id = this.$route.params.id;
      if(id == null || id == ""){
        return;
       }
       this.$http.delete(`/api/board/${id}`).then((response) => {


          this.board = response.data;
          if(response.data.result == "success"){
            alert('게시글을 삭제하였습니다.');
            this.$router.push('/board/list');
          }
        }).catch((err) => {
          alert('게시글을 가져올 수 없습니다.');
          this.$router.push('/board/list');
        });
    }
  }
}
