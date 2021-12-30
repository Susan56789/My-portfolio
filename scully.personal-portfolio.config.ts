import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "personal-portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/user/:userId':{
type:"json",
userId:{
  url:"https://jsonplaceholder.typicode.com/users",
  property:"id"
}
    },
  }
};