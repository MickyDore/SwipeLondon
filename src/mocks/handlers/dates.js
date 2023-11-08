import { http, HttpResponse } from 'msw';
const namespace = import.meta.env.VITE_API_NAMESPACE;

const handlers = [
  http.get(`/dates`, () => {
    return HttpResponse.json({
      dates: [
        {
          id: 1,
          title: 'Date 1',
          description: 'This is a date description',
        },
        {
          id: 2,
          title: 'Date 2',
          description: 'This is a date description',
        },
        {
          id: 3,
          title: 'Date 3',
          description: 'This is a date description',
        },
        {
          id: 4,
          title: 'Date 4',
          description: 'This is a date description',
        },
        {
          id: 5,
          title: 'Date 5',
          description: 'This is a date description',
        },
      ],
    });
  }),
];

export default handlers;
