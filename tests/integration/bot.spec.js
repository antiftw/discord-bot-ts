"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("../../inversify.config");
const types_1 = require("../../src/types");
const discord_js_1 = require("discord.js");
const ts_mockito_1 = require("ts-mockito");
describe('Bot', () => {
    let discordMock;
    let discordInstance;
    let bot;
    beforeEach(() => {
        discordMock = ts_mockito_1.mock(discord_js_1.Client);
        discordInstance = ts_mockito_1.instance(discordMock);
        inversify_config_1.default.rebind(types_1.TYPES.Client)
            .toConstantValue(discordInstance);
        bot = inversify_config_1.default.get(types_1.TYPES.Bot);
    });
});
//# sourceMappingURL=bot.spec.js.map