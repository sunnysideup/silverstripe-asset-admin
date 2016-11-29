/* global jest, describe, it, expect, beforeEach, jasmine */

jest.unmock('deep-freeze-strict');
jest.unmock('../UploadFieldActionTypes.js');
jest.unmock('../UploadFieldReducer.js');

import uploadFieldReducer from '../UploadFieldReducer';
import fileStructure from '../../../lib/fileStructure';
import ACTION_TYPES from '../UploadFieldActionTypes';

describe('uploadFieldReducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      fields: {
        myfield: [
          Object.assign({}, fileStructure, { id: 5, name: 'MyFile.jpg' }),
          Object.assign({}, fileStructure, { id: 6, name: 'AnotherFile.jpg' }),
        ],
        anotherfield: [
          Object.assign({}, fileStructure, { id: 5, name: 'MyFile.jpg' }),
          Object.assign({}, fileStructure, { queuedId: 'xyz', name: 'InProgressFile.jpg', progress: 10 }),
        ],
      },
    };
  });


  describe('FILEFIELD_ADD_FILE', () => {
    it('should add a new file to a list', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_ADD_FILE,
        payload: {
          fieldId: 'myfield',
          file: Object.assign({}, fileStructure, { id: 7, name: 'NewFile.jpg' }),
        },
      });
      expect(nextState.fields.myfield.length).toBe(3);
      expect(nextState.fields.myfield[2].id).toBe(7);
      expect(nextState.fields.anotherfield).toEqual(initialState.fields.anotherfield);
    });
  });

  describe('FILEFIELD_SET_FILES', () => {
    it('should replace existing files', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_SET_FILES,
        payload: {
          fieldId: 'myfield',
          files: [
            Object.assign({}, fileStructure, { id: 8, name: 'EightFile.jpg' }),
            Object.assign({}, fileStructure, { id: 9, name: 'NineFile.jpg' }),
          ],
        },
      });
      expect(nextState.fields.myfield.length).toBe(2);
      expect(nextState.fields.myfield[0].id).toBe(8);
      expect(nextState.fields.myfield[1].id).toBe(9);
      expect(nextState.fields.anotherfield).toEqual(initialState.fields.anotherfield);
    });
  });

  describe('FILEFIELD_UPLOAD_FAILURE', () => {
    it('should update error messages on failed uploads', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_UPLOAD_FAILURE,
        payload: {
          fieldId: 'anotherfield',
          queuedId: 'xyz',
          message: {
            type: 'error',
            value: 'An error occurred uploading this file',
          },
        },
      });
      expect(nextState.fields.anotherfield.length).toBe(2);
      expect(nextState.fields.anotherfield[0].message).toBe(undefined);
      expect(nextState.fields.anotherfield[1].message.type).toBe('error');
      expect(nextState.fields.anotherfield[1].message.value).toBe('An error occurred uploading this file');
      expect(nextState.fields.myfield).toEqual(initialState.fields.myfield);
    });
  });

  describe('FILEFIELD_REMOVE_FILE', () => {
    it('should remove the specified saved file', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_REMOVE_FILE,
        payload: {
          fieldId: 'anotherfield',
          file: { id: 5 },
        },
      });
      expect(nextState.fields.anotherfield.length).toBe(1);
      expect(nextState.fields.anotherfield[0].queuedId).toBe('xyz');
      expect(nextState.fields.myfield).toEqual(initialState.fields.myfield);
    });

    it('should remove the specified in-progress file', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_REMOVE_FILE,
        payload: {
          fieldId: 'anotherfield',
          file: { queuedId: 'xyz' },
        },
      });
      expect(nextState.fields.anotherfield.length).toBe(1);
      expect(nextState.fields.anotherfield[0].id).toBe(5);
      expect(nextState.fields.myfield).toEqual(initialState.fields.myfield);
    });
  });

  describe('FILEFIELD_UPLOAD_SUCCESS', () => {
    it('should update in-progress files on successful upload', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_UPLOAD_SUCCESS,
        payload: {
          fieldId: 'anotherfield',
          queuedId: 'xyz',
          json: { id: 10, title: 'In-Progress File' },
        },
      });
      expect(nextState.fields.anotherfield.length).toBe(2);
      expect(nextState.fields.anotherfield[1]).toEqual(
        jasmine.objectContaining({
          id: 10,
          queuedId: 'xyz',
          name: 'InProgressFile.jpg',
          title: 'In-Progress File',
        })
      );
      expect(nextState.fields.myfield).toEqual(initialState.fields.myfield);
    });
  });

  describe('FILEFIELD_UPDATE_QUEUED_FILE', () => {
    it('updates progress of queued files', () => {
      const nextState = uploadFieldReducer(initialState, {
        type: ACTION_TYPES.FILEFIELD_UPDATE_QUEUED_FILE,
        payload: {
          fieldId: 'anotherfield',
          queuedId: 'xyz',
          updates: { progress: 50 },
        },
      });
      expect(nextState.fields.anotherfield.length).toBe(2);
      expect(nextState.fields.anotherfield[1].progress).toBe(50);
      expect(nextState.fields.myfield).toEqual(initialState.fields.myfield);
    });
  });
});