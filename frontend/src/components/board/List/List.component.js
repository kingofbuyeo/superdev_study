export default {
  name: 'list',
  components: {},
  props: [],
  data () {
    return {
        boards : {}
    }
  },
  computed: {

  },
  created: function () {
    this.$http.get(`/api/board/list`).then((response) => {
      this.boards = response.data;
    }).catch((err) => {
      alert('게시글을 가져올 수 없습니다.');
      this.$router.push('/board/list')
    });
  },
 beforeCreate: function () {
   if (!this.$session.exists()) {

     this.$router.push('/member/login');
   }
 },
  mounted () {

  },
  methods: {
    boardList(){
      this.$http.get('/board/list')
        .then((response) => {
          this.board = response.data;
        })

    },
    writeBoard(){
      this.$router.push('/board/write')
    }
  }
}
