export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'enkjones/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620a43d405a64536bae6e0c7',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-w98tq6xx',
                  apiId: 'fde45902-4503-4931-a785-3dd8cf55c078'
                },
                {
                  buildHookId: '620a43d505a64534ffe6e461',
                  title: 'Website',
                  name: 'sanity-angular-website-web-2wt8yrxb',
                  apiId: '7862acf0-f01d-4c71-8c8b-a541f8183664'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enkjones/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-2wt8yrxb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
