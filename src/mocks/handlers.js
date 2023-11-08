import { http, HttpResponse } from 'msw';

import dateHandlers from './handlers/dates';

export const handlers = [...dateHandlers];
