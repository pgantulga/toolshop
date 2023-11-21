const ToolModel = require('../../models/tool')
const Joi = require('joi')

const toolResolver = {
    Query: {
        tool: async (parent, args) => {
            const tool = await ToolModel.findById(args.id)
            if (!tool) {
                throw new Error('Tool not found.')
            }
            return tool
        },
        tools: async () => {
            const tools = await ToolModel.find()
            if (!tools.length) {
                throw new Error('No tools found.')
            }
            return tools
        },
    },
    Mutation: {
        addTool: async (parent, args) => {
            console.log(args.input);

            const schema = Joi.object({
                name: Joi.string().required(),
                price: Joi.number().required(),
            })
            const result = schema.validate(args.input)
            if (result.error) {
                throw new Error(result.error.message)
            }
            let tool = new ToolModel(args.input)
            return await tool.save()
        }
    }
};

module.exports = toolResolver;
