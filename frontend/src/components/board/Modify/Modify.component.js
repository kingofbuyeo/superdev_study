export default {
  name: 'modify',
  components: {},
  props: [],
  data () {
    return {
        board:{

        }
    }
  },
  computed: {

  },
   created: function () {
     let id = this.$route.params.id;
     if(id == null || id == ""){
      return;
     }
     this.$http.get(`/api/board/view/${id}`).then((response) => {
       this.board = response.data;
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
  beforeCreate: function () {
    if (!this.$session.exists()) {

      this.$router.push('/member/login');
    }
  },
  mounted () {

  },
  methods: {
    goList(){
      this.$router.push('/board/list');
    },
    boardAdjust(){
      this.$http.put('/api/board', this.board)
      .then((response) => {
        alert('글이 정상적으로 저장 되었습니다.');
        this.$router.push('/board/list')
      })
      .catch((err) => {
        alert(err);
      });
    }
  }
}
