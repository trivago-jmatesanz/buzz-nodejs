import { merge } from 'lodash';
import { contactSchemaMap } from './contact/contact.schema.map';
import { accountSchemaMap } from './account/account.schema.map';

const schemaMap = merge([contactSchemaMap, accountSchemaMap]);

export default schemaMap;
