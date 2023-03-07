export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/order'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '远方',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#7F8389',
    selectedColor:'#5495e6',
    borderStyle:'black'
  }
})
