export default {
  path : "/cinema",
  component:()=>import('@/views/Cinema'),
  children : [
    {
      path : "allCity",
      component:()=>import('@/components/CiList')
    },
    {
      path:'/cinema',
      redirect:'/cinema/allCity'
    }
  ]
}