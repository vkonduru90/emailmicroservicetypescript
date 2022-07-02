import * as Joi from 'joi';

const emailBodySchema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  subject: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

export { emailBodySchema };
