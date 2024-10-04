import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "Laravel Journey As A Web Developer",
    slug: "laravel-journey-as-a-web-developer",
    status: "draft",
    image:
    "https://avatars.githubusercontent.com/u/958072?s=200&v=4",
    description:
     "my laravel journey has been so exciting so far.",
     created_at: "2024-10-4 8:37",
     updated_at: "2024-10-4 8:37",
     expired_at: "2024-10-4 8:37",
     questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            {uuid: "72a7182c-58ee-492f-a081-0d643908617b",
               text: "USA"

            },
            {
              uuid: "03f2b3f0-02df-48db-b70a-2f3cb6268aed",
              text: "Germany"
            },
            {
              uuid: "0bc35963-2e2c-40f4-ad07-b9d1428b3bad",
              text: "Ethiopia"
            },

            {uuid: "3def13fc-45d3-44ea-b341-88c6572d16a1",
              text: "United Kingdom"
            }

          ],
        }
      },

      {
        id: 2,
        type: "checkbox",
        question: "What web framework do you use",
        description: "Sint reprehenderit in aute consequat occaecat ut. Mollit in et non dolor cupidatat consectetur ex cillum magna ullamco cillum labore. Officia nisi ea consequat incididunt qui sit laboris aute aliquip commodo tempor nulla. Sunt mollit aute voluptate veniam quis duis non aliquip veniam nulla. Esse ea mollit sit laboris tempor laboris nulla laboris laboris tempor et elit quis.",
        data: {
          options: [
            {uuid:"65888efe-ddef-4a60-a172-c0fde7f84340",
              text: "Laravel"
            },

          {
            uuid: "952eb4b5-cbea-4c86-af7c-528728e52b27",
            text: "Django"
          },

          {
            uuid: "b6594275-f605-4c95-ae6a-a0712f79517e",
            text: "Express.js"
          },

        {
          uuid: "afc651ea-05d1-4d42-bae2-220d7d549768",
          text: "flask"
        }

          ],
        }
      },
      {
        id: 3,
        type: 'checkbox',
        question: 'Which PHP framework videos do you use ?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Laravel'},
            {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Yii2'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Codeigniter'},
            {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'Symfony'},
          ]
        },
      },
      {
        id: 4,
        type: 'radio',
        question: 'Which Laravel Framework do you love most?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: '31132230-29e0-4857-84ed-417542c7c8dd', text: 'Laravel 5'},
            {uuid: '0ab85f86-15ee-4ec0-ba42-793daf243a5d', text: 'Laravel 6'},
            {uuid: '748fd679-d983-4d73-8d7b-7bb4abd22254', text: 'Laravel 7'},
            {uuid: 'f1864724-1009-4bed-94a1-3cfe93dfb82a', text: 'Laravel 8'},
          ]
        },
      },
      {
        id: 5,
        type: 'checkbox',
        question: 'What type of projects have you worked on using Laravel?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'REST API'},
            {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'E-commerce'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Real Estate'},
            {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'All of the above'},
          ]
        },
      },
      {
        id: 6,
        type: 'text',
        question: 'What do you think about the future of web development?',
        description: 'Write your honest opinion.',
        data: null
      },
      {
        id: 2,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "draft",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
        description: `Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.`,
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
      },
      {
        id: 3,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        description: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.`,
        created_at: "2021-12-21 17:00:00",
        updated_at: "2021-12-21 17:00:00",
        expire_date: "2021-12-31 00:00:00",
      },

      {

        id: 4,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
        description: `A utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.`,
        created_at: "2021-12-21 14:00:00",
        updated_at: "2021-12-21 14:00:00",
        expire_date: "2021-12-31 00:00:00",
      },






     ],
  }

];

const store = createStore({
      state: {

        user: {
          data: {},
          token: sessionStorage.getItem('TOKEN'),
        },

        surveys: [...tmpSurveys]
      },
      getters: {},
      actions: {
        register({ commit },user) {
          return axiosClient.post('/register', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })

         },

        login({ commit },user) {

          return axiosClient.post('/login', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },

        logout({commit}) {
          return axiosClient.post('/logout')
            .then(response => {
                commit('logout')
                return response;

            });
        }


      },
      mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },

        setUser: (state, userData) => {
          state.user.token = userData.token;
          state.user.data = userData.user;
          sessionStorage.setItem('TOKEN', userData.token);


        }
      },
      modules: {}
})

export default store;
