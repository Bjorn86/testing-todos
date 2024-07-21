import { FilterLSKeys } from './types';
import { BrowserStorageApi } from '../browser-storage';

export const filterLSApi = new BrowserStorageApi(localStorage, FilterLSKeys);
