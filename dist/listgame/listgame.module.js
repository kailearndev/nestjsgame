"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListgameModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const listgame_controller_1 = require("./listgame.controller");
const listgame_entity_1 = require("./listgame.entity");
const listgame_service_1 = require("./listgame.service");
let ListgameModule = class ListgameModule {
};
exports.ListgameModule = ListgameModule;
exports.ListgameModule = ListgameModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([listgame_entity_1.ListGames])],
        providers: [listgame_service_1.ListGameService],
        exports: [listgame_service_1.ListGameService],
        controllers: [listgame_controller_1.ListGameController],
    })
], ListgameModule);
//# sourceMappingURL=listgame.module.js.map