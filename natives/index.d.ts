declare module "natives" {
  interface Vector3 {
    x: number;
    y: number;
    z: number;
  }

  type MemoryBuffer = object;
  type vectorPtr = Vector3;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;

  export function drawDebugLine(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function drawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function drawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;

  export function drawDebugBox(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function drawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function drawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function drawDebugText2d(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Draws a depth-tested line from one point to another.
  * ----------------
  * I recommend using a predefined function to call this.
  * [VB.NET]
  * Public Sub DrawLine(from As Vector3, [to] As Vector3, col As Color)
  * [Function].Call(Hash.DRAW_LINE, from.X, from.Y, from.Z, [to].X, [to].Y, [to].Z, col.R, col.G, col.B, col.A)
  * End Sub
  * [C#]
  * public void DrawLine(Vector3 from, Vector3 to, Color col)
  * See NativeDB for reference: http://natives.altv.mp/#/0x6B7256074AE34680
  * @param x1 Coordinates for the first point
  * @param y1 Coordinates for the first point
  * @param x2 Coordinates for the second point
  * @param y2 Coordinates for the second point
  * @param red Color with RGBA-Values
  * @param green Color with RGBA-Values
  * @param blue Color with RGBA-Values
  */
  export function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * x/y/z - Location of a vertex (in world coords), presumably.
  * ----------------
  * Keep in mind that only one side of the drawn triangle is visible: It's the side, in which the vector-product of the vectors heads to: (b-a)x(c-a) Or (b-a)x(c-b).
  * But be aware: The function seems to work somehow differently. I have trouble having them drawn in rotated orientation. Try it yourself and if you somehow succeed, please edit this and post your solution.
  * I recommend using a predefined function to call this.
  * [VB.NET]
  * Public Sub DrawPoly(a As Vector3, b As Vector3, c As Vector3, col As Color)
  * [Function].Call(Hash.DRAW_POLY, a.X, a.Y, a.Z, b.X, b.Y, b.Z, c.X, c.Y, c.Z, col.R, col.G, col.B, col.A)
  * End Sub
  * See NativeDB for reference: http://natives.altv.mp/#/0xAC26716048436851
  * @param x1 Coordinates for the first point
  * @param y1 Coordinates for the first point
  * @param x2 Coordinates for the second point
  * @param y2 Coordinates for the second point
  * @param x3 Coordinates for the third point
  * @param y3 Coordinates for the third point
  * @param red Color with RGBA-Values
  * @param green Color with RGBA-Values
  * @param blue Color with RGBA-Values
  */
  export function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Used for drawling Deadline trailing lights, see deadline.ytd
  * For UVW mapping (u,v,w parameters), reference your favourite internet resource for more details.
  * @param u1 through p23 are values that appear to be related to illiumation, scaling, and rotation; more testing required.
  */
  export function drawSpritePoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number, textureDict: string, textureName: string, u1: number, v1: number, w1: number, u2: number, v2: number, w2: number, u3: number, v3: number, w3: number): void;

  /**
  * Used for drawling Deadline trailing lights, see deadline.ytd
  * For UVW mapping (u,v,w parameters), reference your favourite internet resource for more details.
  * @param y1 casted internally.
  */
  export function drawSpritePoly2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red1: number, green1: number, blue1: number, alpha1: number, red2: number, green2: number, blue2: number, alpha2: number, red3: number, green3: number, blue3: number, alpha3: number, textureDict: string, textureName: string, u1: number, v1: number, w1: number, u2: number, v2: number, w2: number, u3: number, v3: number, w3: number): void;

  /**
  * Draw's a 3D Box between the two x,y,z coords.
  * --------------
  * Keep in mind that the edges of the box do only align to the worlds base-vectors. Therefore something like rotation cannot be applied. That means this function is pretty much useless, unless you want a static unicolor box somewhere.
  * I recommend using a predefined function to call this.
  * [VB.NET]
  * Public Sub DrawBox(a As Vector3, b As Vector3, col As Color)
  * [Function].Call(Hash.DRAW_BOX,a.X, a.Y, a.Z,b.X, b.Y, b.Z,col.R, col.G, col.B, col.A)
  * End Sub
  * [C#]
  * See NativeDB for reference: http://natives.altv.mp/#/0xD3A9971CADAC7252
  * @param y1 start pos
  * @param x2 end pos
  * @param y2 end pos
  */
  export function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

  export function setBackfaceculling(toggle: boolean): void;

  export function _0xC5C8F970D4EDFF71(p0: any): void;

  export function beginTakeMissionCreatorPhoto(): any;

  export function getStatusOfTakeMissionCreatorPhoto(): any;

  export function freeMemoryForMissionCreatorPhoto(): void;

  export function loadMissionCreatorPhoto(p0: any, p1: any, p2: any, p3: any): [boolean, any];

  export function getStatusOfLoadMissionCreatorPhoto(p0: any): [number, any];

  export function _0x7FA5D82B8F58EC06(): any;

  export function _0x5B0316762AFD4A64(): any;

  export function _0x346EF3ECAAAB149E(): void;

  export function beginTakeHighQualityPhoto(): boolean;

  export function getStatusOfTakeHighQualityPhoto(): number;

  export function freeMemoryForHighQualityPhoto(): void;

  export function _0x1BBC135A4D25EDDE(p0: boolean): void;

  export function _0xF3F776ADA161E47D(p0: any, p1: any): void;

  export function _0xADD6627C4D325458(p0: any): void;

  /**
  * 1 match in 1 script. cellphone_controller.
  * @param unused is -1 in scripts.
  */
  export function saveHighQualityPhoto(unused: number): boolean;

  export function getStatusOfSaveHighQualityPhoto(): number;

  export function _0x759650634F07B6B4(p0: any): boolean;

  export function _0xCB82A0BF0E3E3265(p0: any): any;

  export function _0x6A12D88881435DCA(): void;

  export function drawLowQualityPhotoToPhone(p0: boolean, p1: boolean): void;

  export function getMaximumNumberOfPhotos(): number;

  export function getMaximumNumberOfCloudPhotos(): number;

  /**
  * GET_CURRENT_*
  */
  export function getCurrentNumberOfPhotos(): number;

  /**
  * 2 matches across 2 scripts. Only showed in appcamera & appmedia. Both were 0.
  */
  export function _0x2A893980E96B659A(p0: any): any;

  /**
  * 3 matches across 3 scripts. First 2 were 0, 3rd was 1. Possibly a bool.
  * appcamera, appmedia, and cellphone_controller.
  */
  export function getStatusOfSortedListOperation(p0: any): any;

  export function _0x4AF92ACD3141D96C(): void;

  /**
  * @returns This function is hard-coded to always return 0.
  */
  export function _0xE791DF1F73ED2C8B(p0: any): any;

  /**
  * @returns This function is hard-coded to always return 0.
  */
  export function _0xEC72C258667BE5EA(p0: any): any;

  /**
  * GET_L*
  * @returns Hardcoded to always return 2.
  */
  export function returnTwo(p0: number): number;

  export function drawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number): void;

  export function drawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number, range: number, intensity: number): void;

  /**
  * Parameters:
  * roundness - "smoothness" of the circle edge
  * Example in C# (spotlight aims at the closest vehicle):
  * Vector3 myPos = Game.Player.Character.Position;
  * Vehicle nearest = World.GetClosestVehicle(myPos , 1000f);
  * Vector3 destinationCoords = nearest.Position;
  * Vector3 dirVector = destinationCoords - myPos;
  * dirVector.Normalize();
  * Function.Call(Hash.DRAW_SPOT_LIGHT, pos.X, pos.Y, pos.Z, dirVector.X, dirVector.Y, dirVector.Z, 255, 255, 255, 100.0f, 1f, 0.0f, 13.0f, 1f);
  * @param posX - coordinate where the spotlight is located
  * @param posY - coordinate where the spotlight is located
  * @param posZ - coordinate where the spotlight is located
  * @param dirX - the direction vector the spotlight should aim at from its current position
  * @param dirY - the direction vector the spotlight should aim at from its current position
  * @param dirZ - the direction vector the spotlight should aim at from its current position
  * @param colorR color of the spotlight
  * @param colorG color of the spotlight
  * @param distance - the maximum distance the light can reach
  * @param brightness - the brightness of the light
  * @param radius - the radius size of the spotlight
  * @param falloff - the falloff size of the light's edge (example: www.i.imgur.com/DemAWeO.jpg)
  */
  export function drawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, hardness: number, radius: number, falloff: number): void;

  export function drawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadowId: number): void;

  export function fadeUpPedLight(p0: number): void;

  export function updateLightsOnEntity(entity: number): void;

  export function _0x9641588DAB93B4B5(p0: any): void;

  export function _0x393BD2275CEB7793(): any;

  /**
  * enum MarkerTypes
  * {
  * MarkerTypeUpsideDownCone = 0,
  * MarkerTypeVerticalCylinder = 1,
  * MarkerTypeThickChevronUp = 2,
  * MarkerTypeThinChevronUp = 3,
  * MarkerTypeCheckeredFlagRect = 4,
  * MarkerTypeCheckeredFlagCircle = 5,
  * MarkerTypeVerticleCircle = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0x28477EC23D892089
  * @param faceCamera - Rotates only the y-axis (the heading) towards the camera
  * @param p19 - no effect, default value in script is 2
  * @param rotate - Rotates only on the y-axis (the heading)
  * @param textureDict - Name of texture dictionary to load texture from (e.g. "GolfPutting")
  * @param textureName - Name of texture inside dictionary to load (e.g. "PuttingMarker")
  * @param drawOnEnts - Draws the marker onto any entities that intersect it
  */
  export function drawMarker(type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, p19: number, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean): void;

  export function drawMarker2(type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, p19: any, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean, p24: boolean, p25: boolean): void;

  /**
  * Draws a 3D sphere, typically seen in the GTA:O freemode event "Penned In".
  * Example https://imgur.com/nCbtS4H
  */
  export function drawSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * 20/03/17 : Attention, checkpoints are already handled by the game itself, so you must not loop it like markers.
  * Parameters:
  * pos2 - The position of the next checkpoint to point to.
  * radius - The radius of the checkpoint.
  * Checkpoint types:
  * 0-4---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
  * 5-9---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
  * 10-14-------Ring: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
  * 15-19-------1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
  * See NativeDB for reference: http://natives.altv.mp/#/0x0134F0835AB6BFCB
  * @param type - The type of checkpoint to create. See below for a list of checkpoint types.
  * @param posX1 - The position of the checkpoint.
  * @param red Special parameter, see below for details. Usually set to 0 in the scripts.
  * @param green - The color of the checkpoint.
  * @param blue - The color of the checkpoint.
  * @param reserved - Special parameter, see below for details. Usually set to 0 in the scripts.
  * @returns Creates a checkpoint. Returns the handle of the checkpoint.
  */
  export function createCheckpoint(type: number, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, diameter: number, red: number, green: number, blue: number, alpha: number, reserved: number): number;

  /**
  * offroad_races.c4, line ~67407:
  * a_3._f7 = GRAPHICS::CREATE_CHECKPOINT(v_D, v_A, a_4, a_7, v_E, v_F, v_10, sub_62b2(v_A, 220, 255), 0);
  * HUD::GET_HUD_COLOUR(134, &v_E, &v_F, &v_10, &v_11);
  * GRAPHICS::_SET_CHECKPOINT_ICON_RGBA(a_3._f7, v_E, v_F, v_10, sub_62b2(v_A, 70, 210));
  * GRAPHICS::_4B5B4DA5D79F1943(a_3._f7, 0.95);
  * GRAPHICS::SET_CHECKPOINT_CYLINDER_HEIGHT(a_3._f7, 4.0, 4.0, 100.0);
  * @param checkpoint - Scale? Looks to be a normalized value (0.0 - 1.0)
  * @param p0 - Scale? Looks to be a normalized value (0.0 - 1.0)
  */
  export function setCheckpointScale(checkpoint: number, p0: number): void;

  export function _0x44621483FF966526(p0: any, p1: any): void;

  /**
  * Sets the cylinder height of the checkpoint.
  * Parameters:
  * @param nearHeight - The height of the checkpoint when inside of the radius.
  * @param farHeight - The height of the checkpoint when outside of the radius.
  * @param radius - The radius of the checkpoint.
  */
  export function setCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;

  /**
  * Sets the checkpoint color.
  */
  export function setCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Sets the checkpoint icon color.
  */
  export function setCheckpointIconRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * This does not move an existing checkpoint... so wtf.
  */
  export function _0xF51D36185993515D(checkpoint: number, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;

  /**
  * SET_CHECKPOINT_*
  */
  export function _0xFCF6788FC4860CD4(checkpoint: number): void;

  /**
  * Unknown. Called after creating a checkpoint (type: 51) in the creators.
  */
  export function _0x615D3925E87A3B26(checkpoint: number): void;

  export function _0xDB1EA9411C8911EC(p0: any): void;

  export function _0x3C788E7F6438754D(p0: any, p1: any, p2: any, p3: any): void;

  export function deleteCheckpoint(checkpoint: number): void;

  export function dontRenderInGameUi(p0: boolean): void;

  export function forceRenderInGameUi(toggle: boolean): void;

  /**
  * This function can requests texture dictonaries from following RPFs:
  * scaleform_generic.rpf
  * scaleform_minigames.rpf
  * scaleform_minimap.rpf
  * scaleform_web.rpf
  * last param isnt a toggle
  */
  export function requestStreamedTextureDict(textureDict: string, p1: boolean): void;

  export function hasStreamedTextureDictLoaded(textureDict: string): boolean;

  export function setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;

  /**
  * Draws a rectangle on the screen.
  * The total number of rectangles to be drawn in one frame is apparently limited to 399.
  * @param x The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)
  * @param y The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)
  * @param width The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)
  * @param height The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)
  * @param r Red part of the color. (0-255)
  * @param g Green part of the color. (0-255)
  * @param b Blue part of the color. (0-255)
  * @param a Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)
  */
  export function drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number, p8: boolean): void;

  /**
  * Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for TV channels and other draw commands that are used with a world render target.
  */
  export function setScriptGfxDrawBehindPausemenu(toggle: boolean): void;

  /**
  * Sets the draw order for script draw commands.
  * Examples from decompiled scripts:
  * GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(7);
  * GRAPHICS::DRAW_RECT(0.5, 0.5, 3.0, 3.0, v_4, v_5, v_6, a_0._f172, 0);
  * GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(1);
  * GRAPHICS::DRAW_RECT(0.5, 0.5, 1.5, 1.5, 0, 0, 0, 255, 0);
  */
  export function setScriptGfxDrawOrder(drawOrder: number): void;

  /**
  * This function anchors script draws to a side of the safe zone. This needs to be called to make the interface independent of the player's safe zone configuration.
  * These values are equivalent to alignX and alignY in common:/data/ui/frontend.xml, which can be used as a baseline for default alignment.
  * Using any other value (including 0) will result in the safe zone not being taken into account for this draw. The canonical value for this is 'I' (73).
  * For example, you can use SET_SCRIPT_GFX_ALIGN(0, 84) to only scale on the Y axis (to the top), but not change the X axis.
  * To reset the value, use RESET_SCRIPT_GFX_ALIGN.
  * @param horizontalAlign The horizontal alignment. This can be 67 ('C'), 76 ('L'), or 82 ('R').
  * @param verticalAlign The vertical alignment. This can be 67 ('C'), 66 ('B'), or 84 ('T').
  */
  export function setScriptGfxAlign(horizontalAlign: number, verticalAlign: number): void;

  /**
  * This function resets the alignment set using SET_SCRIPT_GFX_ALIGN and SET_SCRIPT_GFX_ALIGN_PARAMS to the default values ('I', 'I'; 0, 0, 0, 0).
  * This should be used after having used the aforementioned functions in order to not affect any other scripts attempting to draw.
  */
  export function resetScriptGfxAlign(): void;

  /**
  * Sets the draw offset/calculated size for SET_SCRIPT_GFX_ALIGN. If using any alignment other than left/top, the game expects the width/height to be configured using this native in order to get a proper starting position for the draw command.
  */
  export function setScriptGfxAlignParams(x: number, y: number, w: number, h: number): void;

  /**
  * Calculates the effective X/Y fractions when applying the values set by SET_SCRIPT_GFX_ALIGN and SET_SCRIPT_GFX_ALIGN_PARAMS
  */
  export function getScriptGfxPosition(x: number, y: number, calculatedX: number, calculatedY: number): [void, number, number];

  export function getSafeZoneSize(): number;

  /**
  * Draws a 2D sprite on the screen.
  * Parameters:
  * scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)
  * @param textureDict - Name of texture dictionary to load texture from (e.g. "CommonMenu", "MPWeaponsCommon", etc.)
  * @param textureName - Name of texture to load from texture dictionary (e.g. "last_team_standing_icon", "tennis_icon", etc.)
  * @param screenX Screen offset (0.5 = center)
  * @param heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees
  * @param red Sprite color (default = 255/255/255)
  * @param green Sprite color (default = 255/255/255)
  * @param alpha - opacity level
  */
  export function drawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number, p11: boolean): void;

  /**
  * Used in arcade games and Beam hack minigame in Doomsday Heist. I will most certainly dive into this to try replicate arcade games.
  * @param x position must be between 0.0 and 1.0 (1.0 being the most right side of the screen)
  * @param y position must be between 0.0 and 1.0 (1.0 being the most bottom side of the screen)
  * @param width 0.0 - 1.0 is the reasonable amount generally
  * @param height 0.0 - 1.0 is the reasonable amount generally
  * @param p6 almost always 0.0
  * @param p11 seems to be unknown but almost always 0 int
  */
  export function _0x2D3B147AFAD49DE0(textureDict: string, textureName: string, x: number, y: number, width: number, height: number, p6: number, red: number, green: number, blue: number, alpha: number, p11: any): void;

  /**
  * Similar to _DRAW_SPRITE, but seems to be some kind of "interactive" sprite, at least used by render targets.
  * These seem to be the only dicts ever requested by this native:
  * prop_screen_biker_laptop
  * Prop_Screen_GR_Disruption
  * Prop_Screen_TaleOfUs
  * prop_screen_nightclub
  * Prop_Screen_IE_Adhawk
  * prop_screen_sm_free_trade_shipping
  * prop_screen_hacker_truck
  * See NativeDB for reference: http://natives.altv.mp/#/0x2BC54A8188768488
  */
  export function drawInteractiveSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Similar to DRAW_SPRITE, but allows to specify the texture coordinates used to draw the sprite.
  * @param u1 texture coordinates for the top
  * @param u2 texture coordinates for the bottom
  */
  export function drawSpriteUv(textureDict: string, textureName: string, x: number, y: number, width: number, height: number, u1: number, v1: number, u2: number, v2: number, heading: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Example:
  * GRAPHICS::ADD_ENTITY_ICON(a_0, "MP_Arrow");
  * I tried this and nothing happened...
  */
  export function addEntityIcon(entity: number, icon: string): any;

  export function setEntityIconVisibility(entity: number, toggle: boolean): void;

  export function setEntityIconColor(entity: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Sets the on-screen drawing origin for draw-functions (which is normally x=0,y=0 in the upper left corner of the screen) to a world coordinate.
  * From now on, the screen coordinate which displays the given world coordinate on the screen is seen as x=0,y=0.
  * Example in C#:
  * Vector3 boneCoord = somePed.GetBoneCoord(Bone.SKEL_Head);
  * Function.Call(Hash.SET_DRAW_ORIGIN, boneCoord.X, boneCoord.Y, boneCoord.Z, 0);
  * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, -0.015, 0.013, 0.013, 0.0, 255, 0, 0, 200);
  * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, -0.015, 0.013, 0.013, 90.0, 255, 0, 0, 200);
  * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, 0.015, 0.013, 0.013, 270.0, 255, 0, 0, 200);
  * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, 0.015, 0.013, 0.013, 180.0, 255, 0, 0, 200);
  * See NativeDB for reference: http://natives.altv.mp/#/0xAA0008F3BBB8F416
  */
  export function setDrawOrigin(x: number, y: number, z: number, p3: any): void;

  /**
  * Resets the screen's draw-origin which was changed by the function GRAPHICS::SET_DRAW_ORIGIN(...) back to x=0,y=0.
  * See GRAPHICS::SET_DRAW_ORIGIN(...) for further information.
  */
  export function clearDrawOrigin(): void;

  export function setBinkMovie(name: string): number;

  export function playBinkMovie(binkMovie: number): void;

  export function stopBinkMovie(binkMovie: number): void;

  export function releaseBinkMovie(binkMovie: number): void;

  export function drawBinkMovie(binkMovie: number, p1: number, p2: number, p3: number, p4: number, p5: number, r: number, g: number, b: number, a: number): void;

  /**
  * In percentage: 0.0 - 100.0
  */
  export function setBinkMovieTime(binkMovie: number, progress: number): void;

  /**
  * In percentage: 0.0 - 100.0
  */
  export function getBinkMovieTime(binkMovie: number): number;

  /**
  * @param binkMovie Is return value from _SET_BINK_MOVIE. Has something to do with bink volume? (audRequestedSettings::SetVolumeCurveScale)
  * @returns binkMovie: Is return value from _SET_BINK_MOVIE. Has something to do with bink volume? (audRequestedSettings::SetVolumeCurveScale)
  */
  export function setBinkMovieVolume(binkMovie: number, value: number): void;

  /**
  * Might be more appropriate in AUDIO?
  */
  export function attachTvAudioToEntity(entity: number): void;

  export function setBinkMovieUnk2(binkMovie: number, p1: boolean): void;

  /**
  * Probably changes tvs from being a 3d audio to being "global" audio
  */
  export function setTvAudioFrontend(toggle: boolean): void;

  export function setBinkShouldSkip(binkMovie: number, bShouldSkip: boolean): void;

  export function loadMovieMeshSet(movieMeshSetName: string): number;

  export function releaseMovieMeshSet(movieMeshSet: number): void;

  export function _0x9B6E70C5CEEF4EEB(p0: any): any;

  /**
  * int screenresx,screenresy;
  * GET_SCREEN_RESOLUTION(&screenresx,&screenresy);
  */
  export function getScreenResolution(x: number, y: number): [void, number, number];

  /**
  * Returns current screen resolution.
  */
  export function getActiveScreenResolution(x: number, y: number): [void, number, number];

  export function getAspectRatio(b: boolean): number;

  export function _0xB2EBE8CBC58B90E9(): any;

  /**
  * Setting Aspect Ratio Manually in game will return:
  * false - for Narrow format Aspect Ratios (3:2, 4:3, 5:4, etc. )
  * true - for Wide format Aspect Ratios (5:3, 16:9, 16:10, etc. )
  * @returns Setting Aspect Ratio to "Auto" in game will return "false" or "true" based on the actual set Resolution Ratio.
  */
  export function getIsWidescreen(): boolean;

  /**
  * false = Any resolution < 1280x720
  * true = Any resolution >= 1280x720
  */
  export function getIsHidef(): boolean;

  /**
  * AD*
  */
  export function _0xEFABC7722293DA7C(): void;

  /**
  * Enables Night Vision.
  * Example:
  * C#: Function.Call(Hash.SET_NIGHTVISION, true);
  * C++: GRAPHICS::SET_NIGHTVISION(true);
  * BOOL toggle:
  * true = turns night vision on for your player.
  * false = turns night vision off for your player.
  */
  export function setNightvision(toggle: boolean): void;

  export function getRequestingnightvision(): boolean;

  export function getUsingnightvision(): boolean;

  export function _0xEF398BEEE4EF45F9(p0: boolean): void;

  export function _0x814AF7DCAACC597B(p0: any): void;

  export function _0x43FA7CBE20DAB219(p0: any): void;

  export function setNoiseoveride(toggle: boolean): void;

  export function setNoisinessoveride(value: number): void;

  /**
  * Convert a world coordinate into its relative screen coordinate.  (WorldToScreen)
  * For .NET users...
  * VB:
  * Public Shared Function World3DToScreen2d(pos as vector3) As Vector2
  * Dim x2dp, y2dp As New Native.OutputArgument
  * Native.Function.Call(Of Boolean)(Native.Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.x, pos.y, pos.z, x2dp, y2dp)
  * Return New Vector2(x2dp.GetResult(Of Single), y2dp.GetResult(Of Single))
  * End Function
  * C#:
  * See NativeDB for reference: http://natives.altv.mp/#/0x34E82F05DF2974F5
  * @returns Returns a boolean; whether or not the operation was successful. It will return false if the coordinates given are not visible to the rendering camera.
  */
  export function getScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number, screenX: number, screenY: number): [boolean, number, number];

  /**
  * Returns the texture resolution of the passed texture dict+name.
  * Note: Most texture resolutions are doubled compared to the console version of the game.
  */
  export function getTextureResolution(textureDict: string, textureName: string): Vector3;

  /**
  * Overriding ped badge texture to a passed texture. It's synced between players (even custom textures!), don't forget to request used dict on *all* clients to make it sync properly. Can be removed by passing empty strings.
  */
  export function overridePedBadgeTexture(ped: number, txd: string, txn: string): boolean;

  export function _0xE2892E7E55D7073A(p0: number): void;

  /**
  * Purpose of p0 and p1 unknown.
  */
  export function setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;

  export function disableOcclusionThisFrame(): void;

  /**
  * Does not affect weapons, particles, fire/explosions, flashlights or the sun.
  * When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.
  * Used in Humane Labs Heist for EMP.
  * @param state True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
  */
  export function setArtificialLightsState(state: boolean): void;

  /**
  * If "blackout" is enabled, this native allows you to ignore "blackout" for vehicles.
  */
  export function setArtificialLightsStateAffectsVehicles(toggle: boolean): void;

  export function _0xC35A6D07C93802B2(): void;

  /**
  * Creates a tracked point, useful for checking the visibility of a 3D point on screen.
  */
  export function createTrackedPoint(): number;

  export function setTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): void;

  export function isTrackedPointVisible(point: number): boolean;

  export function destroyTrackedPoint(point: number): void;

  /**
  * @returns This function is hard-coded to always return 0.
  */
  export function _0xBE197EAA669238F4(p0: any, p1: any, p2: any, p3: any): any;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0x61F95E5BB3E0A8C6(p0: any): void;

  export function _0xAE51BC858F32BA66(p0: any, p1: number, p2: number, p3: number, p4: number): void;

  export function _0x649C97D52332341A(p0: any): void;

  export function _0x2C42340F916C5930(p0: any): any;

  export function _0x14FC5833464340A8(): void;

  export function _0x0218BA067D249DEA(): void;

  export function _0x1612C45F9E3E0D44(): void;

  export function _0x5DEBD9C4DC995692(): void;

  export function _0xAAE9BE70EC7C69AB(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;

  /**
  * Wraps 0xAAE9BE70EC7C69AB with FLT_MAX as p7, Jenkins: 0x73E96210?
  */
  export function grassLodShrinkScriptAreas(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number): void;

  export function grassLodResetScriptAreas(): void;

  export function cascadeShadowsInitSession(): void;

  export function cascadeShadowsSetCascadeBounds(p0: any, p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number): void;

  export function cascadeShadowsSetCascadeBoundsScale(p0: number): void;

  export function cascadeShadowsSetEntityTrackerScale(p0: number): void;

  export function _0x36F6626459D91457(p0: number): void;

  export function _0x259BA6D4E6F808F1(p0: any): void;

  /**
  * When this is set to ON, shadows only draw as you get nearer.
  * When OFF, they draw from a further distance.
  */
  export function cascadeShadowsEnableEntityTracker(toggle: boolean): void;

  export function _0x25FC3E33A31AD0C9(p0: boolean): void;

  /**
  * Possible values:
  * "CSM_ST_POINT"
  * "CSM_ST_LINEAR"
  * "CSM_ST_TWOTAP"
  * "CSM_ST_BOX3x3"
  * "CSM_ST_BOX4x4"
  * "CSM_ST_DITHER2_LINEAR"
  * "CSM_ST_CUBIC"
  * "CSM_ST_DITHER4"
  * See NativeDB for reference: http://natives.altv.mp/#/0xB11D94BC55F41932
  */
  export function cascadeShadowsSetShadowSampleType(type: string): void;

  export function cascadeShadowsClearShadowSampleType(): void;

  export function cascadeShadowsSetAircraftMode(p0: boolean): void;

  export function cascadeShadowsSetDynamicDepthMode(p0: boolean): void;

  export function cascadeShadowsSetDynamicDepthValue(p0: number): void;

  export function _0x0AE73D8DF3A762B2(p0: boolean): void;

  export function _0xCA465D9CC0D231BA(p0: any): void;

  export function golfTrailSetEnabled(toggle: boolean): void;

  /**
  * @param p8 seems to always be false.
  */
  export function golfTrailSetPath(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;

  export function golfTrailSetRadius(p0: number, p1: number, p2: number): void;

  export function golfTrailSetColour(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

  export function golfTrailSetTessellation(p0: number, p1: number): void;

  /**
  * GOLF_TRAIL_SET_*
  */
  export function _0xC0416B061F2B7E5E(p0: boolean): void;

  /**
  * 12 matches across 4 scripts. All 4 scripts were job creators.
  * Tested but noticed nothing.
  * @param type ranged from 0 - 2.
  * @param p4 was always 0.2f. Likely scale.
  * @param alpha p8 is RGBA, the graphic is always yellow (255, 255, 0, 255).
  */
  export function golfTrailSetFixedControlPoint(type: number, xPos: number, yPos: number, zPos: number, p4: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Only appeared in Golf & Golf_mp. Parameters were all ptrs
  */
  export function golfTrailSetShaderParams(p0: number, p1: number, p2: number, p3: number, p4: number): void;

  export function golfTrailSetFacing(p0: boolean): void;

  export function golfTrailGetMaxHeight(): number;

  export function golfTrailGetVisualControlPoint(p0: number): Vector3;

  /**
  * Toggles Heatvision on/off.
  */
  export function setSeethrough(toggle: boolean): void;

  export function getUsingseethrough(): boolean;

  export function seethroughReset(): void;

  export function seethroughSetFadeStartDistance(distance: number): void;

  export function seethroughSetFadeEndDistance(distance: number): void;

  export function seethroughGetMaxThickness(): number;

  /**
  * 0.0 = you will not be able to see people behind the walls. 50.0 and more = you will see everyone through the walls. More value is "better" view. See https://gfycat.com/FirmFlippantGourami
  * min: 1.0
  * max: 10000.0
  */
  export function seethroughSetMaxThickness(thickness: number): void;

  export function seethroughSetNoiseAmountMin(amount: number): void;

  export function seethroughSetNoiseAmountMax(amount: number): void;

  export function seethroughSetHiLightIntensity(intensity: number): void;

  export function seethroughSetHiLightNoise(noise: number): void;

  /**
  * min: 0.0
  * max: 0.75
  */
  export function seethroughSetHeatscale(index: number, heatScale: number): void;

  export function seethroughSetColorNear(red: number, green: number, blue: number): void;

  /**
  * Setter for 0xE59343E9E96529E7
  * SET_M*
  */
  export function _0xB3C641F3630BF6DA(p0: number): void;

  /**
  * Getter for 0xB3C641F3630BF6DA
  * GET_M*
  */
  export function _0xE59343E9E96529E7(): number;

  /**
  * SET_F*
  */
  export function _0x6A51F78772175A51(toggle: boolean): void;

  /**
  * TOGGLE_*
  */
  export function _0xE63D7C6EECECB66B(toggle: boolean): void;

  /**
  * Sets an unknown value related to timecycles.
  */
  export function _0xE3E2C1B4C59DBC77(unk: number): void;

  /**
  * time in ms to transition to fully blurred screen
  */
  export function triggerScreenblurFadeIn(transitionTime: number): boolean;

  /**
  * time in ms to transition from fully blurred to normal
  */
  export function triggerScreenblurFadeOut(transitionTime: number): boolean;

  export function disableScreenblurFade(): void;

  export function getScreenblurFadeCurrentTime(): number;

  /**
  * Returns whether screen transition to blur/from blur is running.
  */
  export function isScreenblurFadeRunning(): boolean;

  export function togglePausedRenderphases(toggle: boolean): void;

  export function getTogglePausedRenderphasesStatus(): boolean;

  export function resetPausedRenderphases(): void;

  export function _0x851CD923176EBA7C(): void;

  /**
  * Every p2 - p5 occurrence was 0f.
  */
  export function setHidofEnvBlurParams(p0: boolean, p1: boolean, nearplaneOut: number, nearplaneIn: number, farplaneOut: number, farplaneIn: number): void;

  export function _0xB569F41F3E7E83A4(p0: any): void;

  export function _0x7AC24EAB6D74118D(p0: boolean): boolean;

  export function _0xBCEDB009461DA156(): any;

  export function _0x27FEB5254759CDE3(textureDict: string, p1: boolean): boolean;

  /**
  * GRAPHICS::START_PARTICLE_FX_NON_LOOPED_AT_COORD("scr_paleto_roof_impact", -140.8576f, 6420.789f, 41.1391f, 0f, 0f, 267.3957f, 0x3F800000, 0, 0, 0);
  * Axis - Invert Axis Flags
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  * -------------------------------------------------------------------
  * C#
  * Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, = you are calling this function.
  * char *effectname = This is an in-game effect name, for e.g. "scr_fbi4_trucks_crash" is used to give the effects when truck crashes etc
  * float x, y, z pos = this one is Simple, you just have to declare, where do you want this effect to take place at, so declare the ordinates
  * float scale = is declare the scale of the effect, this may vary as per the effects for e.g 1.0f
  * See NativeDB for reference: http://natives.altv.mp/#/0x25129531F77B9ED3
  * @param xRot Again simple? just mention the value in case if you want the effect to rotate.
  * @param yRot Again simple? just mention the value in case if you want the effect to rotate.
  * @param xAxis To bool the axis values.
  * @param yAxis To bool the axis values.
  */
  export function startParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startNetworkedParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): boolean;

  /**
  * GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE("scr_sh_bong_smoke", PLAYER::PLAYER_PED_ID(), -0.025f, 0.13f, 0f, 0f, 0f, 0f, 31086, 0x3F800000, 0, 0, 0);
  * Axis - Invert Axis Flags
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startParticleFxNonLoopedOnPedBone(effectName: string, ped: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startNetworkedParticleFxNonLoopedOnPedBone(effectName: string, ped: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;

  /**
  * Starts a particle effect on an entity for example your player.
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  * Example:
  * C#:
  * Internally this calls the same function as GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
  * however it uses -1 for the specified bone index, so it should be possible to start a non looped fx on an entity bone using that native
  * -can confirm START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE does NOT work on vehicle bones.
  * @param entity 0.5, 0.0, 0.0, 0.0, 1.0, false, false, false);
  */
  export function startParticleFxNonLoopedOnEntity(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startNetworkedParticleFxNonLoopedOnEntity(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;

  export function startNetworkedParticleFxNonLoopedOnEntityBone(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;

  /**
  * only works on some fx's, not networked
  */
  export function setParticleFxNonLoopedColour(r: number, g: number, b: number): void;

  /**
  * Usage example for C#:
  * Function.Call(Hash.SET_PARTICLE_FX_NON_LOOPED_ALPHA, new InputArgument[] { 0.1f });
  * Note: the argument alpha ranges from 0.0f-1.0f !
  */
  export function setParticleFxNonLoopedAlpha(alpha: number): void;

  /**
  * Used only once in the scripts (taxi_clowncar)
  * SET_PARTICLE_FX_*
  */
  export function _0x8CDE909A0370BB3A(toggle: boolean): void;

  /**
  * GRAPHICS::START_PARTICLE_FX_LOOPED_AT_COORD("scr_fbi_falling_debris", 93.7743f, -749.4572f, 70.86904f, 0f, 0f, 0f, 0x3F800000, 0, 0, 0, 0)
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  * @param p11 seems to be always 0
  */
  export function startParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): number;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startParticleFxLoopedOnPedBone(effectName: string, ped: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startParticleFxLoopedOnEntity(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startParticleFxLoopedOnEntityBone(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startNetworkedParticleFxLoopedOnEntity(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p12: any, p13: any, p14: any, p15: any): number;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function startNetworkedParticleFxLoopedOnEntityBone(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p13: any, p14: any, p15: any, p16: any): number;

  /**
  * @param p1 is always 0 in the native scripts
  */
  export function stopParticleFxLooped(ptfxHandle: number, p1: boolean): void;

  export function removeParticleFx(ptfxHandle: number, p1: boolean): void;

  export function removeParticleFxFromEntity(entity: number): void;

  export function removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;

  export function _0xBA0127DA25FD54C9(p0: any, p1: any): void;

  export function doesParticleFxLoopedExist(ptfxHandle: number): boolean;

  export function setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;

  export function setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, noNetwork: boolean): void;

  /**
  * only works on some fx's
  * @param p4 = 0
  */
  export function setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;

  export function setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;

  export function setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;

  export function setParticleFxLoopedFarClipDist(ptfxHandle: number, range: number): void;

  export function setParticleFxCamInsideVehicle(p0: boolean): void;

  export function setParticleFxCamInsideNonplayerVehicle(vehicle: number, p1: boolean): void;

  export function setParticleFxShootoutBoat(p0: any): void;

  export function _0x2A251AA48B2B46DB(): void;

  export function _0x908311265D42A820(p0: any): void;

  export function _0xCFD16F0DB5A3535C(toggle: boolean): void;

  /**
  * DISABLE_*
  */
  export function _0x5F6DF3D92271E8A1(toggle: boolean): void;

  export function _0x2B40A97646381508(p0: any): void;

  /**
  * Creates cartoon effect when Michel smokes the weed
  */
  export function enableClownBloodVfx(toggle: boolean): void;

  /**
  * Creates a motion-blur sort of effect, this native does not seem to work, however by using the `START_SCREEN_EFFECT` native with `DrugsMichaelAliensFight` as the effect parameter, you should be able to get the effect.
  */
  export function enableAlienBloodVfx(toggle: boolean): void;

  export function setParticleFxBulletImpactScale(scale: number): void;

  export function _0xBB90E12CAC1DAB25(p0: number): void;

  export function _0xCA4AE345A153D573(p0: boolean): void;

  export function _0x54E22EA2C1956A8D(p0: number): void;

  export function _0x949F397A288B28B3(p0: number): void;

  /**
  * SET_PARTICLE_FX_*
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function _0xBA3D194057C79A7B(p0: string): void;

  export function _0x5DBF05DB5926D089(p0: any): void;

  /**
  * FORCE_*
  */
  export function _0x9B079E5221D984D3(p0: boolean): void;

  /**
  * From the b678d decompiled scripts:
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("FM_Mission_Controler");
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_apartment_mp");
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_indep_fireworks");
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_cig_plane");
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_creator");
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_ornate_heist");
  * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_prison_break_heist_station");
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function useParticleFxAsset(name: string): void;

  /**
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function setParticleFxOverride(oldAsset: string, newAsset: string): void;

  /**
  * Resets the effect of SET_PARTICLE_FX_OVERRIDE
  * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
  */
  export function resetParticleFxOverride(name: string): void;

  export function _0xA46B73FAA3460AE1(p0: boolean): void;

  export function _0xF78B803082D4386F(p0: number): void;

  export function washDecalsInRange(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function washDecalsFromVehicle(vehicle: number, p1: number): void;

  /**
  * Fades nearby decals within the range specified
  */
  export function fadeDecalsInRange(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  /**
  * Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...
  */
  export function removeDecalsInRange(x: number, y: number, z: number, range: number): void;

  export function removeDecalsFromObject(obj: number): void;

  export function removeDecalsFromObjectFacing(obj: number, x: number, y: number, z: number): void;

  export function removeDecalsFromVehicle(vehicle: number): void;

  /**
  * decal types:
  * public enum DecalTypes
  * {
  * splatters_blood = 1010,
  * splatters_blood_dir = 1015,
  * splatters_blood_mist = 1017,
  * splatters_mud = 1020,
  * splatters_paint = 1030,
  * splatters_water = 1040,
  * See NativeDB for reference: http://natives.altv.mp/#/0xB302244A1839BDAD
  */
  export function addDecal(decalType: number, posX: number, posY: number, posZ: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, width: number, height: number, rCoef: number, gCoef: number, bCoef: number, opacity: number, timeout: number, p17: boolean, p18: boolean, p19: boolean): number;

  export function addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): number;

  export function startPetrolTrailDecals(p0: number): void;

  export function addPetrolTrailDecalInfo(x: number, y: number, z: number, p3: number): void;

  export function endPetrolTrailDecals(): void;

  export function removeDecal(decal: number): void;

  export function isDecalAlive(decal: number): boolean;

  export function getDecalWashLevel(decal: number): number;

  export function _0xD9454B5752C857DC(): void;

  export function _0x27CFB1B1E078CB2D(): void;

  export function setDisableDecalRenderingThisFrame(): void;

  export function getIsPetrolDecalInRange(xCoord: number, yCoord: number, zCoord: number, radius: number): boolean;

  /**
  * Old name: _OVERRIDE_DECAL_TEXTURE
  */
  export function patchDecalDiffuseMap(decalType: number, textureDict: string, textureName: string): void;

  /**
  * Old name: _UNDO_DECAL_TEXTURE_OVERRIDE
  */
  export function unpatchDecalDiffuseMap(decalType: number): void;

  export function moveVehicleDecals(p0: any, p1: any): void;

  /**
  * @param boneIndex is always chassis_dummy in the scripts. The x/y/z params are location relative to the chassis bone.
  */
  export function addVehicleCrewEmblem(vehicle: number, ped: number, boneIndex: number, x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number, scale: number, p13: any, alpha: number): boolean;

  export function _0x82ACC484FFA3B05F(p0: any): any;

  export function removeVehicleCrewEmblem(vehicle: number, p1: number): void;

  export function getVehicleCrewEmblemRequestState(vehicle: number, p1: number): number;

  export function doesVehicleHaveCrewEmblem(vehicle: number, p1: number): boolean;

  export function _0x0E4299C549F0D1F1(toggle: boolean): void;

  /**
  * DISABLE_S*
  */
  export function _0x02369D5C8A51FDCF(toggle: boolean): void;

  export function _0x46D1A61A21F566FC(p0: number): void;

  export function overrideInteriorSmokeName(name: string): void;

  export function overrideInteriorSmokeLevel(level: number): void;

  export function overrideInteriorSmokeEnd(): void;

  /**
  * Used with 'NG_filmnoir_BW{01,02}' timecycles and the "NOIR_FILTER_SOUNDS" audioref.
  */
  export function registerNoirScreenEffectThisFrame(): void;

  export function disableVehicleDistantlights(toggle: boolean): void;

  export function _0x03300B57FCAC6DDB(p0: boolean): void;

  /**
  * REQUEST_*
  */
  export function _0x98EDF76A7271E4F2(): void;

  /**
  * Forces footstep tracks on all surfaces.
  * USE_/USING_*
  */
  export function setForcePedFootstepsTracks(toggle: boolean): void;

  /**
  * Forces vehicle trails on all surfaces.
  * USE_/USING_*
  */
  export function setForceVehicleTrails(toggle: boolean): void;

  export function disableScriptAmbientEffects(p0: any): void;

  /**
  * Only one match in the scripts:
  * GRAPHICS::PRESET_INTERIOR_AMBIENT_CACHE("int_carrier_hanger");
  */
  export function presetInteriorAmbientCache(timecycleModifierName: string): void;

  /**
  * Loads the specified timecycle modifier. Modifiers are defined separately in another file (e.g. "timecycle_mods_1.xml")
  * Parameters:
  * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
  * @param modifierName - The modifier to load (e.g. "V_FIB_IT3", "scanline_cam", etc.)
  */
  export function setTimecycleModifier(modifierName: string): void;

  export function setTimecycleModifierStrength(strength: number): void;

  /**
  * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
  */
  export function setTransitionTimecycleModifier(modifierName: string, transition: number): void;

  /**
  * SET_TRA*
  */
  export function _0x1CBA05AE7BD7EE05(p0: number): void;

  export function clearTimecycleModifier(): void;

  /**
  * Only use for this in the PC scripts is:
  * if (GRAPHICS::GET_TIMECYCLE_MODIFIER_INDEX() != -1)
  * For a full list, see here: pastebin.com/cnk7FTF2
  */
  export function getTimecycleModifierIndex(): number;

  export function getTimecycleTransitionModifierIndex(): number;

  export function _0x98D18905BF723B99(): any;

  export function pushTimecycleModifier(): void;

  export function popTimecycleModifier(): void;

  export function setCurrentPlayerTcmodifier(modifierName: string): void;

  export function setPlayerTcmodifierTransition(value: number): void;

  export function setNextPlayerTcmodifier(modifierName: string): void;

  export function addTcmodifierOverride(modifierName1: string, modifierName2: string): void;

  /**
  * CLEAR_A*
  */
  export function _0x15E33297C3E8DC60(p0: string): void;

  /**
  * Full list of timecycle modifiers by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/timecycleModifiers.json
  */
  export function setExtraTimecycleModifier(modifierName: string): void;

  /**
  * Clears the secondary timecycle modifier usually set with _SET_EXTRA_TIMECYCLE_MODIFIER
  */
  export function clearExtraTimecycleModifier(): void;

  /**
  * See _0xFDF3D97C674AFB66 for use, works the same just for the secondary timecycle modifier.
  * Returns an integer representing the Timecycle modifier
  */
  export function getExtraTimecycleModifierIndex(): number;

  /**
  * ENABLE_*
  * The same as SET_TIMECYCLE_MODIFIER_STRENGTH but for the secondary timecycle modifier.
  */
  export function setExtraTimecycleModifierStrength(strength: number): void;

  /**
  * Resets the extra timecycle modifier strength normally set with 0x2C328AF17210F009
  */
  export function resetExtraTimecycleModifierStrength(): void;

  export function requestScaleformMovie(scaleformName: string): number;

  export function requestScaleformMovieInstance(scaleformName: string): number;

  /**
  * Similar to REQUEST_SCALEFORM_MOVIE, but seems to be some kind of "interactive" scaleform movie?
  * These seem to be the only scaleforms ever requested by this native:
  * "breaking_news"
  * "desktop_pc"
  * "ECG_MONITOR"
  * "Hacking_PC"
  * "TEETH_PULLING"
  * Note: Unless this hash is out-of-order, this native is next-gen only.
  */
  export function requestScaleformMovieInteractive(scaleformName: string): number;

  export function hasScaleformMovieLoaded(scaleformHandle: number): boolean;

  /**
  * SET_???
  * @param val is 1-20 (0 will return false)
  * @returns val is 1-20 (0 will return false)
  */
  export function _0x2FCB133CA50A49EB(val: number): boolean;

  /**
  * @param val is 1-20. Return is related to INSTRUCTIONAL_BUTTONS, COLOUR_SWITCHER_02, etc?
  * @returns val is 1-20. Return is related to INSTRUCTIONAL_BUTTONS, COLOUR_SWITCHER_02, etc?
  */
  export function _0x86255B1FC929E33E(val: number): boolean;

  /**
  * Only values used in the scripts are:
  * "heist_mp"
  * "heistmap_mp"
  * "instructional_buttons"
  * "heist_pre"
  */
  export function hasScaleformMovieFilenameLoaded(scaleformName: string): boolean;

  export function hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): boolean;

  export function setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): [void, number];

  export function setScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;

  export function _0x32F34FF7F617643B(p0: any, p1: any): void;

  /**
  * This native is used in some casino scripts to fit the scaleform in the rendertarget.
  */
  export function setScaleformFitRendertarget(scaleformHandle: number, toggle: boolean): void;

  export function drawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number, unk: number): void;

  /**
  * @param unk is not used so no need
  */
  export function drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;

  export function drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;

  export function drawScaleformMovie3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: any): void;

  export function drawScaleformMovie3dSolid(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: any): void;

  /**
  * Calls the Scaleform function.
  */
  export function callScaleformMovieMethod(scaleform: number, method: string): void;

  /**
  * Calls the Scaleform function and passes the parameters as floats.
  * The number of parameters passed to the function varies, so the end of the parameter list is represented by -1.0.
  */
  export function callScaleformMovieMethodWithNumber(scaleform: number, methodName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;

  /**
  * Calls the Scaleform function and passes the parameters as strings.
  * The number of parameters passed to the function varies, so the end of the parameter list is represented by 0 (NULL).
  */
  export function callScaleformMovieMethodWithString(scaleform: number, methodName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;

  /**
  * Calls the Scaleform function and passes both float and string parameters (in their respective order).
  * The number of parameters passed to the function varies, so the end of the float parameters is represented by -1.0, and the end of the string parameters is represented by 0 (NULL).
  * NOTE: The order of parameters in the function prototype is important! All float parameters must come first, followed by the string parameters.
  * Examples:
  * // function MY_FUNCTION(floatParam1, floatParam2, stringParam)
  * // function MY_FUNCTION_2(floatParam, stringParam1, stringParam2)
  * GRAPHICS::_CALL_SCALEFORM_MOVIE_FUNCTION_MIXED_PARAMS(scaleform, "MY_FUNCTION_2", 10.0, -1.0, -1.0, -1.0, -1.0, "String param #1", "String param #2", 0, 0, 0);
  */
  export function callScaleformMovieMethodWithNumberAndString(scaleform: number, methodName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;

  /**
  * Pushes a function from the Hud component Scaleform onto the stack. Same behavior as GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD, just a hud component id instead of a Scaleform.
  * Known components:
  * 19 - MP_RANK_BAR
  * 20 - HUD_DIRECTOR_MODE
  * This native requires more research - all information can be found inside of 'hud.gfx'. Using a decompiler, the different components are located under "scripts\__Packages\com\rockstargames\gtav\hud\hudComponents" and "scripts\__Packages\com\rockstargames\gtav\Multiplayer".
  */
  export function beginScaleformScriptHudMovieMethod(hudComponent: number, methodName: string): boolean;

  /**
  * Push a function from the Scaleform onto the stack
  */
  export function beginScaleformMovieMethod(scaleform: number, methodName: string): boolean;

  /**
  * Starts frontend (pause menu) scaleform movie methods.
  * This can be used when you want to make custom frontend menus, and customize things like images or text in the menus etc.
  * Use `BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER` for header scaleform functions.
  */
  export function beginScaleformMovieMethodOnFrontend(methodName: string): boolean;

  /**
  * Starts frontend (pause menu) scaleform movie methods for header options.
  * Use `BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND` to customize the content inside the frontend menus.
  */
  export function beginScaleformMovieMethodOnFrontendHeader(methodName: string): boolean;

  /**
  * Pops and calls the Scaleform function on the stack
  */
  export function endScaleformMovieMethod(): void;

  export function endScaleformMovieMethodReturnValue(): any;

  /**
  * Returns true if the return value of a scaleform function is ready to be collected (using GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING or GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT).
  * @param methodReturn The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  * @returns methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  */
  export function isScaleformMovieMethodReturnValueReady(methodReturn: number): boolean;

  /**
  * Used to get a return value from a scaleform function. Returns an int in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING returns a string.
  * @param methodReturn The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  * @returns methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  */
  export function getScaleformMovieMethodReturnValueInt(methodReturn: number): number;

  /**
  * @param methodReturn The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  * @returns methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  */
  export function getScaleformMovieMethodReturnValueBool(methodReturn: number): boolean;

  /**
  * Used to get a return value from a scaleform function. Returns a string in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT returns an int.
  * @param methodReturn The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  * @returns methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
  */
  export function getScaleformMovieMethodReturnValueString(methodReturn: number): string;

  /**
  * Pushes an integer for the Scaleform function onto the stack.
  */
  export function scaleformMovieMethodAddParamInt(value: number): void;

  /**
  * Pushes a float for the Scaleform function onto the stack.
  */
  export function scaleformMovieMethodAddParamFloat(value: number): void;

  /**
  * Pushes a boolean for the Scaleform function onto the stack.
  */
  export function scaleformMovieMethodAddParamBool(value: boolean): void;

  /**
  * Called prior to adding a text component to the UI. After doing so, GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING is called.
  * Examples:
  * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("NUMBER");
  * HUD::ADD_TEXT_COMPONENT_INTEGER(MISC::ABSI(a_1));
  * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
  * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRING");
  * HUD::_ADD_TEXT_COMPONENT_STRING(a_2);
  * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
  * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM2");
  * See NativeDB for reference: http://natives.altv.mp/#/0x80338406F3475E55
  */
  export function beginTextCommandScaleformString(componentType: string): void;

  export function endTextCommandScaleformString(): void;

  /**
  * Same as END_TEXT_COMMAND_SCALEFORM_STRING but does not perform HTML conversion for text tokens.
  */
  export function endTextCommandScaleformString2(): void;

  /**
  * Same as SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
  * Both SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING / _SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2 works, but _SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2 is usually used for "name" (organisation, players..).
  */
  export function scaleformMovieMethodAddParamTextureNameString2(string: string): void;

  export function scaleformMovieMethodAddParamTextureNameString(string: string): void;

  export function scaleformMovieMethodAddParamPlayerNameString(string: string): void;

  /**
  * DOES_*
  */
  export function _0x5E657EF1099EDD65(p0: any): boolean;

  export function scaleformMovieMethodAddParamLatestBriefString(value: number): void;

  export function requestScaleformScriptHudMovie(hudComponent: number): void;

  export function hasScaleformScriptHudMovieLoaded(hudComponent: number): boolean;

  export function removeScaleformScriptHudMovie(hudComponent: number): void;

  export function _0xD1C7CB175E012964(scaleformHandle: number): boolean;

  export function setTvChannel(channel: number): void;

  export function getTvChannel(): number;

  export function setTvVolume(volume: number): void;

  export function getTvVolume(): number;

  /**
  * All calls to this native are preceded by calls to GRAPHICS::_0x61BB1D9B3A95D802 and GRAPHICS::_0xC6372ECD45D73BCD, respectively.
  * "act_cinema.ysc", line 1483:
  * HUD::SET_HUD_COMPONENT_POSITION(15, 0.0, -0.0375);
  * HUD::SET_TEXT_RENDER_ID(l_AE);
  * GRAPHICS::_0x61BB1D9B3A95D802(4);
  * GRAPHICS::_0xC6372ECD45D73BCD(1);
  * if (GRAPHICS::_0x0AD973CA1E077B60(${movie_arthouse})) {
  * GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 0.7375, 1.0, 0.0, 255, 255, 255, 255);
  * } else {
  * See NativeDB for reference: http://natives.altv.mp/#/0xFDDC2B4ED3C69DF0
  */
  export function drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: number, green: number, blue: number, alpha: number): void;

  /**
  * Loads specified video sequence into the TV Channel
  * TV_Channel ranges from 0-2
  * VideoSequence can be any of the following:
  * "PL_STD_CNT" CNT Standard Channel
  * "PL_STD_WZL" Weazel Standard Channel
  * "PL_LO_CNT"
  * "PL_LO_WZL"
  * "PL_SP_WORKOUT"
  * "PL_SP_INV" - Jay Norris Assassination Mission Fail
  * See NativeDB for reference: http://natives.altv.mp/#/0xF7B38B8305F1FE8B
  */
  export function setTvChannelPlaylist(tvChannel: number, playlistName: string, restart: boolean): void;

  export function setTvChannelPlaylistAtHour(tvChannel: number, playlistName: string, hour: number): void;

  export function clearTvChannelPlaylist(tvChannel: number): void;

  export function isPlaylistUnk(tvChannel: number, p1: any): boolean;

  /**
  * IS_*
  */
  export function isTvPlaylistItemPlaying(videoCliphash: number): boolean;

  export function enableMovieKeyframeWait(toggle: boolean): void;

  /**
  * SET_TV_???
  */
  export function _0xD1C55B110E4DF534(p0: any): void;

  /**
  * GET_CURRENT_*
  */
  export function _0x30432A0118736E00(): number;

  export function enableMovieSubtitles(toggle: boolean): void;

  export function ui3dsceneIsAvailable(): boolean;

  /**
  * All presets can be found in common\data\ui\uiscenes.meta
  */
  export function ui3dscenePushPreset(presetName: string): boolean;

  /**
  * It's called after 0xD3A10FC7FD8D98CD and 0xF1CEA8A4198D8E9A
  * All presets can be found in common\data\ui\uiscenes.meta
  * UI3DSCENE_*
  * @param presetName was always "CELEBRATION_WINNER"
  */
  export function _0x98C4FE6EC34154CA(presetName: string, ped: number, p2: number, posX: number, posY: number, posZ: number): boolean;

  /**
  * UI3DSCENE_*
  */
  export function _0x7A42B2E236E71415(): void;

  /**
  * UI3DSCENE_*
  */
  export function _0x108BE26959A9D9BB(toggle: boolean): void;

  /**
  * This native enables/disables the gold putting grid display (https://i.imgur.com/TC6cku6.png).
  * This requires these two natives to be called as well to configure the grid: `0x1c4fc5752bcd8e48` and `0x5ce62918f8d703c7`.
  */
  export function terraingridActivate(toggle: boolean): void;

  /**
  * This native is used along with these two natives: `0xa356990e161c9e65` and `0x5ce62918f8d703c7`.
  * This native configures the location, size, rotation, normal height, and the difference ratio between min, normal and max.
  * All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png
  */
  export function terraingridSetParams(x: number, y: number, z: number, p3: number, rotation: number, p5: number, width: number, height: number, p8: number, scale: number, glowIntensity: number, normalHeight: number, heightDiff: number): void;

  /**
  * This native is used along with these two natives: `0xa356990e161c9e65` and `0x1c4fc5752bcd8e48`.
  * This native sets the colors for the golf putting grid. the 'min...' values are for the lower areas that the grid covers, the 'max...' values are for the higher areas that the grid covers, all remaining values are for the 'normal' ground height.
  * All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png
  */
  export function terraingridSetColours(lowR: number, lowG: number, lowB: number, lowAlpha: number, r: number, g: number, b: number, alpha: number, highR: number, highG: number, highB: number, highAlpha: number): void;

  /**
  * if loop is true, the effect won't stop until you call ANIMPOSTFX_STOP on it. (only loopable effects)
  * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
  * @param duration - is how long to play the effect for in milliseconds. If 0, it plays the default length
  */
  export function animpostfxPlay(effectName: string, duration: number, looped: boolean): void;

  /**
  * See ANIMPOSTFX_PLAY
  * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
  */
  export function animpostfxStop(effectName: string): void;

  /**
  * See ANIMPOSTFX_PLAY
  * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
  */
  export function animpostfxGetUnk(effectName: string): number;

  /**
  * Returns whether the specified effect is active.
  * See ANIMPOSTFX_PLAY
  * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
  */
  export function animpostfxIsRunning(effectName: string): boolean;

  /**
  * Stops ALL currently playing effects.
  */
  export function animpostfxStopAll(): void;

  /**
  * Stops the effect and sets a value (bool) in its data (+0x199) to false.
  * See ANIMPOSTFX_PLAY
  * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
  */
  export function animpostfxStopAndDoUnk(effectName: string): void;

  /**
  * Pauses execution of the current script, please note this behavior is only seen when called from one of the game script files(ysc). In order to wait an asi script use "static void WAIT(DWORD time);" found in main.h
  */
  export function wait(ms: number): void;

  /**
  * Examples:
  * g_384A = SYSTEM::START_NEW_SCRIPT("cellphone_flashhand", 1424);
  * l_10D = SYSTEM::START_NEW_SCRIPT("taxiService", 1828);
  * SYSTEM::START_NEW_SCRIPT("AM_MP_YACHT", 5000);
  * SYSTEM::START_NEW_SCRIPT("emergencycall", 512);
  * SYSTEM::START_NEW_SCRIPT("emergencycall", 512);
  * SYSTEM::START_NEW_SCRIPT("FM_maintain_cloud_header_data", 1424);
  * SYSTEM::START_NEW_SCRIPT("FM_Mission_Controller", 31000);
  * SYSTEM::START_NEW_SCRIPT("tennis_family", 3650);
  * See NativeDB for reference: http://natives.altv.mp/#/0xE81651AD79516E48
  * @returns         return 1;
  */
  export function startNewScript(scriptName: string, stackSize: number): number;

  /**
  * return : script thread id, 0 if failed
  * Pass pointer to struct of args in p1, size of struct goes into p2
  */
  export function startNewScriptWithArgs(scriptName: string, args: any, argCount: number, stackSize: number): [number, any];

  export function startNewScriptWithNameHash(scriptHash: number, stackSize: number): number;

  export function startNewScriptWithNameHashAndArgs(scriptHash: number, args: any, argCount: number, stackSize: number): [number, any];

  /**
  * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
  */
  export function timera(): number;

  export function timerb(): number;

  export function settimera(value: number): void;

  export function settimerb(value: number): void;

  /**
  * Gets the current frame time.
  */
  export function timestep(): number;

  export function sin(value: number): number;

  export function cos(value: number): number;

  export function sqrt(value: number): number;

  export function pow(base: number, exponent: number): number;

  export function log10(value: number): number;

  /**
  * Calculates the magnitude of a vector.
  */
  export function vmag(x: number, y: number, z: number): number;

  /**
  * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
  */
  export function vmag2(x: number, y: number, z: number): number;

  /**
  * Calculates distance between vectors.
  */
  export function vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

  /**
  * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
  */
  export function vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

  export function shiftLeft(value: number, bitShift: number): number;

  export function shiftRight(value: number, bitShift: number): number;

  export function floor(value: number): number;

  /**
  * I'm guessing this rounds a float value up to the next whole number, and FLOOR rounds it down
  */
  export function ceil(value: number): number;

  export function round(value: number): number;

  export function toFloat(value: number): number;

  /**
  * 0 = high
  * 1 = normal
  * 2 = low
  */
  export function setThreadPriority(priority: number): void;

  export function appDataValid(): boolean;

  export function appGetInt(property: string): number;

  export function appGetFloat(property: string): number;

  export function appGetString(property: string): string;

  export function appSetInt(property: string, value: number): void;

  export function appSetFloat(property: string, value: number): void;

  export function appSetString(property: string, value: string): void;

  /**
  * Called in the gamescripts like:
  * APP::APP_SET_APP("car");
  * APP::APP_SET_APP("dog");
  */
  export function appSetApp(appName: string): void;

  export function appSetBlock(blockName: string): void;

  export function appClearBlock(): void;

  export function appCloseApp(): void;

  export function appCloseBlock(): void;

  export function appHasLinkedSocialClubAccount(): boolean;

  export function appHasSyncedData(appName: string): boolean;

  export function appSaveData(): void;

  export function appGetDeletedFileStatus(): number;

  export function appDeleteAppData(appName: string): boolean;

  /**
  * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/RFb4GTny
  * AUDIO::PLAY_PED_RINGTONE("Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);
  * AUDIO::PLAY_PED_RINGTONE("Dial_and_Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);
  */
  export function playPedRingtone(ringtoneName: string, ped: number, p2: boolean): void;

  export function isPedRingtonePlaying(ped: number): boolean;

  export function stopPedRingtone(ped: number): void;

  export function isMobilePhoneCallOngoing(): boolean;

  /**
  * IS_MOBILE_PHONE_*
  */
  export function _0xC8B1B2425604CDD0(): boolean;

  export function createNewScriptedConversation(): void;

  /**
  * NOTE: ones that are -1, 0 - 35 are determined by a function where it gets a TextLabel from a global then runs,
  * @param index is -1, 0 - 35
  * @param p1 is a char or string (whatever you wanna call it)
  * @param p2 is Global 10597 + i * 6. 'i' is a while(i < 70) loop
  * @param p3 is again -1, 0 - 35
  * @param p4 is again -1, 0 - 35
  * @param p5 is either 0 or 1 (bool ?)
  * @param p6 is either 0 or 1 (The func to determine this is bool)
  * @param p7 is either 0 or 1 (The func to determine this is bool)
  * @param p8 is either 0 or 1 (The func to determine this is bool)
  * @param p9 is 0 - 3 (Determined by func_60 in dialogue_handler.c)
  * @param p10 is either 0 or 1 (The func to determine this is bool)
  * @param p11 is either 0 or 1 (The func to determine this is bool)
  * @param p12 is unknown as in TU27 X360 scripts it only goes to p11.
  * @returns _GET_TEXT_SUBSTRING and depending on what the result is it goes in check order of 0 - 9 then A - Z then z (lowercase). So it will then return 0 - 35 or -1 if it's 'z'. The func to handle that ^^ is func_67 in dialog_handler.c atleast in TU27 Xbox360 scripts.
  */
  export function addLineToConversation(index: number, p1: string, p2: string, p3: number, p4: number, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: number, p10: boolean, p11: boolean, p12: boolean): void;

  /**
  * 4 calls in the b617d scripts. The only one with p0 and p2 in clear text:
  * AUDIO::ADD_PED_TO_CONVERSATION(5, l_AF, "DINAPOLI");
  * =================================================
  * One of the 2 calls in dialogue_handler.c p0 is in a while-loop, and so is determined to also possibly be 0 - 15.
  */
  export function addPedToConversation(index: number, ped: number, p2: string): void;

  export function _0x33E3C6C6F2F0B506(p0: any, p1: number, p2: number, p3: number): void;

  export function _0x892B6AB8F33606F5(p0: number, entity: number): void;

  /**
  * If this is the correct name, what microphone? I know your TV isn't going to reach out and adjust your headset so..
  */
  export function setMicrophonePosition(p0: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;

  export function _0x0B568201DD99F0EB(p0: boolean): void;

  export function _0x61631F5DF50D1C34(p0: boolean): void;

  export function startScriptPhoneConversation(p0: boolean, p1: boolean): void;

  export function preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;

  export function startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

  export function preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

  export function startPreloadedConversation(): void;

  export function getIsPreloadedConversationReady(): boolean;

  export function isScriptedConversationOngoing(): boolean;

  export function isScriptedConversationLoaded(): boolean;

  export function getCurrentScriptedConversationLine(): number;

  export function pauseScriptedConversation(p0: boolean): void;

  export function restartScriptedConversation(): void;

  export function stopScriptedConversation(p0: boolean): number;

  export function skipToNextScriptedConversationLine(): void;

  export function interruptConversation(p0: any, p1: any, p2: any): [void, any, any];

  /**
  * One call found in the b617d scripts:
  * AUDIO::_8A694D7A68F8DC38(NETWORK::NET_TO_PED(l_3989._f26F[01]), "CONV_INTERRUPT_QUIT_IT", "LESTER");
  */
  export function interruptConversationAndPause(ped: number, p1: string, p2: string): void;

  export function _0xAA19F5572C38B564(p0: any): [any, any];

  export function _0xB542DE8C3D1CB210(p0: boolean): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function registerScriptWithAudio(p0: number): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function unregisterScriptWithAudio(): void;

  /**
  * All occurrences and usages found in b617d: pastebin.com/NzZZ2Tmm
  */
  export function requestMissionAudioBank(p0: string, p1: boolean, p2: any): boolean;

  /**
  * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: pastebin.com/XZ1tmGEz
  */
  export function requestAmbientAudioBank(p0: string, p1: boolean, p2: any): boolean;

  /**
  * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: pastebin.com/AkmDAVn6
  */
  export function requestScriptAudioBank(p0: string, p1: boolean, p2: number): boolean;

  export function _0x40763EA7B9B783E7(p0: any, p1: any, p2: any): any;

  export function hintAmbientAudioBank(p0: any, p1: any, p2: any): any;

  export function hintScriptAudioBank(p0: any, p1: any, p2: any): any;

  export function releaseMissionAudioBank(): void;

  export function releaseAmbientAudioBank(): void;

  export function releaseNamedScriptAudioBank(audioBank: string): void;

  export function releaseScriptAudioBank(): void;

  export function _0x19AF7ED9B9D23058(): void;

  export function _0x9AC92EED5E4793AB(): void;

  export function _0x11579D940949C49E(p0: any): void;

  export function getSoundId(): number;

  export function releaseSoundId(soundId: number): void;

  /**
  * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/A8Ny8AHZ
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  */
  export function playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: any, p5: boolean): void;

  /**
  * List: https://pastebin.com/DCeRiaLJ
  * All occurrences as of Cayo Perico Heist DLC (b2189), sorted alphabetically and identical lines removed: https://git.io/JtLxM
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  */
  export function playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;

  /**
  * Only call found in the b617d scripts:
  * AUDIO::PLAY_DEFERRED_SOUND_FRONTEND("BACK", "HUD_FREEMODE_SOUNDSET");
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  */
  export function playDeferredSoundFrontend(soundName: string, soundsetName: string): void;

  /**
  * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/f2A7vTj0
  * No changes made in b678d.
  * gtaforums.com/topic/795622-audio-for-mods
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  */
  export function playSoundFromEntity(soundId: number, audioName: string, entity: number, audioRef: string, isNetwork: boolean, p5: any): void;

  export function _0x5B9853296731E88D(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  /**
  * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/eeFc5DiW
  * gtaforums.com/topic/795622-audio-for-mods
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  */
  export function playSoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, isNetwork: boolean, range: number, p8: boolean): void;

  export function _0x7EC3C679D0E7E46B(p0: any, p1: any, p2: any, p3: any): void;

  export function stopSound(soundId: number): void;

  /**
  * Could this be used alongside either,
  * SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES or _SET_NETWORK_ID_SYNC_TO_PLAYER to make it so other players can hear the sound while online? It'd be a bit troll-fun to be able to play the Zancudo UFO creepy sounds globally.
  */
  export function getNetworkIdFromSoundId(soundId: number): number;

  export function getSoundIdFromNetworkId(netId: number): number;

  export function setVariableOnSound(soundId: number, p1: any, p2: number): [void, any];

  /**
  * From the scripts, p0:
  * "ArmWrestlingIntensity",
  * "INOUT",
  * "Monkey_Stream",
  * "ZoomLevel"
  */
  export function setVariableOnStream(p0: string, p1: number): void;

  export function overrideUnderwaterStream(p0: any, p1: boolean): [void, any];

  /**
  * AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM("inTunnel", 1.0);
  * AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM("inTunnel", 0.0);
  */
  export function setVariableOnUnderWaterStream(variableName: string, value: number): void;

  export function hasSoundFinished(soundId: number): boolean;

  /**
  * Plays ambient speech. See also _0x444180DB.
  * SPEECH_PARAMS_STANDARD
  * SPEECH_PARAMS_ALLOW_REPEAT
  * SPEECH_PARAMS_BEAT
  * SPEECH_PARAMS_FORCE
  * SPEECH_PARAMS_FORCE_FRONTEND
  * SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND
  * SPEECH_PARAMS_FORCE_NORMAL
  * SPEECH_PARAMS_FORCE_NORMAL_CLEAR
  * See NativeDB for reference: http://natives.altv.mp/#/0x8E04FEDD28D42462
  * @param ped The ped to play the ambient speech.
  * @param speechName Name of the speech to play, eg. "GENERIC_HI".
  * @param speechParam Can be one of the following:
  */
  export function playPedAmbientSpeechNative(ped: number, speechName: string, speechParam: string, p3: any): void;

  /**
  * Plays ambient speech. See also _0x5C57B85D.
  * See PLAY_PED_AMBIENT_SPEECH_NATIVE for parameter specifications.
  * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
  */
  export function playPedAmbientSpeechAndCloneNative(ped: number, speechName: string, speechParam: string, p3: any): void;

  /**
  * This is the same as PLAY_PED_AMBIENT_SPEECH_NATIVE and PLAY_PED_AMBIENT_SPEECH_AND_CLONE_NATIVE but it will allow you to play a speech file from a specific voice file. It works on players and all peds, even animals.
  * EX (C#):
  * GTA.Native.Function.Call(Hash._0x3523634255FC3318, Game.Player.Character, "GENERIC_INSULT_HIGH", "s_m_y_sheriff_01_white_full_01", "SPEECH_PARAMS_FORCE_SHOUTED", 0);
  * The first param is the ped you want to play it on, the second is the speech name, the third is the voice name, the fourth is the speech param, and the last param is usually always 0.
  * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
  */
  export function playPedAmbientSpeechWithVoiceNative(ped: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;

  /**
  * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
  */
  export function playAmbientSpeechFromPositionNative(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;

  /**
  * This native enables the audio flag "TrevorRageIsOverridden" and sets the voice effect to `voiceEffect`
  */
  export function overrideTrevorRage(voiceEffect: string): void;

  export function resetTrevorRage(): void;

  export function setPlayerAngry(ped: number, toggle: boolean): void;

  /**
  * Last 2 parameters always seem to be 0.
  * EX: Function.Call(Hash.PLAY_PAIN, TestPed, 6, 0, 0);
  * Known Pain IDs
  * ________________________
  * 1 - Doesn't seem to do anything. Does NOT crash the game like previously said. (Latest patch)
  * 6 - Scream (Short)
  * 7 - Scared Scream (Kinda Long)
  * 8 - On Fire
  */
  export function playPain(ped: number, painID: number, p1: number, p3: any): void;

  export function releaseWeaponAudio(): void;

  export function activateAudioSlowmoMode(p0: string): void;

  export function deactivateAudioSlowmoMode(p0: string): void;

  /**
  * Audio List
  * gtaforums.com/topic/795622-audio-for-mods/
  * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/FTeAj4yZ
  * Yes
  */
  export function setAmbientVoiceName(ped: number, name: string): void;

  export function setAmbientVoiceNameHash(ped: number, hash: number): void;

  export function getAmbientVoiceNameHash(ped: number): number;

  /**
  * Assigns some ambient voice to the ped.
  */
  export function setPedScream(ped: number): void;

  export function _0x1B7ABE26CBCBF8C7(ped: number, p1: any, p2: any): void;

  /**
  * From the scripts:
  * AUDIO::_SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("PAIGE_PVG"));
  * AUDIO::_SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("TALINA_PVG"));
  * AUDIO::_SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("FEMALE_LOST_BLACK_PVG"));
  * AUDIO::_SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("FEMALE_LOST_WHITE_PVG"));
  */
  export function setPedVoiceGroup(ped: number, voiceGroupHash: number): void;

  export function _0xA5342D390CDA41D6(ped: number, p1: boolean): void;

  export function stopCurrentPlayingSpeech(ped: number): void;

  export function stopCurrentPlayingAmbientSpeech(ped: number): void;

  export function isAmbientSpeechPlaying(ped: number): boolean;

  export function isScriptedSpeechPlaying(p0: any): boolean;

  export function isAnySpeechPlaying(ped: number): boolean;

  export function _0x30CA2EF91D15ADF8(): any;

  /**
  * Checks if the ped can play the speech or has the speech file, last parameter is usually 0
  * DOES_C*
  */
  export function canPedSpeak(ped: number, speechName: string, unk: boolean): boolean;

  export function isPedInCurrentConversation(ped: number): boolean;

  /**
  * Sets the ped drunk sounds.  Only works with PLAYER_PED_ID
  * ====================================================
  * As mentioned above, this only sets the drunk sound to ped/player.
  * To give the Ped a drunk effect with drunk walking animation try using SET_PED_MOVEMENT_CLIPSET
  * Below is an example
  * if (!Function.Call<bool>(Hash.HAS_ANIM_SET_LOADED, "move_m@drunk@verydrunk"))
  * {
  * Function.Call(Hash.REQUEST_ANIM_SET, "move_m@drunk@verydrunk");
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0x95D2D383D5396B8A
  */
  export function setPedIsDrunk(ped: number, toggle: boolean): void;

  /**
  * Plays sounds from a ped with chop model. For example it used to play bark or sniff sounds. p1 is always 3 or 4294967295 in decompiled scripts. By a quick disassembling I can assume that this arg is unused.
  * This native is works only when you call it on the ped with right model (ac_chop only ?)
  * Speech Name can be: CHOP_SNIFF_SEQ CHOP_WHINE CHOP_LICKS_MOUTH CHOP_PANT bark GROWL SNARL BARK_SEQ
  */
  export function playAnimalVocalization(pedHandle: number, p1: number, speechName: string): void;

  export function isAnimalVocalizationPlaying(pedHandle: number): boolean;

  /**
  * @param mood can be 0 or 1 (it's not a boolean value!). Effects audio of the animal.
  */
  export function setAnimalMood(animal: number, mood: number): void;

  export function isMobilePhoneRadioActive(): boolean;

  export function setMobilePhoneRadioState(state: boolean): void;

  /**
  * Returns 255 (radio off index) if the function fails.
  */
  export function getPlayerRadioStationIndex(): number;

  /**
  * Returns active radio station name
  */
  export function getPlayerRadioStationName(): string;

  /**
  * Returns String with radio station name.
  */
  export function getRadioStationName(radioStation: number): string;

  export function getPlayerRadioStationGenre(): number;

  export function isRadioRetuning(): boolean;

  export function isRadioFadedOut(): boolean;

  /**
  * Tune Forward... ?
  * SET_RADIO_*
  */
  export function _0xFF266D1D0EB1195D(): void;

  /**
  * Tune Backwards... ?
  * SET_RADIO_*
  */
  export function _0xDD6BCF9E94425DF9(): void;

  /**
  * For a full list, see here: pastebin.com/Kj9t38KF
  */
  export function setRadioToStationName(stationName: string): void;

  /**
  * For a full list, see here: pastebin.com/Kj9t38KF
  */
  export function setVehRadioStation(vehicle: number, radioStation: string): void;

  /**
  * IS_VEHICLE_*
  */
  export function _0x0BE4BE946463F917(vehicle: number): boolean;

  /**
  * SET_VEH*
  */
  export function _0xC1805D05E6D4FE10(vehicle: number): void;

  /**
  * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
  */
  export function setEmitterRadioStation(emitterName: string, radioStation: string): void;

  /**
  * Example:
  * AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_01_STAGE", false);    AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_02_MAIN_ROOM", false);    AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_03_BACK_ROOM", false);
  * This turns off surrounding sounds not connected directly to peds.
  * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
  */
  export function setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;

  /**
  * L* (LINK_*?)
  * Full list of static emitters by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/staticEmitters.json
  */
  export function linkStaticEmitterToEntity(emitterName: string, entity: number): void;

  /**
  * Sets radio station by index.
  */
  export function setRadioToStationIndex(radioStation: number): void;

  export function setFrontendRadioActive(active: boolean): void;

  /**
  * I see this as a native that would of been used back in GTA III when you finally unlocked the bridge to the next island and such.
  */
  export function unlockMissionNewsStory(newsStory: number): void;

  export function isMissionNewsStoryUnlocked(newsStory: number): boolean;

  export function getAudibleMusicTrackTextId(): number;

  export function playEndCreditsMusic(play: boolean): void;

  export function skipRadioForward(): void;

  export function freezeRadioStation(radioStation: string): void;

  export function unfreezeRadioStation(radioStation: string): void;

  export function setRadioAutoUnfreeze(toggle: boolean): void;

  export function setInitialPlayerStation(radioStation: string): void;

  export function setUserRadioControlEnabled(toggle: boolean): void;

  /**
  * Only found this one in the decompiled scripts:
  * AUDIO::SET_RADIO_TRACK("RADIO_03_HIPHOP_NEW", "ARM1_RADIO_STARTS");
  */
  export function setRadioTrack(radioStation: string, radioTrack: string): void;

  export function setRadioTrackMix(radioStationName: string, mixName: string, p2: number): void;

  export function _0x55ECF4D13D9903B0(p0: any, p1: any, p2: any, p3: any): void;

  export function setVehicleRadioLoud(vehicle: number, toggle: boolean): void;

  export function isVehicleRadioLoud(vehicle: number): boolean;

  export function setMobileRadioEnabledDuringGameplay(toggle: boolean): void;

  export function doesPlayerVehHaveRadio(): boolean;

  export function isPlayerVehRadioEnable(): boolean;

  /**
  * can't seem to enable radio on cop cars etc
  */
  export function setVehicleRadioEnabled(vehicle: number, toggle: boolean): void;

  export function _0xDA07819E452FFE8F(p0: any): void;

  /**
  * Examples:
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_TREVOR", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "END_CREDITS_SAVE_MICHAEL_TREVOR", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_06_COUNTRY", "MAGDEMO2_RADIO_DINGHY", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_16_SILVERLAKE", "SEA_RACE_RADIO_PLAYLIST", 1);
  * AUDIO::SET_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);
  */
  export function setCustomRadioTrackList(radioStation: string, trackListName: string, p2: boolean): void;

  /**
  * 3 calls in the b617d scripts, removed duplicate.
  * AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST("RADIO_16_SILVERLAKE");
  * AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST("RADIO_01_CLASS_ROCK");
  */
  export function clearCustomRadioTrackList(radioStation: string): void;

  export function getNumUnlockedRadioStations(): number;

  export function findRadioStationIndex(station: number): number;

  /**
  * 6 calls in the b617d scripts, removed identical lines:
  * AUDIO::SET_RADIO_STATION_MUSIC_ONLY("RADIO_01_CLASS_ROCK", 1);
  * AUDIO::SET_RADIO_STATION_MUSIC_ONLY(AUDIO::GET_RADIO_STATION_NAME(10), 0);
  * AUDIO::SET_RADIO_STATION_MUSIC_ONLY(AUDIO::GET_RADIO_STATION_NAME(10), 1);
  */
  export function setRadioStationMusicOnly(radioStation: string, toggle: boolean): void;

  export function setRadioFrontendFadeTime(fadeTime: number): void;

  /**
  * AUDIO::UNLOCK_RADIO_STATION_TRACK_LIST("RADIO_16_SILVERLAKE", "MIRRORPARK_LOCKED");
  */
  export function unlockRadioStationTrackList(radioStation: string, trackListName: string): void;

  /**
  * Just a nullsub (i.e. does absolutely nothing) since build 1604.
  */
  export function updateLsur(enableMixes: boolean): void;

  /**
  * Disables the radio station (hides it from the radio wheel).
  */
  export function lockRadioStation(radioStationName: string, toggle: boolean): void;

  /**
  * GET_NE*
  * Gets values from the radio?
  */
  export function _0xC64A06D939F826F5(p0: number, p1: number, p2: number): [boolean, number, number, number];

  /**
  * GET_CURRENT_*
  * @returns Seems to return hashed radio station name?
  */
  export function getCurrentRadioStationHash(radioStationName: string): number;

  /**
  * GET_CURRENT_*
  */
  export function _0x34D66BC058019CE0(radioStationName: string): number;

  /**
  * SET_VEHICLE_*
  */
  export function _0xF3365489E0DD50F9(vehicle: number, toggle: boolean): void;

  /**
  * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
  */
  export function setAmbientZoneState(zoneName: string, p1: boolean, p2: boolean): void;

  /**
  * Still needs more research.
  * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
  */
  export function clearAmbientZoneState(zoneName: string, p1: boolean): void;

  export function setAmbientZoneListState(p0: any, p1: boolean, p2: boolean): [void, any];

  export function clearAmbientZoneListState(p0: any, p1: boolean): [void, any];

  /**
  * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
  */
  export function setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

  /**
  * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
  */
  export function setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

  /**
  * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
  */
  export function isAmbientZoneEnabled(ambientZone: string): boolean;

  export function _0x5D2BFAAB8D956E0E(): void;

  /**
  * All occurrences found in b617d, sorted alphabetically and identical lines removed:
  * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_AK");
  * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_CUSTOM");
  * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_TOOTHLESS");
  */
  export function setCutsceneAudioOverride(name: string): void;

  /**
  * SET_VARIABLE_ON_*
  */
  export function setVariableOnCutsceneAudio(variableName: string, value: number): void;

  /**
  * Plays the given police radio message.
  * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/GBnsQ5hr
  */
  export function playPoliceReport(name: string, p1: number): number;

  export function cancelCurrentPoliceReport(): void;

  /**
  * Plays the siren sound of a vehicle which is otherwise activated when fastly double-pressing the horn key.
  * Only works on vehicles with a police siren.
  */
  export function blipSiren(vehicle: number): void;

  /**
  * Overrides the vehicle's horn hash.
  * mute - p1 seems to be an option for muting the horn
  * @param vehicle - the vehicle whose horn should be overwritten
  * @param hornHash - maybe a horn id, since the function AUDIO::GET_VEHICLE_DEFAULT_HORN(veh) exists?
  * @returns When changing this hash on a vehicle, it will not return the 'overwritten' hash. It will still always return the default horn hash (same as GET_VEHICLE_DEFAULT_HORN)
  */
  export function overrideVehHorn(vehicle: number, override: boolean, hornHash: number): void;

  /**
  * Checks whether the horn of a vehicle is currently played.
  */
  export function isHornActive(vehicle: number): boolean;

  /**
  * Makes pedestrians sound their horn longer, faster and more agressive when they use their horn.
  */
  export function setAggressiveHorns(toggle: boolean): void;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x02E93C796ABD3A97(p0: boolean): void;

  export function _0x58BB377BEC7CD5F4(p0: boolean, p1: boolean): void;

  export function _0x9BD7BD55E4533183(p0: any, p1: any, p2: any): void;

  export function isStreamPlaying(): boolean;

  export function getStreamPlayTime(): number;

  /**
  * Example:
  * AUDIO::LOAD_STREAM("CAR_STEAL_1_PASSBY", "CAR_STEAL_1_SOUNDSET");
  * All found occurrences in the b678d decompiled scripts: pastebin.com/3rma6w5w
  * Stream names often ends with "_MASTER", "_SMALL" or "_STREAM". Also "_IN", "_OUT" and numbers.
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  * @param soundSet is often set to 0 in the scripts. These are common to end the soundSets: "_SOUNDS", "_SOUNDSET" and numbers.
  */
  export function loadStream(streamName: string, soundSet: string): boolean;

  /**
  * Example:
  * AUDIO::LOAD_STREAM_WITH_START_OFFSET("STASH_TOXIN_STREAM", 2400, "FBI_05_SOUNDS");
  * Only called a few times in the scripts.
  * Full list of audio / sound names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/soundNames.json
  */
  export function loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;

  export function playStreamFromPed(ped: number): void;

  export function playStreamFromVehicle(vehicle: number): void;

  /**
  * Used with AUDIO::LOAD_STREAM
  * Example from finale_heist2b.c4:
  * TASK::TASK_SYNCHRONIZED_SCENE(l_4C8[214], l_4C8[214]._f7, l_30A, "push_out_vault_l", 4.0, -1.5, 5, 713, 4.0, 0);
  * PED::SET_SYNCHRONIZED_SCENE_PHASE(l_4C8[214]._f7, 0.0);
  * PED::_2208438012482A1A(l_4C8[214], 0, 0);
  * PED::SET_PED_COMBAT_ATTRIBUTES(l_4C8[214], 38, 1);
  * PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(l_4C8[214], 1);
  * if (AUDIO::LOAD_STREAM("Gold_Cart_Push_Anim_01", "BIG_SCORE_3B_SOUNDS")) {
  * AUDIO::PLAY_STREAM_FROM_OBJECT(l_36F[01]);
  * }
  */
  export function playStreamFromObject(object: number): void;

  export function playStreamFrontend(): void;

  export function playStreamFromPosition(x: number, y: number, z: number): void;

  export function stopStream(): void;

  export function stopPedSpeaking(ped: number, shaking: boolean): void;

  /**
  * BL*
  */
  export function _0xF8AD2EED7C47E8FE(ped: number, p1: boolean, p2: boolean): void;

  export function _0xAB6781A5F3101470(p0: any, p1: any): void;

  export function disablePedPainAudio(ped: number, toggle: boolean): void;

  /**
  * Common in the scripts:
  * AUDIO::IS_AMBIENT_SPEECH_DISABLED(PLAYER::PLAYER_PED_ID());
  */
  export function isAmbientSpeechDisabled(ped: number): boolean;

  export function _0xA8A7D434AFB4B97B(p0: string, p1: number): void;

  export function _0x2ACABED337622DF2(p0: string): void;

  export function setSirenWithNoDriver(vehicle: number, toggle: boolean): void;

  export function triggerSiren(vehicle: number): void;

  /**
  * SET_*
  */
  export function soundVehicleHornThisFrame(vehicle: number): void;

  export function setHornEnabled(vehicle: number, toggle: boolean): void;

  export function setAudioVehiclePriority(vehicle: number, p1: any): void;

  /**
  * SET_H*
  */
  export function _0x9D3AF56E94C9AE98(vehicle: number, p1: number): void;

  export function useSirenAsHorn(vehicle: number, toggle: boolean): void;

  /**
  * This native sets the audio of the specified vehicle to the audioName (p1).
  * Use the audioNameHash found in vehicles.meta
  * Example:
  * _SET_VEHICLE_AUDIO(veh, "ADDER");
  * The selected vehicle will now have the audio of the Adder.
  * FORCE_VEHICLE_???
  */
  export function forceVehicleEngineAudio(vehicle: number, audioName: string): void;

  export function preloadVehicleAudio(vehicleModel: number): void;

  /**
  * 2 calls found in the b617d scripts:
  * AUDIO::_F1F8157B8C3F171C(l_A42, "Franklin_Bike_Rev", "BIG_SCORE_3A_SOUNDS");
  * AUDIO::_F1F8157B8C3F171C(l_166, "Trevor_Revs_Off", "PALETO_SCORE_SETUP_SOUNDS");
  */
  export function _0xF1F8157B8C3F171C(vehicle: number, p1: string, p2: string): void;

  export function _0xD2DCCD8E16E20997(p0: any): void;

  export function _0x5DB8010EE71FDEF2(vehicle: number): boolean;

  export function setVehicleAudioEngineDamageFactor(vehicle: number, damageFactor: number): void;

  /**
  * SET_VEHICLE_*
  */
  export function _0x01BB4D577D38BD9E(vehicle: number, p1: number): void;

  /**
  * ENABLE_VEHICLE_*
  */
  export function _0x1C073274E065C6D2(vehicle: number, toggle: boolean): void;

  export function enableVehicleExhaustPops(vehicle: number, toggle: boolean): void;

  /**
  * SET_VEHICLE_BOOST_ACTIVE(vehicle, 1, 0);
  * SET_VEHICLE_BOOST_ACTIVE(vehicle, 0, 0);
  * Will give a boost-soundeffect.
  */
  export function setVehicleBoostActive(vehicle: number, toggle: boolean): void;

  /**
  * SET_P*
  */
  export function _0x6FDDAD856E36988A(vehicle: number, toggle: boolean): void;

  export function setScriptUpdateDoorAudio(doorHash: number, toggle: boolean): void;

  export function playVehicleDoorOpenSound(vehicle: number, doorIndex: number): void;

  export function playVehicleDoorCloseSound(vehicle: number, doorIndex: number): void;

  /**
  * Works for planes only.
  */
  export function enableStallWarningSounds(vehicle: number, toggle: boolean): void;

  export function isGameInControlOfMusic(): boolean;

  export function setGpsActive(active: boolean): void;

  /**
  * Called 38 times in the scripts. There are 5 different audioNames used.
  * One unknown removed below.
  * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("DEAD");
  * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("FRANKLIN_BIG_01");
  * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("GENERIC_FAILED");
  * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("TREVOR_SMALL_01");
  */
  export function playMissionCompleteAudio(audioName: string): void;

  export function isMissionCompletePlaying(): boolean;

  export function isMissionCompleteReadyForUi(): boolean;

  export function blockDeathJingle(toggle: boolean): void;

  /**
  * Used to prepare a scene where the surrounding sound is muted or a bit changed. This does not play any sound.
  * List of all usable scene names found in b617d. Sorted alphabetically and identical names removed: pastebin.com/MtM9N9CC
  */
  export function startAudioScene(scene: string): boolean;

  export function stopAudioScene(scene: string): void;

  /**
  * ??
  */
  export function stopAudioScenes(): void;

  export function isAudioSceneActive(scene: string): boolean;

  export function setAudioSceneVariable(scene: string, variable: string, value: number): void;

  /**
  * SET_AUDIO_S*
  */
  export function _0xA5F377B175A699C5(p0: number): void;

  /**
  * All found occurrences in b678d:
  * pastebin.com/ceu67jz8
  */
  export function addEntityToAudioMixGroup(entity: number, groupName: string, p2: number): void;

  export function removeEntityFromAudioMixGroup(entity: number, p1: number): void;

  export function audioIsScriptedMusicPlaying(): boolean;

  export function _0x2DD39BF3E2F9C47F(): any;

  /**
  * All music event names found in the b617d scripts: pastebin.com/GnYt0R3P
  */
  export function prepareMusicEvent(eventName: string): boolean;

  /**
  * All music event names found in the b617d scripts: pastebin.com/GnYt0R3P
  */
  export function cancelMusicEvent(eventName: string): boolean;

  /**
  * List of all usable event names found in b617d used with this native. Sorted alphabetically and identical names removed: pastebin.com/RzDFmB1W
  * All music event names found in the b617d scripts: pastebin.com/GnYt0R3P
  */
  export function triggerMusicEvent(eventName: string): boolean;

  export function isMusicOneshotPlaying(): boolean;

  export function getMusicPlaytime(): number;

  export function _0x159B7318403A1CD8(p0: any): void;

  export function recordBrokenGlass(x: number, y: number, z: number, radius: number): void;

  export function clearAllBrokenGlass(): void;

  export function _0x70B8EC8FC108A634(p0: boolean, p1: any): void;

  export function _0x149AEE66F0CB3A99(p0: number, p1: number): void;

  export function _0x8BF907833BE275DE(p0: number, p1: number): void;

  /**
  * FORCE_*
  */
  export function _0x062D5EAD4DA2FA6A(): void;

  /**
  * Example:
  * bool prepareAlarm = AUDIO::PREPARE_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");
  */
  export function prepareAlarm(alarmName: string): boolean;

  /**
  * Example:
  * This will start the alarm at Fort Zancudo.
  * AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
  * First parameter (char) is the name of the alarm.
  * Second parameter (bool) is unknown, it does not seem to make a difference if this one is 0 or 1.
  * ----------
  * It DOES make a difference but it has to do with the duration or something I dunno yet
  * ----------
  * Found in the b617d scripts:
  * See NativeDB for reference: http://natives.altv.mp/#/0x0355EF116C4C97B2
  */
  export function startAlarm(alarmName: string, p2: boolean): void;

  /**
  * Example:
  * This will stop the alarm at Fort Zancudo.
  * AUDIO::STOP_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
  * First parameter (char) is the name of the alarm.
  * Second parameter (bool) has to be true (1) to have any effect.
  */
  export function stopAlarm(alarmName: string, toggle: boolean): void;

  export function stopAllAlarms(stop: boolean): void;

  /**
  * Example:
  * bool playing = AUDIO::IS_ALARM_PLAYING("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");
  */
  export function isAlarmPlaying(alarmName: string): boolean;

  /**
  * Returns hash of default vehicle horn
  * Hash is stored in audVehicleAudioEntity
  */
  export function getVehicleDefaultHorn(vehicle: number): number;

  export function getVehicleDefaultHornIgnoreMods(vehicle: number): number;

  export function resetPedAudioFlags(ped: number): void;

  /**
  * Enables/disables ped's "loud" footstep sound.
  */
  export function setPedLoudFoostepAudio(ped: number, toggle: boolean): void;

  /**
  * Enables/disables ped's "quiet" footstep sound.
  */
  export function setPedQuietFootstepAudio(ped: number, toggle: boolean): void;

  /**
  * Sets audio flag "OverridePlayerGroundMaterial"
  */
  export function overridePlayerGroundMaterial(hash: number, toggle: boolean): void;

  /**
  * Something like UPDATE_PED_*
  */
  export function _0xBF4DC1784BE94DFA(ped: number, p1: boolean, hash: number): void;

  /**
  * Sets audio flag "OverrideMicrophoneSettings"
  */
  export function overrideMicrophoneSettings(hash: number, toggle: boolean): void;

  export function freezeMicrophone(): void;

  /**
  * If value is set to true, and ambient siren sound will be played.
  * Appears to enable/disable an audio flag.
  */
  export function distantCopCarSirens(value: boolean): void;

  export function _0x43FA0DFC5DF87815(vehicle: number, p1: boolean): void;

  export function _0xB81CF134AEB56FFB(): void;

  /**
  * Possible flag names:
  * "ActivateSwitchWheelAudio"
  * "AllowAmbientSpeechInSlowMo"
  * "AllowCutsceneOverScreenFade"
  * "AllowForceRadioAfterRetune"
  * "AllowPainAndAmbientSpeechToPlayDuringCutscene"
  * "AllowPlayerAIOnMission"
  * "AllowPoliceScannerWhenPlayerHasNoControl"
  * "AllowRadioDuringSwitch"
  * See NativeDB for reference: http://natives.altv.mp/#/0xB9EFD5C25018725A
  */
  export function setAudioFlag(flagName: string, toggle: boolean): void;

  export function prepareSynchronizedAudioEvent(p0: string, p1: any): any;

  export function prepareSynchronizedAudioEventForScene(p0: any, p1: any): [boolean, any];

  export function playSynchronizedAudioEvent(p0: any): boolean;

  export function stopSynchronizedAudioEvent(p0: any): boolean;

  export function _0xC8EDE9BDBCCBA6D4(p0: any, p1: number, p2: number, p3: number): [void, any];

  /**
  * Sets the position of the audio event to the entity's position for one frame(?)
  * if (l_8C3 == 0) {
  * sub_27fd1(0, -1, 1);
  * if (PED::IS_SYNCHRONIZED_SCENE_RUNNING(l_87D)) {
  * AUDIO::STOP_SYNCHRONIZED_AUDIO_EVENT(l_87D);
  * }
  * if (sub_7dd(l_A00)) {
  * AUDIO::_950A154B8DAB6185("PAP2_IG1_POPPYSEX", l_A00);
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0x950A154B8DAB6185
  */
  export function setSynchronizedAudioEventPositionThisFrame(p0: string, p1: number): void;

  /**
  * Needs to be called every frame.
  * Audio mode to apply this frame: https://alloc8or.re/gta5/doc/enums/audSpecialEffectMode.txt
  */
  export function setAudioSpecialEffectMode(mode: number): void;

  /**
  * Found in the b617d scripts, duplicates removed:
  * AUDIO::_044DBAD7A7FA2BE5("V_CARSHOWROOM_PS_WINDOW_UNBROKEN", "V_CARSHOWROOM_PS_WINDOW_BROKEN");
  * AUDIO::_044DBAD7A7FA2BE5("V_CIA_PS_WINDOW_UNBROKEN", "V_CIA_PS_WINDOW_BROKEN");
  * AUDIO::_044DBAD7A7FA2BE5("V_DLC_HEIST_APARTMENT_DOOR_CLOSED", "V_DLC_HEIST_APARTMENT_DOOR_OPEN");
  * AUDIO::_044DBAD7A7FA2BE5("V_FINALEBANK_PS_VAULT_INTACT", "V_FINALEBANK_PS_VAULT_BLOWN");
  * AUDIO::_044DBAD7A7FA2BE5("V_MICHAEL_PS_BATHROOM_WITH_WINDOW", "V_MICHAEL_PS_BATHROOM_WITHOUT_WINDOW");
  */
  export function setPortalSettingsOverride(p0: string, p1: string): void;

  /**
  * Found in the b617d scripts, duplicates removed:
  * AUDIO::_B4BBFD9CD8B3922B("V_CARSHOWROOM_PS_WINDOW_UNBROKEN");
  * AUDIO::_B4BBFD9CD8B3922B("V_CIA_PS_WINDOW_UNBROKEN");
  * AUDIO::_B4BBFD9CD8B3922B("V_DLC_HEIST_APARTMENT_DOOR_CLOSED");
  * AUDIO::_B4BBFD9CD8B3922B("V_FINALEBANK_PS_VAULT_INTACT");
  * AUDIO::_B4BBFD9CD8B3922B("V_MICHAEL_PS_BATHROOM_WITH_WINDOW");
  */
  export function removePortalSettingsOverride(p0: string): void;

  /**
  * STOP_S*
  */
  export function _0xE4E6DD5566D28C82(): void;

  export function _0x3A48AB4445D499BE(): any;

  /**
  * Speech related.
  */
  export function setPedTalk(ped: number): void;

  export function _0x0150B6FF25A9E2E5(): void;

  export function _0xBEF34B1D9624D5DD(p0: boolean): void;

  export function stopCutsceneAudio(): void;

  /**
  * HAS_*
  */
  export function hasMultiplayerAudioDataLoaded(): boolean;

  /**
  * HAS_*
  */
  export function hasMultiplayerAudioDataUnloaded(): boolean;

  export function getVehicleDefaultHornVariation(vehicle: number): number;

  export function setVehicleHornVariation(vehicle: number, value: number): void;

  /**
  * BRAIN::ADD_SCRIPT_TO_RANDOM_PED("pb_prostitute", ${s_f_y_hooker_01}, 100, 0);
  * - Nacorpio
  * -----
  * Hardcoded to not work in Multiplayer.
  */
  export function addScriptToRandomPed(name: string, model: number, p2: number, p3: number): void;

  /**
  * Registers a script for any object with a specific model hash.
  * BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN("ob_telescope", ${prop_telescope_01}, 100, 4.0, -1, 9);
  * - Nacorpio
  */
  export function registerObjectScriptBrain(scriptName: string, modelHash: number, p2: number, activationRange: number, p4: number, p5: number): void;

  export function isObjectWithinBrainActivationRange(object: number): boolean;

  export function registerWorldPointScriptBrain(scriptName: string, activationRange: number, p2: number): void;

  /**
  * Gets whether the world point the calling script is registered to is within desired range of the player.
  */
  export function isWorldPointWithinBrainActivationRange(): boolean;

  export function enableScriptBrainSet(brainSet: number): void;

  export function disableScriptBrainSet(brainSet: number): void;

  export function _0x0B40ED49D7D6FF84(): void;

  /**
  * Something like flush_all_scripts
  * Most of time comes after NETWORK_END_TUTORIAL_SESSION() or before TERMINATE_THIS_THREAD()
  */
  export function _0x4D953DF78EBF8158(): void;

  /**
  * Possible values:
  * act_cinema
  * am_mp_carwash_launch
  * am_mp_carwash_control
  * am_mp_property_ext
  * chop
  * fairgroundHub
  * launcher_BasejumpHeli
  * launcher_BasejumpPack
  * See NativeDB for reference: http://natives.altv.mp/#/0x6D6840CEE8845831
  */
  export function _0x6D6840CEE8845831(action: string): void;

  /**
  * Looks like a cousin of above function _6D6840CEE8845831 as it was found among them. Must be similar
  * Here are possible values of argument -
  * "ob_tv"
  * "launcher_Darts"
  */
  export function _0x6E91B04E08773030(action: string): void;

  /**
  * If you have created a script (rendering) camera, and want to go back to the
  * character (gameplay) camera, call this native with render set to 0.
  * Setting ease to 1 will smooth the transition.
  * @param ease - smooth transition between the camera's positions
  * @param easeTime - Time in milliseconds for the transition to happen
  */
  export function renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean, p5: any): void;

  /**
  * This native makes the gameplay camera zoom into first person/third person with a special effect.
  */
  export function stopRenderingScriptCamsUsingCatchUp(render: boolean, p1: number, p2: number, p3: any): void;

  /**
  * "DEFAULT_SCRIPTED_CAMERA"
  * "DEFAULT_ANIMATED_CAMERA"
  * "DEFAULT_SPLINE_CAMERA"
  * "DEFAULT_SCRIPTED_FLY_CAMERA"
  * "TIMED_SPLINE_CAMERA"
  */
  export function createCam(camName: string, p1: boolean): number;

  /**
  * ------------
  * Camera names found in the b617d scripts:
  * "DEFAULT_ANIMATED_CAMERA"
  * "DEFAULT_SCRIPTED_CAMERA"
  * "DEFAULT_SCRIPTED_FLY_CAMERA"
  * "DEFAULT_SPLINE_CAMERA"
  * ------------
  * Side Note: It seems p8 is basically to represent what would be the bool p1 within CREATE_CAM native. As well as the p9 since it's always 2 in scripts seems to represent what would be the last param within SET_CAM_ROT native which normally would be 2.
  * @param camName is always set to "DEFAULT_SCRIPTED_CAMERA" in Rockstar's scripts.
  */
  export function createCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: number): number;

  export function createCamera(camHash: number, p1: boolean): number;

  /**
  * CAM::_80EC114669DAEFF4() can be used instead of p7 (Possible p7 is FOV parameter. )
  * @param p8 ???
  * @param p9 uses 2 by default
  */
  export function createCameraWithParams(camHash: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: any): number;

  /**
  * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
  */
  export function destroyCam(cam: number, bScriptHostCam: boolean): void;

  /**
  * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
  */
  export function destroyAllCams(bScriptHostCam: boolean): void;

  /**
  * Returns whether or not the passed camera handle exists.
  */
  export function doesCamExist(cam: number): boolean;

  /**
  * Set camera as active/inactive.
  */
  export function setCamActive(cam: number, active: boolean): void;

  /**
  * Returns whether or not the passed camera handle is active.
  */
  export function isCamActive(cam: number): boolean;

  export function isCamRendering(cam: number): boolean;

  export function getRenderingCam(): number;

  export function getCamCoord(cam: number): Vector3;

  /**
  * The last parameter, as in other "ROT" methods, is usually 2.
  */
  export function getCamRot(cam: number, rotationOrder: number): Vector3;

  export function getCamFov(cam: number): number;

  export function getCamNearClip(cam: number): number;

  export function getCamFarClip(cam: number): number;

  export function getCamFarDof(cam: number): number;

  export function setCamParams(cam: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fieldOfView: number, p8: any, p9: number, p10: number, p11: number): void;

  /**
  * Sets the position of the cam.
  */
  export function setCamCoord(cam: number, posX: number, posY: number, posZ: number): void;

  /**
  * Sets the rotation of the cam.
  * Last parameter unknown.
  * Last parameter seems to always be set to 2.
  */
  export function setCamRot(cam: number, rotX: number, rotY: number, rotZ: number, rotationOrder: number): void;

  /**
  * Sets the field of view of the cam.
  * ---------------------------------------------
  * Min: 1.0f
  * Max: 130.0f
  */
  export function setCamFov(cam: number, fieldOfView: number): void;

  export function setCamNearClip(cam: number, nearClip: number): void;

  export function setCamFarClip(cam: number, farClip: number): void;

  export function _0xAABD62873FFB1A33(p0: any, p1: any): void;

  export function setCamMotionBlurStrength(cam: number, strength: number): void;

  export function setCamNearDof(cam: number, nearDOF: number): void;

  export function setCamFarDof(cam: number, farDOF: number): void;

  export function setCamDofStrength(cam: number, dofStrength: number): void;

  export function setCamDofPlanes(cam: number, p1: number, p2: number, p3: number, p4: number): void;

  export function setCamUseShallowDofMode(cam: number, toggle: boolean): void;

  export function setUseHiDof(): void;

  export function _0xF55E4046F6F831DC(p0: any, p1: number): void;

  export function _0xE111A7C0D200CBC5(p0: any, p1: number): void;

  /**
  * This native has its name defined inside its codE
  */
  export function setCamDofFnumberOfLens(camera: number, p1: number): void;

  /**
  * Native name labeled within its code
  */
  export function setCamDofFocalLengthMultiplier(camera: number, multiplier: number): void;

  /**
  * This native has a name defined inside its code
  */
  export function setCamDofFocusDistanceBias(camera: number, p1: number): void;

  /**
  * This native has a name defined inside its code
  */
  export function setCamDofMaxNearInFocusDistance(camera: number, p1: number): void;

  /**
  * This native has a name defined inside its code
  */
  export function setCamDofMaxNearInFocusDistanceBlendLevel(camera: number, p1: number): void;

  /**
  * Last param determines if its relative to the Entity
  */
  export function attachCamToEntity(cam: number, entity: number, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;

  export function attachCamToPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;

  export function attachCamToPedBone2(cam: number, ped: number, boneIndex: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): void;

  export function _0x202A5ED9CE01D6E7(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;

  /**
  * This native works with vehicles only. Bone indexes are usually given by this native GET_ENTITY_BONE_INDEX_BY_NAME.
  */
  export function attachCamToVehicleBone(cam: number, vehicle: number, boneIndex: number, relativeRotation: boolean, rotX: number, rotY: number, rotZ: number, offsetX: number, offsetY: number, offsetZ: number, fixedDirection: boolean): void;

  export function detachCam(cam: number): void;

  /**
  * The native seems to only be called once.
  * The native is used as so,
  * In the exile1 script.
  * @param cam :SET_CAM_INHERIT_ROLL_VEHICLE(l_544, getElem(2, &l_525, 4));
  */
  export function setCamInheritRollVehicle(cam: number, p1: boolean): void;

  export function pointCamAtCoord(cam: number, x: number, y: number, z: number): void;

  /**
  * @param p5 always seems to be 1 i.e TRUE
  */
  export function pointCamAtEntity(cam: number, entity: number, p2: number, p3: number, p4: number, p5: boolean): void;

  /**
  * Parameters p0-p5 seems correct. The bool p6 is unknown, but through every X360 script it's always 1. Please correct p0-p5 if any prove to be wrong.
  */
  export function pointCamAtPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, p6: boolean): void;

  export function stopCamPointing(cam: number): void;

  /**
  * Allows you to aim and shoot at the direction the camera is facing.
  */
  export function setCamAffectsAiming(cam: number, toggle: boolean): void;

  /**
  * SET_CAM_*
  */
  export function _0x661B5C8654ADD825(cam: number, p1: boolean): void;

  export function _0xA2767257A320FC82(p0: any, p1: boolean): void;

  export function _0x271017B9BA825366(p0: any, p1: boolean): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function setCamDebugName(camera: number, name: string): void;

  /**
  * I filled p1-p6 (the floats) as they are as other natives with 6 floats in a row are similar and I see no other method. So if a test from anyone proves them wrong please correct.
  * @param length (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one
  * @param p8 big values ~100 will slow down the camera movement before reaching this node
  * @param p9 != 0 seems to override the rotation/pitch (bool?)
  */
  export function addCamSplineNode(camera: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: number, p8: number, p9: number): void;

  export function addCamSplineNodeUsingCameraFrame(cam: number, cam2: number, p2: number, p3: number): void;

  export function addCamSplineNodeUsingCamera(cam: number, cam2: number, p2: number, p3: number): void;

  export function addCamSplineNodeUsingGameplayFrame(cam: number, p1: number, p2: number): void;

  export function setCamSplinePhase(cam: number, p1: number): void;

  /**
  * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
  * (returns 1.0f when no nodes has been added, reached end of non existing spline)
  */
  export function getCamSplinePhase(cam: number): number;

  /**
  * I'm pretty sure the parameter is the camera as usual, but I am not certain so I'm going to leave it as is.
  */
  export function getCamSplineNodePhase(cam: number): number;

  /**
  * I named p1 as timeDuration as it is obvious. I'm assuming tho it is ran in ms(Milliseconds) as usual.
  */
  export function setCamSplineDuration(cam: number, timeDuration: number): void;

  export function setCamSplineSmoothingStyle(cam: number, smoothingStyle: number): void;

  export function getCamSplineNodeIndex(cam: number): number;

  export function setCamSplineNodeEase(cam: number, p1: number, p2: number, p3: number): void;

  export function setCamSplineNodeVelocityScale(cam: number, p1: number, scale: number): void;

  export function overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;

  /**
  * Max value for p1 is 15.
  */
  export function overrideCamSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;

  export function setCamSplineNodeExtraFlags(cam: number, p1: number, flags: number): void;

  export function isCamSplinePaused(p0: any): boolean;

  /**
  * Previous declaration void SET_CAM_ACTIVE_WITH_INTERP(Cam camTo, Cam camFrom, int duration, BOOL easeLocation, BOOL easeRotation) is completely wrong. The last two params are integers not BOOLs...
  */
  export function setCamActiveWithInterp(camTo: number, camFrom: number, duration: number, easeLocation: number, easeRotation: number): void;

  export function isCamInterpolating(cam: number): boolean;

  /**
  * Possible shake types (updated b617d):
  * DEATH_FAIL_IN_EFFECT_SHAKE
  * DRUNK_SHAKE
  * FAMILY5_DRUG_TRIP_SHAKE
  * HAND_SHAKE
  * JOLT_SHAKE
  * LARGE_EXPLOSION_SHAKE
  * MEDIUM_EXPLOSION_SHAKE
  * SMALL_EXPLOSION_SHAKE
  * See NativeDB for reference: http://natives.altv.mp/#/0x6A25241C340D3822
  */
  export function shakeCam(cam: number, type: string, amplitude: number): void;

  /**
  * Example from michael2 script.
  * @param cam :ANIMATED_SHAKE_CAM(l_5069, "shake_cam_all@", "light", "", 1f);
  */
  export function animatedShakeCam(cam: number, p1: string, p2: string, p3: string, amplitude: number): void;

  export function isCamShaking(cam: number): boolean;

  export function setCamShakeAmplitude(cam: number, amplitude: number): void;

  export function stopCamShaking(cam: number, p1: boolean): void;

  /**
  * CAM::SHAKE_SCRIPT_GLOBAL("HAND_SHAKE", 0.2);
  * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
  */
  export function shakeScriptGlobal(p0: string, p1: number): void;

  /**
  * CAM::ANIMATED_SHAKE_SCRIPT_GLOBAL("SHAKE_CAM_medium", "medium", "", 0.5f);
  * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
  */
  export function animatedShakeScriptGlobal(p0: string, p1: string, p2: string, p3: number): void;

  /**
  * In drunk_controller.c4, sub_309
  * if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {
  * CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);
  * }
  */
  export function isScriptGlobalShaking(): boolean;

  /**
  * In drunk_controller.c4, sub_309
  * if (CAM::IS_SCRIPT_GLOBAL_SHAKING()) {
  * CAM::STOP_SCRIPT_GLOBAL_SHAKING(0);
  * }
  */
  export function stopScriptGlobalShaking(p0: boolean): void;

  /**
  * @param p1 0..16
  */
  export function _0x5D96CFB59DA076A0(vehicle: number, p1: number, p2: number): void;

  /**
  * Atleast one time in a script for the zRot Rockstar uses GET_ENTITY_HEADING to help fill the parameter.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * @param p9 is unknown at this time.
  * @param p10 throughout all the X360 Scripts is always 2.
  */
  export function playCamAnim(cam: number, animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: boolean, p10: number): boolean;

  export function isCamPlayingAnim(cam: number, animName: string, animDictionary: string): boolean;

  export function setCamAnimCurrentPhase(cam: number, phase: number): void;

  export function getCamAnimCurrentPhase(cam: number): number;

  /**
  * Examples:
  * CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_2734, NETWORK::_02C40BF885C567B6(l_2739), "PLAYER_EXIT_L_CAM", "mp_doorbell");
  * CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_F0D[71], l_F4D[151], "ah3b_attackheli_cam2", "missheistfbi3b_helicrash");
  */
  export function playSynchronizedCamAnim(p0: any, p1: any, animName: string, animDictionary: string): boolean;

  export function setFlyCamHorizontalResponse(cam: number, p1: number, p2: number, p3: number): void;

  export function setFlyCamVerticalSpeedMultiplier(cam: number, p1: number, p2: number, p3: number): void;

  export function setFlyCamMaxHeight(cam: number, height: number): void;

  export function setFlyCamCoordAndConstrain(cam: number, x: number, y: number, z: number): void;

  export function _0xC8B5C4A79CC18B94(cam: number): void;

  /**
  * W*
  */
  export function _0x5C48A1D6E3B33179(cam: number): boolean;

  export function isScreenFadedOut(): boolean;

  export function isScreenFadedIn(): boolean;

  export function isScreenFadingOut(): boolean;

  export function isScreenFadingIn(): boolean;

  /**
  * Fades the screen in.
  * @param duration The time the fade should take, in milliseconds.
  */
  export function doScreenFadeIn(duration: number): void;

  /**
  * Fades the screen out.
  * @param duration The time the fade should take, in milliseconds.
  */
  export function doScreenFadeOut(duration: number): void;

  export function setWidescreenBorders(p0: boolean, p1: number): void;

  /**
  * A*
  */
  export function _0x4879E4FE39074CDF(): boolean;

  export function getGameplayCamCoord(): Vector3;

  /**
  * 0-Pitch(X): -70.000092
  * 0-Roll(Y): -0.000001
  * 0-Yaw(Z): -43.886459
  * 1-Pitch(X): -70.000092
  * 1-Roll(Y): -0.000001
  * 1-Yaw(Z): -43.886463
  * 2-Pitch(X): -70.000092
  * 2-Roll(Y): -0.000002
  * 2-Yaw(Z): -43.886467
  * @param rotationOrder dosen't seem to change much, I tried it with 0, 1, 2:
  */
  export function getGameplayCamRot(rotationOrder: number): Vector3;

  export function getGameplayCamFov(): number;

  /**
  * some camera effect that is used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
  */
  export function _0x487A82C650EB7799(p0: number): void;

  /**
  * some camera effect that is (also) used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled. Possibly a cinematic or script-cam version of _0x487A82C650EB7799
  */
  export function _0x0225778816FDC28C(p0: number): void;

  export function getGameplayCamRelativeHeading(): number;

  /**
  * Sets the camera position relative to heading in float from -360 to +360.
  * @param heading is alwyas 0 in aiming camera.
  */
  export function setGameplayCamRelativeHeading(heading: number): void;

  export function getGameplayCamRelativePitch(): number;

  /**
  * This native sets the camera's pitch (rotation on the x-axis).
  */
  export function setGameplayCamRelativePitch(angle: number, scalingFactor: number): void;

  export function setGameplayCamRelativeRotation(roll: number, pitch: number, yaw: number): void;

  /**
  * F*
  */
  export function _0x28B022A17B068A3A(p0: number, p1: number): void;

  /**
  * Does nothing
  */
  export function setGameplayCamRawYaw(yaw: number): void;

  export function setGameplayCamRawPitch(pitch: number): void;

  export function _0x469F2ECDEC046337(p0: boolean): void;

  /**
  * Possible shake types (updated b617d):
  * DEATH_FAIL_IN_EFFECT_SHAKE
  * DRUNK_SHAKE
  * FAMILY5_DRUG_TRIP_SHAKE
  * HAND_SHAKE
  * JOLT_SHAKE
  * LARGE_EXPLOSION_SHAKE
  * MEDIUM_EXPLOSION_SHAKE
  * SMALL_EXPLOSION_SHAKE
  * See NativeDB for reference: http://natives.altv.mp/#/0xFD55E49555E017CF
  */
  export function shakeGameplayCam(shakeName: string, intensity: number): void;

  export function isGameplayCamShaking(): boolean;

  /**
  * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake. Used in script "drunk_controller.ysc.c4" to simulate making the player drunk.
  */
  export function setGameplayCamShakeAmplitude(amplitude: number): void;

  export function stopGameplayCamShaking(p0: boolean): void;

  export function setGameplayCamPedThisFrame(ped: number): void;

  /**
  * - During busted screen.
  * - When player is coming out from a hospital.
  * - When player is coming out from a police station.
  * - When player is buying gun from AmmuNation.
  * @returns Examples when this function will return 0 are:
  */
  export function isGameplayCamRendering(): boolean;

  export function _0x3044240D2E0FA842(): boolean;

  export function _0x705A276EBFF3133D(): boolean;

  export function _0xDB90C6CCA48940F1(p0: boolean): void;

  /**
  * Shows the crosshair even if it wouldn't show normally. Only works for one frame, so make sure to call it repeatedly.
  * DISABLE_*
  */
  export function enableCrosshairThisFrame(): void;

  export function isGameplayCamLookingBehind(): boolean;

  export function _0x2AED6301F67007D5(entity: number): void;

  export function _0x49482F9FCD825AAA(entity: number): void;

  export function _0xA7092AFE81944852(): void;

  export function _0xFD3151CD37EA2245(entity: number): void;

  /**
  * Sets some flag on cinematic camera
  */
  export function _0xB1381B97F70C7B30(): void;

  export function _0xDD79DF9F4D26E1C9(): void;

  export function isSphereVisible(x: number, y: number, z: number, radius: number): boolean;

  export function isFollowPedCamActive(): boolean;

  /**
  * From the scripts:
  * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_ATTACHED_TO_ROPE_CAMERA", 0);
  * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_ON_EXILE1_LADDER_CAMERA", 1500);
  * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 0);
  * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 3000);
  * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_FAMILY5_CAMERA", 0);
  * CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE("FOLLOW_PED_SKY_DIVING_CAMERA", 0);
  */
  export function setFollowPedCamThisUpdate(camName: string, p1: number): boolean;

  export function _0x271401846BD26E92(p0: boolean, p1: boolean): void;

  export function _0xC8391C309684595A(): void;

  /**
  * Clamps the gameplay camera's current yaw.
  * Eg. _CLAMP_GAMEPLAY_CAM_YAW(0.0f, 0.0f) will set the horizontal angle directly behind the player.
  * @param minimum Degrees between -180f and 180f.
  * @param maximum Degrees between -180f and 180f.
  */
  export function clampGameplayCamYaw(minimum: number, maximum: number): void;

  /**
  * Clamps the gameplay camera's current pitch.
  * Eg. _CLAMP_GAMEPLAY_CAM_PITCH(0.0f, 0.0f) will set the vertical angle directly behind the player.
  * @param minimum Degrees between -90f and 90f.
  * @param maximum Degrees between -90f and 90f.
  */
  export function clampGameplayCamPitch(minimum: number, maximum: number): void;

  /**
  * Seems to animate the gameplay camera zoom.
  * Eg. _ANIMATE_GAMEPLAY_CAM_ZOOM(1f, 1000f);
  * will animate the camera zooming in from 1000 meters away.
  * Game scripts use it like this:
  * // Setting this to 1 prevents V key from changing zoom
  * PLAYER::SET_PLAYER_FORCED_ZOOM(PLAYER::PLAYER_ID(), 1);
  * // These restrict how far you can move cam up/down left/right
  * CAM::_CLAMP_GAMEPLAY_CAM_YAW(-20f, 50f);
  * CAM::_CLAMP_GAMEPLAY_CAM_PITCH(-60f, 0f);
  * CAM::_ANIMATE_GAMEPLAY_CAM_ZOOM(1f, 1f);
  */
  export function animateGameplayCamZoom(p0: number, distance: number): void;

  export function _0xE9EA16D6E54CDCA4(p0: number, p1: number): void;

  /**
  * Disables first person camera for the current frame.
  * Found in decompiled scripts:
  * GRAPHICS::DRAW_DEBUG_TEXT_2D("Disabling First Person Cam", 0.5, 0.8, 0.0, 0, 0, 255, 255);
  * CAM::_DE2EF5DA284CC8DF();
  */
  export function disableFirstPersonCamThisFrame(): void;

  export function _0x59424BD75174C9B1(): void;

  /**
  * B*
  */
  export function _0x9F97DA93681F87EA(): void;

  export function getFollowPedCamZoomLevel(): number;

  /**
  * Returns
  * 0 - Third Person Close
  * 1 - Third Person Mid
  * 2 - Third Person Far
  * 4 - First Person
  */
  export function getFollowPedCamViewMode(): number;

  /**
  * Sets the type of Player camera:
  * 0 - Third Person Close
  * 1 - Third Person Mid
  * 2 - Third Person Far
  * 4 - First Person
  */
  export function setFollowPedCamViewMode(viewMode: number): void;

  export function isFollowVehicleCamActive(): boolean;

  export function _0x91EF6EE6419E5B97(p0: boolean): void;

  /**
  * SET_FOLLOW_*
  */
  export function _0x9DFE13ECDC1EC196(p0: boolean, p1: boolean): void;

  export function _0x79C0E43EB9B944E2(hash: number): boolean;

  export function getFollowVehicleCamZoomLevel(): number;

  export function setFollowVehicleCamZoomLevel(zoomLevel: number): void;

  /**
  * Returns the type of camera:
  * 0 - Third Person Close
  * 1 - Third Person Mid
  * 2 - Third Person Far
  * 4 - First Person
  */
  export function getFollowVehicleCamViewMode(): number;

  /**
  * Sets the type of Player camera in vehicles:
  * 0 - Third Person Close
  * 1 - Third Person Mid
  * 2 - Third Person Far
  * 4 - First Person
  */
  export function setFollowVehicleCamViewMode(viewMode: number): void;

  /**
  * interprets the result of CAM::_0x19CAFA3C87F7C2FF()
  * example: // checks if you're currently in first person
  * if ((CAM::_EE778F8C7E1142E2(CAM::_19CAFA3C87F7C2FF()) == 4) && (!__463_$28ED382849B17AFC())) {
  * HUD::_FDEC055AB549E328();
  * HUD::_SET_NOTIFICATION_TEXT_ENTRY("REC_FEED_WAR");
  * l_CE[01] = HUD::_DRAW_NOTIFICATION(0, 1);
  * }
  */
  export function _0xEE778F8C7E1142E2(p0: any): any;

  export function _0x2A2173E46DAECD12(p0: any, p1: any): void;

  /**
  * example: // checks if you're currently in first person
  * if ((CAM::_EE778F8C7E1142E2(CAM::_19CAFA3C87F7C2FF()) == 4) && (!__463_$28ED382849B17AFC())) {
  * HUD::_FDEC055AB549E328();
  * HUD::_SET_NOTIFICATION_TEXT_ENTRY("REC_FEED_WAR");
  * l_CE[01] = HUD::_DRAW_NOTIFICATION(0, 1);
  * }
  * @returns Seems to return the current type of view
  */
  export function _0x19CAFA3C87F7C2FF(): any;

  export function useStuntCameraThisFrame(): void;

  /**
  * Sets gameplay camera to hash
  */
  export function setGameplayCamHash(camName: string): void;

  export function _0x0AA27680A0BD43FA(): void;

  export function setFollowTurretSeatCam(seatIndex: number): void;

  export function isAimCamActive(): boolean;

  /**
  * IS_A*
  */
  export function isAimCamThirdPersonActive(): boolean;

  export function isFirstPersonAimCamActive(): boolean;

  export function disableAimCamThisUpdate(): void;

  export function getFirstPersonAimCamZoomFactor(): number;

  export function setFirstPersonAimCamZoomFactor(zoomFactor: number): void;

  export function _0xCED08CBE8EBB97C7(p0: number, p1: number): void;

  export function _0x2F7F2B26DD3F18EE(p0: number, p1: number): void;

  export function setFirstPersonCamPitchRange(p0: number, p1: number): void;

  export function setFirstPersonCamNearClip(p0: number): void;

  export function setThirdPersonAimCamNearClip(p0: number): void;

  export function _0x4008EDF7D6E48175(p0: boolean): void;

  export function _0x380B4968D1E09E55(): void;

  export function getFinalRenderedCamCoord(): Vector3;

  /**
  * Function is called faily often by CAM::CREATE_CAM_WITH_PARAMS
  * @param rotationOrder seems to consistently be 2 across scripts
  */
  export function getFinalRenderedCamRot(rotationOrder: number): Vector3;

  export function getFinalRenderedInWhenFriendlyRot(player: number, rotationOrder: number): Vector3;

  /**
  * Gets some camera fov
  */
  export function getFinalRenderedCamFov(): number;

  export function getFinalRenderedInWhenFriendlyFov(player: number): number;

  export function getFinalRenderedCamNearClip(): number;

  export function getFinalRenderedCamFarClip(): number;

  export function getFinalRenderedCamNearDof(): number;

  export function getFinalRenderedCamFarDof(): number;

  export function getFinalRenderedCamMotionBlurStrength(): number;

  export function setGameplayCoordHint(x: number, y: number, z: number, duration: number, blendOutDuration: number, blendInDuration: number, unk: number): void;

  export function setGameplayPedHint(p0: number, x1: number, y1: number, z1: number, p4: boolean, p5: any, p6: any, p7: any): void;

  /**
  * Focuses the camera on the specified vehicle.
  */
  export function setGameplayVehicleHint(vehicle: number, offsetX: number, offsetY: number, offsetZ: number, p4: boolean, time: number, easeInTime: number, easeOutTime: number): void;

  export function setGameplayObjectHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any, p7: any): void;

  /**
  * @param p6 & p7 - possibly length or time
  */
  export function setGameplayEntityHint(entity: number, xOffset: number, yOffset: number, zOffset: number, p4: boolean, p5: number, p6: number, p7: number, p8: any): void;

  export function isGameplayHintActive(): boolean;

  export function stopGameplayHint(p0: boolean): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0xCCD078C2665D2973(p0: boolean): void;

  export function _0x247ACBC4ABBC9D1C(p0: boolean): void;

  export function _0xBF72910D0F26F025(): any;

  export function setGameplayHintFov(FOV: number): void;

  /**
  * Old name: _SET_GAMEPLAY_HINT_ANIM_OFFSETZ
  */
  export function setGameplayHintFollowDistanceScalar(value: number): void;

  /**
  * Old name: _SET_GAMEPLAY_HINT_ANGLE
  */
  export function setGameplayHintBaseOrbitPitchOffset(value: number): void;

  export function setGameplayHintAnimOffsetx(xOffset: number): void;

  export function setGameplayHintAnimOffsety(yOffset: number): void;

  export function setGameplayHintAnimCloseup(toggle: boolean): void;

  export function setCinematicButtonActive(p0: boolean): void;

  export function isCinematicCamRendering(): boolean;

  /**
  * Full list of cam shake types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/camShakeTypesCompact.json
  * @param p0 argument found in the b617d scripts: "DRUNK_SHAKE"
  */
  export function shakeCinematicCam(p0: string, p1: number): void;

  export function isCinematicCamShaking(): boolean;

  export function setCinematicCamShakeAmplitude(p0: number): void;

  export function stopCinematicCamShaking(p0: boolean): void;

  export function disableVehicleFirstPersonCamThisFrame(): void;

  export function _0x62ECFCFDEE7885D6(): void;

  /**
  * Resets the vehicle idle camera timer. Calling this in a loop will disable the idle camera.
  */
  export function invalidateVehicleIdleCam(): void;

  /**
  * Resets the idle camera timer. Calling that in a loop once every few seconds is enough to disable the idle cinematic camera.
  */
  export function invalidateIdleCam(): void;

  export function isCinematicIdleCamRendering(): boolean;

  export function isInVehicleCamDisabled(): boolean;

  export function createCinematicShot(p0: any, p1: number, p2: any, entity: number): void;

  export function isCinematicShotActive(p0: any): boolean;

  /**
  * Only used once in carsteal3 with p0 set to -1096069633 (CAMERA_MAN_SHOT)
  */
  export function stopCinematicShot(p0: number): void;

  export function forceCinematicRenderingThisUpdate(p0: boolean): void;

  export function _0xDC9DA9E8789F5246(): void;

  /**
  * Toggles the vehicle cinematic cam; requires the player ped to be in a vehicle to work.
  */
  export function setCinematicModeActive(toggle: boolean): void;

  export function _0x1F2300CB7FA7B7F6(): any;

  export function _0x17FCA7199A530203(): any;

  export function _0xD7360051C885628B(): any;

  /**
  * Tests some cinematic camera flags
  */
  export function isCinematicCamActive(): boolean;

  export function _0x7B8A361C1813FBEF(): void;

  export function stopCutsceneCamShaking(): void;

  export function _0x324C5AA411DA7737(p0: any): void;

  /**
  * Hardcoded to only work in multiplayer.
  */
  export function _0x12DED8CA53D47EA5(p0: number): void;

  export function getFocusPedOnScreen(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

  export function _0x5A43C76F7FC7BA5F(): void;

  /**
  * if p0 is 0, effect is cancelled
  * if p0 is 1, effect zooms in, gradually tilts cam clockwise apx 30 degrees, wobbles slowly. Motion blur is active until cancelled.
  * if p0 is 2, effect immediately tilts cam clockwise apx 30 degrees, begins to wobble slowly, then gradually tilts cam back to normal. The wobbling will continue until the effect is cancelled.
  */
  export function setCamEffect(p0: number): void;

  export function _0x5C41E6BABC9E2112(p0: any): void;

  /**
  * From b617 scripts:
  * CAM::_21E253A7F8DA5DFB("DINGHY");
  * CAM::_21E253A7F8DA5DFB("ISSI2");
  * CAM::_21E253A7F8DA5DFB("SPEEDO");
  */
  export function setGameplayCamVehicleCamera(vehicleName: string): void;

  export function setGameplayCamVehicleCameraName(vehicleModel: number): void;

  export function _0xEAF0FA793D05C592(): any;

  export function _0x62374889A4D59F72(): void;

  export function replayFreeCamGetMaxRange(): number;

  /**
  * SET_CLOCK_TIME(12, 34, 56);
  */
  export function setClockTime(hour: number, minute: number, second: number): void;

  export function pauseClock(toggle: boolean): void;

  export function advanceClockTimeTo(hour: number, minute: number, second: number): void;

  export function addToClockTime(hours: number, minutes: number, seconds: number): void;

  /**
  * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
  */
  export function getClockHours(): number;

  /**
  * Gets the current ingame clock minute.
  */
  export function getClockMinutes(): number;

  /**
  * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in GTA is only 48 minutes in real life.
  */
  export function getClockSeconds(): number;

  export function setClockDate(day: number, month: number, year: number): void;

  /**
  * Gets the current day of the week.
  * 0: Sunday
  * 1: Monday
  * 2: Tuesday
  * 3: Wednesday
  * 4: Thursday
  * 5: Friday
  * 6: Saturday
  */
  export function getClockDayOfWeek(): number;

  export function getClockDayOfMonth(): number;

  export function getClockMonth(): number;

  export function getClockYear(): number;

  export function getMillisecondsPerGameMinute(): number;

  /**
  * Gets system time as year, month, day, hour, minute and second.
  * Example usage:
  * int year;
  * int month;
  * int day;
  * int hour;
  * int minute;
  * int second;
  */
  export function getPosixTime(year: number, month: number, day: number, hour: number, minute: number, second: number): [void, number, number, number, number, number, number];

  /**
  * Gets current UTC time
  */
  export function getUtcTime(year: number, month: number, day: number, hour: number, minute: number, second: number): [void, number, number, number, number, number, number];

  /**
  * Gets local system time as year, month, day, hour, minute and second.
  * Example usage:
  * int year;
  * int month;
  * int day;
  * int hour;
  * int minute;
  * int second;
  * or use std::tm struct
  */
  export function getLocalTime(year: number, month: number, day: number, hour: number, minute: number, second: number): [void, number, number, number, number, number, number];

  /**
  * @param flags Usually 8
  */
  export function requestCutscene(cutsceneName: string, flags: number): void;

  /**
  * Example: 0x105 (bit 0, 2 and 8 set) will enable scene 1, 3 and 9.
  * @param playbackFlags Which scenes should be played.
  * @param flags Usually 8
  */
  export function requestCutsceneWithPlaybackList(cutsceneName: string, playbackFlags: number, flags: number): void;

  export function removeCutscene(): void;

  export function hasCutsceneLoaded(): boolean;

  export function hasThisCutsceneLoaded(cutsceneName: string): boolean;

  /**
  * SET_SCRIPT_*
  * Sets the cutscene's owning thread ID.
  */
  export function _0x8D9DF6ECA8768583(threadId: number): void;

  export function canRequestAssetsForCutsceneEntity(): boolean;

  export function isCutscenePlaybackFlagSet(flag: number): boolean;

  export function setCutsceneEntityStreamingFlags(cutsceneEntName: string, p1: number, p2: number): void;

  /**
  * Simply loads the cutscene and doesn't do extra stuff that REQUEST_CUTSCENE does.
  */
  export function requestCutFile(cutsceneName: string): void;

  /**
  * Simply checks if the cutscene has loaded and doesn't check via CutSceneManager as opposed to HAS_[THIS]_CUTSCENE_LOADED.
  */
  export function hasCutFileLoaded(cutsceneName: string): boolean;

  /**
  * Simply unloads the cutscene and doesn't do extra stuff that REMOVE_CUTSCENE does.
  */
  export function removeCutFile(cutsceneName: string): void;

  /**
  * Jenkins hash probably is 0xFD8B1AC2
  */
  export function getCutFileNumSections(cutsceneName: string): number;

  /**
  * @param flags Usually 0.
  */
  export function startCutscene(flags: number): void;

  /**
  * @param flags Usually 0.
  */
  export function startCutsceneAtCoords(x: number, y: number, z: number, flags: number): void;

  export function stopCutscene(p0: boolean): void;

  export function stopCutsceneImmediately(): void;

  /**
  * @param p3 could be heading. Needs more research.
  */
  export function setCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;

  export function _0x011883F41211432A(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;

  export function getCutsceneTime(): number;

  export function getCutsceneTotalDuration(): number;

  /**
  * GET_CUTSCENE_*
  */
  export function _0x971D7B15BCDBEF99(): number;

  export function wasCutsceneSkipped(): boolean;

  export function hasCutsceneFinished(): boolean;

  export function isCutsceneActive(): boolean;

  export function isCutscenePlaying(): boolean;

  export function getCutsceneSectionPlaying(): number;

  export function getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: number): number;

  export function _0x583DF8E3D4AFBD98(): number;

  /**
  * @returns This function is hard-coded to always return 1.
  */
  export function _0x4CEBC1ED31E8925E(cutsceneName: string): boolean;

  export function _0x4FCD976DA686580C(p0: any): any;

  export function registerEntityForCutscene(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;

  export function getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: number): number;

  /**
  * SET_VEHICLE_*
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function _0x7F96F23FA9B73327(modelHash: number): void;

  /**
  * Only used twice in R* scripts
  */
  export function setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

  /**
  * @param modelHash (p1) was always 0 in R* scripts
  */
  export function canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: number): boolean;

  export function canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: number): boolean;

  export function canSetExitStateForCamera(p0: boolean): boolean;

  /**
  * Toggles a value (bool) for cutscenes.
  * SET_*
  */
  export function _0xC61B86C9F61EB404(toggle: boolean): void;

  export function setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

  export function _0x20746F7B1032A3C7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

  export function _0x06EE9048FD080382(p0: boolean): void;

  export function _0xA0FE76168A189DDB(): number;

  export function _0x2F137B508DE238F2(p0: boolean): void;

  export function _0xE36A98D8AB3D3C66(p0: boolean): void;

  export function _0x5EDEF0CF8C1DAB3C(): any;

  export function _0x41FAA8FB2ECE8720(p0: boolean): void;

  export function registerSynchronisedScriptSpeech(): void;

  /**
  * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
  */
  export function setCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;

  export function setCutscenePedComponentVariationFromPed(cutsceneEntName: string, ped: number, modelHash: number): void;

  export function doesCutsceneEntityExist(cutsceneEntName: string, modelHash: number): boolean;

  /**
  * Thanks R*! ;)
  * if ((l_161 == 0) || (l_161 == 2)) {
  * sub_2ea27("Trying to set Jimmy prop variation");
  * CUTSCENE::_0546524ADE2E9723("Jimmy_Boston", 1, 0, 0, 0);
  * }
  * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
  */
  export function setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;

  /**
  * HAS_CUTSCENE_*
  * Possibly HAS_CUTSCENE_CUT_THIS_FRAME, needs more research.
  */
  export function hasCutsceneCutThisFrame(): boolean;

  /**
  * Adds the given request ID to the watch list.
  */
  export function datafileWatchRequestId(id: number): void;

  export function datafileClearWatchList(): void;

  export function datafileIsValidRequestId(index: number): boolean;

  export function datafileHasLoadedFileData(p0: any): boolean;

  export function datafileHasValidFileData(p0: any): boolean;

  export function datafileSelectActiveFile(p0: any): boolean;

  export function datafileDeleteRequestedFile(p0: any): boolean;

  export function ugcCreateContent(data: any, dataCount: number, contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): [boolean, any];

  export function ugcCreateMission(contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): boolean;

  export function ugcUpdateContent(contentId: string, data: any, dataCount: number, contentName: string, description: string, tagsCsv: string, contentTypeName: string): [boolean, any];

  export function ugcUpdateMission(contentId: string, contentName: string, description: string, tagsCsv: string, contentTypeName: string): boolean;

  export function ugcSetPlayerData(contentId: string, rating: number, contentTypeName: string): boolean;

  export function datafileSelectUgcData(p0: number): boolean;

  export function datafileSelectUgcStats(p0: number, p1: boolean): boolean;

  export function datafileSelectUgcPlayerData(p0: number): boolean;

  /**
  * if ((NETWORK::_597F8DBA9B206FC7() > 0) && DATAFILE::_01095C95CD46B624(0)) {
  * v_10 = DATAFILE::_GET_ROOT_OBJECT();
  * v_11 = DATAFILE::_OBJECT_VALUE_GET_INTEGER(v_10, "pt");
  * sub_20202(2, v_11);
  * a_0 += 1;
  * } else {
  * a_0 += 1;
  * }
  */
  export function datafileSelectCreatorStats(p0: number): boolean;

  /**
  * Loads a User-Generated Content (UGC) file. These files can be found in "[GTA5]\data\ugc" and "[GTA5]\common\patch\ugc". They seem to follow a naming convention, most likely of "[name]_[part].ugc". See example below for usage.
  * Returns whether or not the file was successfully loaded.
  * Example:
  * DATAFILE::_LOAD_UGC_FILE("RockstarPlaylists") // loads "rockstarplaylists_00.ugc"
  */
  export function datafileLoadOfflineUgc(filename: string): boolean;

  export function datafileCreate(): void;

  export function datafileDelete(): void;

  export function datafileStoreMissionHeader(): void;

  export function datafileFlushMissionHeader(): void;

  export function datafileGetFileDict(): string;

  export function datafileStartSaveToCloud(filename: string): boolean;

  export function datafileUpdateSaveToCloud(p0: boolean): [boolean, boolean];

  /**
  * Example:
  * if (!DATAFILE::_BEDB96A7584AA8CF())
  * {
  * if (!g_109E3)
  * {
  * if (((sub_d4f() == 2) == 0) && (!NETWORK::NETWORK_IS_GAME_IN_PROGRESS()))
  * {
  * if (NETWORK::NETWORK_IS_CLOUD_AVAILABLE())
  * {
  * See NativeDB for reference: http://natives.altv.mp/#/0xBEDB96A7584AA8CF
  */
  export function datafileIsSavePending(): boolean;

  export function _0xA6EEF01087181EDD(p0: any, p1: any): any;

  export function _0x6AD0BD5E087866CB(p0: any): void;

  export function _0xDBF860CF1DB8E599(p0: any): any;

  export function datadictSetBool(objectData: any, key: string, value: boolean): [void, any];

  export function datadictSetInt(objectData: any, key: string, value: number): [void, any];

  export function datadictSetFloat(objectData: any, key: string, value: number): [void, any];

  export function datadictSetString(objectData: any, key: string, value: string): [void, any];

  export function datadictSetVector(objectData: any, key: string, valueX: number, valueY: number, valueZ: number): [void, any];

  export function datadictCreateDict(objectData: any, key: string): [any, any];

  export function datadictCreateArray(objectData: any, key: string): [any, any];

  export function datadictGetBool(objectData: any, key: string): [boolean, any];

  export function datadictGetInt(objectData: any, key: string): [number, any];

  export function datadictGetFloat(objectData: any, key: string): [number, any];

  export function datadictGetString(objectData: any, key: string): [string, any];

  export function datadictGetVector(objectData: any, key: string): [Vector3, any];

  export function datadictGetDict(objectData: any, key: string): [any, any];

  export function datadictGetArray(objectData: any, key: string): [any, any];

  /**
  * Types:
  * 1 = Boolean
  * 2 = Integer
  * 3 = Float
  * 4 = String
  * 5 = Vector3
  * 6 = Object
  * 7 = Array
  */
  export function datadictGetType(objectData: any, key: string): [number, any];

  export function dataarrayAddBool(arrayData: any, value: boolean): [void, any];

  export function dataarrayAddInt(arrayData: any, value: number): [void, any];

  export function dataarrayAddFloat(arrayData: any, value: number): [void, any];

  export function dataarrayAddString(arrayData: any, value: string): [void, any];

  export function dataarrayAddVector(arrayData: any, valueX: number, valueY: number, valueZ: number): [void, any];

  export function dataarrayAddDict(arrayData: any): [any, any];

  export function dataarrayGetBool(arrayData: any, arrayIndex: number): [boolean, any];

  export function dataarrayGetInt(arrayData: any, arrayIndex: number): [number, any];

  export function dataarrayGetFloat(arrayData: any, arrayIndex: number): [number, any];

  export function dataarrayGetString(arrayData: any, arrayIndex: number): [string, any];

  export function dataarrayGetVector(arrayData: any, arrayIndex: number): [Vector3, any];

  export function dataarrayGetDict(arrayData: any, arrayIndex: number): [any, any];

  export function dataarrayGetCount(arrayData: any): [number, any];

  /**
  * Types:
  * 1 = Boolean
  * 2 = Integer
  * 3 = Float
  * 4 = String
  * 5 = Vector3
  * 6 = Object
  * 7 = Array
  */
  export function dataarrayGetType(arrayData: any, arrayIndex: number): [number, any];

  export function decorSetTime(entity: number, propertyName: string, timestamp: number): boolean;

  /**
  * This function sets metadata of type bool to specified entity.
  */
  export function decorSetBool(entity: number, propertyName: string, value: boolean): boolean;

  export function decorSetFloat(entity: number, propertyName: string, value: number): boolean;

  /**
  * Sets property to int.
  */
  export function decorSetInt(entity: number, propertyName: string, value: number): boolean;

  export function decorGetBool(entity: number, propertyName: string): boolean;

  export function decorGetFloat(entity: number, propertyName: string): number;

  export function decorGetInt(entity: number, propertyName: string): number;

  /**
  * Returns whether or not the specified property is set for the entity.
  */
  export function decorExistOn(entity: number, propertyName: string): boolean;

  export function decorRemove(entity: number, propertyName: string): boolean;

  /**
  * https://alloc8or.re/gta5/doc/enums/eDecorType.txt
  */
  export function decorRegister(propertyName: string, type: number): void;

  /**
  * @param type see DECOR_REGISTER
  */
  export function decorIsRegisteredAsType(propertyName: string, type: number): boolean;

  /**
  * Called after all decorator type initializations.
  */
  export function decorRegisterLock(): void;

  /**
  * Only used once in scripts, in maintransition.
  * maintransition.c4, line ~82432:
  * if (PED::_7350823473013C02(PLAYER::PLAYER_PED_ID()) && (DECORATOR::_241FCA5B1AA14F75() == 0)) {
  * g_2542A5 = a_1; // 'g_2542A5' used in 'building_controller.ysc' for IPL stuff?
  * }
  * Likely used solely for the players ped. The function it's in seems to only be used for initialization/quitting. Called among natives to discard scaleforms, disable frontend, fading in/out, etc. Neighboring strings to some calls include "HUD_JOINING", "HUD_QUITTING".
  * Most likely ARE_*
  * @returns     return 1;
  */
  export function _0x241FCA5B1AA14F75(): boolean;

  /**
  * Example:
  * DLC::IS_DLC_PRESENT($\mpbusiness2\);
  * ($ = gethashkey)
  * bruteforce these:
  * 0xB119F6D
  * 0x96F02EE6
  */
  export function isDlcPresent(dlcHash: number): boolean;

  export function _0xF2E07819EF1A5289(): boolean;

  export function _0x9489659372A81585(): boolean;

  export function _0xA213B11DFF526300(): boolean;

  export function getExtraContentPackHasBeenInstalled(): boolean;

  export function getIsLoadingScreenActive(): boolean;

  /**
  * GET_IS_LOADING_*
  */
  export function _0xC4637A6D03C24CC3(): boolean;

  /**
  * Sets the value of the specified variable to 0.
  * @returns Always returns true.
  */
  export function hasCloudRequestsFinished(p0: boolean, unused: any): [boolean, boolean];

  /**
  * Unloads GROUP_MAP (GTAO/MP) DLC data and loads GROUP_MAP_SP DLC. Neither are loaded by default, 0888C3502DBBEEF5 is a cognate to this function and loads MP DLC (and unloads SP DLC by extension).
  * The original (and wrong) definition is below:
  * This unload the GTA:O DLC map parts (like high end garages/apartments).
  * Works in singleplayer.
  */
  export function onEnterSp(): void;

  /**
  * This loads the GTA:O dlc map parts (high end garages, apartments).
  * Works in singleplayer.
  * In order to use GTA:O heist IPL's you have to call this native with the following params: SET_INSTANCE_PRIORITY_MODE(1);
  */
  export function onEnterMp(): void;

  /**
  * Checks whether an entity exists in the game world.
  */
  export function doesEntityExist(entity: number): boolean;

  export function doesEntityBelongToThisScript(entity: number, p1: boolean): boolean;

  export function doesEntityHaveDrawable(entity: number): boolean;

  export function doesEntityHavePhysics(entity: number): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * @param p3 is always 3 as far as i cant tell
  */
  export function hasEntityAnimFinished(entity: number, animDict: string, animName: string, p3: number): boolean;

  export function hasEntityBeenDamagedByAnyObject(entity: number): boolean;

  export function hasEntityBeenDamagedByAnyPed(entity: number): boolean;

  export function hasEntityBeenDamagedByAnyVehicle(entity: number): boolean;

  /**
  * Entity 1 = Victim
  * Entity 2 = Attacker
  * @param p2 seems to always be 1
  */
  export function hasEntityBeenDamagedByEntity(entity1: number, entity2: number, p2: boolean): boolean;

  /**
  * There is other codes used for traceType:
  * 19 - in jewelry_prep1a
  * 126 - in am_hunt_the_beast
  * 256 & 287 - in fm_mission_controller
  * @param traceType is always 17 in the scripts.
  */
  export function hasEntityClearLosToEntity(entity1: number, entity2: number, traceType: number): boolean;

  export function _0x394BDE2A7BBA031E(p0: any, p1: any, p2: any): any;

  /**
  * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
  * This is one of the most CPU demanding BOOL natives in the game; avoid calling this in things like nested for-loops
  */
  export function hasEntityClearLosToEntityInFront(entity1: number, entity2: number): boolean;

  /**
  * Called on tick.
  * Note: for vehicles, the wheels can touch the ground and it will still return false, but if the body of the vehicle touches the ground, it will return true.
  * @returns Tested with vehicles, returns true whenever the vehicle is touching any entity.
  */
  export function hasEntityCollidedWithAnything(entity: number): boolean;

  export function getLastMaterialHitByEntity(entity: number): number;

  export function getCollisionNormalOfLastHitForEntity(entity: number): Vector3;

  /**
  * Based on carmod_shop script decompile this takes a vehicle parameter. It is called when repair is done on initial enter.
  */
  export function forceEntityAiAndAnimationUpdate(entity: number): void;

  /**
  * Returns a float value representing animation's current playtime with respect to its total playtime. This value increasing in a range from [0 to 1] and wrap back to 0 when it reach 1.
  * Example:
  * 0.000000 - mark the starting of animation.
  * 0.500000 - mark the midpoint of the animation.
  * 1.000000 - mark the end of animation.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function getEntityAnimCurrentTime(entity: number, animDict: string, animName: string): number;

  /**
  * Returns a float value representing animation's total playtime in milliseconds.
  * Example:
  * GET_ENTITY_ANIM_TOTAL_TIME(PLAYER_ID(),"amb@world_human_yoga@female@base","base_b")
  * return 20800.000000
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function getEntityAnimTotalTime(entity: number, animDict: string, animName: string): number;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function getAnimDuration(animDict: string, animName: string): number;

  export function getEntityAttachedTo(entity: number): number;

  /**
  * Gets the current coordinates for a specified entity.
  * `entity` = The entity to get the coordinates from.
  * `alive` = Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
  */
  export function getEntityCoords(entity: number, alive: boolean): Vector3;

  /**
  * Gets the entity's forward vector.
  */
  export function getEntityForwardVector(entity: number): Vector3;

  /**
  * Gets the X-component of the entity's forward vector.
  */
  export function getEntityForwardX(entity: number): number;

  /**
  * Gets the Y-component of the entity's forward vector.
  */
  export function getEntityForwardY(entity: number): number;

  /**
  * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
  */
  export function getEntityHeading(entity: number): number;

  /**
  * Gets the heading of the entity physics in degrees, which tends to be more accurate than just "GET_ENTITY_HEADING". This can be clearly seen while, for example, ragdolling a ped/player.
  * NOTE: The name and description of this native are based on independent research. If you find this native to be more suitable under a different name and/or described differently, please feel free to do so.
  * GET_ENTITY_HEADING_*
  */
  export function getEntityPhysicsHeading(entity: number): number;

  /**
  * Returns an integer value of entity's current health.
  * Example of range for ped:
  * - Player [0 to 200]
  * - Ped [100 to 200]
  * - Vehicle [0 to 1000]
  * - Object [0 to 1000]
  * Health is actually a float value but this native casts it to int.
  * In order to get the actual value, do:
  * float health = *(float *)(entityAddress + 0x280);
  */
  export function getEntityHealth(entity: number): number;

  /**
  * Return an integer value of entity's maximum health.
  * Example:
  * - Player = 200
  * - Ped = 150
  */
  export function getEntityMaxHealth(entity: number): number;

  /**
  * For instance: ENTITY::SET_ENTITY_MAX_HEALTH(PLAYER::PLAYER_PED_ID(), 200); // director_mode.c4: 67849
  */
  export function setEntityMaxHealth(entity: number, value: number): void;

  export function getEntityHeight(entity: number, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;

  /**
  * Return height (z-dimension) above ground.
  * Example: The pilot in a titan plane is 1.844176 above ground.
  * How can i convert it to meters?
  * Everything seems to be in meters, probably this too.
  */
  export function getEntityHeightAboveGround(entity: number): number;

  export function getEntityMatrix(entity: number, forwardVector: Vector3, rightVector: Vector3, upVector: Vector3, position: Vector3): [void, Vector3, Vector3, Vector3, Vector3];

  /**
  * Returns the model hash from the entity
  */
  export function getEntityModel(entity: number): number;

  /**
  * Converts world coords (posX - Z) to coords relative to the entity
  * Example:
  * entity's x coord is 40
  * the returned x coord will then be 10 or -10, not sure haven't used this in a while (think it is 10 though).
  * @param posX is given as 50
  * @param posY is given as 50
  * @param posZ is given as 50
  */
  export function getOffsetFromEntityGivenWorldCoords(entity: number, posX: number, posY: number, posZ: number): Vector3;

  /**
  * Offset values are relative to the entity.
  * x = left/right
  * y = forward/backward
  * z = up/down
  */
  export function getOffsetFromEntityInWorldCoords(entity: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;

  export function getEntityPitch(entity: number): number;

  /**
  * @param w is the correct parameter name!
  */
  export function getEntityQuaternion(entity: number, x: number, y: number, z: number, w: number): [void, number, number, number, number];

  /**
  * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
  * (Sideways Roll) such as a vehicle tipped on its side
  */
  export function getEntityRoll(entity: number): number;

  /**
  * rotationOrder refers to the order yaw pitch roll is applied; value ranges from 0 to 5 and is usually *2* in scripts.
  * What you use for rotationOrder when getting must be the same as rotationOrder when setting the rotation.
  * What it returns is the yaw on the z part of the vector, which makes sense considering R* considers z as vertical. Here's a picture for those of you who don't understand pitch, yaw, and roll: www.allstar.fiu.edu/aero/images/pic5-1.gif
  * Rotation Orders:
  * 0: ZYX - Rotate around the z-axis, then the y-axis and finally the x-axis.
  * 1: YZX - Rotate around the y-axis, then the z-axis and finally the x-axis.
  * 2: ZXY - Rotate around the z-axis, then the x-axis and finally the y-axis.
  * 3: XZY - Rotate around the x-axis, then the z-axis and finally the y-axis.
  * 4: YXZ - Rotate around the y-axis, then the x-axis and finally the z-axis.
  * 5: XYZ - Rotate around the x-axis, then the y-axis and finally the z-axis.
  * @param rotationOrder is the order yaw, pitch and roll is applied. Usually 2. Returns a vector where the Z coordinate is the yaw.
  * @returns rotationOrder is the order yaw, pitch and roll is applied. Usually 2. Returns a vector where the Z coordinate is the yaw.
  */
  export function getEntityRotation(entity: number, rotationOrder: number): Vector3;

  export function getEntityRotationVelocity(entity: number): Vector3;

  /**
  * @returns All ambient entities in-world seem to have the same value for the second argument (Any *script), depending on when the scripthook was activated/re-activated. I've seen numbers from ~5 to almost 70 when the value was translated with to_string. The function return value seems to always be 0.
  */
  export function getEntityScript(entity: number, script: number): [string, number];

  /**
  * result is in meters per second
  * ------------------------------------------------------------
  * So would the conversion to mph and km/h, be along the lines of this.
  * float speed = GET_ENTITY_SPEED(veh);
  * float kmh = (speed * 3.6);
  * float mph = (speed * 2.236936);
  * ------------------------------------------------------------
  */
  export function getEntitySpeed(entity: number): number;

  /**
  * @param relative can be used for getting speed relative to the frame of the vehicle, to determine for example, if you are going in reverse (-y speed) or not (+y speed).
  */
  export function getEntitySpeedVector(entity: number, relative: boolean): Vector3;

  export function getEntityUprightValue(entity: number): number;

  export function getEntityVelocity(entity: number): Vector3;

  /**
  * @returns Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
  */
  export function getObjectIndexFromEntityIndex(entity: number): number;

  /**
  * @returns Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
  */
  export function getPedIndexFromEntityIndex(entity: number): number;

  /**
  * @returns Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
  */
  export function getVehicleIndexFromEntityIndex(entity: number): number;

  /**
  * Returns the coordinates of an entity-bone.
  */
  export function getWorldPositionOfEntityBone(entity: number, boneIndex: number): Vector3;

  export function getNearestPlayerToEntity(entity: number): number;

  export function getNearestPlayerToEntityOnTeam(entity: number, team: number): number;

  /**
  * Returns:
  * 0 = no entity
  * 1 = ped
  * 2 = vehicle
  * 3 = object
  */
  export function getEntityType(entity: number): number;

  /**
  * A population type, from the following enum: https://alloc8or.re/gta5/doc/enums/ePopulationType.txt
  */
  export function getEntityPopulationType(entity: number): number;

  export function isAnEntity(handle: number): boolean;

  export function isEntityAPed(entity: number): boolean;

  export function isEntityAMissionEntity(entity: number): boolean;

  export function isEntityAVehicle(entity: number): boolean;

  export function isEntityAnObject(entity: number): boolean;

  /**
  * Checks if entity is within x/y/zSize distance of x/y/z.
  * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
  */
  export function isEntityAtCoord(entity: number, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: boolean, p8: boolean, p9: number): boolean;

  /**
  * Checks if entity1 is within the box defined by x/y/zSize of entity2.
  * Last three parameters are almost alwasy p5 = 0, p6 = 1, p7 = 0
  */
  export function isEntityAtEntity(entity1: number, entity2: number, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: number): boolean;

  /**
  * Whether the entity is attached to any other entity.
  */
  export function isEntityAttached(entity: number): boolean;

  export function isEntityAttachedToAnyObject(entity: number): boolean;

  export function isEntityAttachedToAnyPed(entity: number): boolean;

  export function isEntityAttachedToAnyVehicle(entity: number): boolean;

  export function isEntityAttachedToEntity(from: number, to: number): boolean;

  export function isEntityDead(entity: number, p1: boolean): boolean;

  export function isEntityInAir(entity: number): boolean;

  /**
  * `p8` is a debug flag invoking functions in the same path as ``DRAW_MARKER``
  * `p10` is some entity flag check, also used in `IS_ENTITY_AT_ENTITY`, `IS_ENTITY_IN_AREA`, and `IS_ENTITY_AT_COORD`.
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  */
  export function isEntityInAngledArea(entity: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, debug: boolean, includeZ: boolean, p10: any): boolean;

  export function isEntityInArea(entity: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean, p9: any): boolean;

  /**
  * Full list of zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/zones.json
  */
  export function isEntityInZone(entity: number, zone: string): boolean;

  export function isEntityInWater(entity: number): boolean;

  /**
  * Get how much of the entity is submerged.  1.0f is whole entity.
  */
  export function getEntitySubmergedLevel(entity: number): number;

  /**
  * SET_ENTITY_R*
  */
  export function _0x694E00132F2823ED(entity: number, toggle: boolean): void;

  /**
  * Returns true if the entity is in between the minimum and maximum values for the 2d screen coords.
  * Chipping
  * @returns This means that it will return true even if the entity is behind a wall for example, as long as you're looking at their location. 
  */
  export function isEntityOnScreen(entity: number): boolean;

  /**
  * See also PED::IS_SCRIPTED_SCENARIO_PED_USING_CONDITIONAL_ANIM 0x6EC47A344923E1ED 0x3C30B447
  * Taken from ENTITY::IS_ENTITY_PLAYING_ANIM(PLAYER::PLAYER_PED_ID(), "creatures@shark@move", "attack_player", 3)
  * p4 is always 3 in the scripts.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function isEntityPlayingAnim(entity: number, animDict: string, animName: string, taskFlag: number): boolean;

  /**
  * a static ped will not react to natives like "APPLY_FORCE_TO_ENTITY" or "SET_ENTITY_VELOCITY" and oftentimes will not react to task-natives like "TASK::TASK_COMBAT_PED". The only way I know of to make one of these peds react is to ragdoll them (or sometimes to use CLEAR_PED_TASKS_IMMEDIATELY(). Static peds include almost all far-away peds, beach-combers, peds in certain scenarios, peds crossing a crosswalk, peds walking to get back into their cars, and others. If anyone knows how to make a ped non-static without ragdolling them, please edit this with the solution.
  * how can I make an entity static???
  */
  export function isEntityStatic(entity: number): boolean;

  export function isEntityTouchingEntity(entity: number, targetEntity: number): boolean;

  export function isEntityTouchingModel(entity: number, modelHash: number): boolean;

  export function isEntityUpright(entity: number, angle: number): boolean;

  export function isEntityUpsidedown(entity: number): boolean;

  export function isEntityVisible(entity: number): boolean;

  export function isEntityVisibleToScript(entity: number): boolean;

  export function isEntityOccluded(entity: number): boolean;

  export function wouldEntityBeOccluded(entityModelHash: number, x: number, y: number, z: number, p4: boolean): boolean;

  export function isEntityWaitingForWorldCollision(entity: number): boolean;

  /**
  * Applies a force to the specified entity.
  * **List of force types (p1)**:
  * public enum ForceType
  * {
  * MinForce = 0,
  * MaxForceRot = 1,
  * MinForce2 = 2,
  * MaxForceRot2 = 3,
  * ForceNoRot = 4,
  * See NativeDB for reference: http://natives.altv.mp/#/0x18FF00FC7EFF559E
  */
  export function applyForceToEntityCenterOfMass(entity: number, forceType: number, x: number, y: number, z: number, p5: boolean, isDirectionRel: boolean, isForceRel: boolean, p8: boolean): void;

  /**
  * Documented here:
  * gtaforums.com/topic/885669-precisely-define-object-physics/
  * gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
  * First bit (lowest): Strong force flag, factor 100
  * Second bit: Unkown flag
  * If higher bits are unequal 0 the function doesn't applay any forces at all.
  * (As integer possible values are 0-7)
  * 0: weak force
  * 1: strong force
  * See NativeDB for reference: http://natives.altv.mp/#/0xC5F68BE9613E2D18
  * @param x Momentum flag=1 (vector (x,y,z) is a momentum, more research needed)
  * @param y Momentum flag=1 (vector (x,y,z) is a momentum, more research needed)
  * @param boneIndex !!! Whenever I set this !=0, my script stopped.
  */
  export function applyForceToEntity(entity: number, forceFlags: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean, p12: boolean, p13: boolean): void;

  /**
  * Attaches entity1 to bone (boneIndex) of entity2.
  * @param boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
  * @param useSoftPinning - if set to false attached entity will not detach when fixed
  * @param collision - controls collision between the two entities (FALSE disables collision).
  * @param isPed - pitch doesnt work when false and roll will only work on negative numbers (only peds)
  * @param vertexIndex - position of vertex
  * @param fixedRot - if false it ignores entity vector
  */
  export function attachEntityToEntity(entity1: number, entity2: number, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean): void;

  export function attachEntityBoneToEntityBone(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, p4: boolean, p5: boolean): void;

  export function attachEntityBoneToEntityBonePhysically(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, p4: boolean, p5: boolean): void;

  /**
  * @param breakForce is the amount of force required to break the bond.
  * @param fixedRot - is always 1 in scripts
  * @param p15 - is 1 or 0 in scripts - unknoun what it does
  * @param collision - controls collision between the two entities (FALSE disables collision).
  * @param p17 - do not teleport entity to be attached to the position of the bone Index of the target entity (if 1, entity will not be teleported to target bone)
  * @param p18 - is always 2 in scripts.
  */
  export function attachEntityToEntityPhysically(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: boolean, p15: boolean, collision: boolean, p17: boolean, p18: number): void;

  /**
  * Called to update entity attachments.
  */
  export function processEntityAttachments(entity: number): void;

  /**
  * Returns the index of the bone. If the bone was not found, -1 will be returned.
  * list:
  * pastebin.com/D7JMnX1g
  * BoneNames:
  * chassis,
  * windscreen,
  * seat_pside_r,
  * seat_dside_r,
  * bodyshell,
  * See NativeDB for reference: http://natives.altv.mp/#/0xFB71170B7E76ACBA
  */
  export function getEntityBoneIndexByName(entity: number, boneName: string): number;

  export function clearEntityLastDamageEntity(entity: number): void;

  /**
  * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
  */
  export function deleteEntity(entity: number): [void, number];

  /**
  * If `collision` is set to true, both entities won't collide with the other until the distance between them is above 4 meters.
  * Set `dynamic` to true to keep velocity after dettaching
  */
  export function detachEntity(entity: number, dynamic: boolean, collision: boolean): void;

  /**
  * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using SET_ENTITY_COORDS.
  */
  export function freezeEntityPosition(entity: number, toggle: boolean): void;

  /**
  * True means it can be deleted by the engine when switching lobbies/missions/etc, false means the script is expected to clean it up.
  */
  export function setEntityCleanupByEngine(entity: number, toggle: boolean): void;

  /**
  * The only time bitset has a value is 0x4000 and the only time delta has a value is during stealth with usually <1.0f values.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * @param delta and bitset are guessed fields. They are based on the fact that most of the calls have 0 or nil field types passed in.
  */
  export function playEntityAnim(entity: number, animName: string, animDict: string, p3: number, loop: boolean, stayInAnim: boolean, p6: boolean, delta: number, bitset: any): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * @param p4 and p7 are usually 1000.0f.
  */
  export function playSynchronizedEntityAnim(entity: number, syncedScene: number, animation: string, propName: string, p4: number, p5: number, p6: any, p7: number): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function playSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: any, p5: any, p6: any, p7: any, p8: number, p9: number, p10: any, p11: number): [boolean, any, any];

  export function stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: any, p5: number): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * RAGEPluginHook list: docs.ragepluginhook.net/html/62951c37-a440-478c-b389-c471230ddfc5.htm
  */
  export function stopEntityAnim(entity: number, animation: string, animGroup: string, p3: number): any;

  /**
  * @param p1 sync task id?
  */
  export function stopSynchronizedEntityAnim(entity: number, p1: number, p2: boolean): boolean;

  /**
  * if (ENTITY::HAS_ANIM_EVENT_FIRED(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("CreateObject")))
  */
  export function hasAnimEventFired(entity: number, actionHash: number): boolean;

  /**
  * In the script "player_scene_t_bbfight.c4":
  * "if (ENTITY::FIND_ANIM_EVENT_PHASE(&l_16E, &l_19F[v_416], v_9, &v_A, &v_B))"
  * -- &l_16E (p0) is requested as an anim dictionary earlier in the script.
  * -- &l_19F[v_416] (p1) is used in other natives in the script as the "animation" param.
  * -- v_9 (p2) is instantiated as "victim_fall"; I'm guessing that's another anim
  * --v_A and v_B (p3 & p4) are both set as -1.0, but v_A is used immediately after this native for:
  * "if (v_A < ENTITY::GET_ENTITY_ANIM_CURRENT_TIME(...))"
  * Both v_A and v_B are seemingly used to contain both Vector3's and floats, so I can't say what either really is other than that they are both output parameters. p4 looks more like a *Vector3 though
  * -alphazolam
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function findAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: any, p4: any): [boolean, any, any];

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function setEntityAnimCurrentTime(entity: number, animDictionary: string, animName: string, time: number): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function setEntityAnimSpeed(entity: number, animDictionary: string, animName: string, speedMultiplier: number): void;

  /**
  * Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.
  * maybe a quick disassembly will tell us what it does
  * maybe a quick disassembly will tell us what it does
  * @param p1 has no effect when either its on or off
  * @param p2 has no effect when either its on or off
  */
  export function setEntityAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;

  /**
  * Marks the specified entity (ped, vehicle or object) as no longer needed.
  * Entities marked as no longer needed, will be deleted as the engine sees fit.
  */
  export function setEntityAsNoLongerNeeded(entity: number): [void, number];

  /**
  * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
  */
  export function setPedAsNoLongerNeeded(ped: number): [void, number];

  /**
  * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
  */
  export function setVehicleAsNoLongerNeeded(vehicle: number): [void, number];

  /**
  * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
  */
  export function setObjectAsNoLongerNeeded(object: number): [void, number];

  export function setEntityCanBeDamaged(entity: number, toggle: boolean): void;

  export function getEntityCanBeDamaged(entity: number): boolean;

  export function setEntityCanBeDamagedByRelationshipGroup(entity: number, bCanBeDamaged: boolean, relGroup: number): void;

  export function _0x352E2B5CF420BF3B(p0: any, p1: any): void;

  /**
  * Sets whether the entity can be targeted without being in line-of-sight.
  */
  export function setEntityCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;

  export function setEntityCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;

  export function getEntityCollisionDisabled(entity: number): boolean;

  export function setEntityCompletelyDisableCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;

  /**
  * Often ends with 1, 0, 0, 1); in the scripts. It works.
  * Axis - Invert Axis Flags
  * @param clearArea is always 1 in the scripts. Set to 1, an area around the destination coords for the moved entity is cleared from other entities.
  */
  export function setEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;

  export function setEntityCoords2(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;

  /**
  * Axis - Invert Axis Flags
  */
  export function setEntityCoordsNoOffset(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;

  export function setEntityDynamic(entity: number, toggle: boolean): void;

  /**
  * Set the heading of an entity in degrees also known as "Yaw".
  */
  export function setEntityHeading(entity: number, heading: number): void;

  /**
  * male ped ~= 100 - 200
  * female ped ~= 0 - 100
  * @param health >= 0
  */
  export function setEntityHealth(entity: number, health: number, p2: number): void;

  /**
  * Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions and the tazer animation won't apply either.
  * If you use this for a ped and you want Ragdoll to stay enabled, then do:
  * *(DWORD *)(pedAddress + 0x188) |= (1 << 9);
  * Use this if you want to get the invincibility status:
  * bool IsPedInvincible(Ped ped)
  * {
  * auto addr = getScriptHandleBaseAddress(ped);
  * if (addr)
  * {
  * See NativeDB for reference: http://natives.altv.mp/#/0x3882114BDE571AD4
  * @returns             return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);
  */
  export function setEntityInvincible(entity: number, toggle: boolean): void;

  export function setEntityIsTargetPriority(entity: number, p1: boolean, p2: number): void;

  export function setEntityLights(entity: number, toggle: boolean): void;

  /**
  * Loads collision grid for an entity spawned outside of a player's loaded area. This allows peds to execute tasks rather than sit dormant because of a lack of a physics grid.
  * Certainly not the main usage of this native but when set to true for a Vehicle, it will prevent the vehicle to explode if it is spawned far away from the player.
  */
  export function setEntityLoadCollisionFlag(entity: number, toggle: boolean, p2: any): void;

  export function hasCollisionLoadedAroundEntity(entity: number): boolean;

  export function setEntityMaxSpeed(entity: number, speed: number): void;

  export function setEntityOnlyDamagedByPlayer(entity: number, toggle: boolean): void;

  export function setEntityOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: any): void;

  /**
  * Enable / disable each type of damage.
  * Can't get drownProof to work.
  * --------------
  * @param p7 is to to '1' in am_mp_property_ext/int: entity::set_entity_proofs(uParam0->f_19, true, true, true, true, true, true, 1, true);
  */
  export function setEntityProofs(entity: number, bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, p6: boolean, p7: boolean, drownProof: boolean): void;

  export function getEntityProofs(entity: number, bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, steamProof: boolean, p7: boolean, drownProof: boolean): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

  /**
  * @param w is the correct parameter name!
  */
  export function setEntityQuaternion(entity: number, x: number, y: number, z: number, w: number): void;

  export function setEntityRecordsCollisions(entity: number, toggle: boolean): void;

  /**
  * value ranges from 0 to 5. What you use for rotationOrder when setting must be the same as rotationOrder when getting the rotation.
  * Unsure what value corresponds to what rotation order, more testing will be needed for that.
  * For the most part R* uses 1 or 2 as the order.
  * @param rotationOrder refers to the order yaw pitch roll is applied
  * @param p5 is usually set as true
  */
  export function setEntityRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: boolean): void;

  /**
  * @param unk was always 0.
  */
  export function setEntityVisible(entity: number, toggle: boolean, unk: boolean): void;

  /**
  * SET_ENTITY_*
  */
  export function _0xC34BC448DA29F5E9(entity: number, toggle: boolean): void;

  /**
  * SET_ENTITY_M*
  */
  export function _0xE66377CDDADA4810(entity: number, p1: boolean): void;

  /**
  * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
  */
  export function setEntityVelocity(entity: number, x: number, y: number, z: number): void;

  export function setEntityHasGravity(entity: number, toggle: boolean): void;

  /**
  * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
  */
  export function setEntityLodDist(entity: number, value: number): void;

  /**
  * Returns the LOD distance of an entity.
  */
  export function getEntityLodDist(entity: number): number;

  /**
  * Set entity alpha level. Ranging from 0 to 255 but chnages occur after every 20 percent (after every 51).
  * @param skin - everything alpha except skin
  */
  export function setEntityAlpha(entity: number, alphaLevel: number, skin: boolean): void;

  export function getEntityAlpha(entity: number): number;

  export function resetEntityAlpha(entity: number): void;

  export function _0x490861B88F4FD846(p0: any): void;

  export function _0xCEA7C8E1B48FF68C(p0: any, p1: any): void;

  /**
  * Only called once in the scripts.
  * Related to weapon objects.
  */
  export function _0x5C3B791D580E0BC2(entity: number, p1: number): void;

  export function setEntityAlwaysPrerender(entity: number, toggle: boolean): void;

  export function setEntityRenderScorched(entity: number, toggle: boolean): void;

  /**
  * Example here: www.gtaforums.com/topic/830463-help-with-turning-lights-green-and-causing-peds-to-crash-into-each-other/#entry1068211340
  * 0 = green
  * 1 = red
  * 2 = yellow
  * 3 = reset changes
  * changing lights may not change the behavior of vehicles
  */
  export function setEntityTrafficlightOverride(entity: number, state: number): void;

  /**
  * Related to cutscene entities. Unsure about the use.
  * SET_ENTITY_*
  */
  export function _0x78E8E3A640178255(entity: number): void;

  /**
  * Only works with objects!
  * Network players do not see changes done with this.
  * - Did ya try modifying p6 lol
  */
  export function createModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean): void;

  export function removeModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean): void;

  /**
  * Same as the comment for CREATE_MODEL_SWAP unless for some reason p5 affects it this only works with objects as well.
  * Network players do not see changes done with this.
  * @param p5 = sets as true in scripts
  */
  export function createModelHide(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;

  export function createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;

  /**
  * This native makes entities visible that are hidden by the native CREATE_MODEL_HIDE.
  * @param p5 should be false, true does nothing
  */
  export function removeModelHide(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): void;

  export function createForcedObject(x: number, y: number, z: number, p3: any, modelHash: number, p5: boolean): void;

  export function removeForcedObject(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  /**
  * Calling this function disables collision between two entities.
  * The importance of the order for entity1 and entity2 is unclear.
  * The third parameter, `thisFrame`, decides whether the collision is to be disabled until it is turned back on, or if it's just this frame.
  */
  export function setEntityNoCollisionEntity(entity1: number, entity2: number, thisFrameOnly: boolean): void;

  export function setEntityMotionBlur(entity: number, toggle: boolean): void;

  /**
  * @param toggle always false.
  */
  export function setCanAutoVaultOnEntity(entity: number, toggle: boolean): void;

  /**
  * @param toggle always false.
  */
  export function setCanClimbOnEntity(entity: number, toggle: boolean): void;

  /**
  * SET_*
  * Only called within 1 script for x360. 'fm_mission_controller' and it used on an object.
  * Ran after these 2 natives,
  * set_object_targettable(uParam0, 0);
  * set_entity_invincible(uParam0, 1);
  */
  export function _0xDC6F8601FAF2E893(entity: number, toggle: boolean): void;

  /**
  * SET_ENTITY_*
  */
  export function _0x2C2E3DC128F44309(entity: number, p1: boolean): void;

  /**
  * SET_ENTITY_*
  */
  export function _0x1A092BB0C3808B96(entity: number, p1: boolean): void;

  /**
  * Gets the world rotation of the specified bone of the specified entity.
  */
  export function getEntityBoneRotation(entity: number, boneIndex: number): Vector3;

  /**
  * Gets the world rotation of the specified bone of the specified entity.
  * This native is used in casinoroulette.c but I don't know yet what is the difference with _GET_ENTITY_BONE_ROTATION
  */
  export function getEntityBonePosition2(entity: number, boneIndex: number): Vector3;

  /**
  * Gets the local rotation of the specified bone of the specified entity.
  */
  export function getEntityBoneRotationLocal(entity: number, boneIndex: number): Vector3;

  export function getEntityBoneCount(entity: number): number;

  /**
  * ENABLE_*
  */
  export function enableEntityUnk(entity: number): void;

  export function _0xB17BC6453F6CF5AC(p0: any, p1: any): void;

  /**
  * Puts pickup2 ptr somewhere in pickup?
  */
  export function _0x68B562E124CC0AEF(pickup: number, pickup2: number): void;

  export function _0x36F32DE87082343E(p0: any, p1: any): void;

  /**
  * GET_ENTITY_*
  * @returns Seems to return the handle of the entity's portable pickup.
  */
  export function getEntityPickup(entity: number, modelHash: number): number;

  /**
  * Sets 32nd bit of pickup+188
  * SET_PICKUP_??
  */
  export function _0xD7B80E7C3BEFC396(pickup: number, toggle: boolean): void;

  export function setDecisionMaker(ped: number, name: number): void;

  /**
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function clearDecisionMakerEventResponse(name: number, eventType: number): void;

  /**
  * This is limited to 4 blocked events at a time.
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function blockDecisionMakerEvent(name: number, eventType: number): void;

  /**
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function unblockDecisionMakerEvent(name: number, eventType: number): void;

  /**
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function addShockingEventAtPosition(eventType: number, x: number, y: number, z: number, duration: number): number;

  /**
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function addShockingEventForEntity(eventType: number, entity: number, duration: number): number;

  /**
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function isShockingEventInSphere(eventType: number, x: number, y: number, z: number, radius: number): boolean;

  export function removeShockingEvent(event: number): boolean;

  export function removeAllShockingEvents(p0: boolean): void;

  export function removeShockingEventSpawnBlockingAreas(): void;

  export function suppressShockingEventsNextFrame(): void;

  /**
  * @param eventType https://alloc8or.re/gta5/doc/enums/eEventType.txt
  */
  export function suppressShockingEventTypeNextFrame(eventType: number): void;

  export function suppressAgitationEventsNextFrame(): void;

  /**
  * 0 = Michael,
  * 1 = Franklin,
  * 2 = Trevor,
  * 3 = MPMale,
  * 4 = MPFemale
  * @param character types:
  */
  export function getNumTattooShopDlcItems(character: number): number;

  /**
  * Character types:
  * 0 = Michael,
  * 1 = Franklin,
  * 2 = Trevor,
  * 3 = MPMale,
  * 4 = MPFemale
  * enum TattooZoneData
  * {
  * ZONE_TORSO = 0,
  * See NativeDB for reference: http://natives.altv.mp/#/0xFF56381874F82086
  */
  export function getTattooShopDlcItemData(characterType: number, decorationIndex: number, outComponent: any): [boolean, any];

  /**
  * Returns some sort of index/offset for overlays/decorations.
  * 0 = Michael,
  * 1 = Franklin,
  * 2 = Trevor,
  * 3 = MPMale,
  * 4 = MPFemale
  * @param character types:
  */
  export function _0x10144267DD22866C(overlayHash: number, p1: any, character: number): number;

  export function initShopPedComponent(outComponent: any): [void, any];

  export function initShopPedProp(outProp: any): [void, any];

  export function setupShopPedApparelQuery(p0: number, p1: number, p2: number, p3: number): number;

  /**
  * componentId is -1 when p3 is true in decompiled scripts.
  * @param character is 0 for Michael, 1 for Franklin, 2 for Trevor, 3 for freemode male, and 4 for freemode female.
  * @param p1 could be the outfit number; unsure.
  * @param p2 is usually -1; unknown function.
  * @param p3 appears to be for selecting between clothes and props; false is used with components/clothes, true is used with props.
  * @param p4 is usually -1; unknown function.
  * @param componentId is between 0 and 11 and corresponds to the usual component slots.
  */
  export function setupShopPedApparelQueryTu(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;

  /**
  * See https://git.io/JtcRf for example and structs.
  */
  export function getShopPedQueryComponent(componentId: number, outComponent: any): [void, any];

  /**
  * Returns some sort of index/offset for components.
  * @returns Needs _GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = false and componentId with the drawable's component slot first, returns -1 otherwise.
  */
  export function _0x96E2929292A4DB77(componentHash: number): number;

  /**
  * More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
  */
  export function getShopPedComponent(componentHash: number, outComponent: any): [void, any];

  /**
  * See https://git.io/JtcRf for example and structs.
  */
  export function getShopPedQueryProp(componentId: number, outProp: any): [void, any];

  /**
  * Returns some sort of index/offset for props.
  * @returns Needs _GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = true and componentId = -1 first, returns -1 otherwise.
  */
  export function _0x6CEBE002E58DEE97(componentHash: number): number;

  /**
  * More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
  */
  export function getShopPedProp(componentHash: number, outProp: any): [void, any];

  export function getHashNameForComponent(entity: number, componentId: number, drawableVariant: number, textureVariant: number): number;

  export function getHashNameForProp(entity: number, componentId: number, propIndex: number, propTextureIndex: number): number;

  export function getItemVariantsCount(componentHash: number): number;

  /**
  * `propHash`: Ped helmet prop hash?
  * @returns This native returns 1 when the player helmet has a visor (there is another prop index for the same helmet with closed/opened visor variant) that can be toggled. 0 if there's no alternative version with a visor for this helmet prop.
  */
  export function getShopPedApparelVariantPropCount(propHash: number): number;

  export function getVariantComponent(componentHash: number, variantComponentIndex: number, nameHash: number, enumValue: number, componentType: number): [void, number, number, number];

  export function getVariantProp(componentHash: number, variantPropIndex: number, nameHash: number, enumValue: number, anchorPoint: number): [void, number, number, number];

  /**
  * Returns number of possible values of the forcedComponentIndex argument of GET_FORCED_COMPONENT.
  */
  export function getShopPedApparelForcedComponentCount(componentHash: number): number;

  /**
  * Returns number of possible values of the forcedPropIndex argument of GET_FORCED_PROP.
  */
  export function getShopPedApparelForcedPropCount(componentHash: number): number;

  export function getForcedComponent(componentHash: number, forcedComponentIndex: number, nameHash: number, enumValue: number, componentType: number): [void, number, number, number];

  export function getForcedProp(componentHash: number, forcedPropIndex: number, nameHash: number, enumValue: number, anchorPoint: number): [void, number, number, number];

  /**
  * Full list of restriction tags by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedApparelRestrictionTags.json
  * componentId/last parameter seems to be unused.
  */
  export function isTagRestricted(componentHash: number, restrictionTagHash: number, componentId: number): boolean;

  /**
  * characters
  * 0: Michael
  * 1: Franklin
  * 2: Trevor
  * 3: MPMale
  * 4: MPFemale
  */
  export function setupShopPedOutfitQuery(character: number, p1: boolean): number;

  /**
  * See https://git.io/JtcB8 for example and outfit struct.
  * @param outfitIndex from 0 to _GET_NUM_SHOP_PED_OUTFITS(characterIndex, false) - 1.
  */
  export function getShopPedQueryOutfit(outfitIndex: number, outfit: any): [void, any];

  export function getShopPedOutfit(p0: any, p1: any): [void, any];

  export function getShopPedOutfitLocate(p0: any): number;

  /**
  * See https://git.io/JtcBH for example and structs.
  */
  export function getShopPedOutfitPropVariant(outfitHash: number, variantIndex: number, outPropVariant: any): [boolean, any];

  /**
  * See https://git.io/JtcBH for example and structs.
  */
  export function getShopPedOutfitComponentVariant(outfitHash: number, variantIndex: number, outComponentVariant: any): [boolean, any];

  export function getNumDlcVehicles(): number;

  /**
  * @param dlcVehicleIndex is 0 to GET_NUM_DLC_VEHICLS() - 1
  */
  export function getDlcVehicleModel(dlcVehicleIndex: number): number;

  /**
  * The Second item in the struct *(Hash *)(outData + 1) is the vehicle hash.
  * @param dlcVehicleIndex takes a number from 0 - GET_NUM_DLC_VEHICLES() - 1.
  * @param outData is a struct of 3 8-byte items.
  */
  export function getDlcVehicleData(dlcVehicleIndex: number, outData: number): [boolean, number];

  export function getDlcVehicleFlags(dlcVehicleIndex: number): number;

  /**
  * Returns the total number of DLC weapons.
  */
  export function getNumDlcWeapons(): number;

  /**
  * Returns the total number of DLC weapons that are available in SP (availableInSP field in shop_weapon.meta).
  */
  export function getNumDlcWeaponsSp(): number;

  /**
  * struct DlcWeaponData
  * {
  * int emptyCheck; //use DLC1::_IS_DLC_DATA_EMPTY on this
  * int padding1;
  * int weaponHash;
  * int padding2;
  * int unk;
  * int padding3;
  * int weaponCost;
  * See NativeDB for reference: http://natives.altv.mp/#/0x79923CD21BECE14E
  * @param dlcWeaponIndex takes a number from 0 - GET_NUM_DLC_WEAPONS() - 1.
  */
  export function getDlcWeaponData(dlcWeaponIndex: number, outData: number): [boolean, number];

  /**
  * Same as GET_DLC_WEAPON_DATA but only works for DLC weapons that are available in SP.
  */
  export function getDlcWeaponDataSp(dlcWeaponIndex: number, outData: number): [boolean, number];

  /**
  * Returns the total number of DLC weapon components.
  */
  export function getNumDlcWeaponComponents(dlcWeaponIndex: number): number;

  /**
  * Returns the total number of DLC weapon components that are available in SP.
  */
  export function getNumDlcWeaponComponentsSp(dlcWeaponIndex: number): number;

  /**
  * struct DlcComponentData{
  * int attachBone;
  * int padding1;
  * int bActiveByDefault;
  * int padding2;
  * int unk;
  * int padding3;
  * int componentHash;
  * int padding4;
  * See NativeDB for reference: http://natives.altv.mp/#/0x6CF598A2957C2BF8
  * @param dlcWeaponIndex seems to be the weapon index
  * @param dlcWeapCompIndex seems to be the weapon component index
  */
  export function getDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number, ComponentDataPtr: number): [boolean, number];

  /**
  * Same as GET_DLC_WEAPON_COMPONENT_DATA but only works for DLC components that are available in SP.
  */
  export function getDlcWeaponComponentDataSp(dlcWeaponIndex: number, dlcWeapCompIndex: number, ComponentDataPtr: number): [boolean, number];

  export function isContentItemLocked(itemHash: number): boolean;

  export function isDlcVehicleMod(hash: number): boolean;

  export function getDlcVehicleModLockHash(hash: number): number;

  /**
  * From fm_deathmatch_creator and fm_race_creator:
  * FILES::_UNLOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP_SP"));
  * FILES::_LOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP"));
  */
  export function loadContentChangeSetGroup(hash: number): void;

  /**
  * From fm_deathmatch_creator and fm_race_creator:
  * FILES::_UNLOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP_SP"));
  * FILES::_LOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP"));
  */
  export function unloadContentChangeSetGroup(hash: number): void;

  /**
  * Starts a fire:
  * xyz: Location of fire
  * @param maxChildren The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
  * @param isGasFire Whether or not the fire is powered by gasoline.
  */
  export function startScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;

  export function removeScriptFire(fireHandle: number): void;

  export function startEntityFire(entity: number): number;

  export function stopEntityFire(entity: number): void;

  export function isEntityOnFire(entity: number): boolean;

  export function getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;

  /**
  * SET_FIRE_*
  */
  export function setFireSpreadRate(p0: number): void;

  export function stopFireInRange(x: number, y: number, z: number, radius: number): void;

  /**
  * Returns TRUE if it found something. FALSE if not.
  */
  export function getClosestFirePos(outPosition: Vector3, x: number, y: number, z: number): [boolean, Vector3];

  /**
  * BOOL isAudible = If explosion makes a sound.
  * BOOL isInvisible = If the explosion is invisible or not.
  * @param explosionType https://alloc8or.re/gta5/doc/enums/eExplosionTag.txt
  */
  export function addExplosion(x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number, noDamage: boolean): void;

  /**
  * @param explosionType See ADD_EXPLOSION.
  * @param isAudible If explosion makes a sound.
  * @param isInvisible If the explosion is invisible or not.
  */
  export function addOwnedExplosion(ped: number, x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

  /**
  * @param explosionType See ADD_EXPLOSION.
  * @param isAudible If explosion makes a sound.
  * @param isInvisible If the explosion is invisible or not.
  */
  export function addExplosionWithUserVfx(x: number, y: number, z: number, explosionType: number, explosionFx: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

  /**
  * @param explosionType See ADD_EXPLOSION.
  */
  export function isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

  /**
  * @param explosionType See ADD_EXPLOSION.
  */
  export function isExplosionActiveInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

  /**
  * @param explosionType See ADD_EXPLOSION.
  */
  export function isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;

  /**
  * @param explosionType See ADD_EXPLOSION.
  */
  export function getEntityInsideExplosionSphere(explosionType: number, x: number, y: number, z: number, radius: number): number;

  /**
  * @param explosionType See ADD_EXPLOSION, -1 for any explosion type
  */
  export function isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): boolean;

  /**
  * Returns a handle to the first entity within the a circle spawned inside the 2 points from a radius.
  * @param explosionType See ADD_EXPLOSION.
  */
  export function getEntityInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;

  /**
  * Initializes the text entry for the the text next to a loading prompt. All natives for building UI texts can be used here
  * e.g
  * void StartLoadingMessage(char *text, int spinnerType = 3)
  * {
  * _SET_LOADING_PROMPT_TEXT_ENTRY("STRING");
  * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
  * _SHOW_LOADING_PROMPT(spinnerType);
  * }
  * OR
  * See NativeDB for reference: http://natives.altv.mp/#/0xABA17D7CE615ADBF
  */
  export function beginTextCommandBusyspinnerOn(string: string): void;

  /**
  * enum eBusySpinnerType
  * {
  * BUSY_SPINNER_LEFT,
  * BUSY_SPINNER_LEFT_2,
  * BUSY_SPINNER_LEFT_3,
  * BUSY_SPINNER_SAVE,
  * BUSY_SPINNER_RIGHT,
  * };
  */
  export function endTextCommandBusyspinnerOn(busySpinnerType: number): void;

  /**
  * Removes the loading prompt at the bottom right of the screen.
  */
  export function busyspinnerOff(): void;

  export function preloadBusyspinner(): void;

  export function busyspinnerIsOn(): boolean;

  export function busyspinnerIsDisplaying(): boolean;

  /**
  * DISABLE_*
  */
  export function _0x9245E81072704B8A(p0: boolean): void;

  /**
  * Shows the cursor on screen for one frame.
  */
  export function setMouseCursorActiveThisFrame(): void;

  /**
  * Changes the mouse cursor's sprite.
  * 1 = Normal
  * 6 = Left Arrow
  * 7 = Right Arrow
  */
  export function setMouseCursorSprite(spriteId: number): void;

  /**
  * Shows/hides the frontend cursor on the pause menu or similar menus.
  * Clicking off and then on the game window will show it again.
  */
  export function setMouseCursorVisibleInMenus(toggle: boolean): void;

  export function _0x3D9ACB1EB139E702(): any;

  export function _0x632B2940C67F4EA9(scaleformHandle: number, p1: any, p2: any, p3: any): [boolean, any, any, any];

  export function thefeedOnlyShowTooltips(toggle: boolean): void;

  export function thefeedSetScriptedMenuHeight(pos: number): void;

  /**
  * Stops loading screen tips shown by invoking either `0x488043841BBE156F` or `0x15CFA549788D35EF`
  */
  export function thefeedDisableLoadingScreenTips(): void;

  /**
  * Once called each frame hides all above radar notifications.
  */
  export function thefeedHideThisFrame(): void;

  /**
  * Displays loading screen tips, requires `0x56C8B608CFD49854` to be called beforehand.
  */
  export function thefeedDisplayLoadingScreenTips(): void;

  export function thefeedFlushQueue(): void;

  /**
  * Removes a notification instantly instead of waiting for it to disappear
  */
  export function thefeedRemoveItem(notificationId: number): void;

  export function thefeedForceRenderOn(): void;

  /**
  * Enables loading screen tips to be be shown (`_0x15CFA549788D35EF` and `_0x488043841BBE156F`), blocks other kinds of notifications from being displayed (at least from current script). Call `0xADED7F5748ACAFE6` to display those again.
  */
  export function thefeedForceRenderOff(): void;

  export function thefeedPause(): void;

  export function thefeedResume(): void;

  export function thefeedIsPaused(): boolean;

  export function thefeedSpsExtendWidescreenOn(): void;

  export function thefeedSpsExtendWidescreenOff(): void;

  /**
  * Returns the handle for the notification currently displayed on the screen. Name may be a hash collision, but describes the function accurately.
  */
  export function thefeedGetFirstVisibleDeleteRemaining(): number;

  /**
  * Enables loading screen tips to be be shown (`_0x15CFA549788D35EF` and `_0x488043841BBE156F`), blocks other kinds of notifications from being displayed (at least from current script). Call `0xADED7F5748ACAFE6` to display those again.
  */
  export function thefeedCommentTeleportPoolOn(): void;

  /**
  * Displays "normal" notifications again after calling `_0x56C8B608CFD49854` (those that were drawn before calling this native too), though those will have a weird offset and stay on screen forever (tested with notifications created from same script).
  */
  export function thefeedCommentTeleportPoolOff(): void;

  /**
  * From the decompiled scripts:
  * HUD::_92F0DA1E27DB96DC(6);
  * HUD::_92F0DA1E27DB96DC(184);
  * HUD::_92F0DA1E27DB96DC(190);
  * sets background color for the next notification
  * 6 = red
  * 184 = green
  * 190 = yellow
  * Here is a list of some colors that can be used: gyazo.com/68bd384455fceb0a85a8729e48216e15
  */
  export function thefeedSetNextPostBackgroundColor(hudColorIndex: number): void;

  export function thefeedSetAnimpostfxColor(red: number, green: number, blue: number, alpha: number): void;

  /**
  * Related to notification color flashing, setting p0 to 0 invalidates a `_SET_NOTIFICATION_FLASH_COLOR` call for the target notification.
  */
  export function thefeedSetAnimpostfxCount(count: number): void;

  export function thefeedSetAnimpostfxSound(toggle: boolean): void;

  export function thefeedResetAllParameters(): void;

  /**
  * Requires manual management of game stream handles (i.e., 0xBE4390CB40B3E627).
  */
  export function thefeedFreezeNextPost(): void;

  export function thefeedClearFrozenPost(): void;

  export function thefeedSetFlushAnimpostfx(p0: boolean): void;

  /**
  * From the decompiled scripts, called 61 times:
  * HUD::_317EBA71D7543F52(&v_13, &v_13, &v_3, &v_3);
  */
  export function thefeedAddTxdRef(p0: any, p1: any, p2: any, p3: any): [void, any, any, any, any];

  /**
  * Declares the entry type of a notification, for example "STRING".
  * int ShowNotification(char *text)
  * {
  * BEGIN_TEXT_COMMAND_THEFEED_POST("STRING");
  * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
  * return _DRAW_NOTIFICATION(1, 1);
  * }
  */
  export function beginTextCommandThefeedPost(text: string): void;

  /**
  * List of picture names: https://pastebin.com/XdpJVbHz
  * Example result: https://i.imgur.com/SdEZ22m.png
  */
  export function endTextCommandThefeedPostStats(statTitle: string, iconEnum: number, stepVal: boolean, barValue: number, isImportant: boolean, pictureTextureDict: string, pictureTextureName: string): number;

  /**
  * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
  * List of picNames: pastebin.com/XdpJVbHz
  * iconTypes:
  * 1 : Chat Box
  * 2 : Email
  * 3 : Add Friend Request
  * 4 : Nothing
  * 5 : Nothing
  * 6 : Nothing
  * See NativeDB for reference: http://natives.altv.mp/#/0x1CCD9A37359072CF
  * @param flash is a bool for fading in.
  */
  export function endTextCommandThefeedPostMessagetext(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string): number;

  /**
  * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
  * Needs more research.
  * Only one type of usage in the scripts:
  * HUD::_C6F580E4C94926AC("CHAR_ACTING_UP", "CHAR_ACTING_UP", 0, 0, "DI_FEED_CHAR", a_0);
  */
  export function endTextCommandThefeedPostMessagetextGxtEntry(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string): number;

  /**
  * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
  * NOTE: 'duration' is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
  * Example, only occurrence in the scripts:
  * v_8 = HUD::_1E6611149DB3DB6B("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 0, 0, &v_9, "", a_5);
  */
  export function endTextCommandThefeedPostMessagetextTu(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number): number;

  /**
  * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
  * List of picNames pastebin.com/XdpJVbHz
  * iconTypes:
  * 1 : Chat Box
  * 2 : Email
  * 3 : Add Friend Request
  * 4 : Nothing
  * 5 : Nothing
  * 6 : Nothing
  * See NativeDB for reference: http://natives.altv.mp/#/0x5CBF7BADE20DB93E
  * @param flash is a bool for fading in.
  */
  export function endTextCommandThefeedPostMessagetextWithCrewTag(txdName: string, textureName: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number, clanTag: string): number;

  /**
  * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
  * List of picNames: pastebin.com/XdpJVbHz
  * iconTypes:
  * 1 : Chat Box
  * 2 : Email
  * 3 : Add Friend Request
  * 4 : Nothing
  * 5 : Nothing
  * 6 : Nothing
  * See NativeDB for reference: http://natives.altv.mp/#/0x531B84E7DA981FB6
  * @param flash is a bool for fading in.
  * @param iconType2 is a mirror of iconType. It shows in the "subject" line, right under the original iconType.
  * @returns    return _DRAW_NOTIFICATION(1, 1);
  */
  export function endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(txdName: string, textureName: string, flash: boolean, iconType1: number, sender: string, subject: string, duration: number, clanTag: string, iconType2: number, p9: number): number;

  export function endTextCommandThefeedPostTicker(blink: boolean, p1: boolean): number;

  export function endTextCommandThefeedPostTickerForced(blink: boolean, p1: boolean): number;

  export function endTextCommandThefeedPostTickerWithTokens(blink: boolean, p1: boolean): number;

  /**
  * Shows an "award" notification above the minimap, example: https://i.imgur.com/e2DNaKX.png
  * Example:
  * HUD::_SET_NOTIFICATION_TEXT_ENTRY("HUNT");
  * HUD::_0xAA295B6F28BD587D("Hunting", "Hunting_Gold_128", 0, 109, "HUD_MED_UNLKED");
  */
  export function endTextCommandThefeedPostAward(textureDict: string, textureName: string, rpBonus: number, colorOverlay: number, titleLabel: string): number;

  export function endTextCommandThefeedPostCrewtag(p0: boolean, p1: boolean, p2: number, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, R: number, G: number, B: number): [number, number];

  /**
  * crashes my game...
  * this is for sending invites to network players - jobs/apartment/ect...
  * return notification handle
  * int invite(Player player)
  * {
  * networkHandleMgr netHandle;
  * networkClanMgr clan;
  * char *playerName = GET_PLAYER_NAME(player);
  * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
  * See NativeDB for reference: http://natives.altv.mp/#/0x137BC35589E34E1E
  * @param p0 = 1 or 0
  */
  export function endTextCommandThefeedPostCrewtagWithGameName(p0: boolean, p1: boolean, p2: number, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, playerName: string, R: number, G: number, B: number): [number, number];

  export function endTextCommandThefeedPostUnlock(p0: any, p1: any, p2: any): any;

  export function endTextCommandThefeedPostUnlockTu(p0: any, p1: any, p2: any, p3: any): any;

  export function endTextCommandThefeedPostUnlockTuWithColor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

  export function endTextCommandThefeedPostMpticker(blink: boolean, p1: boolean): number;

  export function endTextCommandThefeedPostCrewRankup(p0: string, p1: string, p2: string, p3: boolean, p4: boolean): number;

  export function endTextCommandThefeedPostVersusTu(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): [any, any, any, any, any];

  /**
  * returns a notification handle, prints out a notification like below:
  * if you set type to 1, image goes from 0 - 39 - Xbox you can add text to
  * example:
  * HUD::_0xD202B92CBF1D816F(1, 20, "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");
  * - imgur.com/lGBPCz3
  * @param type range: 0 - 2
  */
  export function endTextCommandThefeedPostReplayIcon(type: number, image: number, text: string): number;

  /**
  * returns a notification handle, prints out a notification like below:
  * if you set type to 1, button accepts "~INPUT_SOMETHING~"
  * example:
  * HUD::_0xDD6CB2CCE7C2735C(1, "~INPUT_TALK~", "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");
  * - imgur.com/UPy0Ial
  * Examples from the scripts:
  * l_D1[11]=HUD::_DD6CB2CCE7C2735C(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");
  * l_D1[21]=HUD::_DD6CB2CCE7C2735C(1,"~INPUT_SAVE_REPLAY_CLIP~","");
  * l_D1[11]=HUD::_DD6CB2CCE7C2735C(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");
  * l_D1[21]=HUD::_DD6CB2CCE7C2735C(1,"~INPUT_REPLAY_START_STOP_RECORDING_SECONDARY~","");
  * @param type range: 0 - 2
  */
  export function endTextCommandThefeedPostReplayInput(type: number, button: string, text: string): number;

  /**
  * Used to be known as _SET_TEXT_ENTRY_2
  * void ShowSubtitle(char *text)
  * {
  * BEGIN_TEXT_COMMAND_PRINT("STRING");
  * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
  * END_TEXT_COMMAND_PRINT(2000, 1);
  * }
  */
  export function beginTextCommandPrint(GxtEntry: string): void;

  /**
  * Draws the subtitle at middle center of the screen.
  * int duration = time in milliseconds to show text on screen before disappearing
  * Used to be known as _DRAW_SUBTITLE_TIMED
  * @param drawImmediately = If true, the text will be drawn immediately, if false, the text will be drawn after the previous subtitle has finished
  */
  export function endTextCommandPrint(duration: number, drawImmediately: boolean): void;

  /**
  * nothin doin.
  * BOOL Message(const char* text)
  * {
  * BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED("STRING");
  * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
  * }
  * @returns        return END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED();
  */
  export function beginTextCommandIsMessageDisplayed(text: string): void;

  export function endTextCommandIsMessageDisplayed(): boolean;

  /**
  * The following were found in the decompiled script files:
  * STRING, TWOSTRINGS, NUMBER, PERCENTAGE, FO_TWO_NUM, ESMINDOLLA, ESDOLLA, MTPHPER_XPNO, AHD_DIST, CMOD_STAT_0, CMOD_STAT_1, CMOD_STAT_2, CMOD_STAT_3, DFLT_MNU_OPT, F3A_TRAFDEST, ES_HELP_SOC3
  * ESDOLLA - cash
  * ESMINDOLLA - cash (negative)
  * Used to be known as _SET_TEXT_ENTRY
  */
  export function beginTextCommandDisplayText(text: string): void;

  /**
  * Used to be known as _DRAW_TEXT
  */
  export function endTextCommandDisplayText(x: number, y: number, p2: number): void;

  /**
  * BEGIN_TEXT_COMMAND_*
  * Example:
  * _BEGIN_TEXT_COMMAND_GET_WIDTH("NUMBER");
  * ADD_TEXT_COMPONENT_FLOAT(69.420f, 2);
  * float width = _END_TEXT_COMMAND_GET_WIDTH(1);
  */
  export function beginTextCommandGetWidth(text: string): void;

  /**
  * END_TEXT_COMMAND_*
  * In scripts font most of the time is passed as 1.
  * Use _BEGIN_TEXT_GET_COMMAND_GET_WIDTH
  * param is not font from what i've tested
  */
  export function endTextCommandGetWidth(p0: boolean): number;

  /**
  * BEGIN_TEXT_COMMAND_*
  * get's line count
  * int GetLineCount(char *text, float x, float y)
  * {
  * _BEGIN_TEXT_COMMAND_LINE_COUNT("STRING");
  * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
  * }
  * @returns       return _END_TEXT_COMMAND_GET_LINE_COUNT(x, y);
  */
  export function beginTextCommandLineCount(entry: string): void;

  /**
  * END_TEXT_COMMAND_*
  * Determines how many lines the text string will use when drawn on screen.
  * Must use 0x521FB041D93DD0E4 for setting up
  */
  export function endTextCommandLineCount(x: number, y: number): number;

  /**
  * Used to be known as _SET_TEXT_COMPONENT_FORMAT
  */
  export function beginTextCommandDisplayHelp(inputType: string): void;

  /**
  * Example:
  * void FloatingHelpText(const char* text)
  * {
  * BEGIN_TEXT_COMMAND_DISPLAY_HELP("STRING");
  * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
  * END_TEXT_COMMAND_DISPLAY_HELP (0, 0, 1, -1);
  * }
  * Image:
  * - imgbin.org/images/26209.jpg
  * See NativeDB for reference: http://natives.altv.mp/#/0x238FFE5C7B0498A6
  * @param p0 is always 0.
  * @param shape goes from -1 to 50 (may be more).
  */
  export function endTextCommandDisplayHelp(p0: number, loop: boolean, beep: boolean, shape: number): void;

  /**
  * BOOL IsContextActive(char *ctx)
  * {
  * BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(ctx);
  * }
  * @returns      return END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(0);
  */
  export function beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;

  export function endTextCommandIsThisHelpMessageBeingDisplayed(p0: number): boolean;

  /**
  * Starts a text command to change the name of a blip displayed in the pause menu.
  * This should be paired with `END_TEXT_COMMAND_SET_BLIP_NAME`, once adding all required text components.
  * Example:
  * HUD::BEGIN_TEXT_COMMAND_SET_BLIP_NAME("STRING");
  * HUD::_ADD_TEXT_COMPONENT_STRING("Name");
  * HUD::END_TEXT_COMMAND_SET_BLIP_NAME(blip);
  */
  export function beginTextCommandSetBlipName(textLabel: string): void;

  /**
  * Finalizes a text command started with BEGIN_TEXT_COMMAND_SET_BLIP_NAME, setting the name of the specified blip.
  */
  export function endTextCommandSetBlipName(blip: number): void;

  export function beginTextCommandObjective(p0: string): void;

  export function endTextCommandObjective(p0: boolean): void;

  /**
  * clears a print text command with this text
  */
  export function beginTextCommandClearPrint(text: string): void;

  export function endTextCommandClearPrint(): void;

  export function beginTextCommandOverrideButtonText(gxtEntry: string): void;

  export function endTextCommandOverrideButtonText(p0: number): void;

  export function addTextComponentInteger(value: number): void;

  export function addTextComponentFloat(value: number, decimalPlaces: number): void;

  export function addTextComponentSubstringTextLabel(labelName: string): void;

  /**
  * It adds the localized text of the specified GXT entry name. Eg. if the argument is GET_HASH_KEY("ES_HELP"), adds "Continue". Just uses a text labels hash key
  */
  export function addTextComponentSubstringTextLabelHashKey(gxtEntryHash: number): void;

  export function addTextComponentSubstringBlipName(blip: number): void;

  export function addTextComponentSubstringPlayerName(text: string): void;

  /**
  * @param flags 00
  */
  export function addTextComponentSubstringTime(timestamp: number, flags: number): void;

  export function addTextComponentFormattedInteger(value: number, commaSeparated: boolean): void;

  /**
  * @param p1 was always -1
  */
  export function addTextComponentSubstringPhoneNumber(p0: string, p1: number): void;

  /**
  * This native (along with 0x5F68520888E69014 and 0x6C188BE134E074AA) do not actually filter anything. They simply add the provided text (as of 944)
  */
  export function addTextComponentSubstringWebsite(website: string): void;

  export function addTextComponentSubstringKeyboardDisplay(string: string): void;

  export function setColourOfNextTextComponent(hudColor: number): void;

  /**
  * Returns a substring of a specified length starting at a specified position.
  * Example:
  * // Get "STRING" text from "MY_STRING"
  * subStr = HUD::_GET_TEXT_SUBSTRING("MY_STRING", 3, 6);
  */
  export function getTextSubstring(text: string, position: number, length: number): string;

  /**
  * Returns a substring of a specified length starting at a specified position. The result is guaranteed not to exceed the specified max length.
  * NOTE: The 'maxLength' parameter might actually be the size of the buffer that is returned. More research is needed. -CL69
  * Example:
  * // Condensed example of how Rockstar uses this function
  * strLen = HUD::GET_LENGTH_OF_LITERAL_STRING(MISC::GET_ONSCREEN_KEYBOARD_RESULT());
  * subStr = HUD::_GET_TEXT_SUBSTRING_SAFE(MISC::GET_ONSCREEN_KEYBOARD_RESULT(), 0, strLen, 63);
  * --
  * "fm_race_creator.ysc", line 85115:
  * // parameters modified for clarity
  * See NativeDB for reference: http://natives.altv.mp/#/0xB2798643312205C5
  * @returns             return FALSE;
  */
  export function getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;

  /**
  * Returns a substring that is between two specified positions. The length of the string will be calculated using (endPosition - startPosition).
  * Example:
  * // Get "STRING" text from "MY_STRING"
  * subStr = HUD::_GET_TEXT_SUBSTRING_SLICE("MY_STRING", 3, 9);
  * // Overflows are possibly replaced with underscores (needs verification)
  * subStr = HUD::_GET_TEXT_SUBSTRING_SLICE("MY_STRING", 3, 10); // "STRING_"?
  */
  export function getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;

  /**
  * Gets a string literal from a label name.
  * GET_F*
  */
  export function getLabelText(labelName: string): string;

  export function clearPrints(): void;

  export function clearBrief(): void;

  export function clearAllHelpMessages(): void;

  /**
  * @param p0 found arguments in the b617d scripts: pastebin.com/X5akCN7z
  */
  export function clearThisPrint(p0: string): void;

  export function clearSmallPrints(): void;

  export function doesTextBlockExist(gxt: string): boolean;

  /**
  * Request a gxt into the passed slot.
  */
  export function requestAdditionalText(gxt: string, slot: number): void;

  export function requestAdditionalTextForDlc(gxt: string, slot: number): void;

  export function hasAdditionalTextLoaded(slot: number): boolean;

  export function clearAdditionalText(p0: number, p1: boolean): void;

  export function isStreamingAdditionalText(p0: number): boolean;

  /**
  * Checks if the specified gxt has loaded into the passed slot.
  */
  export function hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;

  export function isMessageBeingDisplayed(): boolean;

  /**
  * Checks if the passed gxt name exists in the game files.
  */
  export function doesTextLabelExist(gxt: string): boolean;

  /**
  * GET_F*
  */
  export function _0x98C3CF913D895111(string: string, length: number): string;

  /**
  * Returns the string length of the string from the gxt string .
  */
  export function getLengthOfStringWithThisTextLabel(gxt: string): number;

  /**
  * Returns the length of the string passed (much like strlen).
  */
  export function getLengthOfLiteralString(string: string): number;

  export function getLengthOfLiteralStringInBytes(string: string): number;

  /**
  * This functions converts the hash of a street name into a readable string.
  * For how to get the hashes, see PATHFIND::GET_STREET_NAME_AT_COORD.
  */
  export function getStreetNameFromHashKey(hash: number): string;

  export function isHudPreferenceSwitchedOn(): boolean;

  export function isRadarPreferenceSwitchedOn(): boolean;

  export function isSubtitlePreferenceSwitchedOn(): boolean;

  /**
  * If Hud should be displayed
  */
  export function displayHud(toggle: boolean): void;

  /**
  * Enables drawing some hud components, such as help labels, this frame, when the player is dead.
  */
  export function displayHudWhenDeadThisFrame(): void;

  export function displayHudWhenPausedThisFrame(): void;

  /**
  * If Minimap / Radar should be displayed.
  */
  export function displayRadar(toggle: boolean): void;

  /**
  * Setter for 0xC2D2AD9EAAE265B8
  * SET_*
  */
  export function _0xCD74233600C4EA6B(toggle: boolean): void;

  /**
  * Getter for 0xCD74233600C4EA6B
  * GET_*
  */
  export function _0xC2D2AD9EAAE265B8(): boolean;

  export function isHudHidden(): boolean;

  export function isRadarHidden(): boolean;

  export function isMinimapRendering(): boolean;

  export function _0x0C698D8F099174C7(p0: any): void;

  export function _0xE4C3B169876D33D7(p0: any): void;

  export function _0xEB81A3DADD503187(): void;

  /**
  * Enable / disable showing route for the Blip-object.
  */
  export function setBlipRoute(blip: number, enabled: boolean): void;

  export function clearAllBlipRoutes(): void;

  export function setBlipRouteColour(blip: number, colour: number): void;

  /**
  * SET_F*
  */
  export function _0x2790F4B17D098E26(toggle: boolean): void;

  export function _0x6CDD58146A436083(p0: any): void;

  export function _0xD1942374085C8469(p0: any): void;

  export function addNextMessageToPreviousBriefs(p0: boolean): void;

  /**
  * FORCE_*
  */
  export function _0x57D760D55F54E071(p0: number): void;

  export function setRadarZoomPrecise(zoom: number): void;

  /**
  * @param zoomLevel ranges from 0 to 200
  */
  export function setRadarZoom(zoomLevel: number): void;

  export function setRadarZoomToBlip(blip: number, zoom: number): void;

  export function setRadarZoomToDistance(zoom: number): void;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0xD2049635DEB9C375(): void;

  /**
  * HUD colors and their values: pastebin.com/d9aHPbXN
  */
  export function getHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): [void, number, number, number, number];

  /**
  * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE
  */
  export function setScriptVariableHudColour(r: number, g: number, b: number, a: number): void;

  /**
  * Sets the color of HUD_COLOUR_SCRIPT_VARIABLE_2
  */
  export function setScriptVariable2HudColour(r: number, g: number, b: number, a: number): void;

  /**
  * HUD colors and their values: pastebin.com/d9aHPbXN
  * --------------------------------------------------
  * makes hudColorIndex2 color into hudColorIndex color
  */
  export function replaceHudColour(hudColorIndex: number, hudColorIndex2: number): void;

  /**
  * HUD colors and their values: pastebin.com/d9aHPbXN
  */
  export function replaceHudColourWithRgba(hudColorIndex: number, r: number, g: number, b: number, a: number): void;

  export function setAbilityBarVisibilityInMultiplayer(visible: boolean): void;

  export function setAllowAbilityBarInMultiplayer(toggle: boolean): void;

  export function flashAbilityBar(millisecondsToFlash: number): void;

  export function setAbilityBarValue(p0: number, p1: number): void;

  export function flashWantedDisplay(p0: boolean): void;

  /**
  * FORCE_*
  */
  export function _0xBA8D65C1C65702E5(toggle: boolean): void;

  /**
  * This get's the height of the FONT and not the total text. You need to get the number of lines your text uses, and get the height of a newline (I'm using a smaller value) to get the total text height.
  */
  export function getTextScaleHeight(size: number, font: number): number;

  /**
  * @param scale is unknown and doesn't seem to have an effect, yet in the game scripts it changes to 1.0F sometimes.
  * @param size range : 0F to 1.0F
  */
  export function setTextScale(scale: number, size: number): void;

  /**
  * colors you input not same as you think?
  * @param alpha for some reason its R B G A
  */
  export function setTextColour(red: number, green: number, blue: number, alpha: number): void;

  export function setTextCentre(align: boolean): void;

  export function setTextRightJustify(toggle: boolean): void;

  /**
  * Types -
  * 0: Center-Justify
  * 1: Left-Justify
  * 2: Right-Justify
  * Right-Justify requires SET_TEXT_WRAP, otherwise it will draw to the far right of the screen
  */
  export function setTextJustification(justifyType: number): void;

  /**
  * It sets the text in a specified box and wraps the text if it exceeds the boundries. Both values are for X axis. Useful when positioning text set to center or aligned to the right.
  * @param start - left boundry on screen position (0.0 - 1.0)
  * @param end - right boundry on screen position (0.0 - 1.0)
  */
  export function setTextWrap(start: number, end: number): void;

  export function setTextLeading(p0: number): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function setTextProportional(p0: boolean): void;

  /**
  * fonts that mess up your text where made for number values/misc stuff
  */
  export function setTextFont(fontType: number): void;

  export function setTextDropShadow(): void;

  /**
  * @param distance - shadow distance in pixels, both horizontal and vertical
  * @param r color
  * @param g color
  * @param b color
  */
  export function setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;

  export function setTextOutline(): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;

  export function setTextRenderId(renderId: number): void;

  export function getDefaultScriptRendertargetRenderId(): number;

  export function registerNamedRendertarget(name: string, p1: boolean): boolean;

  export function isNamedRendertargetRegistered(name: string): boolean;

  export function releaseNamedRendertarget(name: string): boolean;

  export function linkNamedRendertarget(modelHash: number): void;

  export function getNamedRendertargetRenderId(name: string): number;

  export function isNamedRendertargetLinked(modelHash: number): boolean;

  export function clearHelp(toggle: boolean): void;

  export function isHelpMessageOnScreen(): boolean;

  /**
  * HAS_S*
  */
  export function _0x214CD562A939246A(): boolean;

  export function isHelpMessageBeingDisplayed(): boolean;

  export function isHelpMessageFadingOut(): boolean;

  export function setHelpMessageTextStyle(style: number, hudColor: number, alpha: number, p3: number, p4: number): void;

  export function getStandardBlipEnumId(): boolean;

  export function getWaypointBlipEnumId(): number;

  export function getNumberOfActiveBlips(): number;

  export function getNextBlipInfoId(blipSprite: number): number;

  export function getFirstBlipInfoId(blipSprite: number): number;

  export function getClosestBlipOfType(blipSprite: number): number;

  export function getBlipInfoIdCoord(blip: number): Vector3;

  export function getBlipInfoIdDisplay(blip: number): number;

  /**
  * Returns a value based on what the blip is attached to
  * 1 - Vehicle
  * 2 - Ped
  * 3 - Object
  * 4 - Coord
  * 5 - unk
  * 6 - Pickup
  * 7 - Radius
  */
  export function getBlipInfoIdType(blip: number): number;

  export function getBlipInfoIdEntityIndex(blip: number): number;

  /**
  * @returns This function is hard-coded to always return 0.
  */
  export function getBlipInfoIdPickupIndex(blip: number): number;

  /**
  * Returns the Blip handle of given Entity.
  */
  export function getBlipFromEntity(entity: number): number;

  export function addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number;

  /**
  * Adds a rectangular blip for the specified coordinates/area.
  * It is recommended to use SET_BLIP_ROTATION and SET_BLIP_COLOUR to make the blip not rotate along with the camera.
  * By default, the blip will show as a _regular_ blip with the specified color/sprite if it is outside of the minimap view.
  * Example image:
  * minimap https://w.wew.wtf/pdcjig.png
  * big map https://w.wew.wtf/zgcjcm.png
  * (Native name is _likely_ to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
  */
  export function addBlipForArea(x: number, y: number, z: number, width: number, height: number): number;

  /**
  * Returns red ( default ) blip attached to entity.
  * Example:
  * Blip blip; //Put this outside your case or option
  * blip = HUD::ADD_BLIP_FOR_ENTITY(YourPedOrBodyguardName);
  * HUD::SET_BLIP_AS_FRIENDLY(blip, true);
  */
  export function addBlipForEntity(entity: number): number;

  export function addBlipForPickup(pickup: number): number;

  /**
  * @returns Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
  */
  export function addBlipForCoord(x: number, y: number, z: number): number;

  export function triggerSonarBlip(posX: number, posY: number, posZ: number, radius: number, p4: number): void;

  export function allowSonarBlips(toggle: boolean): void;

  export function setBlipCoords(blip: number, posX: number, posY: number, posZ: number): void;

  export function getBlipCoords(blip: number): Vector3;

  /**
  * Sets the displayed sprite for a specific blip..
  * You may have your own list, but since dev-c didn't show it I was bored and started looking through scripts and functions to get a presumable almost positive list of a majority of blip IDs
  * h t t p://pastebin.com/Bpj9Sfft
  * Blips Images + IDs:
  * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
  */
  export function setBlipSprite(blip: number, spriteId: number): void;

  /**
  * Blips Images + IDs:
  * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
  */
  export function getBlipSprite(blip: number): number;

  /**
  * SET_C*
  */
  export function _0x9FCB3CBFB3EAD69A(p0: number, p1: number): void;

  /**
  * SET_C*
  */
  export function _0xB7B873520C84C118(): void;

  /**
  * Doesn't work if the label text of gxtEntry is >= 80.
  */
  export function setBlipNameFromTextFile(blip: number, gxtEntry: string): void;

  export function setBlipNameToPlayerName(blip: number, player: number): void;

  /**
  * Sets alpha-channel for blip color.
  * Example:
  * HUD::SET_BLIP_COLOUR(blip , 3);
  * HUD::SET_BLIP_ALPHA(blip , 64);
  * @param blip blip = HUD::ADD_BLIP_FOR_ENTITY(entity);
  */
  export function setBlipAlpha(blip: number, alpha: number): void;

  export function getBlipAlpha(blip: number): number;

  export function setBlipFade(blip: number, opacity: number, duration: number): void;

  /**
  * GET_BLIP_*
  * @returns Seems to always return 0 from what I can tell. I've tried a lot of different blip related natives and it always seems to return 0. Decompiled scripts always pass a blip handle as p0.
  */
  export function _0x2C173AE2BDB9385E(blip: number): number;

  /**
  * After some testing, looks like you need to use CEIL() on the rotation (vehicle/ped heading) before using it there.
  */
  export function setBlipRotation(blip: number, rotation: number): void;

  /**
  * Does not require whole number/integer rotations.
  */
  export function setBlipSquaredRotation(blip: number, heading: number): void;

  export function _0x003E92BA477F9D7F(blip: number): number;

  /**
  * Adds up after viewing multiple R* scripts. I believe that the duration is in miliseconds.
  */
  export function setBlipFlashTimer(blip: number, duration: number): void;

  export function setBlipFlashInterval(blip: number, p1: any): void;

  /**
  * @param color //gtaforums.com/topic/864881-all-blip-color-ids-pictured/
  */
  export function setBlipColour(blip: number, color: number): void;

  export function setBlipSecondaryColour(blip: number, r: number, g: number, b: number): void;

  export function getBlipColour(blip: number): number;

  export function getBlipHudColour(blip: number): number;

  export function isBlipShortRange(blip: number): boolean;

  export function isBlipOnMinimap(blip: number): boolean;

  export function doesBlipHaveGpsRoute(blip: number): boolean;

  export function setBlipHiddenOnLegend(blip: number, toggle: boolean): void;

  export function setBlipHighDetail(blip: number, toggle: boolean): void;

  export function setBlipAsMissionCreatorBlip(blip: number, toggle: boolean): void;

  export function isMissionCreatorBlip(blip: number): boolean;

  export function getNewSelectedMissionCreatorBlip(): number;

  export function isHoveringOverMissionCreatorBlip(): boolean;

  export function showStartMissionInstructionalButton(p0: boolean): void;

  export function _0x2916A928514C9827(): void;

  export function _0xB552929B85FC27EC(p0: any, p1: any): void;

  export function setBlipFlashes(blip: number, toggle: boolean): void;

  export function setBlipFlashesAlternate(blip: number, toggle: boolean): void;

  export function isBlipFlashing(blip: number): boolean;

  /**
  * Sets whether or not the specified blip should only be displayed when nearby, or on the minimap.
  */
  export function setBlipAsShortRange(blip: number, toggle: boolean): void;

  export function setBlipScale(blip: number, scale: number): void;

  /**
  * See https://imgur.com/a/lLkEsMN
  */
  export function setBlipScaleTransformation(blip: number, xScale: number, yScale: number): void;

  /**
  * See this topic for more details : gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-35?p=1069477935
  */
  export function setBlipPriority(blip: number, priority: number): void;

  /**
  * Display Id behaviours:
  * 0 = Doesn't show up, ever, anywhere.
  * 1 = Doesn't show up, ever, anywhere.
  * 2 = Shows on both main map and minimap. (Selectable on map)
  * 3 = Shows on main map only. (Selectable on map)
  * 4 = Shows on main map only. (Selectable on map)
  * 5 = Shows on minimap only.
  * 6 = Shows on both main map and minimap. (Selectable on map)
  * 7 = Doesn't show up, ever, anywhere.
  * See NativeDB for reference: http://natives.altv.mp/#/0x9029B2F3DA924928
  */
  export function setBlipDisplay(blip: number, displayId: number): void;

  /**
  * Example: https://i.imgur.com/skY6vAJ.png
  * 1 = No distance shown in legend
  * 2 = Distance shown in legend
  * 7 = "Other Players" category, also shows distance in legend
  * 10 = "Property" category
  * 11 = "Owned Property" category
  * Any other value behaves like index = 1, index wraps around after 255
  * Blips with categories 7, 10 or 11 will all show under the specific categories listing in the map legend, regardless of sprite or name.
  * Legend entries:
  * See NativeDB for reference: http://natives.altv.mp/#/0x234CDD44D996FD9A
  */
  export function setBlipCategory(blip: number, index: number): void;

  /**
  * In the C++ SDK, this seems not to work-- the blip isn't removed immediately. I use it for saving cars.
  * E.g.:
  * Ped pped = PLAYER::PLAYER_PED_ID();
  * Vehicle v = PED::GET_VEHICLE_PED_IS_USING(pped);
  * works fine.
  * But later attempting to delete it with:
  * Blip b = HUD::GET_BLIP_FROM_ENTITY(v);
  * if (HUD::DOES_BLIP_EXIST(b)) HUD::REMOVE_BLIP(&b);
  * doesn't work. And yes, doesn't work without the DOES_BLIP_EXIST check either. Also, if you attach multiple blips to the same thing (say, a vehicle), and that thing disappears, the blips randomly attach to other things (in my case, a vehicle).
  * See NativeDB for reference: http://natives.altv.mp/#/0x86A652570E5F25DD
  * @param blip b = HUD::ADD_BLIP_FOR_ENTITY(v);
  */
  export function removeBlip(blip: number): [void, number];

  /**
  * false for enemy
  * true for friendly
  */
  export function setBlipAsFriendly(blip: number, toggle: boolean): void;

  export function pulseBlip(blip: number): void;

  export function showNumberOnBlip(blip: number, number: number): void;

  export function hideNumberOnBlip(blip: number): void;

  export function showHeightOnBlip(blip: number, toggle: boolean): void;

  /**
  * Adds a green checkmark on top of a blip.
  */
  export function showTickOnBlip(blip: number, toggle: boolean): void;

  /**
  * Adds the GTA: Online player heading indicator to a blip.
  */
  export function showHeadingIndicatorOnBlip(blip: number, toggle: boolean): void;

  /**
  * Highlights a blip by a cyan color circle.
  * Color can be changed with SET_BLIP_SECONDARY_COLOUR
  */
  export function showOutlineIndicatorOnBlip(blip: number, toggle: boolean): void;

  /**
  * Highlights a blip by a half cyan circle on the right side of the blip. https://i.imgur.com/FrV9M4e.png
  * .Indicating that that player is a friend (in GTA:O). This color can not be changed.
  * @param blip `SHOW_CREW_INDICATOR_ON_BLIP`
  */
  export function showFriendIndicatorOnBlip(blip: number, toggle: boolean): void;

  /**
  * Enables or disables the blue half circle https://i.imgur.com/iZes9Ec.png around the specified blip on the left side of the blip. This is used to indicate that the player is in your crew in GTA:O. Color is changeable by using `SET_BLIP_SECONDARY_COLOUR`.
  */
  export function showCrewIndicatorOnBlip(blip: number, toggle: boolean): void;

  /**
  * Must be toggled before being queued for animation
  */
  export function setBlipDisplayIndicatorOnBlip(blip: number, toggle: boolean): void;

  export function _0x4B5B620C9B59ED34(p0: any, p1: any): void;

  export function _0x2C9F302398E13141(p0: any, p1: any): void;

  /**
  * Makes a blip go small when off the minimap.
  * SET_BLIP_AS_*
  */
  export function setBlipShrink(blip: number, toggle: boolean): void;

  /**
  * Enabling this on a radius blip will make it outline only. See https://cdn.discordapp.com/attachments/553235301632573459/575132227935928330/unknown.png
  */
  export function setRadiusBlipEdge(blip: number, toggle: boolean): void;

  export function doesBlipExist(blip: number): boolean;

  /**
  * This native removes the current waypoint from the map.
  * Example:
  * C#:
  * Function.Call(Hash.SET_WAYPOINT_OFF);
  * C++:
  * HUD::SET_WAYPOINT_OFF();
  */
  export function setWaypointOff(): void;

  export function deleteWaypoint(): void;

  export function refreshWaypoint(): void;

  export function isWaypointActive(): boolean;

  export function setNewWaypoint(x: number, y: number): void;

  export function setBlipBright(blip: number, toggle: boolean): void;

  export function setBlipShowCone(blip: number, toggle: boolean, p2: any): void;

  /**
  * Interesting fact: A hash collision for this is RESET_JETPACK_MODEL_SETTINGS
  */
  export function _0xC594B315EDF2D4AF(ped: number): void;

  export function _0xF83D0FEBE75E62C9(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;

  export function _0x35A3CD97B2C0A6D2(blip: number): void;

  export function _0x8410C5E0CD847B9D(): void;

  /**
  * This native is used to colorize certain map components like the army base at the top of the map.
  * @param overrideColor appears to be always -1. If p2 is -1 then native wouldn't change the color. See https://gfycat.com/SkinnyPinkChupacabra
  */
  export function setMinimapComponent(componentId: number, toggle: boolean, overrideColor: number): any;

  export function setMinimapSonarEnabled(toggle: boolean): void;

  export function showSigninUi(): void;

  export function getMainPlayerBlipId(): number;

  export function _0x41350B4FC28E3941(p0: boolean): void;

  export function hideLoadingOnFadeThisFrame(): void;

  /**
  * List of interior hashes: pastebin.com/1FUyXNqY
  * Not for every interior zoom > 0 available.
  */
  export function setRadarAsInteriorThisFrame(interior: number, x: number, y: number, z: number, zoom: number): void;

  export function _0x504DFE62A1692296(toggle: boolean): void;

  export function setRadarAsExteriorThisFrame(): void;

  /**
  * Sets the position of the arrow icon representing the player on both the minimap and world map.
  * Too bad this wouldn't work over the network (obviously not). Could spoof where we would be.
  */
  export function setPlayerBlipPositionThisFrame(x: number, y: number): void;

  export function _0xA17784FCA9548D15(p0: any, p1: any, p2: any): void;

  export function isMinimapInInterior(): boolean;

  export function hideMinimapExteriorMapThisFrame(): void;

  export function hideMinimapInteriorMapThisFrame(): void;

  /**
  * Toggles the Cayo Perico map.
  */
  export function setToggleMinimapHeistIsland(toggle: boolean): void;

  /**
  * When calling this, the current frame will have the players "arrow icon" be focused on the dead center of the radar.
  */
  export function dontTiltMinimapThisFrame(): void;

  export function _0x55F5A5F07134DE60(): void;

  export function setWidescreenFormat(p0: any): void;

  export function displayAreaName(toggle: boolean): void;

  /**
  * "DISPLAY_CASH(false);" makes the cash amount render on the screen when appropriate
  * "DISPLAY_CASH(true);" disables cash amount rendering
  */
  export function displayCash(toggle: boolean): void;

  /**
  * Related to displaying cash on the HUD
  * Always called before HUD::_SET_SINGLEPLAYER_HUD_CASH in decompiled scripts
  */
  export function _0x170F541E1CADD1DE(p0: boolean): void;

  /**
  * Displays cash change notifications on HUD.
  */
  export function setPlayerCashChange(cash: number, bank: number): void;

  export function displayAmmoThisFrame(display: boolean): void;

  /**
  * Displays the crosshair for this frame.
  */
  export function displaySniperScopeThisFrame(): void;

  /**
  * I think this works, but seems to prohibit switching to other weapons (or accessing the weapon wheel)
  */
  export function hideHudAndRadarThisFrame(): void;

  export function _0xE67C6DFD386EA5E7(p0: boolean): void;

  export function setMultiplayerWalletCash(): void;

  export function removeMultiplayerWalletCash(): void;

  export function setMultiplayerBankCash(): void;

  export function removeMultiplayerBankCash(): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function setMultiplayerHudCash(p0: number, p1: number): void;

  /**
  * Removes multiplayer cash hud each frame
  */
  export function removeMultiplayerHudCash(): void;

  export function hideHelpTextThisFrame(): void;

  /**
  * IS_*
  */
  export function _0x801879A9B4F4B2FB(): boolean;

  /**
  * The messages are localized strings.
  * Examples:
  * "No_bus_money"
  * "Enter_bus"
  * "Tour_help"
  * "LETTERS_HELP2"
  * "Dummy"
  * **The bool appears to always be false (if it even is a bool, as it's represented by a zero)**
  * --------
  * picture of where on the screen this is displayed?
  * @param p1 doesn't seem to make a difference, regardless of the state it's in.
  */
  export function displayHelpTextThisFrame(message: string, p1: boolean): void;

  /**
  * Forces the weapon wheel to show/hide.
  */
  export function hudForceWeaponWheel(show: boolean): void;

  /**
  * Displays loading screen tips, requires `_0x56C8B608CFD49854` to be called beforehand.
  */
  export function hudDisplayLoadingScreenTips(): void;

  /**
  * Calling this each frame, stops the player from receiving a weapon via the weapon wheel.
  */
  export function blockWeaponWheelThisFrame(): void;

  /**
  * Returns the weapon hash to the selected/highlighted weapon in the wheel
  */
  export function hudWeaponWheelGetSelectedHash(): number;

  /**
  * Set the active slotIndex in the wheel weapon to the slot associated with the provided Weapon hash
  */
  export function hudSetWeaponWheelTopSlot(weaponHash: number): void;

  /**
  * Returns the weapon hash active in a specific weapon wheel slotList
  */
  export function hudWeaponWheelGetSlotHash(weaponTypeIndex: number): number;

  /**
  * Sets a global that disables many weapon input tasks (shooting, aiming, etc.). Does not work with vehicle weapons, only used in selector.ysc
  */
  export function hudWeaponWheelIgnoreControlInput(toggle: boolean): void;

  /**
  * Only the script that originally called SET_GPS_FLAGS can set them again. Another script cannot set the flags, until the first script that called it has called CLEAR_GPS_FLAGS.
  * Doesn't seem like the flags are actually read by the game at all.
  */
  export function setGpsFlags(p0: number, p1: number): void;

  /**
  * Clears the GPS flags. Only the script that originally called SET_GPS_FLAGS can clear them.
  * Doesn't seem like the flags are actually read by the game at all.
  */
  export function clearGpsFlags(): void;

  export function setRaceTrackRender(toggle: boolean): void;

  /**
  * Does the same as SET_RACE_TRACK_RENDER(false);
  */
  export function clearGpsRaceTrack(): void;

  /**
  * Starts a new GPS custom-route, allowing you to plot lines on the map.
  * Lines are drawn directly between points.
  * The GPS custom route works like the GPS multi route, except it does not follow roads.
  * Example result: https://i.imgur.com/BDm5pzt.png
  * @param hudColor The HUD color of the GPS path.
  * @param displayOnFoot Draws the path regardless if the player is in a vehicle or not.
  * @param followPlayer Draw the path partially between the previous and next point based on the players position between them. When false, the GPS appears to not disappear after the last leg is completed.
  */
  export function startGpsCustomRoute(hudColor: number, displayOnFoot: boolean, followPlayer: boolean): void;

  export function addPointToGpsCustomRoute(x: number, y: number, z: number): void;

  /**
  * @param radarThickness The width of the GPS route on the radar
  * @param mapThickness The width of the GPS route on the map
  */
  export function setGpsCustomRouteRender(toggle: boolean, radarThickness: number, mapThickness: number): void;

  export function clearGpsCustomRoute(): void;

  /**
  * Starts a new GPS multi-route, allowing you to create custom GPS paths.
  * GPS functions like the waypoint, except it can contain multiple points it's forced to go through.
  * Once the player has passed a point, the GPS will no longer force its path through it.
  * Works independently from the player-placed waypoint and blip routes.
  * Example result: https://i.imgur.com/ZZHQatX.png
  * @param hudColor The HUD color of the GPS path.
  * @param routeFromPlayer Makes the GPS draw a path from the player to the next point, rather than the original path from the previous point.
  * @param displayOnFoot Draws the GPS path regardless if the player is in a vehicle or not.
  */
  export function startGpsMultiRoute(hudColor: number, routeFromPlayer: boolean, displayOnFoot: boolean): void;

  export function addPointToGpsMultiRoute(x: number, y: number, z: number): void;

  export function setGpsMultiRouteRender(toggle: boolean): void;

  /**
  * Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);
  */
  export function clearGpsMultiRoute(): void;

  export function clearGpsPlayerWaypoint(): void;

  export function setGpsFlashes(toggle: boolean): void;

  export function _0x7B21E0BB01E8224A(p0: any): void;

  /**
  * adds a short flash to the Radar/Minimap
  * Usage: UI.FLASH_MINIMAP_DISPLAY
  */
  export function flashMinimapDisplay(): void;

  export function flashMinimapDisplayWithColor(hudColorIndex: number): void;

  export function toggleStealthRadar(toggle: boolean): void;

  export function setMinimapInSpectatorMode(toggle: boolean, ped: number): void;

  export function setMissionName(p0: boolean, name: string): void;

  export function setMissionName2(p0: boolean, name: string): void;

  /**
  * HUD::_817B86108EB94E51(1, &g_189F36._f10CD1[016], &g_189F36._f10CD1[116], &g_189F36._f10CD1[216], &g_189F36._f10CD1[316], &g_189F36._f10CD1[416], &g_189F36._f10CD1[516], &g_189F36._f10CD1[616], &g_189F36._f10CD1[716]);
  */
  export function _0x817B86108EB94E51(p0: boolean, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): [void, any, any, any, any, any, any, any, any];

  export function setMinimapBlockWaypoint(toggle: boolean): void;

  /**
  * Toggles the North Yankton map
  */
  export function setMinimapInPrologue(toggle: boolean): void;

  /**
  * If true, the entire map will be revealed.
  * FOW = Fog of War
  */
  export function setMinimapHideFow(toggle: boolean): void;

  export function getMinimapFowDiscoveryRatio(): number;

  export function getMinimapFowCoordinateIsRevealed(x: number, y: number, z: number): boolean;

  export function _0x62E849B7EB28E770(p0: boolean): void;

  export function setMinimapFowRevealCoordinate(x: number, y: number, z: number): void;

  /**
  * Not much is known so far on what it does _exactly_.
  * All I know for sure is that it draws the specified hole ID on the pause menu map as well as on the mini-map/radar. This native also seems to change some other things related to the pause menu map's behaviour, for example: you can no longer set waypoints, the pause menu map starts up in a 'zoomed in' state. This native does not need to be executed every tick.
  * You need to center the minimap manually as well as change/lock it's zoom and angle in order for it to appear correctly on the minimap.
  * You'll also need to use the `GOLF` scaleform in order to get the correct minmap border to show up.
  * Use `0x35edd5b2e3ff01c0` to reset the map when you no longer want to display any golf holes (you still need to unlock zoom, position and angle of the radar manually after calling this).
  */
  export function setMinimapGolfCourse(hole: number): void;

  export function setMinimapGolfCourseOff(): void;

  /**
  * Locks the minimap to the specified angle in integer degrees.
  * @param angle The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
  */
  export function lockMinimapAngle(angle: number): void;

  export function unlockMinimapAngle(): void;

  /**
  * Locks the minimap to the specified world position.
  */
  export function lockMinimapPosition(x: number, y: number): void;

  export function unlockMinimapPosition(): void;

  /**
  * Argument must be 0.0f or above 38.0f, or it will be ignored.
  */
  export function setMinimapAltitudeIndicatorLevel(altitude: number, p1: boolean, p2: any): void;

  export function setHealthHudDisplayValues(health: number, capacity: number, wasAdded: boolean): void;

  export function setMaxHealthHudDisplay(maximumValue: number): void;

  export function setMaxArmourHudDisplay(maximumValue: number): void;

  /**
  * Toggles the big minimap state like in GTA:Online.
  */
  export function setBigmapActive(toggleBigMap: boolean, showFullMap: boolean): void;

  /**
  * Full list of components below
  * HUD = 0;
  * HUD_WANTED_STARS = 1;
  * HUD_WEAPON_ICON = 2;
  * HUD_CASH = 3;
  * HUD_MP_CASH = 4;
  * HUD_MP_MESSAGE = 5;
  * HUD_VEHICLE_NAME = 6;
  * HUD_AREA_NAME = 7;
  * See NativeDB for reference: http://natives.altv.mp/#/0xBC4C9EA5391ECC0D
  */
  export function isHudComponentActive(id: number): boolean;

  export function isScriptedHudComponentActive(id: number): boolean;

  export function hideScriptedHudComponentThisFrame(id: number): void;

  /**
  * SHOW_*
  */
  export function showScriptedHudComponentThisFrame(id: number): void;

  export function isScriptedHudComponentHiddenThisFrame(id: number): boolean;

  /**
  * This function hides various HUD (Heads-up Display) components.
  * Listed below are the integers and the corresponding HUD component.
  * - 1 : WANTED_STARS
  * - 2 : WEAPON_ICON
  * - 3 : CASH
  * - 4 : MP_CASH
  * - 5 : MP_MESSAGE
  * - 6 : VEHICLE_NAME
  * - 7 : AREA_NAME
  * See NativeDB for reference: http://natives.altv.mp/#/0x6806C51AD12B83B8
  */
  export function hideHudComponentThisFrame(id: number): void;

  /**
  * This function hides various HUD (Heads-up Display) components.
  * Listed below are the integers and the corresponding HUD component.
  * - 1 : WANTED_STARS
  * - 2 : WEAPON_ICON
  * - 3 : CASH
  * - 4 : MP_CASH
  * - 5 : MP_MESSAGE
  * - 6 : VEHICLE_NAME
  * - 7 : AREA_NAME
  * See NativeDB for reference: http://natives.altv.mp/#/0x0B4DF1FA60C0E664
  */
  export function showHudComponentThisFrame(id: number): void;

  /**
  * HIDE_*_THIS_FRAME
  * Hides area and vehicle name HUD components for one frame.
  */
  export function hideAreaAndVehicleNameThisFrame(): void;

  export function resetReticuleValues(): void;

  export function resetHudComponentValues(id: number): void;

  export function setHudComponentPosition(id: number, x: number, y: number): void;

  export function getHudComponentPosition(id: number): Vector3;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function clearReminderMessage(): void;

  /**
  * World to relative screen coords, this world to screen will keep the text on screen. Was named _GET_SCREEN_COORD_FROM_WORLD_COORD, but this conflicts with 0x34E82F05DF2974F5. As that hash actually matches GET_SCREEN_COORD_FROM_WORLD_COORD that one supercedes and this one was renamed to _GET_2D_COORD_FROM_3D_COORD
  */
  export function getScreenCoordFromWorldCoord2(worldX: number, worldY: number, worldZ: number, screenX: number, screenY: number): [boolean, number, number];

  /**
  * Shows a menu for reporting UGC content.
  */
  export function openReportugcMenu(): void;

  export function forceCloseReportugcMenu(): void;

  export function isReportugcMenuOpen(): boolean;

  export function isFloatingHelpTextOnScreen(hudIndex: number): boolean;

  export function setFloatingHelpTextScreenPosition(hudIndex: number, x: number, y: number): void;

  export function setFloatingHelpTextWorldPosition(hudIndex: number, x: number, y: number, z: number): void;

  export function setFloatingHelpTextToEntity(hudIndex: number, entity: number, offsetX: number, offsetY: number): void;

  export function setFloatingHelpTextStyle(hudIndex: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

  export function clearFloatingHelp(hudIndex: number, p1: boolean): void;

  /**
  * @param clanFlag takes a number 0-5
  */
  export function createMpGamerTagWithCrewColor(player: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number, r: number, g: number, b: number): void;

  export function isMpGamerTagMovieActive(): boolean;

  /**
  * @param clanFlag takes a number 0-5
  */
  export function createFakeMpGamerTag(ped: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: number): number;

  export function removeMpGamerTag(gamerTagId: number): void;

  export function isMpGamerTagActive(gamerTagId: number): boolean;

  export function isMpGamerTagFree(gamerTagId: number): boolean;

  /**
  * enum eMpGamerTagComponent
  * {
  * MP_TAG_GAMER_NAME,
  * MP_TAG_CREW_TAG,
  * MP_TAG_HEALTH_ARMOUR,
  * MP_TAG_BIG_TEXT,
  * MP_TAG_AUDIO_ICON,
  * MP_TAG_USING_MENU,
  * MP_TAG_PASSIVE_MODE,
  * See NativeDB for reference: http://natives.altv.mp/#/0x63BB75ABEDC1F6A0
  */
  export function setMpGamerTagVisibility(gamerTagId: number, component: number, toggle: boolean, p3: any): void;

  export function setMpGamerTagEnabled(gamerTagId: number, toggle: boolean): void;

  /**
  * Displays a bunch of icons above the players name, and level, and their name twice
  */
  export function setMpGamerTagIcons(gamerTagId: number, toggle: boolean): void;

  export function setMpGamerHealthBarDisplay(gamerTagId: number, toggle: boolean): void;

  export function setMpGamerHealthBarMax(gamerTagId: number, value: number, maximumValue: number): void;

  /**
  * Sets a gamer tag's component colour
  * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
  * @param gamerTagId is obtained using for example CREATE_FAKE_MP_GAMER_TAG
  */
  export function setMpGamerTagColour(gamerTagId: number, component: number, hudColorIndex: number): void;

  /**
  * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
  * Should be enabled as flag (2). Has 0 opacity by default.
  * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
  * -> Rockstar use the EU spelling of 'color' so I hashed the same name with COLOUR and it came back as the correct hash, so it has been corrected above.
  */
  export function setMpGamerTagHealthBarColour(gamerTagId: number, hudColorIndex: number): void;

  /**
  * Sets flag's sprite transparency. 0-255.
  */
  export function setMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;

  /**
  * displays wanted star above head
  */
  export function setMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;

  export function setMpGamerTagUnk(gamerTagId: number, p1: number): void;

  export function setMpGamerTagName(gamerTagId: number, string: string): void;

  /**
  * IS_*
  */
  export function isValidMpGamerTagMovie(gamerTagId: number): boolean;

  export function setMpGamerTagBigText(gamerTagId: number, string: string): void;

  export function getCurrentWebpageId(): number;

  export function getCurrentWebsiteId(): number;

  /**
  * GET_G*
  */
  export function _0xE3B05614DCE1D014(p0: any): any;

  /**
  * RESET_*
  */
  export function _0xB99C4E4D9499DF29(p0: number): void;

  /**
  * IS_WARNING_MESSAGE_*
  */
  export function isWarningMessageActive2(): boolean;

  /**
  * You can only use text entries. No custom text.
  * Example: SET_WARNING_MESSAGE("t20", 3, "adder", false, -1, 0, 0, true);
  */
  export function setWarningMessage(titleMsg: string, flags: number, promptMsg: string, p3: boolean, p4: number, p5: string, p6: string, showBackground: boolean, p8: any): void;

  /**
  * Shows a warning message on screen with a header.
  * Note: You can only use text entries. No custom text. You can recreate this easily with scaleforms.
  * Example: https://i.imgur.com/ITJt8bJ.png
  */
  export function setWarningMessageWithHeader(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: any, showBackground: any, p7: any, p8: boolean, p9: any): [void, any, any];

  /**
  * You can only use text entries. No custom text.
  */
  export function setWarningMessageWithHeaderAndSubstringFlags(entryHeader: string, entryLine1: string, instructionalKey: any, entryLine2: string, p4: boolean, p5: any, p6: any, p7: any, p8: any, p9: boolean, p10: any): [void, any, any];

  export function setWarningMessageWithHeaderUnk(entryHeader: string, entryLine1: string, flags: number, entryLine2: string, p4: boolean, p5: any, p6: any, p7: any, showBg: boolean, p9: any, p10: any): [void, any, any];

  /**
  * labelMsg: Label of the alert's message.
  * labelMsg2: Label of another message line
  * instructionalKey enum list:
  * Buttons = {
  * Empty = 0,
  * Select = 1, -- (RETURN)
  * Ok = 2, -- (RETURN)
  * Yes = 4, -- (RETURN)
  * Back = 8, -- (ESC)
  * See NativeDB for reference: http://natives.altv.mp/#/0x15803FEC3B9A872B
  * @param labelTitle Label of the alert's title.
  * @param p2 This is an enum, check the description for a list.
  * @param p3 This is an enum, check the description for a list.
  * @param p5 usually 0
  * @param p6 usually -1
  * @param p7 usually 0
  * @param p8 unknown label
  * @param p9 unknown label
  * @param background Set to anything other than 0 or false (even any string) and it will draw a background. Setting it to 0 or false will draw no background.
  * @param errorCode Error code, shown at the bottom left if set to value other than 0.
  */
  export function setWarningMessageWithAlert(labelTitle: string, labelMessage: string, p2: number, p3: number, labelMessage2: string, p5: boolean, p6: number, p7: number, p8: string, p9: string, background: boolean, errorCode: number): void;

  /**
  * Has to do with the confirmation overlay (E.g. confirm exit)
  */
  export function getWarningMessageTitleHash(): number;

  /**
  * Some sort of list displayed in a warning message. Yet unknown how to prevent repeating.
  * Param names copied from the corresponding scaleform function "SET_LIST_ROW".
  * Example: https://i.imgur.com/arKvOYx.png
  */
  export function setWarningMessageListRow(index: number, name: string, cash: number, rp: number, lvl: number, colour: number): boolean;

  export function _0xDAF87174BE7454FF(p0: any): boolean;

  export function removeWarningMessageListItems(): void;

  export function isWarningMessageActive(): boolean;

  export function clearDynamicPauseMenuErrorMessage(): void;

  /**
  * If toggle is true, the map is shown in full screen
  * If toggle is false, the map is shown in normal mode
  */
  export function raceGalleryFullscreen(toggle: boolean): void;

  /**
  * Sets the sprite of the next BLIP_GALLERY blip, values used in the native scripts: 143 (ObjectiveBlue), 144 (ObjectiveGreen), 145 (ObjectiveRed), 146 (ObjectiveYellow).
  */
  export function raceGalleryNextBlipSprite(spriteId: number): void;

  /**
  * Add a BLIP_GALLERY at the specific coordinate. Used in fm_maintain_transition_players to display race track points.
  */
  export function raceGalleryAddBlip(x: number, y: number, z: number): any;

  export function clearRaceGalleryBlips(): void;

  export function forceSonarBlipsThisFrame(): any;

  export function getNorthRadarBlip(): number;

  /**
  * Toggles whether or not name labels are shown on the expanded minimap next to player blips, like in GTA:O.
  * Doesn't need to be called every frame.
  * Preview: https://i.imgur.com/DfqKWfJ.png
  * Make sure to call SET_BLIP_CATEGORY with index 7 for this to work on the desired blip.
  */
  export function displayPlayerNameTagsOnBlips(toggle: boolean): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0x211C4EF450086857(): void;

  export function _0xBF4F34A85CA2970C(): void;

  /**
  * Does stuff like this:
  * gyazo.com/7fcb78ea3520e3dbc5b2c0c0f3712617
  * Example:
  * int GetHash = GET_HASH_KEY("fe_menu_version_corona_lobby");
  * ACTIVATE_FRONTEND_MENU(GetHash, 0, -1);
  * BOOL p1 is a toggle to define the game in pause.
  * int p2 is unknown but -1 always works, not sure why though.
  * [30/03/2017] ins1de :
  * the int p2 is actually a component variable. When the pause menu is visible, it opens the tab related to it.
  * See NativeDB for reference: http://natives.altv.mp/#/0xEF01D36B9C9D0C7B
  */
  export function activateFrontendMenu(menuhash: number, togglePause: boolean, component: number): void;

  /**
  * Before using this native click the native above and look at the decription.
  * Example:
  * int GetHash = Function.Call<int>(Hash.GET_HASH_KEY, "fe_menu_version_corona_lobby");
  * Function.Call(Hash.ACTIVATE_FRONTEND_MENU, GetHash, 0, -1);
  * Function.Call(Hash.RESTART_FRONTEND_MENU(GetHash, -1);
  * This native refreshes the frontend menu.
  * p2 = Unknown but always works with -1.
  * @param p1 = Hash of Menu
  */
  export function restartFrontendMenu(menuHash: number, p1: number): void;

  /**
  * if (HUD::GET_CURRENT_FRONTEND_MENU_VERSION() == joaat("fe_menu_version_empty_no_background"))
  */
  export function getCurrentFrontendMenuVersion(): number;

  export function setPauseMenuActive(toggle: boolean): void;

  export function disableFrontendThisFrame(): void;

  export function suppressFrontendRenderingThisFrame(): void;

  /**
  * Allows opening the pause menu this frame, when the player is dead.
  */
  export function allowPauseMenuWhenDeadThisFrame(): void;

  export function setFrontendActive(active: boolean): void;

  export function isPauseMenuActive(): boolean;

  /**
  * Returns something related to the store.
  * IS_S*
  * IS_STORE_EXIT_PURCHASE_CAPABILITY_ACTIVATED ?
  */
  export function _0x2F057596F2BD0061(): boolean;

  /**
  * Returns:
  * 0
  * 5
  * 10
  * 15
  * 20
  * 25
  * 30
  * 35
  */
  export function getPauseMenuState(): number;

  /**
  * GET_PAUSE_MENU_*
  */
  export function _0x5BFF36D6ED83E0AE(): Vector3;

  export function isPauseMenuRestarting(): boolean;

  /**
  * Not present in retail version of the game, actual definiton seems to be
  * _LOG_DEBUG_INFO(const char* category, const char* debugText);
  */
  export function logDebugInfo(p0: string): void;

  export function _0x77F16B447824DA6C(p0: any): void;

  export function _0xCDCA26E80FAECB8F(): void;

  export function _0x2DE6C5E2E996F178(p0: any): void;

  /**
  * Activates the specified frontend menu context.
  * pausemenu.xml defines some specific menu options using 'context'. Context is basically a 'condition'.
  * The `*ALL*` part of the context means that whatever is being defined, will be active when any or all of those conditions after `*ALL*` are met.
  * The `*NONE*` part of the context section means that whatever is being defined, will NOT be active if any or all of the conditions after `*NONE*` are met.
  * This basically allows you to hide certain menu sections, or things like instructional buttons.
  */
  export function pauseMenuActivateContext(contextHash: number): void;

  export function pauseMenuDeactivateContext(contextHash: number): void;

  export function pauseMenuIsContextActive(contextHash: number): boolean;

  export function _0x2A25ADC48F87841F(): any;

  export function _0xDE03620F8703A9DF(): any;

  export function _0x359AF31A4B52F5ED(): any;

  export function _0x13C4B962653A5280(): any;

  export function _0xC8E1071177A23BE5(p0: any, p1: any, p2: any): [boolean, any, any, any];

  export function _0x4895BDEA16E7C080(p0: number): void;

  export function _0xC78E239AC5B2DDB9(p0: boolean, p1: any, p2: any): void;

  export function _0xF06EBB91A81E09E3(p0: boolean): void;

  export function isFrontendReadyForControl(): boolean;

  /**
  * Disables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard. Not sure about controller. Does not disable mouse controls. No need to call this every tick.
  * To enable the keys again, use `0x14621BB1DF14E2B2`.
  */
  export function _0xEC9264727EEC0F28(): void;

  /**
  * Enables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard if they were disabled using the native below.
  * To disable the keys, use `0xEC9264727EEC0F28`
  */
  export function _0x14621BB1DF14E2B2(): void;

  export function _0x66E7CB63C97B7D20(): any;

  export function _0x593FEAE1F73392D4(): any;

  export function isNavigatingMenuContent(): any;

  export function _0xF284AC67940C6812(): any;

  /**
  * Returns true when the menu state(?) changed this frame.
  * HAS_*? _GET_MENU_STATE_CHANGED_THIS_FRAME?
  */
  export function _0x2E22FEFA0100275E(): boolean;

  export function _0x0CF54F20DE43879C(p0: any): void;

  export function getPauseMenuSelection(lastItemMenuId: number, selectedItemUniqueId: number): [void, number, number];

  /**
  * when the pausemenu is closed:
  * lastItemMenuId = -1
  * selectedItemMenuId = -1
  * selectedItemUniqueId = 0
  * when the header gains focus:
  * lastItemMenuId updates as normal or 0 if the pausemenu was just opened
  * selectedItemMenuId becomes a unique id for the pausemenu page that focus was taken from (?) or 0 if the pausemenu was just opened
  * selectedItemUniqueId = -1
  * when focus is moved from the header to a pausemenu page:
  * See NativeDB for reference: http://natives.altv.mp/#/0x7E17BE53E1AAABAF
  * @param lastItemMenuId this is the menuID of the last selected item minus 1000 (lastItem.menuID - 1000)
  * @param selectedItemMenuId same as lastItemMenuId except for the currently selected menu item
  * @param selectedItemUniqueId this is uniqueID of the currently selected menu item
  */
  export function getPauseMenuSelectionData(lastItemMenuId: number, selectedItemMenuId: number, selectedItemUniqueId: number): [void, number, number, number];

  export function _0xA238192F33110615(p0: number, p1: number, p2: number): [boolean, number, number, number];

  export function _0xEF4CED81CEBEDC6D(p0: any, p1: any): [boolean, any];

  export function _0xCA6B2F7CE32AB653(p0: any, p1: any, p2: any): [boolean, any];

  export function _0x90A6526CF0381030(p0: any, p1: any, p2: any, p3: any): [boolean, any];

  export function _0x24A49BEAF468DC90(p0: any, p1: any, p2: any, p3: any, p4: any): [boolean, any];

  export function _0x5FBD7095FE7AE57F(p0: any, p1: number): [boolean, number];

  export function _0x8F08017F9D7C47BD(p0: any, p1: any, p2: any): [boolean, any];

  /**
  * @param p0 was always 0xAE2602A3.
  */
  export function _0x052991E59076E4E4(p0: number, p1: any): [boolean, any];

  export function clearPedInPauseMenu(): void;

  /**
  * @param p1 is either 1 or 2 in the PC scripts.
  */
  export function givePedToPauseMenu(ped: number, p1: number): void;

  /**
  * Toggles the light state for the pause menu ped in frontend menus.
  * This is used by R* in combination with `SET_PAUSE_MENU_PED_SLEEP_STATE` to toggle the "offline" or "online" state in the "friends" tab of the pause menu in GTA Online.
  * Example:
  * Lights On: https://vespura.com/hi/i/2019-04-01_16-09_540ee_1015.png
  * Lights Off: https://vespura.com/hi/i/2019-04-01_16-10_8b5e7_1016.png
  */
  export function setPauseMenuPedLighting(state: boolean): void;

  /**
  * Toggles the pause menu ped sleep state for frontend menus.
  * Example: https://vespura.com/hi/i/2019-04-01_15-51_8ed38_1014.gif
  * `state` 0 will make the ped slowly fall asleep, 1 will slowly wake the ped up.
  */
  export function setPauseMenuPedSleepState(state: boolean): void;

  export function openOnlinePoliciesMenu(): void;

  export function _0xF13FE2A80C05C561(): boolean;

  /**
  * Returns the same as IS_SOCIAL_CLUB_ACTIVE
  */
  export function isOnlinePoliciesMenuActive(): boolean;

  /**
  * Uses the `SOCIAL_CLUB2` scaleform.
  */
  export function openSocialClubMenu(): void;

  export function closeSocialClubMenu(): void;

  /**
  * HUD::SET_SOCIAL_CLUB_TOUR("Gallery");
  * HUD::SET_SOCIAL_CLUB_TOUR("Missions");
  * HUD::SET_SOCIAL_CLUB_TOUR("General");
  * HUD::SET_SOCIAL_CLUB_TOUR("Playlists");
  */
  export function setSocialClubTour(name: string): void;

  export function isSocialClubActive(): boolean;

  /**
  * SET_TEXT_??? - Used in golf and golf_mp
  */
  export function _0x1185A8087587322C(p0: boolean): void;

  export function forceCloseTextInputBox(): void;

  export function _0x577599CCED639CA2(p0: any): void;

  export function overrideMultiplayerChatPrefix(gxtEntryHash: number): void;

  /**
  * Returns whether or not the text chat (MULTIPLAYER_CHAT Scaleform component) is active.
  */
  export function isMultiplayerChatActive(): boolean;

  export function closeMultiplayerChat(): void;

  export function _0x7C226D5346D4D10A(p0: any): void;

  export function overrideMultiplayerChatColour(p0: number, hudColor: number): void;

  /**
  * Sets an unknown boolean value in the text chat.
  */
  export function setTextChatUnk(p0: boolean): void;

  export function flagPlayerContextInTournament(toggle: boolean): void;

  /**
  * This native turns on the AI blip on the specified ped. It also disappears automatically when the ped is too far or if the ped is dead. You don't need to control it with other natives.
  * See gtaforums.com/topic/884370-native-research-ai-blips for further information.
  */
  export function setPedHasAiBlip(ped: number, hasCone: boolean): void;

  /**
  * @param color see SET_BLIP_COLOUR
  */
  export function setPedHasAiBlipWithColor(ped: number, hasCone: boolean, color: number): void;

  export function doesPedHaveAiBlip(ped: number): boolean;

  export function setPedAiBlipGangId(ped: number, gangId: number): void;

  export function setPedAiBlipHasCone(ped: number, toggle: boolean): void;

  export function setPedAiBlipForcedOn(ped: number, toggle: boolean): void;

  export function setPedAiBlipNoticeRange(ped: number, range: number): void;

  export function setPedAiBlipSprite(ped: number, spriteId: number): void;

  export function getAiBlip2(ped: number): number;

  /**
  * Returns the current AI BLIP for the specified ped
  */
  export function getAiBlip(ped: number): number;

  /**
  * HAS_*
  */
  export function hasDirectorModeBeenTriggered(): boolean;

  /**
  * SET_*
  */
  export function setDirectorModeClearTriggeredFlag(): void;

  /**
  * If toggle is true, hides special ability bar / character name in the pause menu
  * If toggle is false, shows special ability bar / character name in the pause menu
  * SET_PLAYER_*
  */
  export function setPlayerIsInDirectorMode(toggle: boolean): void;

  /**
  * SET_*
  */
  export function _0x04655F9D075D0AE5(toggle: boolean): void;

  export function _0x243296A510B562B6(): void;

  /**
  * GET_INTERIOR_*
  */
  export function getInteriorHeading(interior: number): number;

  /**
  * GET_INTERIOR_*
  */
  export function getInteriorInfo(interior: number, position: Vector3, nameHash: number): [void, Vector3, number];

  /**
  * Returns the group ID of the specified interior. For example, regular interiors have group 0, subway interiors have group 1. There are a few other groups too.
  */
  export function getInteriorGroupId(interior: number): number;

  export function getOffsetFromInteriorInWorldCoords(interior: number, x: number, y: number, z: number): Vector3;

  export function isInteriorScene(): boolean;

  export function isValidInterior(interior: number): boolean;

  export function clearRoomForEntity(entity: number): void;

  /**
  * Does anyone know what this does? I know online modding isn't generally supported especially by the owner of this db, but I first thought this could be used to force ourselves into someones apartment, but I see now that isn't possible.
  */
  export function forceRoomForEntity(entity: number, interior: number, roomHashKey: number): void;

  /**
  * @returns Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
  */
  export function getRoomKeyFromEntity(entity: number): number;

  /**
  * Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY
  */
  export function getKeyForEntityInRoom(entity: number): number;

  /**
  * @returns Returns the handle of the interior that the entity is in. Returns 0 if outside.
  */
  export function getInteriorFromEntity(entity: number): number;

  export function _0x82EBB79E258FA2B7(entity: number, interior: number): void;

  /**
  * Immediately removes entity from an interior. Like sets entity to `limbo` room.
  */
  export function clearInteriorForEntity(entity: number): void;

  export function _0x38C1CB1CB119A016(p0: any, p1: any): void;

  export function forceRoomForGameViewport(interiorID: number, roomHashKey: number): void;

  /**
  * Exemple of use(carmod_shop.c4)
  * INTERIOR::_AF348AFCB575A441("V_CarModRoom");
  */
  export function _0xAF348AFCB575A441(roomName: string): void;

  /**
  * Usage: INTERIOR::_0x405DC2AEF6AF95B9(INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM(PLAYER::PLAYER_PED_ID()));
  */
  export function _0x405DC2AEF6AF95B9(roomHashKey: number): void;

  export function getRoomKeyForGameViewport(): number;

  export function clearRoomForGameViewport(): void;

  /**
  * Returns the current interior id from gameplay camera
  */
  export function getInteriorFromGameplayCam(): number;

  /**
  * Example for VB.NET
  * @param x Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)
  * @param y Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)
  * @returns Returns interior ID from specified coordinates. If coordinates are outside, then it returns 0.
  */
  export function getInteriorAtCoords(x: number, y: number, z: number): number;

  export function addPickupToInteriorRoomByName(pickup: number, roomName: string): void;

  export function pinInteriorInMemory(interior: number): void;

  /**
  * Does something similar to INTERIOR::DISABLE_INTERIOR.
  * You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.
  */
  export function unpinInterior(interior: number): void;

  export function isInteriorReady(interior: number): boolean;

  /**
  * Only used once in the entire game scripts.
  * @returns Does not actually return anything.
  */
  export function _0x4C2330E61D3DEB56(interior: number): any;

  /**
  * Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.
  * Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.
  * Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.
  * @param x INTERIOR
  * @param y INTERIOR
  * @param z INTERIOR
  */
  export function getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;

  /**
  * Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
  */
  export function getInteriorAtCoordsWithTypehash(x: number, y: number, z: number, typeHash: number): number;

  export function _0x483ACA1176CA93F1(): void;

  /**
  * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
  */
  export function isCollisionMarkedOutside(x: number, y: number, z: number): boolean;

  export function getInteriorFromCollision(x: number, y: number, z: number): number;

  export function _0x7ECDF98587E92DEC(p0: any): void;

  /**
  * More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/
  * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
  */
  export function activateInteriorEntitySet(interior: number, entitySetName: string): void;

  /**
  * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
  */
  export function deactivateInteriorEntitySet(interior: number, entitySetName: string): void;

  /**
  * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
  */
  export function isInteriorEntitySetActive(interior: number, entitySetName: string): boolean;

  /**
  * @param color https
  */
  export function setInteriorEntitySetColor(interior: number, entitySetName: string, color: number): void;

  export function refreshInterior(interior: number): void;

  /**
  * This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
  * More info: http://gtaforums.com/topic/836301-hiding-gta-online-apartment-exteriors/
  */
  export function enableExteriorCullModelThisFrame(mapObjectHash: number): void;

  export function enableScriptCullModelThisFrame(mapObjectHash: number): void;

  /**
  * Example:
  * This removes the interior from the strip club and when trying to walk inside the player just falls:
  * @param interior :DISABLE_INTERIOR(118018, true);
  */
  export function disableInterior(interior: number, toggle: boolean): void;

  export function isInteriorDisabled(interior: number): boolean;

  /**
  * Does something similar to INTERIOR::DISABLE_INTERIOR
  */
  export function capInterior(interior: number, toggle: boolean): void;

  export function isInteriorCapped(interior: number): boolean;

  /**
  * DISABLE_*
  */
  export function _0x9E6542F0CE8E70A3(toggle: boolean): void;

  /**
  * Jenkins hash _might_ be 0xFC227584.
  */
  export function _0x7241CCB7D020DB69(entity: number, toggle: boolean): void;

  export function createItemset(p0: boolean): number;

  export function destroyItemset(p0: any): void;

  export function isItemsetValid(p0: any): boolean;

  export function addToItemset(p0: any, p1: any): boolean;

  export function removeFromItemset(p0: any, p1: any): void;

  export function getItemsetSize(x: number): any;

  export function getIndexedItemInItemset(p0: any, p1: any): any;

  export function isInItemset(p0: any, p1: any): boolean;

  export function cleanItemset(p0: any): void;

  export function _0xF2CA003F167E21D2(): number;

  export function loadingscreenGetLoadFreemode(): boolean;

  export function loadingscreenSetLoadFreemode(toggle: boolean): void;

  export function loadingscreenGetLoadFreemodeWithEventName(): boolean;

  export function loadingscreenSetLoadFreemodeWithEventName(toggle: boolean): void;

  export function loadingscreenIsLoadingFreemode(): boolean;

  export function loadingscreenSetIsLoadingFreemode(toggle: boolean): void;

  export function _0xFA1E0E893D915215(toggle: boolean): void;

  export function localizationGetSystemLanguage(): number;

  /**
  * 0 = american (en-US)
  * 1 = french (fr-FR)
  * 2 = german (de-DE)
  * 3 = italian (it-IT)
  * 4 = spanish (es-ES)
  * 5 = brazilian (pt-BR)
  * 6 = polish (pl-PL)
  * 7 = russian (ru-RU)
  * 8 = korean (ko-KR)
  * See NativeDB for reference: http://natives.altv.mp/#/0x2BDD44CC428A7EAE
  */
  export function getCurrentLanguage(): number;

  export function localizationGetSystemDateFormat(): number;

  export function getAllocatedStackSize(): number;

  export function getNumberOfFreeStacksOfThisSize(stackSize: number): number;

  export function setRandomSeed(seed: number): void;

  /**
  * Maximum value is 1.
  * At a value of 0 the game will still run at a minimum time scale.
  * Slow Motion 1: 0.6
  * Slow Motion 2: 0.4
  * Slow Motion 3: 0.2
  */
  export function setTimeScale(timeScale: number): void;

  /**
  * If true, the player can't save the game.
  * If the parameter is true, sets the mission flag to true, if the parameter is false, the function does nothing at all.
  * ^ also, if the mission flag is already set, the function does nothing at all
  */
  export function setMissionFlag(toggle: boolean): void;

  export function getMissionFlag(): boolean;

  /**
  * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
  * Does nothing if the mission flag is set.
  */
  export function setRandomEventFlag(toggle: boolean): void;

  export function getRandomEventFlag(): boolean;

  /**
  * Returns pointer to an empty string.
  * GET_C*
  */
  export function getGlobalCharBuffer(): string;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0x4DCDF92BF64236CD(p0: string, p1: string): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0x31125FD509D9043F(p0: string): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0xEBD3205A207939ED(p0: string): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0x97E7E2C04245115B(p0: any): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0x916CA67D26FD1E37(p0: string): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0xEB078CA2B5E82ADD(p0: string, p1: string): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0x703CC7F60CBB2B57(p0: string): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  */
  export function _0x8951EB9C6906D3C8(): void;

  /**
  * Does nothing (it's a nullsub). Seems to be PS4 specific.
  * Used only once in the scripts (ingamehud) with p0 = "AF_GAMEMODE"
  */
  export function _0xBA4B8D83BDC75551(p0: string): void;

  export function hasResumedFromSuspend(): boolean;

  /**
  * Sets GtaThread+0x14A
  * SET_S*
  */
  export function _0x65D2EBB47E1CEC21(toggle: boolean): void;

  /**
  * Sets bit 3 in GtaThread+0x150
  * SET_T*
  */
  export function _0x6F2135B6129620C1(toggle: boolean): void;

  /**
  * I*
  */
  export function _0x8D74E26F54B4E5C3(p0: string): void;

  export function getBaseElementMetadata(p0: any, p1: any, p2: any, p3: boolean): [boolean, any, any];

  /**
  * Returns current weather name hash
  */
  export function getPrevWeatherTypeHashName(): number;

  /**
  * Returns weather name hash
  */
  export function getNextWeatherTypeHashName(): number;

  export function isPrevWeatherType(weatherType: string): boolean;

  export function isNextWeatherType(weatherType: string): boolean;

  /**
  * The following weatherTypes are used in the scripts:
  * "CLEAR"
  * "EXTRASUNNY"
  * "CLOUDS"
  * "OVERCAST"
  * "RAIN"
  * "CLEARING"
  * "THUNDER"
  * "SMOG"
  * See NativeDB for reference: http://natives.altv.mp/#/0x704983DF373B198F
  */
  export function setWeatherTypePersist(weatherType: string): void;

  /**
  * The following weatherTypes are used in the scripts:
  * "CLEAR"
  * "EXTRASUNNY"
  * "CLOUDS"
  * "OVERCAST"
  * "RAIN"
  * "CLEARING"
  * "THUNDER"
  * "SMOG"
  * See NativeDB for reference: http://natives.altv.mp/#/0xED712CA327900C8A
  */
  export function setWeatherTypeNowPersist(weatherType: string): void;

  /**
  * The following weatherTypes are used in the scripts:
  * "CLEAR"
  * "EXTRASUNNY"
  * "CLOUDS"
  * "OVERCAST"
  * "RAIN"
  * "CLEARING"
  * "THUNDER"
  * "SMOG"
  * See NativeDB for reference: http://natives.altv.mp/#/0x29B487C359E19889
  */
  export function setWeatherTypeNow(weatherType: string): void;

  export function setWeatherTypeOvertimePersist(weatherType: string, time: number): void;

  export function setRandomWeatherType(): void;

  export function clearWeatherTypePersist(): void;

  /**
  * 0 as param = weird black and green screen
  * 0.1 - 0.99 = Prevent rain effect from falling (still sound and effects on puddles) and prevent puddles from increase/decrease, seems than it prevent any weather change too
  * 1 and more = "Unfreeze" rain puddles but clear weather too
  * When 'freezing' is enabled, it seem to also freeze value getted with GetRainLevel
  */
  export function _0x0CF97F497FE7D048(p0: number): void;

  export function getWeatherTypeTransition(weatherType1: number, weatherType2: number, percentWeather2: number): [void, number, number, number];

  /**
  * execute "NativeFunction.Natives.x578C752848ECFA0C(Game.GetHashKey(""RAIN""), Game.GetHashKey(""SMOG""), 0.50f);
  * Note that unlike most of the other weather natives, this native takes the hash of the weather name, not the plain string. These are the weather names and their hashes:
  * CLEAR  0x36A83D84
  * EXTRASUNNY  0x97AA0A79
  * CLOUDS  0x30FDAF5C
  * OVERCAST    0xBB898D2D
  * RAIN    0x54A69840
  * CLEARING    0x6DB1A50D
  * THUNDER 0xB677829F
  * See NativeDB for reference: http://natives.altv.mp/#/0x578C752848ECFA0C
  */
  export function setWeatherTypeTransition(weatherType1: number, weatherType2: number, percentWeather2: number): void;

  /**
  * Appears to have an optional bool parameter that is unused in the scripts.
  * If you pass true, something will be set to zero.
  */
  export function setOverrideWeather(weatherType: string): void;

  export function _0x1178E104409FE58C(p0: any, p1: any): void;

  export function clearOverrideWeather(): void;

  export function waterOverrideSetShorewaveamplitude(amplitude: number): void;

  export function waterOverrideSetShorewaveminamplitude(minAmplitude: number): void;

  export function waterOverrideSetShorewavemaxamplitude(maxAmplitude: number): void;

  export function waterOverrideSetOceannoiseminamplitude(minAmplitude: number): void;

  export function waterOverrideSetOceanwaveamplitude(amplitude: number): void;

  export function waterOverrideSetOceanwaveminamplitude(minAmplitude: number): void;

  export function waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;

  export function waterOverrideSetRipplebumpiness(bumpiness: number): void;

  export function waterOverrideSetRippleminbumpiness(minBumpiness: number): void;

  export function waterOverrideSetRipplemaxbumpiness(maxBumpiness: number): void;

  export function waterOverrideSetRippledisturb(disturb: number): void;

  /**
  * This seems to edit the water wave, intensity around your current location.
  * 0.0f = Normal
  * 1.0f = So Calm and Smooth, a boat will stay still.
  * 3.0f = Really Intense.
  */
  export function waterOverrideSetStrength(strength: number): void;

  export function waterOverrideFadeIn(p0: number): void;

  export function waterOverrideFadeOut(p0: number): void;

  /**
  * Sets the the raw wind speed value.
  */
  export function setWind(speed: number): void;

  /**
  * Using this native will clamp the wind speed value to a range of 0.0- 12.0. Using SET_WIND sets the same value but without the restriction.
  */
  export function setWindSpeed(speed: number): void;

  export function getWindSpeed(): number;

  /**
  * The wind direction in radians
  * 180 degrees, wind will blow from the south
  */
  export function setWindDirection(direction: number): void;

  export function getWindDirection(): Vector3;

  /**
  * With an `intensity` higher than `0.5f`, only the creation of puddles gets faster, rain and rain sound won't increase after that.
  * With an `intensity` of `0.0f` rain and rain sounds are disabled and there won't be any new puddles.
  * To use the rain intensity of the current weather, call this native with `-1f` as `intensity`.
  */
  export function setRainLevel(intensity: number): void;

  export function getRainLevel(): number;

  export function setSnowLevel(level: number): void;

  export function getSnowLevel(): number;

  /**
  * creates single lightning+thunder at random position
  */
  export function forceLightningFlash(): void;

  /**
  * Found in the scripts:
  * MISC::_02DEAAC8F8EA7FE7("");
  */
  export function _0x02DEAAC8F8EA7FE7(p0: string): void;

  /**
  * Found in the scripts:
  * MISC::_11B56FBBF7224868("CONTRAILS");
  */
  export function preloadCloudHat(name: string): void;

  /**
  * The following cloudhats are useable:
  * altostratus
  * Cirrus
  * cirrocumulus
  * Clear 01
  * Cloudy 01
  * Contrails
  * Horizon
  * horizonband1
  * See NativeDB for reference: http://natives.altv.mp/#/0xFC4842A34657BFCB
  */
  export function loadCloudHat(name: string, transitionTime: number): void;

  /**
  * Called 4 times in the b617d scripts:
  * MISC::_A74802FB8D0B7814("CONTRAILS", 0);
  */
  export function unloadCloudHat(name: string, p1: number): void;

  export function clearCloudHat(): void;

  export function setCloudHatOpacity(opacity: number): void;

  export function getCloudHatOpacity(): number;

  export function getGameTimer(): number;

  export function getFrameTime(): number;

  export function getBenchmarkTime(): number;

  export function getFrameCount(): number;

  export function getRandomFloatInRange(startRange: number, endRange: number): number;

  export function getRandomIntInRange(startRange: number, endRange: number): number;

  export function getRandomIntInRange2(startRange: number, endRange: number): number;

  /**
  * Gets the ground elevation at the specified position. Note that if the specified position is below ground level, the function will output zero!
  * Bear in mind this native can only calculate the elevation when the coordinates are within the client's render distance.
  * @param x Position on the X-axis to get ground elevation at.
  * @param y Position on the Y-axis to get ground elevation at.
  * @param z Position on the Z-axis to get ground elevation at.
  * @param groundZ The ground elevation at the specified position.
  * @param ignoreWater Nearly always 0, very rarely 1 in the scripts: https://gfycat.com/NiftyTatteredCricket
  */
  export function getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, ignoreWater: boolean, p5: boolean): [boolean, number];

  export function getGroundZAndNormalFor3dCoord(x: number, y: number, z: number, groundZ: number, normal: Vector3): [boolean, number, Vector3];

  export function getGroundZFor3dCoord2(x: number, y: number, z: number, groundZ: number, p4: boolean, p5: boolean): [boolean, number];

  export function asin(p0: number): number;

  export function acos(p0: number): number;

  export function tan(p0: number): number;

  export function atan(p0: number): number;

  export function atan2(p0: number, p1: number): number;

  /**
  * Returns the distance between two three-dimensional points, optionally ignoring the Z values.
  * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
  * Consider using this faster native instead: SYSTEM::VDIST - DVIST always takes in consideration the 3D coordinates.
  */
  export function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;

  export function getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;

  /**
  * @param dx = x1 - x2
  * @param dy = y1 - y2
  */
  export function getHeadingFromVector2d(dx: number, dy: number): number;

  export function _0x7F8F6405F4777AF6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): number;

  /**
  * GET_C*
  */
  export function _0x21C235BC64831E5A(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): Vector3;

  export function _0xF56DFB7B61BE7276(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number): [boolean, number];

  export function _0xA0AD167E4B39D9A2(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any): any;

  /**
  * This sets bit [offset] of [address] to on.
  * The offsets used are different bits to be toggled on and off, typically there is only one address used in a script.
  * Example:
  * To check if this bit has been enabled:
  * Please note, this method may assign a value to [address] when used.
  * @returns MISC::IS_BIT_SET(bitAddress, 1); // will return 1 afterwards
  */
  export function setBit(address: number, offset: number): [void, number];

  /**
  * This sets bit [offset] of [address] to off.
  * Example:
  * To check if this bit has been enabled:
  * @returns MISC::IS_BIT_SET(bitAddress, 1); // will return 0 afterwards
  */
  export function clearBit(address: number, offset: number): [void, number];

  /**
  * This native converts its past string to hash. It is hashed using jenkins one at a time method.
  */
  export function getHashKey(string: string): number;

  /**
  * This native always come right before SET_ENTITY_QUATERNION where its final 4 parameters are SLERP_NEAR_QUATERNION p9 to p12
  */
  export function slerpNearQuaternion(t: number, x: number, y: number, z: number, w: number, x1: number, y1: number, z1: number, w1: number, outX: number, outY: number, outZ: number, outW: number): [void, number, number, number, number];

  export function isAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: any, p12: boolean): boolean;

  export function _0x39455BF4F4F55186(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any): any;

  /**
  * `checkVehicle`: Check for any vehicles in that area.
  * `checkPeds`: Check for any peds in that area.
  * `ignoreEntity`: This entity will be ignored if it's in the area. Set to 0 if you don't want to exclude any entities.
  * The BOOL parameters that are documented have not been confirmed. They are just documented from what I've found during testing. They may not work as expected in all cases.
  * Returns true if there is anything in that location matching the provided parameters.
  * @param range The range, seems to not be very accurate during testing.
  * @returns `p4`: Unknown, when set to true it seems to always return true no matter what I try.
  */
  export function isPositionOccupied(x: number, y: number, z: number, range: number, p4: boolean, checkVehicles: boolean, checkPeds: boolean, p7: boolean, p8: boolean, ignoreEntity: number, p10: boolean): boolean;

  export function isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): boolean;

  /**
  * Example: CLEAR_AREA(0, 0, 0, 30, true, false, false, false);
  */
  export function clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;

  export function clearAreaLeaveVehicleHealth(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;

  /**
  * Example:
  * CLEAR_AREA_OF_VEHICLES(0.0f, 0.0f, 0.0f, 10000.0f, false, false, false, false, false, false);
  */
  export function clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;

  export function clearAngledAreaOfVehicles(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean, p12: any): void;

  /**
  * I looked through the PC scripts that this site provides you with a link to find. It shows the last param mainly uses, (0, 2, 6, 16, and 17) so I am going to assume it is a type of flag.
  */
  export function clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;

  /**
  * Example:       CLEAR_AREA_OF_PEDS(0, 0, 0, 10000, 1);
  */
  export function clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;

  /**
  * @param flags appears to always be 0
  */
  export function clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;

  /**
  * @param flags is usually 0 in the scripts.
  */
  export function clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;

  /**
  * Possibly used to clear scenario points.
  * CLEAR_*
  */
  export function _0x7EC6F9A478A6A512(): void;

  /**
  * @param ignoreVehicle - bypasses vehicle check of the local player (it will not open if you are in a vehicle and this is set to false)
  */
  export function setSaveMenuActive(ignoreVehicle: boolean): void;

  export function _0x397BAA01068BAA96(): number;

  export function setCreditsActive(toggle: boolean): void;

  export function _0xB51B9AB9EF81868C(toggle: boolean): void;

  export function haveCreditsReachedEnd(): boolean;

  /**
  * For a full list, see here: pastebin.com/yLNWicUi
  */
  export function terminateAllScriptsWithThisName(scriptName: string): void;

  export function networkSetScriptIsSafeForNetworkGame(): void;

  /**
  * Returns the index of the newly created hospital spawn point.
  * @param p3 might be radius?
  */
  export function addHospitalRestart(x: number, y: number, z: number, p3: number, p4: any): number;

  /**
  * The game by default has 5 hospital respawn points. Disabling them all will cause the player to respawn at the last position they were.
  */
  export function disableHospitalRestart(hospitalIndex: number, toggle: boolean): void;

  export function addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: any): any;

  /**
  * Disables the spawn point at the police house on the specified index.
  * - Nacorpio
  * @param policeIndex The police house index.
  * @param toggle true to enable the spawn point, false to disable.
  */
  export function disablePoliceRestart(policeIndex: number, toggle: boolean): void;

  export function setRestartCustomPosition(x: number, y: number, z: number, heading: number): void;

  export function clearRestartCustomPosition(): void;

  export function pauseDeathArrestRestart(toggle: boolean): void;

  export function ignoreNextRestart(toggle: boolean): void;

  /**
  * Sets whether the game should fade out after the player dies.
  */
  export function setFadeOutAfterDeath(toggle: boolean): void;

  /**
  * Sets whether the game should fade out after the player is arrested.
  */
  export function setFadeOutAfterArrest(toggle: boolean): void;

  /**
  * Sets whether the game should fade in after the player dies or is arrested.
  */
  export function setFadeInAfterDeathArrest(toggle: boolean): void;

  export function setFadeInAfterLoad(toggle: boolean): void;

  export function registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: any, p5: any, p6: any): [any, any];

  export function setSaveHouse(p0: any, p1: boolean, p2: boolean): void;

  export function overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;

  /**
  * GET_SAVE_*
  * GET_SAVE_UNLESS_CUSTOM_DOT ?
  */
  export function _0xA4A0065E39C9F25C(p0: Vector3, p1: number, fadeInAfterLoad: boolean, p3: boolean): [boolean, Vector3, number, boolean, boolean];

  export function doAutoSave(): void;

  /**
  * Returns true if profile setting 208 is equal to 0.
  */
  export function getIsAutoSaveOff(): boolean;

  export function isAutoSaveInProgress(): boolean;

  /**
  * HAS_*
  */
  export function _0x2107A3773771186D(): boolean;

  /**
  * CLEAR_*
  */
  export function _0x06462A961E94B67C(): void;

  export function beginReplayStats(p0: any, p1: any): void;

  export function addReplayStatValue(value: any): void;

  export function endReplayStats(): void;

  export function _0xD642319C54AADEB6(): any;

  export function _0x5B1F2E327B6B6FE1(): any;

  export function getReplayStatMissionType(): number;

  export function getReplayStatCount(): number;

  export function getReplayStatAtIndex(index: number): number;

  export function clearReplayStats(): void;

  export function _0x72DE52178C291CB5(): any;

  /**
  * Shows the screen which is visible before you redo a mission? The game will make a restoration point where you will cameback when the mission is over.
  * Returns 1 if the message isn't currently on screen
  */
  export function _0x44A0BDC559B35F6E(): boolean;

  export function _0xEB2104E905C6F2E9(): any;

  export function _0x2B5E102E4A42F2BF(): any;

  export function isMemoryCardInUse(): boolean;

  export function shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number): void;

  /**
  * @param entity - entity to ignore
  */
  export function shootSingleBulletBetweenCoordsIgnoreEntity(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number, entity: number, p14: any): void;

  /**
  * @param entity - entity to ignore
  */
  export function shootSingleBulletBetweenCoordsIgnoreEntityNew(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number, entity: number, p14: boolean, p15: boolean, p16: boolean, p17: boolean, p18: any, p19: any, p20: any): void;

  /**
  * Gets the dimensions of a model.
  * Calculate (maximum - minimum) to get the size, in which case, Y will be how long the model is.
  * Example from the scripts: MISC::GET_MODEL_DIMENSIONS(ENTITY::GET_ENTITY_MODEL(PLAYER::PLAYER_PED_ID()), &v_1A, &v_17);
  */
  export function getModelDimensions(modelHash: number, minimum: Vector3, maximum: Vector3): [void, Vector3, Vector3];

  /**
  * Sets a visually fake wanted level on the user interface. Used by Rockstar's scripts to "override" regular wanted levels and make custom ones while the real wanted level and multipliers are still in effect.
  * Max is 6, anything above this makes it just 6. Also the mini-map gets the red & blue flashing effect.
  */
  export function setFakeWantedLevel(fakeWantedLevel: number): void;

  export function getFakeWantedLevel(): number;

  /**
  * Returns bit's boolean state from [offset] of [address].
  * Example:
  * To enable and disable bits, see:
  * MISC::SET_BIT(&bitAddress, 1);   // enable
  * MISC::CLEAR_BIT(&bitAddress, 1); // disable
  */
  export function isBitSet(address: number, offset: number): boolean;

  export function usingMissionCreator(toggle: boolean): void;

  export function allowMissionCreatorWarp(toggle: boolean): void;

  export function setMinigameInProgress(toggle: boolean): void;

  export function isMinigameInProgress(): boolean;

  export function isThisAMinigameScript(): boolean;

  export function isSniperInverted(): boolean;

  /**
  * Returns true if the game is using the metric measurement system (profile setting 227), false if imperial is used.
  */
  export function shouldUseMetricMeasurements(): boolean;

  export function getProfileSetting(profileSetting: number): number;

  export function areStringsEqual(string1: string, string2: string): boolean;

  /**
  * Compares two strings up to a specified number of characters.
  * Parameters:
  * Returns:
  * A value indicating the relationship between the strings:
  * <0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'A' < 'B', so result = -1)
  * 0 - The contents of both strings are equal.
  * >0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'B' > 'A', so result = 1)
  * Examples:
  * MISC::COMPARE_STRINGS("STRING", "string", false, -1); // 0; equal
  * See NativeDB for reference: http://natives.altv.mp/#/0x1E34710ECD4AB0EB
  * @param str1 - String to be compared.
  * @param str2 - String to be compared.
  * @param matchCase - Comparison will be case-sensitive.
  * @param maxLength - Maximum number of characters to compare. A value of -1 indicates an infinite length.
  */
  export function compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;

  export function absi(value: number): number;

  export function absf(value: number): number;

  /**
  * Determines whether there is a sniper bullet within the specified coordinates. The coordinates form an axis-aligned bounding box.
  */
  export function isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

  /**
  * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
  * - Nacorpio
  * @param ownedByPlayer = only projectiles fired by the player will be detected.
  */
  export function isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;

  /**
  * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a axis-aligned bounding box.
  */
  export function isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, ownedByPlayer: boolean): boolean;

  /**
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  */
  export function isProjectileTypeInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: any, ownedByPlayer: boolean): boolean;

  export function isProjectileTypeWithinDistance(x: number, y: number, z: number, projectileHash: number, radius: number, ownedByPlayer: boolean): boolean;

  export function getCoordsOfProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, projectileHash: number, projectilePos: Vector3, ownedByPlayer: boolean): [boolean, Vector3];

  export function getCoordsOfProjectileTypeWithinDistance(ped: number, weaponHash: number, radius: number, entity: number, ownedByPlayer: boolean): [Vector3, number];

  /**
  * GET_PROJECTILE_*
  */
  export function getProjectileNearPed(ped: number, weaponhash: number, p2: number, p3: number, p4: number, p5: boolean): boolean;

  /**
  * For projectiles, see: IS_PROJECTILE_TYPE_IN_ANGLED_AREA
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  * Returns True if a bullet, as maintained by a pool within CWeaponManager, has been fired into the defined angled area.
  */
  export function isBulletInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, ownedByPlayer: boolean): boolean;

  export function isBulletInArea(x: number, y: number, z: number, radius: number, ownedByPlayer: boolean): boolean;

  export function isBulletInBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;

  /**
  * @param p3 - possibly radius?
  */
  export function hasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): boolean;

  export function hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;

  /**
  * PS4
  */
  export function isOrbisVersion(): boolean;

  /**
  * XBOX ONE
  */
  export function isDurangoVersion(): boolean;

  export function isXbox360Version(): boolean;

  export function isPs3Version(): boolean;

  export function isPcVersion(): boolean;

  /**
  * if (MISC::IS_AUSSIE_VERSION()) {
  * sub_127a9(&l_31, 1024); // l_31 |= 1024
  * l_129 = 3;
  * sub_129d2("AUSSIE VERSION IS TRUE!?!?!"); // DEBUG
  * }
  * Used to block some of the prostitute stuff due to laws in Australia.
  */
  export function isAussieVersion(): boolean;

  export function isStringNull(string: string): boolean;

  export function isStringNullOrEmpty(string: string): boolean;

  /**
  * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
  * @returns If all checks have passed successfully, the return value will be set to whatever strtol(string, 0i64, 10); returns.
  */
  export function stringToInt(string: string, outInteger: number): [boolean, number];

  export function setBitsInRange(unkVar: number, rangeStart: number, rangeEnd: number, p3: number): [void, number];

  export function getBitsInRange(unkVar: number, rangeStart: number, rangeEnd: number): number;

  /**
  * See description of `ADD_STUNT_JUMP_ANGLED` for detailed info. The only difference really is this one does not have the radius (or angle, not sure) floats parameters for entry and landing zones.
  */
  export function addStuntJump(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, camX: number, camY: number, camZ: number, p15: number, p16: number, p17: number): number;

  /**
  * Creates a new stunt jump.
  * The radius1 and radius2 might actually not be a radius at all, but that's what it seems to me testing them in-game. But they may be 'angle' floats instead, considering this native is named ADD_STUNT_JUMP_**ANGLED**.
  * Info about the specific 'parameter sections':
  * First coordinates are for the jump entry area, and the radius that will be checked around that area. So if you're not exactly within the coordinates, but you are within the outter radius limit then it will still register as entering the stunt jump. Note as mentioned above, the radius is just a guess, I'm not really sure about it's exact purpose.
  * Next part is the landing area, again starting with the left bottom (nearest to the stunt jump entry zone) coordinate, and the second one being the top right furthest away part of the landing area. Followed by another (most likely) radius float, this is usually slightly larger than the entry zone 'radius' float value, just because you have quite a lot of places where you can land (I'm guessing).
  * The final coordinate in this native is the Camera position. Rotation and zoom/FOV is managed by the game itself, you just need to provide the camera location.
  * **unk1, unk2 and unk3:**
  * Not sure what these are for, but they're always `150, 0, 0` in decompiled scripts.
  * Visualized example in-game: https://d.fivem.dev/2019-03-15_18-24_c7802_846.png
  * Here is a list of almost all of the stunt jumps from GTA V (taken from decompiled scripts): https://pastebin.com/EW1jBPkY
  * @param x1 **
  * @param y1 **
  * @param z1 **
  * @param x2 **
  * @param y2 **
  * @param x3 **
  * @param y3 **
  * @param z3 **
  * @param x4 **
  * @param y4 **
  * @param camX **
  */
  export function addStuntJumpAngled(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius1: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, radius2: number, camX: number, camY: number, camZ: number, p17: number, p18: number, p19: number): number;

  /**
  * Toggles some stunt jump stuff.
  */
  export function _0xFB80AB299D2EE1BD(toggle: boolean): void;

  export function deleteStuntJump(p0: number): void;

  export function enableStuntJumpSet(p0: number): void;

  export function disableStuntJumpSet(p0: number): void;

  export function setStuntJumpsCanTrigger(toggle: boolean): void;

  export function isStuntJumpInProgress(): boolean;

  export function isStuntJumpMessageShowing(): boolean;

  export function getNumSuccessfulStuntJumps(): number;

  export function getTotalSuccessfulStuntJumps(): number;

  export function cancelStuntJump(): void;

  /**
  * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused which means you will lose control and the game remains in paused mode until you exit GTA5.exe
  */
  export function setGamePaused(toggle: boolean): void;

  export function setThisScriptCanBePaused(toggle: boolean): void;

  export function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;

  /**
  * INT_SCORES_SCORTED was a hash collision
  * @param hash game. Credits to ThreeSocks for the info. The hash contains the combination, while the "amount" represents the amount of buttons used in a combination. The following page can be used to make a button combination: gta5offset.com/ts/hash/
  */
  export function hasButtonCombinationJustBeenEntered(hash: number, amount: number): boolean;

  /**
  * Get inputted "Cheat code", for example:
  * while (TRUE)
  * {
  * if (MISC::_557E43C447E700A8(${fugitive}))
  * {
  * // Do something.
  * }
  * SYSTEM::WAIT(0);
  * }
  * Calling this will also set the last saved string hash to zero.
  */
  export function hasCheatStringJustBeenEntered(hash: number): boolean;

  export function _0xFA3FFB0EEBC288A3(p0: boolean): void;

  /**
  * Formerly known as _LOWER_MAP_PROP_DENSITY and wrongly due to idiots as _ENABLE_MP_DLC_MAPS.
  * Sets the maximum prop density and changes a loading screen flag from 'loading story mode' to 'loading GTA Online'. Does not touch DLC map data at all.
  * In fact, I doubt this changes the flag whatsoever, that's the OTHER native idiots use together with this that does so, this one only causes a loading screen to show as it reloads map data.
  */
  export function setInstancePriorityMode(p0: number): void;

  /**
  * Sets an unknown flag used by CScene in determining which entities from CMapData scene nodes to draw, similar to SET_INSTANCE_PRIORITY_MODE.
  */
  export function setInstancePriorityHint(flag: number): void;

  export function isFrontendFading(): boolean;

  /**
  * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
  */
  export function populateNow(): void;

  export function getIndexOfCurrentLevel(): number;

  /**
  * 0: 9.8 - normal
  * 1: 2.4 - low
  * 2: 0.1 - very low
  * 3: 0.0 - off
  * //SuckMyCoke
  * @param level can be from 0 to 3
  */
  export function setGravityLevel(level: number): void;

  export function startSaveData(p0: any, p1: any, p2: boolean): [void, any];

  export function stopSaveData(): void;

  export function getSizeOfSaveData(p0: boolean): number;

  export function registerIntToSave(p0: any, name: string): [void, any];

  export function registerInt64ToSave(p0: any, name: string): [void, any];

  export function registerEnumToSave(p0: any, name: string): [void, any];

  export function registerFloatToSave(p0: any, name: string): [void, any];

  export function registerBoolToSave(p0: any, name: string): [void, any];

  export function registerTextLabelToSave(p0: any, name: string): [void, any];

  /**
  * Seems to have the same functionality as REGISTER_TEXT_LABEL_TO_SAVE?
  * MISC::_6F7794F28C6B2535(&a_0._f1, "tlPlateText");
  * MISC::_6F7794F28C6B2535(&a_0._f1C, "tlPlateText_pending");
  * MISC::_6F7794F28C6B2535(&a_0._f10B, "tlCarAppPlateText");
  * "tl" prefix sounds like "Text Label"
  */
  export function registerTextLabelToSave2(p0: any, name: string): [void, any];

  /**
  * Only found 3 times in decompiled scripts. Not a whole lot to go off of.
  * MISC::_48F069265A0E4BEC(a_0, "Movie_Name_For_This_Player");
  * MISC::_48F069265A0E4BEC(&a_0._fB, "Ringtone_For_This_Player");
  * MISC::_48F069265A0E4BEC(&a_0._f1EC4._f12[v_A6], &v_13); // where v_13 is "MPATMLOGSCRS0" thru "MPATMLOGSCRS15"
  */
  export function _0x48F069265A0E4BEC(p0: any, name: string): [void, any];

  /**
  * Only found 2 times in decompiled scripts. Not a whole lot to go off of.
  * MISC::_8269816F6CFD40F8(&a_0._f1F5A._f6[08], "TEMPSTAT_LABEL"); // gets saved in a struct called "g_SaveData_STRING_ScriptSaves"
  * MISC::_8269816F6CFD40F8(&a_0._f4B4[v_1A8], &v_5); // where v_5 is "Name0" thru "Name9", gets saved in a struct called "OUTFIT_Name"
  */
  export function _0x8269816F6CFD40F8(p0: any, name: string): [void, any];

  /**
  * Another unknown label type...
  * MISC::_FAA457EF263E8763(a_0, "Thumb_label");
  * MISC::_FAA457EF263E8763(&a_0._f10, "Photo_label");
  * MISC::_FAA457EF263E8763(a_0, "GXTlabel");
  * MISC::_FAA457EF263E8763(&a_0._f21, "StringComp");
  * MISC::_FAA457EF263E8763(&a_0._f43, "SecondStringComp");
  * MISC::_FAA457EF263E8763(&a_0._f53, "ThirdStringComp");
  * MISC::_FAA457EF263E8763(&a_0._f32, "SenderStringComp");
  * MISC::_FAA457EF263E8763(&a_0._f726[v_1A16], &v_20); // where v_20 is "LastJobTL_0_1" thru "LastJobTL_2_1", gets saved in a struct called "LAST_JobGamer_TL"
  * See NativeDB for reference: http://natives.altv.mp/#/0xFAA457EF263E8763
  */
  export function _0xFAA457EF263E8763(p0: any, name: string): [void, any];

  export function startSaveStructWithSize(p0: any, size: number, structName: string): [void, any];

  export function stopSaveStruct(): void;

  export function startSaveArrayWithSize(p0: any, size: number, arrayName: string): [void, any];

  export function stopSaveArray(): void;

  export function copyMemory(dst: any, src: any, size: number): [void, any, any];

  /**
  * https://alloc8or.re/gta5/doc/enums/DispatchType.txt
  */
  export function enableDispatchService(dispatchService: number, toggle: boolean): void;

  export function blockDispatchServiceResourceCreation(dispatchService: number, toggle: boolean): void;

  export function getNumDispatchedUnitsForPlayer(dispatchService: number): number;

  /**
  * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
  * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
  * Side Note 2: I say it breaks as if you call this proper,
  * =====================================================
  * @returns if(CREATE_INCIDENT) etc it will return false if you do as I said above.
  */
  export function createIncident(dispatchService: number, x: number, y: number, z: number, numUnits: number, radius: number, outIncidentID: number, p7: any, p8: any): [boolean, number];

  /**
  * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades & Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
  * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
  * Side Note 2: I say it breaks as if you call this proper,
  * =====================================================
  * @returns if(CREATE_INCIDENT) etc it will return false if you do as I said above.
  */
  export function createIncidentWithEntity(dispatchService: number, ped: number, numUnits: number, radius: number, outIncidentID: number, p5: any, p6: any): [boolean, number];

  /**
  * Delete an incident with a given id.
  * =======================================================
  * Correction, I have change this to int, instead of int*
  * as it doesn't use a pointer to the createdIncident.
  * If you try it you will crash (or) freeze.
  * =======================================================
  */
  export function deleteIncident(incidentId: number): void;

  /**
  * =======================================================
  * Correction, I have change this to int, instead of int*
  * as it doesn't use a pointer to the createdIncident.
  * If you try it you will crash (or) freeze.
  * =======================================================
  */
  export function isIncidentValid(incidentId: number): boolean;

  export function setIncidentRequestedUnits(incidentId: number, dispatchService: number, numUnits: number): void;

  /**
  * SET_INCIDENT_*
  */
  export function setIncidentUnk(incidentId: number, p1: number): void;

  /**
  * Finds a position ahead of the player by predicting the players next actions.
  * The positions match path finding node positions.
  * When roads diverge, the position may rapidly change between two or more positions. This is due to the engine not being certain of which path the player will take.
  * =======================================================
  * I may sort this with alter research, but if someone
  * already knows please tell what the difference in
  * X2, Y2, Z2 is. I doubt it's rotation. Is it like
  * checkpoints where X1, Y1, Z1 is your/a position and
  * X2, Y2, Z2 is a given position ahead of that position?
  * =======================================================
  */
  export function findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number, spawnPoint: Vector3): [boolean, Vector3];

  export function addPopMultiplierArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number, p7: number, p8: boolean, p9: boolean): number;

  export function doesPopMultiplierAreaExist(id: number): boolean;

  export function removePopMultiplierArea(id: number, p1: boolean): void;

  export function isPopMultiplierAreaUnk(id: number): boolean;

  /**
  * @returns This native is adding a zone, where you can change density settings. For example, you can add a zone on 0.0, 0.0, 0.0 with radius 900.0 and vehicleMultiplier 0.0, and you will not see any new population vehicle spawned in a radius of 900.0 from 0.0, 0.0, 0.0. Returns the id. You can have only 15 zones at the same time. You can remove zone using REMOVE_POP_MULTIPLIER_SPHERE
  */
  export function addPopMultiplierSphere(x: number, y: number, z: number, radius: number, pedMultiplier: number, vehicleMultiplier: number, p6: boolean, p7: boolean): number;

  export function doesPopMultiplierSphereExist(id: number): boolean;

  /**
  * Removes population multiplier sphere
  */
  export function removePopMultiplierSphere(id: number, p1: boolean): void;

  /**
  * Makes the ped jump around like they're in a tennis match
  */
  export function enableTennisMode(ped: number, toggle: boolean, p2: boolean): void;

  export function isTennisMode(ped: number): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function playTennisSwingAnim(ped: number, animDict: string, animName: string, p3: number, p4: number, p5: boolean): void;

  export function getTennisSwingAnimComplete(ped: number): boolean;

  /**
  * Related to tennis mode.
  * GET_TENNIS_*
  */
  export function _0x19BFED045C647C49(ped: number): boolean;

  /**
  * Related to tennis mode.
  * GET_TENNIS_*
  */
  export function _0xE95B0C7D5BA3B96B(ped: number): boolean;

  export function playTennisDiveAnim(ped: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;

  /**
  * From the scripts:
  * MISC::_54F157E0336A3822(sub_aa49(a_0), "ForcedStopDirection", v_E);
  * Related to tennis mode.
  * SET_*
  */
  export function _0x54F157E0336A3822(ped: number, p1: string, p2: number): void;

  export function resetDispatchSpawnLocation(): void;

  export function setDispatchSpawnLocation(x: number, y: number, z: number): void;

  export function resetDispatchIdealSpawnDistance(): void;

  export function setDispatchIdealSpawnDistance(p0: number): void;

  export function resetDispatchTimeBetweenSpawnAttempts(p0: any): void;

  export function setDispatchTimeBetweenSpawnAttempts(p0: any, p1: number): void;

  export function setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: any, p1: number): void;

  /**
  * To remove, see: REMOVE_DISPATCH_SPAWN_BLOCKING_AREA
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  */
  export function addDispatchSpawnBlockingAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): any;

  export function addDispatchSpawnBlockingArea(x1: number, y1: number, x2: number, y2: number): any;

  export function removeDispatchSpawnBlockingArea(p0: any): void;

  export function resetDispatchSpawnBlockingAreas(): void;

  /**
  * RESET_*
  */
  export function _0xD9F692D349249528(): void;

  /**
  * SET_*
  */
  export function _0xE532EC1A63231B4F(p0: number, p1: number): void;

  /**
  * Adds a point related to CTacticalAnalysis
  */
  export function addTacticalAnalysisPoint(x: number, y: number, z: number): void;

  export function clearTacticalAnalysisPoints(): void;

  /**
  * Activates (usused?) riot mode. All NPCs are being hostile to each other (including player). Also the game will give weapons (pistols, smgs) to random NPCs.
  */
  export function setRiotModeEnabled(toggle: boolean): void;

  export function displayOnscreenKeyboardWithLongerInitialString(p0: number, windowTitle: string, p2: any, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): [void, any];

  /**
  * sfink: note, p0 is set to 6 for PC platform in at least 1 script, or to `unk::_get_ui_language_id() == 0` otherwise.
  * NOTE: windowTitle uses text labels, and an invalid value will display nothing.
  * www.gtaforums.com/topic/788343-vrel-script-hook-v/?p=1067380474
  * windowTitle's
  * -----------------
  * CELL_EMAIL_BOD  =   "Enter your Eyefind message"
  * CELL_EMAIL_BODE =   "Message too long. Try again"
  * CELL_EMAIL_BODF    =   "Forbidden message. Try again"
  * CELL_EMAIL_SOD    =   "Enter your Eyefind subject"
  * See NativeDB for reference: http://natives.altv.mp/#/0x00DC833F2568DBF6
  */
  export function displayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void;

  /**
  * Returns the current status of the onscreen keyboard, and updates the output.
  * Status Codes:
  * -1: Keyboard isn't active
  * 0: User still editing
  * 1: User has finished editing
  * 2: User has canceled editing
  */
  export function updateOnscreenKeyboard(): number;

  export function getOnscreenKeyboardResult(): string;

  /**
  * DO NOT use this as it doesn't clean up the text input box properly and your script will get stuck in the UPDATE_ONSCREEN_KEYBOARD() loop.
  * Use _FORCE_CLOSE_TEXT_INPUT_BOX instead.
  * CANCEL_*
  */
  export function cancelOnscreenKeyboard(): void;

  /**
  * Called before calling DISPLAY_ONSCREEN_KEYBOARD if the input needs to be saved.
  * @param p0 was always 2 in R* scripts.
  */
  export function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(p0: number): void;

  /**
  * Appears to remove stealth kill action from memory
  */
  export function removeStealthKill(hash: number, p1: boolean): void;

  /**
  * Unsure about the use of this native but here's an example:
  * void sub_8709() {
  * MISC::_1EAE0A6E978894A2(0, 1);
  * MISC::_1EAE0A6E978894A2(1, 1);
  * MISC::_1EAE0A6E978894A2(2, 1);
  * MISC::_1EAE0A6E978894A2(3, 1);
  * MISC::_1EAE0A6E978894A2(4, 1);
  * MISC::_1EAE0A6E978894A2(5, 1);
  * MISC::_1EAE0A6E978894A2(6, 1);
  * See NativeDB for reference: http://natives.altv.mp/#/0x1EAE0A6E978894A2
  */
  export function _0x1EAE0A6E978894A2(p0: number, p1: boolean): void;

  export function setExplosiveAmmoThisFrame(player: number): void;

  export function setFireAmmoThisFrame(player: number): void;

  export function setExplosiveMeleeThisFrame(player: number): void;

  export function setSuperJumpThisFrame(player: number): void;

  export function setBeastModeActive(player: number): void;

  export function setForcePlayerToJump(player: number): void;

  /**
  * HAS_*
  * Probably something like "has game been started for the first time".
  */
  export function _0x6FDDF453C0C756EC(): boolean;

  export function _0xFB00CA71DA386228(): void;

  export function areProfileSettingsValid(): boolean;

  /**
  * sets something to 1
  */
  export function _0xE3D969D2785FFB5E(): void;

  /**
  * Sets the localplayer playerinfo state back to playing (State 0)
  * States are:
  * -1: "Invalid"
  * 0: "Playing"
  * 1: "Died"
  * 2: "Arrested"
  * 3: "Failed Mission"
  * 4: "Left Game"
  * 5: "Respawn"
  * 6: "In MP Cutscene"
  */
  export function forceGameStatePlaying(): void;

  export function scriptRaceInit(p0: any, p1: any, p2: any, p3: any): void;

  export function scriptRaceShutdown(): void;

  /**
  * SCRIPT_RACE_*
  */
  export function _0x1BB299305C3E8C13(p0: any, p1: any, p2: any, p3: any): void;

  export function scriptRaceGetPlayerSplitTime(player: number, p1: number, p2: number): [boolean, number, number];

  /**
  * Begins with START_*. Next character in the name is either D or E.
  */
  export function startBenchmarkRecording(): void;

  /**
  * Begins with STOP_*. Next character in the name is either D or E.
  */
  export function stopBenchmarkRecording(): void;

  /**
  * Begins with RESET_*. Next character in the name is either D or E.
  */
  export function resetBenchmarkRecording(): void;

  /**
  * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\GTA V\Benchmarks and submits some metrics.
  */
  export function saveBenchmarkRecording(): void;

  /**
  * Returns true if the current frontend menu is FE_MENU_VERSION_SP_PAUSE
  * U*
  */
  export function uiIsSingleplayerPauseMenuActive(): boolean;

  /**
  * Returns true if the current frontend menu is FE_MENU_VERSION_LANDING_MENU
  */
  export function landingMenuIsActive(): boolean;

  /**
  * Returns true if command line option '-benchmark' is set.
  */
  export function isCommandLineBenchmarkValueSet(): boolean;

  /**
  * Returns value of the '-benchmarkIterations' command line option.
  */
  export function getBenchmarkIterationsFromCommandLine(): number;

  /**
  * Returns value of the '-benchmarkPass' command line option.
  */
  export function getBenchmarkPassFromCommandLine(): number;

  /**
  * In singleplayer it does exactly what the name implies. In FiveM / GTA:Online it shows `Disconnecting from GTA Online` HUD and then quits the game.
  */
  export function restartGame(): void;

  /**
  * Exits the game and downloads a fresh social club update on next restart.
  */
  export function forceSocialClubUpdate(): void;

  export function hasAsyncInstallFinished(): boolean;

  export function cleanupAsyncInstall(): void;

  /**
  * aka "constrained"
  */
  export function isInPowerSavingMode(): boolean;

  /**
  * Returns duration of how long the game has been in power-saving mode (aka "constrained") in milliseconds.
  */
  export function getPowerSavingModeDuration(): number;

  /**
  * If toggle is true, the ped's head is shown in the pause menu
  * If toggle is false, the ped's head is not shown in the pause menu
  */
  export function setPlayerIsInAnimalForm(toggle: boolean): void;

  /**
  * Although we don't have a jenkins hash for this one, the name is 100% confirmed.
  */
  export function getIsPlayerInAnimalForm(): boolean;

  /**
  * SET_PLAYER_*
  */
  export function setPlayerRockstarEditorDisabled(toggle: boolean): void;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x23227DF0B2115469(): void;

  export function _0xD10282B6E3751BA0(): any;

  export function _0x693478ACBD7F18E7(): void;

  /**
  * Creates a mobile phone of the specified type.
  * Possible phone types:
  * 0 - Default phone / Michael's phone
  * 1 - Trevor's phone
  * 2 - Franklin's phone
  * 4 - Prologue phone
  * These values represent bit flags, so a value of '3' would toggle Trevor and Franklin's phones together, causing unexpected behavior and most likely crash the game.
  */
  export function createMobilePhone(phoneType: number): void;

  /**
  * Destroys the currently active mobile phone.
  */
  export function destroyMobilePhone(): void;

  /**
  * The minimum/default is 500.0f. If you plan to make it bigger set it's position as well. Also this seems to need to be called in a loop as when you close the phone the scale is reset. If not in a loop you'd need to call it everytime before you re-open the phone.
  */
  export function setMobilePhoneScale(scale: number): void;

  /**
  * Last parameter is unknown and always zero.
  */
  export function setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: any): void;

  export function getMobilePhoneRotation(rotation: Vector3, p1: number): [void, Vector3];

  export function setMobilePhonePosition(posX: number, posY: number, posZ: number): void;

  export function getMobilePhonePosition(position: Vector3): [void, Vector3];

  /**
  * If bool Toggle = true so the mobile is hide to screen.
  * If bool Toggle = false so the mobile is show to screen.
  */
  export function scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;

  /**
  * I can confirm the above. This function is hard-coded to always return 1.
  * @returns This one is weird and seems to return a TRUE state regardless of whether the phone is visible on screen or tucked away.
  */
  export function canPhoneBeSeenOnScreen(): boolean;

  export function setMobilePhoneUnk(toggle: boolean): void;

  /**
  * For move the finger of player, the value of int goes 1 at 5.
  */
  export function cellCamMoveFinger(direction: number): void;

  /**
  * if the bool "Toggle" is "true" so the phone is lean.
  * if the bool "Toggle" is "false" so the phone is not lean.
  */
  export function cellCamSetLean(toggle: boolean): void;

  export function cellCamActivate(p0: boolean, p1: boolean): void;

  /**
  * Disables the phone up-button, oddly enough.
  * i.e.: When the phone is out, and this method is called with false as it's parameter, the phone will not be able to scroll up. However, when you use the down arrow key, it's functionality still, works on the phone.
  * When the phone is not out, and this method is called with false as it's parameter, you will not be able to bring up the phone. Although the up arrow key still works for whatever functionality it's used for, just not for the phone.
  * This can be used for creating menu's when trying to disable the phone from being used.
  * You do not have to call the function again with false as a parameter, as soon as the function stops being called, the phone will again be usable.
  */
  export function cellCamDisableThisFrame(toggle: boolean): void;

  /**
  * Needs more research. If the "phone_cam12" filter is applied, this function is called with "TRUE"; otherwise, "FALSE".
  * Example (XBOX 360):
  * // check current filter selection
  * if (MISC::ARE_STRINGS_EQUAL(getElem(g_2471024, &l_17, 4), "phone_cam12") != 0)
  * {
  * MOBILE::_0xC273BB4D(0); // FALSE
  * }
  * else
  * {
  * See NativeDB for reference: http://natives.altv.mp/#/0xA2CCBE62CD4C91A4
  */
  export function _0xA2CCBE62CD4C91A4(toggle: number): [void, number];

  export function _0x1B0B4AEED5B9B41C(p0: number): void;

  export function _0x53F4892D18EC90A4(p0: number): void;

  export function _0x3117D84EFA60F77B(p0: number): void;

  export function _0x15E69E2802C24B8D(p0: number): void;

  export function _0xAC2890471901861C(p0: number): void;

  export function _0xD6ADE981781FCA09(p0: number): void;

  export function _0xF1E22DC13F5EEBAD(p0: number): void;

  export function _0x466DA42C89865553(p0: number): void;

  export function cellCamIsCharVisibleNoFaceCheck(entity: number): boolean;

  export function getMobilePhoneRenderId(renderId: number): [void, number];

  export function networkInitializeCash(wallet: number, bank: number): void;

  /**
  * Note the 2nd parameters are always 1, 0. I have a feeling it deals with your money, wallet, bank. So when you delete the character it of course wipes the wallet cash at that time. So if that was the case, it would be eg, NETWORK_DELETE_CHARACTER(characterIndex, deleteWalletCash, deleteBankCash);
  */
  export function networkDeleteCharacter(characterSlot: number, p1: boolean, p2: boolean): void;

  export function networkManualDeleteCharacter(characterSlot: number): void;

  export function networkGetIsHighEarner(): boolean;

  export function networkClearCharacterWallet(characterSlot: number): void;

  export function networkGivePlayerJobshareCash(amount: number, networkHandle: number): [void, number];

  export function networkReceivePlayerJobshareCash(value: number, networkHandle: number): [void, number];

  export function networkCanShareJobCash(): boolean;

  /**
  * index
  * -------
  * See function sub_1005 in am_boat_taxi.ysc
  * context
  * ----------
  * "BACKUP_VAGOS"
  * "BACKUP_LOST"
  * "BACKUP_FAMILIES"
  * "HIRE_MUGGER"
  * See NativeDB for reference: http://natives.altv.mp/#/0xF9C812CD7C46E817
  */
  export function networkRefundCash(index: number, context: string, reason: string, unk: boolean): void;

  export function networkDeductCash(amount: number, p1: string, p2: string, p3: boolean, p4: boolean, p5: boolean): void;

  export function networkMoneyCanBet(amount: number, p1: boolean, p2: boolean): boolean;

  export function networkCanBet(amount: number): boolean;

  export function networkCanBuyLotteryTicket(cost: number): boolean;

  /**
  * GTAO_CASINO_HOUSE
  * GTAO_CASINO_INSIDETRACK
  * GTAO_CASINO_LUCKYWHEEL
  * GTAO_CASINO_BLACKJACK
  * GTAO_CASINO_ROULETTE
  * GTAO_CASINO_SLOTS
  * GTAO_CASINO_PURCHASE_CHIPS
  * NETWORK_C*
  */
  export function networkCasinoCanUseGamblingType(hash: number): boolean;

  /**
  * Same as 0x8968D4D8C6C40C11.
  * NETWORK_C*
  */
  export function networkCasinoCanPurchaseChipsWithPvc(): boolean;

  /**
  * NETWORK_C*
  */
  export function networkCasinoCanGamble(p0: any): boolean;

  /**
  * Same as 0x394DCDB9E836B7A9.
  * NETWORK_C*
  */
  export function networkCasinoCanPurchaseChipsWithPvc2(): boolean;

  /**
  * NETWORK_C*
  */
  export function networkCasinoPurchaseChips(p0: number, p1: number): boolean;

  /**
  * NETWORK_C*
  */
  export function networkCasinoSellChips(p0: number, p1: number): boolean;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0xCD0F5B5D932AE473(): void;

  /**
  * CAN_*
  */
  export function canPayGoon(p0: number, p1: number, amount: number, p3: number): [boolean, number];

  export function networkEarnFromCashingOut(amount: number): void;

  export function networkEarnFromPickup(amount: number): void;

  export function networkEarnFromGangPickup(amount: number): void;

  export function networkEarnFromAssassinateTargetKilled(amount: number): void;

  /**
  * For the money bags that drop a max of $40,000. Often called 40k bags.
  * Most likely NETWORK_EARN_FROM_ROB***
  */
  export function networkEarnFromArmourTruck(amount: number): void;

  export function networkEarnFromCrateDrop(amount: number): void;

  export function networkEarnFromBetting(amount: number, p1: string): void;

  export function networkEarnFromJob(amount: number, p1: string): void;

  export function networkEarnFromJobX2(amount: number, p1: string): void;

  export function networkEarnFromPremiumJob(amount: number, p1: string): void;

  export function networkEarnFromBendJob(amount: number, heistHash: string): void;

  export function networkEarnFromChallengeWin(p0: any, p1: any, p2: boolean): [void, any];

  export function networkEarnFromBounty(amount: number, networkHandle: number, p2: any, p3: any): [void, number, any];

  export function networkEarnFromImportExport(amount: number, modelHash: number): void;

  export function networkEarnFromHoldups(amount: number): void;

  export function networkEarnFromProperty(amount: number, propertyName: number): void;

  /**
  * DSPORT
  */
  export function networkEarnFromAiTargetKill(p0: any, p1: any): void;

  export function networkEarnFromNotBadsport(amount: number): void;

  export function networkEarnFromRockstar(amount: number): void;

  export function networkEarnFromVehicle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;

  export function networkEarnFromPersonalVehicle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;

  export function networkEarnFromDailyObjectives(p0: number, p1: string, p2: number): void;

  /**
  * Example for p1: "AM_DISTRACT_COPS"
  */
  export function networkEarnFromAmbientJob(p0: number, p1: string, p2: any): [void, any];

  export function _0xD20D79671A598594(p0: any, p1: any, p2: any): void;

  export function networkEarnFromJobBonus(p0: any, p1: any, p2: any): [void, any, any];

  export function networkEarnJobBonusHeistAward(p0: any, p1: any, p2: any): void;

  export function networkEarnJobBonusFirstTimeBonus(p0: any, p1: any, p2: any): void;

  export function networkEarnGoon(p0: any, p1: any, p2: any): void;

  export function networkEarnBoss(p0: any, p1: any, p2: any): void;

  export function networkEarnBossAgency(p0: any, p1: any, p2: any, p3: any): void;

  export function networkEarnFromWarehouse(amount: number, id: number): void;

  export function networkEarnFromContraband(amount: number, p1: any): void;

  export function networkEarnFromDestroyingContraband(p0: any): void;

  export function _0x6B7E4FB50D5F3D65(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0x31BA138F6304FB9F(p0: any, p1: any): void;

  export function _0x55A1E095DB052FA5(p0: any, p1: any): void;

  export function networkEarnFromBusinessProduct(amount: number, p1: any, p2: any, p3: any): void;

  export function networkEarnFromVehicleExport(amount: number, p1: any, p2: any): void;

  export function networkEarnFromSmuggling(amount: number, p1: any, p2: any, p3: any): void;

  export function networkEarnBountyHunterReward(p0: any): void;

  export function networkEarnFromBusinessBattle(p0: any): void;

  export function networkEarnFromClubManagementParticipation(p0: any): void;

  export function networkEarnFromFmbbPhonecallMission(p0: any): void;

  export function networkEarnFromBusinessHubSell(p0: any, p1: any, p2: any): void;

  export function networkEarnFromFmbbBossWork(p0: any): void;

  export function networkEarnFmbbWageBonus(p0: any): void;

  export function networkCanSpendMoney(p0: any, p1: boolean, p2: boolean, p3: boolean, p4: any, p5: any): boolean;

  /**
  * NETWORK_CAN_R??? or NETWORK_CAN_S???
  */
  export function networkCanSpendMoney2(p0: any, p1: boolean, p2: boolean, p3: boolean, p4: any, p5: any, p6: any): [boolean, any];

  export function networkBuyItem(amount: number, item: number, p2: any, p3: any, p4: boolean, item_name: string, p6: any, p7: any, p8: any, p9: boolean): void;

  export function networkSpentTaxi(amount: number, p1: boolean, p2: boolean): void;

  export function networkPayEmployeeWage(p0: any, p1: boolean, p2: boolean): void;

  export function networkPayUtilityBill(amount: number, p1: boolean, p2: boolean): void;

  export function networkPayMatchEntryFee(amount: number, matchId: string, p2: boolean, p3: boolean): void;

  export function networkSpentBetting(amount: number, p1: number, matchId: string, p3: boolean, p4: boolean): void;

  export function networkSpentWager(p0: any, p1: any, amount: number): void;

  export function networkSpentInStripclub(p0: any, p1: boolean, p2: any, p3: boolean): void;

  export function networkBuyHealthcare(cost: number, p1: boolean, p2: boolean): void;

  /**
  * @param p1 = 0 (always)
  * @param p2 = 1 (always)
  */
  export function networkBuyAirstrike(cost: number, p1: boolean, p2: boolean): void;

  export function networkBuyBackupGang(p0: number, p1: number, p2: boolean, p3: boolean): void;

  /**
  * @param p1 = 0 (always)
  * @param p2 = 1 (always)
  */
  export function networkBuyHeliStrike(cost: number, p1: boolean, p2: boolean): void;

  export function networkSpentAmmoDrop(p0: any, p1: boolean, p2: boolean): void;

  /**
  * @param victim is just an assumption. p2 was false and p3 was true.
  */
  export function networkBuyBounty(amount: number, victim: number, p2: boolean, p3: boolean): void;

  export function networkBuyProperty(cost: number, propertyName: number, p2: boolean, p3: boolean): void;

  export function networkBuySmokes(p0: number, p1: boolean, p2: boolean): void;

  export function networkSpentHeliPickup(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentBoatPickup(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentBullShark(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentCashDrop(amount: number, p1: boolean, p2: boolean): void;

  /**
  * Only used once in a script (am_contact_requests)
  * @param p1 = 0
  * @param p2 = 1
  */
  export function networkSpentHireMugger(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentRobbedByMugger(amount: number, p1: boolean, p2: boolean): void;

  export function networkSpentHireMercenary(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentBuyWantedlevel(p0: any, p1: any, p2: boolean, p3: boolean): [void, any];

  export function networkSpentBuyOfftheradar(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentBuyRevealPlayers(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentCarwash(p0: any, p1: any, p2: any, p3: boolean, p4: boolean): void;

  export function networkSpentCinema(p0: any, p1: any, p2: boolean, p3: boolean): void;

  export function networkSpentTelescope(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentHoldups(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentBuyPassiveMode(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentBankInterest(p0: number, p1: boolean, p2: boolean): void;

  export function networkSpentProstitutes(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentArrestBail(p0: any, p1: boolean, p2: boolean): void;

  /**
  * According to how I understood this in the freemode script alone,
  * The second parameter whoever put it was right, they call GET_ENTITY_MODEL with the vehicle as the paremeter.
  * The third parameter is the network handle as they call their little struct<13> func or atleast how the script decompiled it to look which in lamens terms just returns the network handle of the previous owner based on DECOR_GET_INT(vehicle, "Previous_Owner").
  * The fourth parameter is a bool that returns true/false depending on if your bank balance is greater then 0.
  * The fifth and last parameter is a bool that returns true/false depending on if you have the money for the car based on the cost returned by func_5749. In the freemode script eg,
  * bool hasTheMoney = MONEY::_GET_BANK_BALANCE() < carCost.
  * @returns The first parameter is determined by a function named, func_5749 within the freemode script which has a list of all the vehicles and a set price to return which some vehicles deals with globals as well. So the first parameter is basically the set in stone insurance cost it's gonna charge you for that specific vehicle model.
  */
  export function networkSpentPayVehicleInsurancePremium(amount: number, vehicleModel: number, networkHandle: number, notBankrupt: boolean, hasTheMoney: boolean): [void, number];

  export function networkSpentCallPlayer(p0: any, p1: any, p2: boolean, p3: boolean): [void, any];

  export function networkSpentBounty(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentFromRockstar(p0: number, p1: boolean, p2: boolean): void;

  export function _0x9B5016A6433A68C5(): any;

  /**
  * This isn't a hash collision.
  */
  export function processCashGift(p0: number, p1: number, p2: string): [string, number, number];

  export function _0xCD4D66B43B1DD28D(p0: any, p1: any, p2: any): void;

  export function networkSpentPlayerHealthcare(p0: number, p1: number, p2: boolean, p3: boolean): void;

  export function networkSpentNoCops(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentRequestJob(p0: any, p1: boolean, p2: boolean): void;

  export function networkSpentRequestHeist(p0: any, p1: boolean, p2: boolean): void;

  export function networkBuyLotteryTicket(p0: number, p1: number, p2: boolean, p3: boolean): void;

  /**
  * The last 3 parameters are,
  * 2,0,1 in the am_ferriswheel.c
  * 1,0,1 in the am_rollercoaster.c
  * @returns The first parameter is the amount spent which is store in a global when this native is called. The global returns 10. Which is the price for both rides.
  */
  export function networkBuyFairgroundRide(amount: number, p1: any, p2: boolean, p3: boolean): void;

  export function _0x7C4FCCD2E4DEB394(): boolean;

  export function networkSpentJobSkip(amount: number, matchId: string, p2: boolean, p3: boolean): void;

  export function networkSpentBoss(amount: number, p1: boolean, p2: boolean): boolean;

  export function networkSpentPayGoon(p0: number, p1: number, amount: number): void;

  export function _0xDBC966A01C02BCA7(p0: any, p1: any, p2: any): void;

  export function networkSpentMoveYacht(amount: number, p1: boolean, p2: boolean): void;

  export function _0xFC4EE00A7B3BFB76(p0: any, p1: any, p2: any): void;

  export function networkBuyContraband(p0: number, p1: number, p2: number, p3: boolean, p4: boolean): void;

  export function networkSpentVipUtilityCharges(p0: any, p1: any, p2: any): void;

  export function _0x112209CE0290C03A(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xED5FD7AF10F5E262(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x0D30EB83668E63C5(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentPaServiceDancer(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xE23ADC6FCB1F29AE(p0: any, p1: any, p2: any): void;

  export function networkSpentPaServiceHeliPickup(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x69EF772B192614C1(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x8E243837643D9583(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xBD0EFB25CCA8F97A(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xA95F667A755725DA(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentPurchaseWarehouse(amount: number, data: any, p2: boolean, p3: boolean): [void, any];

  export function _0x4128464231E3CA0B(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x2FAB6614CE22E196(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentOrderWarehouseVehicle(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentOrderBodyguardVehicle(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentJukebox(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x998E18CEB44487FC(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xFA07759E6FDDD7CF(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x6FD97159FE3C971A(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x675D19C6067CAE08(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xA51B086B0B2C0F7A(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentBaService(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function networkSpentBusiness(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x5F456788B05FAEAC(p0: any, p1: any, p2: any): void;

  export function networkSpentVehicleExportMods(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  export function _0xB4C2EC463672474E(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x2AFC2D19B50797F2(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentImportExportRepair(p0: any, p1: any, p2: any): void;

  export function networkSpentPurchaseHangar(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentUpgradeHangar(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentHangarUtilityCharges(amount: number, p1: boolean, p2: boolean): void;

  export function networkSpentHangarStaffCharges(amount: number, p1: boolean, p2: boolean): void;

  export function networkSpentBuyTruck(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentUpgradeTruck(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentBuyBunker(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentUpgradeBunker(p0: any, p1: any, p2: any, p3: any): void;

  export function networkEarnFromSellBunker(amount: number, bunkerHash: number): void;

  export function networkSpentBallisticEquipment(amount: number, p1: boolean, p2: boolean): void;

  export function networkEarnFromRdrBonus(amount: number, p1: any): void;

  export function networkEarnFromWagePayment(amount: number): void;

  export function networkEarnFromWagePaymentBonus(amount: number): void;

  export function networkSpentBuyBase(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentUpgradeBase(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentBuyTiltrotor(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentUpgradeTiltrotor(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentEmployAssassins(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentGangopsCannon(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentGangopsStartMission(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentCasinoHeistSkipMission(p0: any, p1: any, p2: any, p3: any): void;

  export function networkEarnFromSellBase(amount: number, baseNameHash: number): void;

  export function networkEarnFromTargetRefund(amount: number, p1: number): void;

  export function networkEarnFromGangopsWages(amount: number, p1: number): void;

  export function networkEarnFromGangopsWagesBonus(amount: number, p1: number): void;

  export function networkEarnFromDarChallenge(amount: number, p1: any): void;

  export function networkEarnFromDoomsdayFinaleBonus(amount: number, vehicleHash: number): void;

  export function networkEarnFromGangopsAwards(amount: number, unk: string, p2: any): void;

  export function networkEarnFromGangopsElite(amount: number, unk: string, actIndex: number): void;

  export function networkRivalDeliveryCompleted(earnedMoney: number): void;

  export function networkSpentGangopsStartStrand(type: number, amount: number, p2: boolean, p3: boolean): void;

  export function networkSpentGangopsTripSkip(amount: number, p1: boolean, p2: boolean): void;

  export function networkEarnFromGangopsJobsPrepParticipation(amount: number): void;

  export function networkEarnFromGangopsJobsSetup(amount: number, unk: string): void;

  export function networkEarnFromGangopsJobsFinale(amount: number, unk: string): void;

  export function _0x2A7CEC72C3443BCC(p0: any, p1: any, p2: any): void;

  export function _0xE0F82D68C7039158(p0: any): void;

  export function _0xB4DEAE67F35E2ACD(p0: any): void;

  export function networkEarnFromBbEventBonus(amount: number): void;

  export function _0x2A93C46AAB1EACC9(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x226C284C830D0CA8(p0: any, p1: any, p2: any, p3: any): void;

  export function networkEarnFromHackerTruckMission(p0: any, amount: number, p2: any, p3: any): void;

  export function _0xED76D195E6E3BF7F(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x1DC9B749E7AE282B(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xC6E74CF8C884C880(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function _0x65482BFD0923C8A1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function networkSpentRdrhatchetBonus(amount: number, p1: boolean, p2: boolean): void;

  export function networkSpentNightclubEntryFee(player: number, amount: number, p1: any, p2: boolean, p3: boolean): void;

  export function networkSpentNightclubBarDrink(amount: number, p1: any, p2: boolean, p3: boolean): void;

  export function networkSpentBountyHunterMission(amount: number, p1: boolean, p2: boolean): void;

  export function networkSpentRehireDj(amount: number, p1: any, p2: boolean, p3: boolean): void;

  export function networkSpentArenaJoinSpectator(amount: number, p1: any, p2: boolean, p3: boolean): void;

  export function networkEarnFromArenaSkillLevelProgression(amount: number, p1: any): void;

  export function networkEarnFromArenaCareerProgression(amount: number, p1: any): void;

  export function networkSpentMakeItRain(amount: number, p1: boolean, p2: boolean): void;

  export function networkSpentBuyArena(amount: number, p1: boolean, p2: boolean, p3: string): void;

  export function networkSpentUpgradeArena(amount: number, p1: boolean, p2: boolean, p3: string): void;

  export function networkSpentArenaSpectatorBox(amount: number, p1: any, p2: boolean, p3: boolean): void;

  export function networkSpentSpinTheWheelPayment(amount: number, p1: any, p2: boolean): void;

  export function networkEarnFromSpinTheWheelCash(amount: number): void;

  export function networkSpentArenaPremium(amount: number, p1: boolean, p2: boolean): void;

  export function networkEarnFromArenaWar(amount: number, p1: any, p2: any, p3: any): void;

  export function networkEarnFromAssassinateTargetKilled2(amount: number): void;

  export function networkEarnFromBbEventCargo(amount: number): void;

  export function networkEarnFromRcTimeTrial(amount: number): void;

  export function networkEarnFromDailyObjectiveEvent(amount: number): void;

  export function networkSpentCasinoMembership(amount: number, p1: boolean, p2: boolean, p3: number): void;

  export function networkSpentBuyCasino(amount: number, p1: boolean, p2: boolean, data: any): [void, any];

  export function networkSpentUpgradeCasino(amount: number, p1: boolean, p2: boolean, data: any): [void, any];

  export function networkSpentCasinoGeneric(amount: number, p1: any, p2: any, p3: any, p4: any): void;

  export function networkEarnFromTimeTrialWin(amount: number): void;

  export function networkEarnFromCollectablesActionFigures(amount: number): void;

  export function networkEarnFromCompleteCollection(amount: number): void;

  export function networkEarnFromSellingVehicle(amount: number): void;

  export function networkEarnFromCasinoMissionReward(amount: number): void;

  export function networkEarnFromCasinoStoryMissionReward(amount: number): void;

  export function networkEarnFromCasinoMissionParticipation(amount: number): void;

  export function networkEarnFromCasinoAward(amount: number, hash: number): void;

  export function _0x870289A558348378(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x5574637681911FDA(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentCasinoHeist(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;

  export function _0xB5B58E24868CB09E(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function networkSpentArcadeGame(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function networkSpentArcadeGeneric(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function networkEarnCasinoHeist(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function _0x4C3B75694F7E0D9C(p0: any, p1: any, p2: any): void;

  export function _0xD29334ED1A256DBF(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0xA95CFB4E02390842(p0: any, p1: any, p2: any): void;

  export function _0x0DD362F14F18942A(amount: number, p1: any, p2: any): void;

  export function networkEarnCasinoHeistBonus(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function networkEarnFromCollectionItem(amount: number, p1: any): void;

  export function networkEarnCollectableCompletedCollection(amount: number, p1: any): void;

  export function _0xDE68E30D89F97132(amount: number, p1: any): void;

  export function _0xE2E244AB823B4483(amount: number, p1: any): void;

  export function networkSpentBeachPartyGeneric(p0: any): void;

  export function networkSpentSubmarine(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function networkSpentCasinoClubGeneric(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;

  export function _0x90CD7C6871FBF1B4(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x89049A84065CE68E(p0: any, p1: any, p2: any, p3: any): void;

  export function networkSpentIslandHeist(p0: any, p1: any, p2: any, p3: any): void;

  export function networkEarnIslandHeist(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function _0xA51338E0DCCD4065(p0: any, p1: any, p2: any): void;

  export function _0xE2BB399D90942091(p0: any, p1: any): void;

  export function networkGetVcBankBalance(): number;

  export function networkGetVcWalletBalance(characterSlot: number): number;

  export function networkGetVcBalance(): number;

  export function networkGetEvcBalance(): number;

  export function networkGetPvcBalance(): number;

  export function networkGetStringWalletBalance(characterSlot: number): string;

  export function networkGetStringBankBalance(): string;

  export function networkGetStringBankWalletBalance(): string;

  /**
  * Returns true if wallet balance >= amount.
  */
  export function networkGetVcWalletBalanceIsNotLessThan(amount: number, characterSlot: number): boolean;

  /**
  * Returns true if bank balance >= amount.
  */
  export function networkGetVcBankBalanceIsNotLessThan(amount: number): boolean;

  /**
  * Returns true if bank balance + wallet balance >= amount.
  */
  export function networkGetVcBankWalletBalanceIsNotLessThan(amount: number, characterSlot: number): boolean;

  /**
  * Retturns the same value as NETWORK_GET_REMAINING_TRANSFER_BALANCE.
  */
  export function networkGetPvcTransferBalance(): number;

  /**
  * Returns false if amount > wallet balance or daily transfer limit has been hit.
  */
  export function _0x08E8EEADFD0DC4A0(amount: number): boolean;

  export function networkCanReceivePlayerCash(p0: any, p1: any, p2: any, p3: any): boolean;

  /**
  * Returns the same value as NETWORK_GET_PVC_TRANSFER_BALANCE.
  */
  export function networkGetRemainingTransferBalance(): number;

  /**
  * @returns Does nothing and always returns 0.
  */
  export function withdrawVc(amount: number): number;

  /**
  * @returns Does nothing and always returns false.
  */
  export function depositVc(amount: number): boolean;

  /**
  * @returns This function is hard-coded to always return 1.
  */
  export function _0xE154B48B68EF72BC(p0: any): boolean;

  /**
  * @returns This function is hard-coded to always return 1.
  */
  export function _0x6FCF8DDEA146C45B(p0: any): boolean;

  export function netGameserverUseServerTransactions(): boolean;

  export function netGameserverCatalogItemExists(name: string): boolean;

  export function netGameserverCatalogItemExistsHash(hash: number): boolean;

  /**
  * bool is always true in game scripts
  */
  export function netGameserverGetPrice(itemHash: number, categoryHash: number, p2: boolean): number;

  export function netGameserverCatalogIsReady(): boolean;

  export function netGameserverIsCatalogValid(): boolean;

  export function _0x85F6C9ABA1DE2BCF(): any;

  export function _0x357B152EF96C30B6(): any;

  export function netGameserverGetCatalogState(state: number): [boolean, number];

  export function _0xE3E5A7C64CA2C6ED(): any;

  export function _0x0395CB47B022E62C(p0: number): [boolean, number];

  export function netGameserverStartSession(charSlot: number): boolean;

  export function _0x72EB7BA9B69BF6AB(): boolean;

  export function _0x170910093218C8B9(p0: number): [boolean, number];

  export function _0xC13C38E47EA5DF31(p0: number): [boolean, number];

  export function netGameserverIsSessionValid(charSlot: number): boolean;

  /**
  * NET_GAMESERVER_*
  */
  export function _0x74A0FD0688F1EE45(p0: number): number;

  export function netGameserverSessionApplyReceivedData(charSlot: number): boolean;

  export function netGameserverIsSessionRefreshPending(): boolean;

  /**
  * Note: only one of the arguments can be set to true at a time
  */
  export function netGameserverGetBalance(inventory: boolean, playerbalance: boolean): boolean;

  export function _0x613F125BA3BD2EB9(): boolean;

  export function netGameserverGetTransactionManagerData(p0: number, p1: boolean): [boolean, number, boolean];

  export function netGameserverBasketStart(transactionId: number, categoryHash: number, actionHash: number, flags: number): [boolean, number];

  export function netGameserverBasketDelete(): boolean;

  export function netGameserverBasketEnd(): boolean;

  export function netGameserverBasketAddItem(itemData: any, quantity: number): [boolean, any];

  export function netGameserverBasketIsFull(): boolean;

  export function netGameserverBasketApplyServerData(p0: any, p1: any): [boolean, any];

  export function netGameserverCheckoutStart(transactionId: number): boolean;

  export function netGameserverBeginService(transactionId: number, categoryHash: number, itemHash: number, actionTypeHash: number, value: number, flags: number): [boolean, number];

  export function netGameserverEndService(transactionId: number): boolean;

  export function netGameserverDeleteCharacterSlot(slot: number, transfer: boolean, reason: number): boolean;

  export function netGameserverDeleteCharacterSlotGetStatus(): number;

  export function netGameserverDeleteSetTelemetryNonceSeed(): boolean;

  export function netGameserverTransferBankToWallet(charSlot: number, amount: number): boolean;

  export function netGameserverTransferWalletToBank(charSlot: number, amount: number): boolean;

  /**
  * Same as 0x350AA5EBC03D3BD2
  */
  export function netGameserverTransferCashGetStatus(): number;

  /**
  * Same as 0x23789E777D14CE44
  */
  export function netGameserverTransferCashGetStatus2(): number;

  /**
  * Used to be NETWORK_SHOP_CASH_TRANSFER_SET_TELEMETRY_NONCE_SEED
  */
  export function netGameserverTransferCashSetTelemetryNonceSeed(): boolean;

  export function netGameserverSetTelemetryNonceSeed(p0: number): boolean;

  /**
  * Online version is defined here: update\update.rpf\common\data\version.txt
  * Example:
  * [ONLINE_VERSION_NUMBER]
  * 1.33
  * @returns _GET_ONLINE_VERSION() will return "1.33"
  */
  export function getOnlineVersion(): string;

  /**
  * Returns whether the player is signed into Social Club.
  */
  export function networkIsSignedIn(): boolean;

  /**
  * Returns whether the game is not in offline mode.
  * seemed not to work for some ppl
  */
  export function networkIsSignedOnline(): boolean;

  export function _0xBD545D44CCE70597(): boolean;

  export function _0xEBCAB9E5048434F4(): any;

  export function _0x74FB3E29E6D10FA9(): any;

  export function _0x7808619F31FF22DB(): any;

  export function _0xA0FA4EC6A05DA44E(): any;

  /**
  * Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.
  */
  export function networkHasValidRosCredentials(): boolean;

  /**
  * NETWORK_IS_*
  * Seems to be related to PlayStation
  */
  export function _0x8D11E61A4ABF49CC(): boolean;

  export function networkIsCloudAvailable(): boolean;

  export function networkHasSocialClubAccount(): boolean;

  export function networkAreSocialClubPoliciesCurrent(): boolean;

  export function networkIsHost(): boolean;

  export function _0x4237E822315D8BA9(): boolean;

  export function networkHaveOnlinePrivileges(): boolean;

  export function networkHasAgeRestrictedProfile(): boolean;

  export function networkHaveUserContentPrivileges(p0: number): boolean;

  export function networkHaveCommunicationPrivileges(p0: number, player: number): boolean;

  export function _0x78321BEA235FD8CD(p0: any, p1: boolean): boolean;

  export function networkCheckUserContentPrivileges(p0: number, p1: number, p2: boolean): boolean;

  export function networkCheckCommunicationPrivileges(p0: number, p1: number, p2: boolean): boolean;

  export function _0x07EAB372C8841D99(p0: any, p1: any, p2: any): any;

  export function _0x906CA41A4B74ECA4(): any;

  export function _0x023ACAB2DC9DC4A4(): any;

  export function networkHasSocialNetworkingSharingPriv(): boolean;

  export function networkGetAgeGroup(): number;

  export function _0x0CF6CC51AA18F0F8(p0: any, p1: any, p2: any): any;

  export function _0x64E5C4CC82847B73(): boolean;

  export function _0x1F7BC3539F9E0224(): void;

  export function networkHaveOnlinePrivilege2(): boolean;

  export function _0xA8ACB6459542A8C8(): any;

  export function _0x83FE8D7229593017(): void;

  export function _0x53C10C8BD774F2C9(): any;

  export function networkCanBail(): boolean;

  export function networkBail(p0: number, p1: number, p2: number): void;

  export function _0x283B6062A2C01E9B(): void;

  export function _0x8B4FFC790CA131EF(p0: any, p1: any, p2: any, p3: any): any;

  export function networkTransitionTrack(hash: number, p1: number, p2: number, state: number, p4: number): void;

  export function _0x04918A41BC9B8157(p0: any, p1: any, p2: any): any;

  /**
  * 11 - Need to download tunables.
  * 12 - Need to download background script.
  * Returns 1 if the multiplayer is loaded, otherwhise 0.
  */
  export function networkCanAccessMultiplayer(loadingState: number): [boolean, number];

  export function networkIsMultiplayerDisabled(): boolean;

  export function networkCanEnterMultiplayer(): boolean;

  /**
  * unknown params
  * p5 is reset to 0 if,
  * Global_1315318 = 0 or Global_1315323 = 9 or 12 or (Global_1312629 = 0 && Global_1312631 = true/1) those are passed.
  * @param p0 = 0, 2, or 999 (The global is 999 by default.)
  * @param p1 = 0 (Always in every script it's found in atleast.)
  * @param p2 = 0, 3, or 4 (Based on a var that is determined by a function.)
  * @param maxPlayers = maxPlayers (It's obvious in x360 scripts it's always 18)
  * @param p4 = 0 (Always in every script it's found in atleast.)
  * @param p5 = 0 or 1. (1 if network_can_enter_multiplayer, but set to 0 if other checks after that are passed.)
  */
  export function networkSessionEnter(p0: any, p1: any, p2: any, maxPlayers: number, p4: any, p5: any): any;

  export function networkSessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: boolean): boolean;

  export function networkSessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: boolean): boolean;

  export function networkSessionActivityQuickmatch(p0: any, p1: any, p2: any, p3: any): boolean;

  /**
  * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
  */
  export function networkSessionHost(p0: number, maxPlayers: number, p2: boolean): boolean;

  export function networkSessionHostClosed(p0: number, maxPlayers: number): boolean;

  /**
  * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
  */
  export function networkSessionHostFriendsOnly(p0: number, maxPlayers: number): boolean;

  export function networkSessionIsClosedFriends(): boolean;

  export function networkSessionIsClosedCrew(): boolean;

  export function networkSessionIsSolo(): boolean;

  export function networkSessionIsPrivate(): boolean;

  /**
  * NETWORK_SESSION_END(0, 1)
  * NETWORK_SESSION_END(0, 0)
  * @param p0 is always false and p1 varies.
  * @returns Results in: "Connection to session lost due to an unknown network error. Please return to Grand Theft Auto V and try again later."
  */
  export function networkSessionEnd(p0: boolean, p1: boolean): boolean;

  export function _0xB9351A07A0D458B1(p0: any): any;

  /**
  * Only works as host.
  */
  export function networkSessionKickPlayer(player: number): void;

  export function networkSessionGetKickVote(player: number): boolean;

  export function _0x041C7F2A6C9894E6(p0: any, p1: any, p2: any): any;

  export function networkJoinPreviouslyFailedSession(): boolean;

  export function networkJoinPreviouslyFailedTransition(): boolean;

  export function networkSessionSetMatchmakingGroup(matchmakingGroup: number): void;

  /**
  * playerTypes:
  * 0 = regular joiner
  * 4 = spectator
  * 8 = unknown
  */
  export function networkSessionSetMatchmakingGroupMax(playerType: number, playerCount: number): void;

  export function networkSessionGetMatchmakingGroupFree(p0: number): number;

  /**
  * NETWORK_SESSION_*
  * @param p0 must be <= 4
  */
  export function _0xCAE55F48D3D7875C(p0: number): void;

  export function _0xF49ABC20D8552257(p0: any): void;

  export function _0x4811BBAC21C5FCD5(p0: any): void;

  export function _0x5539C3EBF104A53A(p0: boolean): void;

  export function _0x702BC4D605522539(p0: any): void;

  export function networkSessionSetMatchmakingPropertyId(p0: boolean): void;

  export function networkSessionSetMatchmakingMentalState(p0: any): void;

  export function _0x5ECD378EE64450AB(p0: any): void;

  export function _0x59D421683D31835A(p0: any): void;

  export function _0x1153FA02A659051C(): void;

  export function networkSessionValidateJoin(p0: boolean): void;

  /**
  * ..
  */
  export function networkAddFollowers(p0: number, p1: number): [void, number];

  export function networkClearFollowers(): void;

  export function networkGetGlobalMultiplayerClock(hours: number, minutes: number, seconds: number): [void, number, number, number];

  export function _0x600F8CB31C7AAB6E(p0: any): void;

  export function networkGetTargetingMode(): number;

  export function _0xE532D6811B3A4D2A(p0: any): boolean;

  export function networkFindMatchedGamers(p0: any, p1: number, p2: number, p3: number): boolean;

  export function networkIsFindingGamers(): boolean;

  export function _0xF9B83B77929D8863(): any;

  export function networkGetNumFoundGamers(): number;

  export function networkGetFoundGamer(p0: any, p1: any): [boolean, any];

  export function networkClearFoundGamers(): void;

  export function networkGetGamerStatus(p0: any): [boolean, any];

  export function _0x2CC848A861D01493(): any;

  /**
  * NETWORK_IS_*
  */
  export function _0x94A8394D150B013A(): any;

  export function _0x5AE17C6B0134B7F1(): any;

  export function networkGetGamerStatusResult(p0: any, p1: any): [boolean, any];

  export function networkClearGetGamerStatus(): void;

  export function networkSessionJoinInvite(): void;

  export function networkSessionCancelInvite(): void;

  export function networkSessionForceCancelInvite(): void;

  export function networkHasPendingInvite(): boolean;

  export function _0xC42DD763159F3461(): boolean;

  /**
  * NETWORK_RE*
  * Triggers a CEventNetworkInviteConfirmed event
  */
  export function networkAcceptInvite(): boolean;

  export function networkSessionWasInvited(): boolean;

  export function networkSessionGetInviter(networkHandle: number): [void, number];

  /**
  * NETWORK_SESSION_IS_*
  */
  export function _0xD313DE83394AF134(): boolean;

  /**
  * NETWORK_SESSION_IS_*
  */
  export function _0xBDB6F89C729CF388(): boolean;

  export function networkSuppressInvite(toggle: boolean): void;

  export function networkBlockInvites(toggle: boolean): void;

  export function networkBlockJoinQueueInvites(toggle: boolean): void;

  export function _0xF814FEC6A19FD6E0(): void;

  export function networkBlockKickedPlayers(p0: boolean): void;

  export function networkSetScriptReadyForEvents(toggle: boolean): void;

  export function networkIsOfflineInvitePending(): boolean;

  export function _0x140E6A44870A11CE(): void;

  /**
  * Loads up the map that is loaded when beeing in mission creator
  * Player gets placed in a mix between online/offline mode
  * Appears to be patched in gtav b757 (game gets terminated) alonside with most other network natives to prevent online modding ~ghost30812
  * @param p0 is always 2 in R* scripts.
  */
  export function networkSessionHostSinglePlayer(p0: number): void;

  export function networkSessionLeaveSinglePlayer(): void;

  export function networkIsGameInProgress(): boolean;

  export function networkIsSessionActive(): boolean;

  export function networkIsInSession(): boolean;

  /**
  * This checks if player is playing on gta online or not.
  * Please add an if and block your mod if this is "true".
  */
  export function networkIsSessionStarted(): boolean;

  export function networkIsSessionBusy(): boolean;

  export function networkCanSessionEnd(): boolean;

  export function _0x4C9034162368E206(): any;

  export function networkSessionMarkVisible(toggle: boolean): void;

  export function networkSessionIsVisible(): boolean;

  export function networkSessionBlockJoinRequests(toggle: boolean): void;

  export function networkSessionChangeSlots(p0: number, p1: boolean): void;

  export function networkSessionGetPrivateSlots(): number;

  export function networkSessionVoiceHost(): void;

  export function networkSessionVoiceLeave(): void;

  /**
  * Only one occurence in the scripts:
  * auto sub_cb43(auto a_0, auto a_1) {
  * if (g_2594CB._f1) {
  * if (NETWORK::_855BC38818F6F684()) {
  * NETWORK::_ABD5E88B8A2D3DB2(&a_0._fB93);
  * g_2594CB._f14{13} = a_0._fB93;
  * g_2594CB._f4"64" = a_1;
  * }
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0xABD5E88B8A2D3DB2
  * @returns             return 1;
  */
  export function networkSessionVoiceConnectToPlayer(p0: any): [void, any];

  export function networkSessionVoiceRespondToRequest(p0: boolean, p1: number): void;

  export function networkSessionVoiceSetTimeout(timeout: number): void;

  export function networkSessionIsInVoiceSession(): boolean;

  export function _0xB5D3453C98456528(): any;

  export function networkSessionIsVoiceSessionBusy(): boolean;

  /**
  * @param message is limited to 64 characters.
  */
  export function networkSendTextMessage(message: string, networkHandle: number): [boolean, number];

  export function networkSetActivitySpectator(toggle: boolean): void;

  export function networkIsActivitySpectator(): boolean;

  export function _0x0E4F77F7B9D74D84(p0: any): void;

  export function networkSetActivitySpectatorMax(maxSpectators: number): void;

  export function networkGetActivityPlayerNum(p0: boolean): number;

  export function networkIsActivitySpectatorFromHandle(networkHandle: number): [boolean, number];

  /**
  * From what I can tell it looks like it does the following:
  * Creates/hosts a new transition to another online session, using this in FiveM will result in other players being disconencted from the server/preventing them from joining. This is most likely because I entered the wrong session parameters since they're pretty much all unknown right now.
  * You also need to use `NetworkJoinTransition(Player player)` and `NetworkLaunchTransition()`.
  * @param p0 Unknown int
  * @param p1 Unknown int
  * @param p2 Unknown int
  * @param p3 Unknown int
  * @param p4 Unknown always 0 in decompiled scripts
  * @param p5 BOOL purpose unknown, both 0 and 1 are used in decompiled scripts.
  * @param p6 BOOL purpose unknown, both 0 and 1 are used in decompiled scripts.
  * @param p7 Unknown int, it's an int according to decompiled scripts, however the value is always 0 or 1.
  * @param p8 Unknown int, it's an int according to decompiled scripts, however the value is always 0 or 1.
  * @param p9 Unknown int, sometimes 0, but also 32768 or 16384 appear in decompiled scripst, maybe a flag of some sort?
  */
  export function networkHostTransition(p0: number, p1: number, p2: number, p3: number, p4: any, p5: boolean, p6: boolean, p7: number, p8: any, p9: number): boolean;

  export function networkDoTransitionQuickmatch(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): boolean;

  export function networkDoTransitionQuickmatchAsync(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): boolean;

  export function networkDoTransitionQuickmatchWithGroup(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): [boolean, any];

  export function networkJoinGroupActivity(): any;

  export function _0x1888694923EF4591(): void;

  export function _0xB13E88E655E5A3BC(): void;

  export function networkIsTransitionClosedFriends(): boolean;

  export function networkIsTransitionClosedCrew(): boolean;

  export function networkIsTransitionSolo(): boolean;

  export function networkIsTransitionPrivate(): boolean;

  /**
  * NETWORK_GET_NUM_*
  */
  export function _0x617F49C2668E6155(): number;

  export function _0x261E97AD7BCF3D40(p0: boolean): void;

  export function _0x39917E1B4CB0F911(p0: boolean): void;

  export function _0x2CE9D95E4051AECD(p0: any): void;

  export function networkSetTransitionCreatorHandle(p0: any): [void, any];

  export function networkClearTransitionCreatorHandle(): void;

  export function networkInviteGamersToTransition(p0: any, p1: any): [boolean, any];

  export function networkSetGamerInvitedToTransition(networkHandle: number): [void, number];

  export function networkLeaveTransition(): boolean;

  export function networkLaunchTransition(): boolean;

  /**
  * Appears to set whether a transition should be started when the session is migrating.
  * NETWORK_SET_*
  */
  export function _0xA2E9C1AB8A92E8CD(toggle: boolean): void;

  export function networkBailTransition(p0: number, p1: number, p2: number): void;

  export function networkDoTransitionToGame(p0: boolean, maxPlayers: number): boolean;

  export function networkDoTransitionToNewGame(p0: boolean, maxPlayers: number, p2: boolean): boolean;

  /**
  * 'players' is the number of players for a session. On PS3/360 it's always 18. On PC it's 32.
  * @param p2 is true 3/4 of the occurrences I found.
  */
  export function networkDoTransitionToFreemode(p0: any, p1: any, p2: boolean, players: number, p4: boolean): [boolean, any];

  export function networkDoTransitionToNewFreemode(p0: any, p1: any, players: number, p3: boolean, p4: boolean, p5: boolean): [boolean, any, any];

  export function networkIsTransitionToGame(): boolean;

  /**
  * Returns count.
  */
  export function networkGetTransitionMembers(data: any, dataCount: number): [number, any];

  export function networkApplyTransitionParameter(p0: number, p1: number): void;

  export function networkApplyTransitionParameterString(p0: number, string: string, p2: boolean): void;

  /**
  * the first arg seems to be the network player handle (&handle) and the second var is pretty much always "" and the third seems to be a number between 0 and ~10 and the 4th is is something like 0 to 5 and I guess the 5th is a bool cuz it is always 0 or 1
  * does this send an invite to a player?
  */
  export function networkSendTransitionGamerInstruction(networkHandle: number, p1: string, p2: number, p3: number, p4: boolean): [boolean, number];

  export function networkMarkTransitionGamerAsFullyJoined(p0: any): [boolean, any];

  export function networkIsTransitionHost(): boolean;

  export function networkIsTransitionHostFromHandle(networkHandle: number): [boolean, number];

  export function networkGetTransitionHost(networkHandle: number): [boolean, number];

  export function networkIsInTransition(): boolean;

  export function networkIsTransitionStarted(): boolean;

  export function networkIsTransitionBusy(): boolean;

  export function networkIsTransitionMatchmaking(): boolean;

  /**
  * NETWORK_IS_TRANSITION_*
  */
  export function _0xC571D0E77D8BBC29(): boolean;

  export function _0x1398582B7F72B3ED(p0: any): void;

  export function _0x1F8E00FB18239600(p0: any): void;

  export function _0xF6F4383B7C92F11A(p0: any): void;

  export function networkOpenTransitionMatchmaking(): void;

  export function networkCloseTransitionMatchmaking(): void;

  export function networkIsTransitionOpenToMatchmaking(): boolean;

  export function networkSetTransitionVisibilityLock(p0: boolean, p1: boolean): void;

  export function networkIsTransitionVisibilityLocked(): boolean;

  export function networkSetTransitionActivityId(p0: any): void;

  export function networkChangeTransitionSlots(p0: any, p1: any): void;

  export function _0x973D76AA760A6CB6(p0: boolean): void;

  export function networkHasPlayerStartedTransition(player: number): boolean;

  export function networkAreTransitionDetailsValid(p0: any): boolean;

  /**
  * int handle[76];
  * NETWORK_HANDLE_FROM_FRIEND(iSelectedPlayer, &handle[0], 13);
  * Player uVar2 = NETWORK_GET_PLAYER_FROM_GAMER_HANDLE(&handle[0]);
  * NETWORK_JOIN_TRANSITION(uVar2);
  * nothing doin.
  */
  export function networkJoinTransition(player: number): boolean;

  export function networkHasInvitedGamerToTransition(p0: any): [boolean, any];

  /**
  * NETWORK_HAS_*
  */
  export function _0x3F9990BF5F22759C(p0: any): [boolean, any];

  export function networkIsActivitySession(): boolean;

  /**
  * Does nothing. It's just a nullsub.
  */
  export function _0x4A9FDE3A5A6D0437(toggle: boolean): void;

  export function networkSendPresenceInvite(networkHandle: number, p1: any, p2: any, p3: any): [boolean, number, any];

  /**
  * String "NETWORK_SEND_PRESENCE_TRANSITION_INVITE" is contained in the function in ida so this one is correct.
  */
  export function networkSendPresenceTransitionInvite(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function _0x1171A97A3D3981B6(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function _0x742B58F723233ED9(p0: any): any;

  export function networkGetNumPresenceInvites(): number;

  export function networkAcceptPresenceInvite(p0: any): boolean;

  export function networkRemovePresenceInvite(p0: any): boolean;

  export function networkGetPresenceInviteId(p0: any): any;

  export function networkGetPresenceInviteInviter(p0: any): any;

  export function networkGetPresenceInviteHandle(p0: any, p1: any): [boolean, any];

  export function networkGetPresenceInviteSessionId(p0: any): any;

  export function networkGetPresenceInviteContentId(p0: any): any;

  export function networkGetPresenceInvitePlaylistLength(p0: any): any;

  export function networkGetPresenceInvitePlaylistCurrent(p0: any): any;

  export function networkGetPresenceInviteFromAdmin(p0: any): boolean;

  export function networkGetPresenceInviteIsTournament(p0: any): boolean;

  export function networkHasFollowInvite(): boolean;

  export function networkActionFollowInvite(): any;

  export function networkClearFollowInvite(): any;

  export function _0xEBF8284D8CADEB53(): void;

  export function networkRemoveTransitionInvite(p0: any): [void, any];

  export function networkRemoveAllTransitionInvite(): void;

  /**
  * NETWORK_RE*
  */
  export function _0xF083835B70BA9BFE(): void;

  export function networkInviteGamers(p0: any, p1: any, p2: any, p3: any): [boolean, any, any, any];

  export function networkHasInvitedGamer(p0: any): [boolean, any];

  /**
  * NETWORK_HAS_*
  */
  export function _0x71DC455F5CD1C2B1(networkHandle: any): [boolean, any];

  export function _0x3855FB5EB2C5E8B2(p0: any): any;

  export function networkGetCurrentlySelectedGamerHandleFromInviteMenu(p0: any): [boolean, any];

  export function networkSetCurrentlySelectedGamerHandleFromInviteMenu(p0: any): [boolean, any];

  export function networkSetInviteOnCallForInviteMenu(p0: any): [void, any];

  export function networkCheckDataManagerSucceededForHandle(p0: any, p1: any): [boolean, any];

  export function _0x4AD490AE1536933B(p0: any, p1: any): any;

  /**
  * NETWORK_SET_*
  */
  export function _0x0D77A82DC2D0DA59(p0: any, p1: any): [void, any, any];

  export function filloutPmPlayerList(networkHandle: number, p1: any, p2: any): [boolean, number];

  export function filloutPmPlayerListWithNames(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function refreshPlayerListStats(p0: number): boolean;

  export function networkSetCurrentDataManagerHandle(p0: any): [boolean, any];

  export function networkIsInPlatformParty(): boolean;

  export function networkGetPlatformPartyUnk(): number;

  export function networkGetPlatformPartyMembers(data: any, dataSize: number): [number, any];

  export function networkIsInPlatformPartyChat(): boolean;

  /**
  * This would be nice to see if someone is in party chat, but 2 sad notes.
  * 1) It only becomes true if said person is speaking in that party at the time.
  * 2) It will never, become true unless you are in that party with said person.
  */
  export function networkIsChattingInPlatformParty(networkHandle: number): [boolean, number];

  export function _0x2BF66D2E7414F686(): any;

  /**
  * NETWORK_IS_*
  */
  export function _0x14922ED3E38761F0(): boolean;

  export function _0x6CE50E47F5543D0C(): void;

  export function _0xFA2888E3833C8E96(): void;

  export function _0x25D990F8E0E3F13C(): void;

  export function _0xF1B84178F8674195(p0: any): void;

  export function networkGetRandomInt(): number;

  /**
  * Same as GET_RANDOM_INT_IN_RANGE
  */
  export function networkGetRandomIntRanged(rangeStart: number, rangeEnd: number): number;

  export function networkPlayerIsCheater(): boolean;

  export function networkPlayerGetCheaterReason(): number;

  export function networkPlayerIsBadsport(): boolean;

  /**
  * @param p1 = 6
  */
  export function triggerScriptCrcCheckOnPlayer(player: number, p1: number, scriptHash: number): boolean;

  export function _0xA12D3A5A3753CC23(): any;

  export function _0xF287F506767CC8A9(): any;

  export function remoteCheatDetected(player: number, a: number, b: number): boolean;

  export function badSportPlayerLeftDetected(networkHandle: number, event: number, amountReceived: number): [boolean, number];

  export function networkApplyPedScarData(ped: number, p1: number): void;

  /**
  * @param p1 is always 0
  */
  export function networkSetThisScriptIsNetworkScript(lobbySize: number, p1: boolean, playerId: number): void;

  export function networkIsThisScriptMarked(p0: any, p1: boolean, p2: any): boolean;

  export function networkGetThisScriptIsNetworkScript(): boolean;

  /**
  * for (num3 = 0; num3 < NETWORK::0xCCD8C02D(); num3++)
  * {
  * if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::0x98F3B274(num3)) != 0)
  * {
  * var num5 = NETWORK::NETWORK_GET_PLAYER_INDEX(PLAYER::0x98F3B274(num3));
  * @returns Seems to always return 0, but it's used in quite a few loops.
  */
  export function networkGetMaxNumParticipants(): number;

  export function networkGetNumParticipants(): number;

  export function networkGetScriptStatus(): number;

  export function networkRegisterHostBroadcastVariables(vars: number, numVars: number): [void, number];

  export function networkRegisterPlayerBroadcastVariables(vars: number, numVars: number): [void, number];

  export function _0xEA8C0DDB10E2822A(p0: any, p1: any): void;

  export function _0xD6D7478CA62B8D41(p0: any, p1: any): void;

  export function networkFinishBroadcastingData(): void;

  /**
  * NETWORK_HAS_*
  */
  export function _0x5D10B3795F3FC886(): boolean;

  export function networkGetPlayerIndex(player: number): number;

  export function networkGetParticipantIndex(index: number): number;

  /**
  * Returns the Player associated to a given Ped when in an online session.
  */
  export function networkGetPlayerIndexFromPed(ped: number): number;

  /**
  * Returns the amount of players connected in the current session. Only works when connected to a session/server.
  */
  export function networkGetNumConnectedPlayers(): number;

  export function networkIsPlayerConnected(player: number): boolean;

  export function networkGetTotalNumPlayers(): number;

  export function networkIsParticipantActive(p0: number): boolean;

  export function networkIsPlayerActive(player: number): boolean;

  export function networkIsPlayerAParticipant(player: number): boolean;

  export function networkIsHostOfThisScript(): boolean;

  export function networkGetHostOfThisScript(): number;

  /**
  * "freemode", "AM_CR_SecurityVan", ...
  * Most of the time, these values are used:
  * @param scriptName examples:
  * @param p1 = -1
  * @param p2 = 0
  */
  export function networkGetHostOfScript(scriptName: string, p1: number, p2: number): number;

  export function networkSetMissionFinished(): void;

  export function networkIsScriptActive(scriptName: string, player: number, p2: boolean, p3: any): boolean;

  export function _0x560B423D73015E77(p0: any): any;

  export function networkGetNumScriptParticipants(p0: any, p1: any, p2: any): [number, any];

  export function _0x638A3A81733086DB(): any;

  export function networkIsPlayerAParticipantOnScript(player1: number, script: string, player2: number): boolean;

  export function _0x2302C0264EA58D31(): void;

  /**
  * Has something to do with a host request.
  * NETWORK_RE*
  */
  export function _0x741A3D8380319A81(): void;

  /**
  * Return the local Participant ID
  */
  export function participantId(): number;

  /**
  * Return the local Participant ID.
  * This native is exactly the same as 'PARTICIPANT_ID' native.
  */
  export function participantIdToInt(): number;

  export function _0x2DA41ED6E1FCD7A5(p0: any, p1: any): any;

  export function networkGetDestroyerOfNetworkId(netId: number, weaponHash: number): [number, number];

  export function _0xC434133D9BA52777(p0: any, p1: any): any;

  export function _0x83660B734994124D(p0: any, p1: any, p2: any): any;

  export function networkGetDestroyerOfEntity(p0: any, p1: any, weaponHash: number): [boolean, number];

  export function networkGetEntityKillerOfPlayer(player: number, weaponHash: number): [number, number];

  export function networkResurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: boolean, changetime: boolean, p6: any): void;

  export function networkSetLocalPlayerInvincibleTime(time: number): void;

  export function networkIsLocalPlayerInvincible(): boolean;

  export function networkDisableInvincibleFlashing(player: number, toggle: boolean): void;

  export function networkSetLocalPlayerSyncLookAt(toggle: boolean): void;

  export function networkHasEntityBeenRegisteredWithThisThread(entity: number): boolean;

  export function networkGetNetworkIdFromEntity(entity: number): number;

  export function networkGetEntityFromNetworkId(netId: number): number;

  export function networkGetEntityIsNetworked(entity: number): boolean;

  export function networkGetEntityIsLocal(entity: number): boolean;

  export function networkRegisterEntityAsNetworked(entity: number): void;

  export function networkUnregisterNetworkedEntity(entity: number): void;

  export function networkDoesNetworkIdExist(netId: number): boolean;

  export function networkDoesEntityExistWithNetworkId(netId: number): boolean;

  export function networkRequestControlOfNetworkId(netId: number): boolean;

  export function networkHasControlOfNetworkId(netId: number): boolean;

  /**
  * NETWORK_IS_*
  * Ff you have control over the entity corresponding to the netId then this will return false (0);
  * Returns probably a bool, returns 1 if you don't have control over the netId entity.
  * @returns Probably a bool, returns true if the specified network id is controlled by someone else.
  */
  export function _0x7242F8B741CE1086(netId: number): boolean;

  export function networkRequestControlOfEntity(entity: number): boolean;

  export function networkRequestControlOfDoor(doorID: number): boolean;

  export function networkHasControlOfEntity(entity: number): boolean;

  export function networkHasControlOfPickup(pickup: number): boolean;

  export function networkHasControlOfDoor(doorHash: number): boolean;

  export function networkIsDoorNetworked(doorHash: number): boolean;

  /**
  * calls from vehicle to net.
  */
  export function vehToNet(vehicle: number): number;

  /**
  * gets the network id of a ped
  */
  export function pedToNet(ped: number): number;

  /**
  * Lets objects spawn online simply do it like this:
  * int createdObject = OBJ_TO_NET(CREATE_OBJECT_NO_OFFSET(oball, pCoords.x, pCoords.y, pCoords.z, 1, 0, 0));
  */
  export function objToNet(object: number): number;

  export function netToVeh(netHandle: number): number;

  /**
  * gets the ped id of a network id
  */
  export function netToPed(netHandle: number): number;

  /**
  * gets the object id of a network id
  */
  export function netToObj(netHandle: number): number;

  /**
  * gets the entity id of a network id
  */
  export function netToEnt(netHandle: number): number;

  /**
  * Retrieves the local player's NetworkHandle* and stores it in the given buffer.
  * Currently unknown struct
  */
  export function networkGetLocalHandle(networkHandle: number, bufferSize: number): [void, number];

  /**
  * Returns a NetworkHandle* from the specified user ID and stores it in a given buffer.
  * Currently unknown struct
  */
  export function networkHandleFromUserId(userId: string, networkHandle: number, bufferSize: number): [void, number];

  /**
  * Returns a NetworkHandle* from the specified member ID and stores it in a given buffer.
  * Currently unknown struct
  */
  export function networkHandleFromMemberId(memberId: string, networkHandle: number, bufferSize: number): [void, number];

  /**
  * Returns a handle to networkHandle* from the specified player handle and stores it in a given buffer.
  * Currently unknown struct
  * Example:
  * std::vector<UINT64> GetPlayerNetworkHandle(Player player) {
  * const int size = 13;
  * uint64_t *buffer = std::make_unique<uint64_t[]>(size).get();
  * for (int i = 0; i < size; i++) {
  * Log::Msg("networkhandle[%i]: %llx", i, buffer[i]);
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0x388EB2B86C73B6B3
  * @returns     return result;
  */
  export function networkHandleFromPlayer(player: number, networkHandle: number, bufferSize: number): [void, number];

  export function networkHashFromPlayerHandle(player: number): number;

  export function networkHashFromGamerHandle(networkHandle: number): [number, number];

  export function networkHandleFromFriend(friendIndex: number, networkHandle: number, bufferSize: number): [void, number];

  export function networkGamertagFromHandleStart(networkHandle: number): [boolean, number];

  export function networkGamertagFromHandlePending(): boolean;

  export function networkGamertagFromHandleSucceeded(): boolean;

  export function networkGetGamertagFromHandle(networkHandle: number): [string, number];

  export function _0xD66C9E72B3CC4982(p0: any, p1: any): [number, any];

  /**
  * @returns MulleDK19: This function is hard-coded to always return 0.
  */
  export function networkGetDisplaynamesFromHandles(p0: any, p1: any, p2: any): number;

  export function networkAreHandlesTheSame(netHandle1: number, netHandle2: number): [boolean, number, number];

  export function networkIsHandleValid(networkHandle: number, bufferSize: number): [boolean, number];

  export function networkGetPlayerFromGamerHandle(networkHandle: number): [number, number];

  export function networkMemberIdFromGamerHandle(networkHandle: number): [string, number];

  export function networkIsGamerInMySession(networkHandle: number): [boolean, number];

  /**
  * Example:
  * int playerHandle;
  * NETWORK_HANDLE_FROM_PLAYER(selectedPlayer, &playerHandle, 13);
  * NETWORK_SHOW_PROFILE_UI(&playerHandle);
  */
  export function networkShowProfileUi(networkHandle: number): [void, number];

  /**
  * @returns Returns the name of a given player. Returns "**Invalid**" if CPlayerInfo of the given player cannot be retrieved or the player doesn't exist.
  */
  export function networkPlayerGetName(player: number): string;

  /**
  * @returns Takes a 24 char buffer. Returns the buffer or "**Invalid**" if CPlayerInfo of the given player cannot be retrieved or the player doesn't exist.
  */
  export function networkPlayerGetUserid(player: number, userID: number): [string, number];

  /**
  * Checks if a specific value (BYTE) in CPlayerInfo is nonzero.
  * Returns always false in Singleplayer.
  * No longer used for dev checks since first mods were released on PS3 & 360.
  * R* now checks with the is_dlc_present native for the dlc hash 2532323046,
  * if that is present it will unlock dev stuff.
  */
  export function networkPlayerIsRockstarDev(player: number): boolean;

  export function networkPlayerIndexIsCheater(player: number): boolean;

  export function networkGetEntityNetScriptId(entity: number): number;

  /**
  * Whatever p0 is, it's at least not synced to other players.
  * At least not all the time, some p0 values actually output the same entity, (different handle of course, but same entity).
  * But another p0 value may return an entity for player x, but not for player y (it'll just return -1 even if the entity exists on both clients).
  * Returns an entity handle or -1, value changes based on p0's value.
  * @returns I've had this return the player's ped handle sometimes, but also other random entities.
  */
  export function _0x37D5F739FD494675(p0: any): number;

  export function networkIsInactiveProfile(p0: any): [boolean, any];

  export function networkGetMaxFriends(): number;

  export function networkGetFriendCount(): number;

  export function networkGetFriendName(friendIndex: number): string;

  export function networkGetFriendNameFromIndex(friendIndex: number): string;

  export function networkIsFriendOnline(name: string): boolean;

  export function networkIsFriendHandleOnline(networkHandle: number): [boolean, number];

  /**
  * In scripts R* calls 'NETWORK_GET_FRIEND_NAME' in this param.
  */
  export function networkIsFriendInSameTitle(friendName: string): boolean;

  export function networkIsFriendInMultiplayer(friendName: string): boolean;

  export function networkIsFriend(networkHandle: number): [boolean, number];

  /**
  * @returns This function is hard-coded to always return 0.
  */
  export function networkIsPendingFriend(p0: any): any;

  export function networkIsAddingFriend(): any;

  export function networkAddFriend(networkHandle: number, message: string): [boolean, number];

  export function networkIsFriendIndexOnline(friendIndex: number): boolean;

  export function networkSetPlayerIsPassive(toggle: boolean): void;

  export function networkGetPlayerOwnsWaypoint(player: number): boolean;

  export function networkCanSetWaypoint(): boolean;

  export function _0x4C2A9FDC22377075(): void;

  export function _0xB309EBEA797E001F(p0: any): any;

  export function _0x26F07DD83A5F7F98(): any;

  export function networkHasHeadset(): boolean;

  export function _0x7D395EA61622E116(p0: boolean): void;

  export function networkIsLocalTalking(): boolean;

  export function networkGamerHasHeadset(networkHandle: any): [boolean, any];

  export function networkIsGamerTalking(networkHandle: any): [boolean, any];

  /**
  * Same as NETWORK_CAN_COMMUNICATE_WITH_GAMER
  * NETWORK_CAN_*
  */
  export function networkCanCommunicateWithGamer2(networkHandle: any): [boolean, any];

  export function networkCanCommunicateWithGamer(networkHandle: any): [boolean, any];

  export function networkIsGamerMutedByMe(networkHandle: any): [boolean, any];

  export function networkAmIMutedByGamer(networkHandle: any): [boolean, any];

  export function networkIsGamerBlockedByMe(networkHandle: any): [boolean, any];

  export function networkAmIBlockedByGamer(networkHandle: any): [boolean, any];

  export function networkCanViewGamerUserContent(networkHandle: any): [boolean, any];

  export function networkHasViewGamerUserContentResult(networkHandle: any): [boolean, any];

  export function networkCanPlayMultiplayerWithGamer(networkHandle: any): [boolean, any];

  export function networkCanGamerPlayMultiplayerWithMe(networkHandle: any): [boolean, any];

  /**
  * returns true if someone is screaming or talking in a microphone
  */
  export function networkIsPlayerTalking(player: number): boolean;

  export function networkPlayerHasHeadset(player: number): boolean;

  export function networkIsPlayerMutedByMe(player: number): boolean;

  export function networkAmIMutedByPlayer(player: number): boolean;

  export function networkIsPlayerBlockedByMe(player: number): boolean;

  export function networkAmIBlockedByPlayer(player: number): boolean;

  export function networkGetPlayerLoudness(player: number): number;

  export function networkSetTalkerProximity(value: number): void;

  export function networkGetTalkerProximity(): number;

  export function networkSetVoiceActive(toggle: boolean): void;

  export function _0xCFEB46DCD7D8D5EB(p0: boolean): void;

  export function networkOverrideTransitionChat(p0: boolean): void;

  export function networkSetTeamOnlyChat(toggle: boolean): void;

  export function _0x265559DA40B3F327(p0: any): void;

  export function _0x4348BFDA56023A2F(p0: any, p1: any): any;

  export function networkOverrideTeamRestrictions(team: number, toggle: boolean): void;

  export function networkSetOverrideSpectatorMode(toggle: boolean): void;

  /**
  * Sets some voice chat related value.
  * NETWORK_SET_*
  */
  export function _0x3C5C1E2C2FF814B1(toggle: boolean): void;

  /**
  * Sets some voice chat related value.
  * NETWORK_SET_*
  */
  export function _0x9D7AFCBF21C51712(toggle: boolean): void;

  export function networkSetNoSpectatorChat(toggle: boolean): void;

  /**
  * Sets some voice chat related value.
  * NETWORK_SET_*
  */
  export function _0x6A5D89D7769A40D8(toggle: boolean): void;

  /**
  * Could possibly bypass being muted or automatically muted
  */
  export function networkOverrideChatRestrictions(player: number, toggle: boolean): void;

  /**
  * This is used alongside the native,
  * 'NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS'. Read its description for more info.
  */
  export function networkOverrideSendRestrictions(player: number, toggle: boolean): void;

  export function networkOverrideSendRestrictionsAll(toggle: boolean): void;

  /**
  * R* uses this to hear all player when spectating.
  * It allows you to hear other online players when their chat is on none, crew and or friends
  */
  export function networkOverrideReceiveRestrictions(player: number, toggle: boolean): void;

  /**
  * @param toggle is always false in scripts.
  */
  export function networkOverrideReceiveRestrictionsAll(toggle: boolean): void;

  export function networkSetVoiceChannel(channel: number): void;

  export function networkClearVoiceChannel(): void;

  export function networkApplyVoiceProximityOverride(x: number, y: number, z: number): void;

  export function networkClearVoiceProximityOverride(): void;

  export function _0x5E3AA4CA2B6FB0EE(p0: any): void;

  export function _0xCA575C391FEA25CC(p0: any): void;

  export function _0xADB57E5B663CCA8B(p0: number, p1: number, p2: number): [void, number, number];

  /**
  * NETWORK_SET_*
  */
  export function _0x8EF52ACAECC51D9C(toggle: boolean): void;

  /**
  * Same as _IS_TEXT_CHAT_ACTIVE, except it does not check if the text chat HUD component is initialized, and therefore may crash.
  */
  export function networkIsTextChatActive(): boolean;

  /**
  * Starts a new singleplayer game (at the prologue).
  */
  export function shutdownAndLaunchSinglePlayerGame(): void;

  /**
  * In singleplayer this will re-load your game.
  * In FiveM / GTA:Online this disconnects you from the session, and starts loading single player, however you still remain connected to the server (only if you're the host, if you're not then you also (most likely) get disconnected from the server) and other players will not be able to join until you exit the game.
  * You might need to DoScreenFadeIn and ShutdownLoadingScreen otherwise you probably won't end up loading into SP at all.
  * Somewhat related note: opening the pause menu after loading into this 'singleplayer' mode crashes the game.
  */
  export function shutdownAndLoadMostRecentSave(): boolean;

  export function networkSetFriendlyFireOption(toggle: boolean): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function networkSetRichPresence(p0: any, p1: any, p2: any, p3: any): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function networkSetRichPresenceString(p0: number, textLabel: string): void;

  export function networkGetTimeoutTime(): number;

  /**
  * @param p4 and p5 are always 0 in scripts
  */
  export function networkRespawnCoords(player: number, x: number, y: number, z: number, p4: boolean, p5: boolean): void;

  export function _0xBF22E0F32968E967(player: number, p1: boolean): void;

  /**
  * @param entity must be a valid entity; ped can be NULL
  */
  export function removeAllStickyBombsFromEntity(entity: number, ped: number): void;

  export function _0x17C9E241111A674D(p0: any, p1: any): void;

  export function _0x2E4C123D1C8A710E(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;

  export function networkClanServiceIsValid(): boolean;

  export function networkClanPlayerIsActive(networkHandle: number): [boolean, number];

  /**
  * bufferSize is the elementCount of p0(desc), sizeof(p0) == 280 == p1*8 == 35 * 8, p2(netHandle) is obtained from NETWORK::NETWORK_HANDLE_FROM_PLAYER.  And no, I can't explain why 35 * sizeof(int) == 280 and not 140, but I'll get back to you on that.
  * the answer is: because p0 an int64_t* / int64_t[35].  and FYI p2 is an int64_t[13]
  * pastebin.com/cSZniHak
  * @param bufferSize is 35 in the scripts.
  */
  export function networkClanPlayerGetDesc(clanDesc: number, bufferSize: number, networkHandle: number): [boolean, number, number];

  /**
  * @param bufferSize is 35 in the scripts.
  */
  export function networkClanIsRockstarClan(clanDesc: number, bufferSize: number): [boolean, number];

  /**
  * @param bufferSize is 35 in the scripts.
  */
  export function networkClanGetUiFormattedTag(clanDesc: number, bufferSize: number, formattedTag: string): [void, number];

  export function networkClanGetLocalMembershipsCount(): number;

  export function networkClanGetMembershipDesc(memberDesc: number, p1: number): [boolean, number];

  export function networkClanDownloadMembership(networkHandle: number): [boolean, number];

  export function networkClanDownloadMembershipPending(p0: any): [boolean, any];

  export function networkIsClanMembershipFinishedDownloading(): boolean;

  export function networkClanRemoteMembershipsAreInCache(p0: number): [boolean, number];

  export function networkClanGetMembershipCount(p0: number): [number, number];

  export function networkClanGetMembershipValid(p0: number, p1: any): [boolean, number];

  /**
  * BOOL DEBUG_MEMBRESHIP(int Param)
  * {
  * int membership;
  * networkHandleMgr handle;
  * NETWORK_HANDLE_FROM_PLAYER(iSelectedPlayer, &handle.netHandle, 13);
  * if (!_NETWORK_IS_CLAN_MEMBERSHIP_FINISHED_DOWNLOADING())
  * {
  * if (NETWORK_CLAN_REMOTE_MEMBERSHIPS_ARE_IN_CACHE(&Param))
  * {
  * See NativeDB for reference: http://natives.altv.mp/#/0xC8BC2011F67B3411
  */
  export function networkClanGetMembership(p0: number, clanMembership: number, p2: number): [boolean, number, number];

  export function networkClanJoin(clanDesc: number): boolean;

  /**
  * Only documented...
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function networkClanAnimation(animDict: string, animName: string): boolean;

  export function _0x2B51EDBEFC301339(p0: number, p1: string): boolean;

  export function _0xC32EA7A2F6CA7557(): any;

  export function networkClanGetEmblemTxdName(netHandle: any, txdName: string): [boolean, any];

  export function networkClanRequestEmblem(p0: any): boolean;

  export function networkClanIsEmblemReady(p0: any, p1: any): [boolean, any];

  export function networkClanReleaseEmblem(p0: any): void;

  export function networkGetPrimaryClanDataClear(): any;

  export function networkGetPrimaryClanDataCancel(): void;

  export function networkGetPrimaryClanDataStart(p0: any, p1: any): [boolean, any];

  export function networkGetPrimaryClanDataPending(): any;

  export function networkGetPrimaryClanDataSuccess(): any;

  export function networkGetPrimaryClanDataNew(p0: any, p1: any): [boolean, any, any];

  /**
  * Whether or not another player is allowed to take control of the entity
  */
  export function setNetworkIdCanMigrate(netId: number, toggle: boolean): void;

  export function setNetworkIdExistsOnAllMachines(netId: number, toggle: boolean): void;

  /**
  * not tested....
  */
  export function setNetworkIdSyncToPlayer(netId: number, player: number, toggle: boolean): void;

  export function _0x9D724B400A7E8FFC(p0: any, p1: any): void;

  export function networkSetEntityCanBlend(entity: number, toggle: boolean): void;

  export function _0x0379DAF89BA09AA5(p0: any, p1: any): void;

  /**
  * if set to true other network players can't see it
  * if set to false other network player can see it
  * =========================================
  * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
  * pc or last gen?
  * ^^ last-gen
  */
  export function networkSetEntityInvisibleToNetwork(entity: number, toggle: boolean): void;

  export function setNetworkIdVisibleInCutscene(netId: number, p1: boolean, p2: boolean): void;

  export function _0x32EBD154CB6B8B99(p0: any, p1: any, p2: any): void;

  export function _0x76B3F29D3F967692(p0: any, p1: any): void;

  export function setNetworkCutsceneEntities(toggle: boolean): void;

  export function _0x3FA36981311FA4FF(netId: number, state: boolean): void;

  export function isNetworkIdOwnedByParticipant(netId: number): boolean;

  export function setLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;

  export function setLocalPlayerInvisibleLocally(p0: boolean): void;

  export function setLocalPlayerVisibleLocally(p0: boolean): void;

  export function setPlayerInvisibleLocally(player: number, toggle: boolean): void;

  export function setPlayerVisibleLocally(player: number, toggle: boolean): void;

  /**
  * Hardcoded to not work in SP.
  */
  export function fadeOutLocalPlayer(p0: boolean): void;

  /**
  * @param normal - transition like when your coming out of LSC
  * @param slow - transition like when you walk into a mission
  */
  export function networkFadeOutEntity(entity: number, normal: boolean, slow: boolean): void;

  /**
  * state - 1 does 6 fades
  * p3: setting to 1 made vehicle fade in slower, probably "slow" as per NETWORK_FADE_OUT_ENTITY
  * @param state - 0 does 5 fades
  */
  export function networkFadeInEntity(entity: number, state: boolean, p2: any): void;

  export function networkIsPlayerFading(player: number): boolean;

  export function networkIsEntityFading(entity: number): boolean;

  export function isPlayerInCutscene(player: number): boolean;

  export function setEntityVisibleInCutscene(p0: any, p1: boolean, p2: boolean): void;

  /**
  * Makes the provided entity visible for yourself for the current frame.
  */
  export function setEntityLocallyInvisible(entity: number): void;

  export function setEntityLocallyVisible(entity: number): void;

  export function isDamageTrackerActiveOnNetworkId(netID: number): boolean;

  export function activateDamageTrackerOnNetworkId(netID: number, toggle: boolean): void;

  export function isDamageTrackerActiveOnPlayer(player: number): boolean;

  export function activateDamageTrackerOnPlayer(player: number, toggle: boolean): void;

  export function isSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): boolean;

  export function isSphereVisibleToPlayer(p0: any, p1: number, p2: number, p3: number, p4: number): boolean;

  export function reserveNetworkMissionObjects(amount: number): void;

  export function reserveNetworkMissionPeds(amount: number): void;

  export function reserveNetworkMissionVehicles(amount: number): void;

  export function reserveNetworkLocalObjects(amount: number): void;

  export function reserveNetworkLocalPeds(amount: number): void;

  export function reserveNetworkLocalVehicles(amount: number): void;

  export function canRegisterMissionObjects(amount: number): boolean;

  export function canRegisterMissionPeds(amount: number): boolean;

  export function canRegisterMissionVehicles(amount: number): boolean;

  export function canRegisterMissionPickups(amount: number): boolean;

  export function _0xE16AA70CE9BEEDC3(p0: any): any;

  export function canRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): boolean;

  /**
  * @param p0 appears to be for MP
  */
  export function getNumReservedMissionObjects(p0: boolean, p1: any): number;

  /**
  * @param p0 appears to be for MP
  */
  export function getNumReservedMissionPeds(p0: boolean, p1: any): number;

  /**
  * @param p0 appears to be for MP
  */
  export function getNumReservedMissionVehicles(p0: boolean, p1: any): number;

  export function getNumCreatedMissionObjects(p0: boolean): number;

  export function getNumCreatedMissionPeds(p0: boolean): number;

  export function getNumCreatedMissionVehicles(p0: boolean): number;

  export function _0xE42D626EEC94E5D9(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function getMaxNumNetworkObjects(): number;

  export function getMaxNumNetworkPeds(): number;

  export function getMaxNumNetworkVehicles(): number;

  export function getMaxNumNetworkPickups(): number;

  export function _0xBA7F0B77D80A4EB7(p0: any, p1: any): void;

  export function _0x0F1A4B45B7693B95(p0: any, p1: any): void;

  export function getNetworkTime(): number;

  /**
  * Returns the same value as GET_NETWORK_TIME in freemode, but as opposed to `GET_NETWORK_TIME` it always gets the most recent time, instead of once per tick.
  * @returns Could be used for benchmarking since it can return times in ticks.
  */
  export function getNetworkTimeAccurate(): number;

  export function hasNetworkTimeStarted(): boolean;

  /**
  * Adds the first argument to the second.
  */
  export function getTimeOffset(timeA: number, timeB: number): number;

  /**
  * @returns Subtracts the second argument from the first, then returns whether the result is negative.
  */
  export function isTimeLessThan(timeA: number, timeB: number): boolean;

  /**
  * @returns Subtracts the first argument from the second, then returns whether the result is negative.
  */
  export function isTimeMoreThan(timeA: number, timeB: number): boolean;

  /**
  * @returns Returns true if the two times are equal; otherwise returns false.
  */
  export function isTimeEqualTo(timeA: number, timeB: number): boolean;

  /**
  * Subtracts the second argument from the first.
  */
  export function getTimeDifference(timeA: number, timeB: number): number;

  export function getTimeAsString(time: number): string;

  export function getCloudTimeAsString(): string;

  /**
  * Returns POSIX timestamp, an int representing the cloud time.
  */
  export function getCloudTimeAsInt(): number;

  /**
  * Takes the specified time and writes it to the structure specified in the second argument.
  * struct date_time
  * {
  * int year;
  * int PADDING1;
  * int month;
  * int PADDING2;
  * int day;
  * int PADDING3;
  * See NativeDB for reference: http://natives.altv.mp/#/0xAC97AF97FA68E5D5
  */
  export function convertPosixTime(posixTime: number, timeStructure: any): [void, any];

  export function networkSetInSpectatorMode(toggle: boolean, playerPed: number): void;

  export function networkSetInSpectatorModeExtended(toggle: boolean, playerPed: number, p2: boolean): void;

  export function networkSetInFreeCamMode(toggle: boolean): void;

  export function networkSetChoiceMigrateOptions(toggle: boolean, player: number): void;

  export function networkIsInSpectatorMode(): boolean;

  export function networkSetInMpCutscene(p0: boolean, p1: boolean): void;

  export function networkIsInMpCutscene(): boolean;

  export function networkIsPlayerInMpCutscene(player: number): boolean;

  export function _0xFAC18E7356BD3210(): void;

  export function setNetworkVehicleRespotTimer(netId: number, time: number, p2: any, p3: any): void;

  export function setNetworkVehicleAsGhost(vehicle: number, toggle: boolean): void;

  export function _0xA2A707979FE754DC(p0: any, p1: any): void;

  export function _0x838DA0936A24ED4D(p0: any, p1: any): void;

  export function usePlayerColourInsteadOfTeamColour(toggle: boolean, p1: boolean): void;

  /**
  * IS_*
  */
  export function _0x21D04D7BC538C146(entity: number): boolean;

  /**
  * SET_NETWORK_*
  */
  export function _0x13F1FCB111B820B0(p0: boolean): void;

  export function _0xA7C511FA1C5BDA38(p0: any, p1: any): void;

  export function _0x658500AE6D723A7E(p0: any): void;

  export function _0x17330EBF2F2124A8(): void;

  export function _0x4BA166079D658ED4(p0: any, p1: any): void;

  export function _0xD7B6C73CAD419BCF(p0: boolean): void;

  /**
  * IS_*
  */
  export function _0x7EF7649B64D7FF10(entity: number): boolean;

  export function _0x77758139EC9B66C7(p0: boolean): void;

  export function networkCreateSynchronisedScene(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, rotationOrder: number, useOcclusionPortal: boolean, looped: boolean, p9: number, animTime: number, p11: number): number;

  export function networkAddPedToSynchronisedScene(ped: number, netScene: number, animDict: string, animnName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: any): void;

  export function _0xA5EAFE473E45C442(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  export function networkAddEntityToSynchronisedScene(entity: number, netScene: number, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: number): void;

  /**
  * NETWORK_A*
  * Similar structure as NETWORK_ADD_ENTITY_TO_SYNCHRONISED_SCENE but it includes this time a hash.
  * In casino_slots it is used one time in a synced scene involving a ped and the slot machine?
  */
  export function _0x45F35C0EDC33B03B(netScene: number, modelHash: number, x: number, y: number, z: number, p5: number, p6: string, p7: number, p8: number, flags: number): void;

  export function networkForceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;

  export function networkAttachSynchronisedSceneToEntity(netScene: number, entity: number, bone: number): void;

  export function networkStartSynchronisedScene(netScene: number): void;

  export function networkStopSynchronisedScene(netScene: number): void;

  /**
  * @param netScene to scene
  */
  export function networkConvertSynchronisedSceneToSynchronizedScene(netScene: number): number;

  export function _0xC9B43A33D09CADA7(p0: any): void;

  export function _0x144DA052257AE7D8(p0: any): void;

  /**
  * @param p0 is always 0. p1 is pointing to a global.
  */
  export function _0xFB1F9381E80FA13F(p0: number, p1: any): any;

  /**
  * One of the first things it does is get the players ped.
  * Then it calls a function that is used in some tasks and ped based functions.
  * p5, p6, p7 is another coordinate (or zero), often related to `GET_BLIP_COORDS, in the decompiled scripts.
  */
  export function networkStartRespawnSearchForPlayer(player: number, x: number, y: number, z: number, radius: number, p5: number, p6: number, p7: number, flags: number): boolean;

  /**
  * p8, p9, p10 is another coordinate, or zero, often related to `GET_BLIP_COORDS in the decompiled scripts.
  */
  export function networkStartRespawnSearchInAngledAreaForPlayer(player: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p8: number, p9: number, p10: number, flags: number): boolean;

  export function networkQueryRespawnResults(p0: any): [any, any];

  export function networkCancelRespawnSearch(): void;

  /**
  * Based on scripts such as in freemode.c how they call their vars vVar and fVar the 2nd and 3rd param it a Vector3 and Float, but the first is based on get_random_int_in_range..
  */
  export function networkGetRespawnResult(randomInt: number, coordinates: Vector3, heading: number): [void, Vector3, number];

  export function networkGetRespawnResultFlags(p0: any): any;

  /**
  * *
  */
  export function networkStartSoloTutorialSession(): void;

  export function _0xFB680D403909DC70(p0: any, p1: any): void;

  export function networkEndTutorialSession(): void;

  export function networkIsInTutorialSession(): boolean;

  export function _0xB37E4E6A2388CA7B(): boolean;

  export function networkIsTutorialSessionChangePending(): boolean;

  export function networkGetPlayerTutorialSessionInstance(player: number): number;

  /**
  * NETWORK_ARE_*
  */
  export function networkIsPlayerEqualToIndex(player: number, index: number): boolean;

  export function networkConcealPlayer(player: number, toggle: boolean, p2: boolean): void;

  export function networkIsPlayerConcealed(player: number): boolean;

  export function networkConcealEntity(entity: number, toggle: boolean): void;

  /**
  * Note: This only works for vehicles, which appears to be a bug (since the setter _does_ work for every entity type and the name is 99% correct).
  */
  export function networkIsEntityConcealed(entity: number): boolean;

  /**
  * Works in Singleplayer too.
  * Passing wrong data (e.g. hours above 23) will cause the game to crash.
  */
  export function networkOverrideClockTime(hours: number, minutes: number, seconds: number): void;

  export function networkOverrideClockMillisecondsPerGameMinute(ms: number): void;

  export function networkClearClockTimeOverride(): void;

  export function networkIsClockTimeOverridden(): boolean;

  export function networkAddEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): any;

  /**
  * To remove, see: NETWORK_REMOVE_ENTITY_AREA
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  */
  export function networkAddEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): any;

  export function networkAddEntityDisplayedBoundaries(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): any;

  export function _0x2B1C623823DB0D9D(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;

  export function networkRemoveEntityArea(p0: any): boolean;

  export function networkEntityAreaDoesExist(areaHandle: number): boolean;

  export function _0x4DF7CFFF471A7FB1(p0: any): boolean;

  export function networkEntityAreaIsOccupied(areaHandle: number): boolean;

  export function networkSetNetworkIdDynamic(netID: number, toggle: boolean): void;

  export function _0xA6FCECCF4721D679(p0: any): void;

  export function _0x95BAF97C82464629(p0: any, p1: any): void;

  export function networkRequestCloudBackgroundScripts(): boolean;

  export function networkIsCloudBackgroundScriptRequestPending(): boolean;

  export function networkRequestCloudTunables(): void;

  export function networkIsTunableCloudRequestPending(): boolean;

  export function networkGetTunableCloudCrc(): number;

  export function networkDoesTunableExist(tunableContext: string, tunableName: string): boolean;

  export function networkAccessTunableInt(tunableContext: string, tunableName: string, value: number): [boolean, number];

  export function networkAccessTunableFloat(tunableContext: string, tunableName: string, value: number): [boolean, number];

  export function networkAccessTunableBool(tunableContext: string, tunableName: string): boolean;

  export function networkDoesTunableExistHash(tunableContext: number, tunableName: number): boolean;

  export function networkAllocateTunablesRegistrationDataMap(): boolean;

  export function networkAccessTunableIntHash(tunableContext: number, tunableName: number, value: number): [boolean, number];

  export function networkRegisterTunableIntHash(contextHash: number, nameHash: number, value: number): [boolean, number];

  export function networkAccessTunableFloatHash(tunableContext: number, tunableName: number, value: number): [boolean, number];

  export function networkRegisterTunableFloatHash(contextHash: number, nameHash: number, value: number): [boolean, number];

  export function networkAccessTunableBoolHash(tunableContext: number, tunableName: number): boolean;

  export function networkRegisterTunableBoolHash(contextHash: number, nameHash: number, value: boolean): [boolean, boolean];

  /**
  * Returns defaultValue if the tunable doesn't exist.
  */
  export function networkTryAccessTunableBoolHash(tunableContext: number, tunableName: number, defaultValue: boolean): boolean;

  /**
  * Return the content modifier id (the tunables context if you want) of a specific content.
  * The mission id can be found on the Social club, for example, 'socialclub.rockstargames.com/games/gtav/jobs/job/A8M6Bz8MLEC5xngvDCzGwA'
  * 'A8M6Bz8MLEC5xngvDCzGwA' is the mission id, so the game hash this and use it as the parameter for this native.
  * @returns It takes the content hash (which is the mission id hash), and return the content modifier id, used as the tunables context.
  */
  export function networkGetContentModifierListId(contentHash: number): number;

  export function _0x7DB53B37A2F211A0(): number;

  export function networkResetBodyTracker(): void;

  export function networkGetNumBodyTrackers(): number;

  export function _0x2E0BF682CC778D49(p0: any): boolean;

  export function _0x0EDE326D47CD0F3E(ped: number, player: number): boolean;

  /**
  * Allows vehicle wheels to be destructible even when the vehicle entity is invincible.
  */
  export function networkSetVehicleWheelsDestructible(entity: number, toggle: boolean): void;

  export function _0x38B7C51AB1EDC7D8(entity: number, toggle: boolean): void;

  /**
  * nullsub, doesn't do anything
  */
  export function _0x3FC795691834481D(p0: any, p1: any): void;

  /**
  * In the console script dumps, this is only referenced once.
  * ^^^^^ That must be PC script dumps? In X360 Script Dumps it is reference a few times with 2 differences in the parameters.
  * Which as you see below is 1, 0, 0 + 1, 1, 0 + 1, 0, and a *param?
  * am_plane_takedown.c
  * network_explode_vehicle(net_to_veh(Local_40.imm_2), 1, 1, 0);
  * armenian2.c
  * network_explode_vehicle(Local_80[6 <2>], 1, 0, 0);
  * fm_horde_controler.c
  * network_explode_vehicle(net_to_veh(*uParam0), 1, 0, *uParam0);
  * See NativeDB for reference: http://natives.altv.mp/#/0x301A42153C9AD707
  */
  export function networkExplodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean, p3: boolean): void;

  export function _0x2A5E0621DD815A9A(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xCD71A4ECAB22709E(entity: number): void;

  export function networkOverrideCoordsAndHeading(entity: number, x: number, y: number, z: number, heading: number): void;

  export function _0xE6717E652B8C8D8A(p0: any, p1: any): void;

  export function networkDisableProximityMigration(netID: number): void;

  /**
  * value must be < 255
  */
  export function networkSetPropertyId(id: number): void;

  export function networkClearPropertyId(): void;

  export function _0x367EF5E2F439B4C6(p0: number): void;

  export function _0x94538037EE44F5CF(p0: boolean): void;

  export function networkCacheLocalPlayerHeadBlendData(): void;

  export function networkHasCachedPlayerHeadBlendData(player: number): boolean;

  export function networkApplyCachedPlayerHeadBlendData(ped: number, player: number): boolean;

  export function getNumCommerceItems(): number;

  export function isCommerceDataValid(): boolean;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0xB606E6CC59664972(p0: any): void;

  /**
  * IS_COMMERCE_*
  */
  export function _0x1D4DC17C38FEAFF0(): boolean;

  export function getCommerceItemId(index: number): string;

  export function getCommerceItemName(index: number): string;

  export function getCommerceProductPrice(index: number): string;

  export function getCommerceItemNumCats(index: number): number;

  /**
  * @param index2 is unused
  */
  export function getCommerceItemCat(index: number, index2: number): string;

  export function openCommerceStore(p0: string, p1: string, p2: number): void;

  export function isCommerceStoreOpen(): boolean;

  /**
  * Access to the store for shark cards etc...
  */
  export function setStoreEnabled(toggle: boolean): void;

  export function requestCommerceItemImage(index: number): boolean;

  export function releaseAllCommerceItemImages(): void;

  export function getCommerceItemTexturename(index: number): string;

  export function isStoreAvailableToUser(): boolean;

  export function _0x265635150FB0D82E(): void;

  /**
  * RESET_*
  * sfink: related to: NETWORK_BAIL
  * NETWORK_BAIL_TRANSITION
  * NETWORK_JOIN_GROUP_ACTIVITY
  * NETWORK_JOIN_TRANSITION
  * NETWORK_LAUNCH_TRANSITION
  * NETWORK_SESSION_HOST
  * NETWORK_SESSION_HOST_CLOSED
  * NETWORK_SESSION_HOST_FRIENDS_ONLY
  * See NativeDB for reference: http://natives.altv.mp/#/0x444C4525ECE0A4B9
  */
  export function _0x444C4525ECE0A4B9(): void;

  /**
  * IS_*
  */
  export function _0x59328EB08C5CEB2B(): boolean;

  export function _0xFAE628F1E9ADB239(p0: number, p1: number, p2: number): void;

  /**
  * Checks some commerce stuff
  */
  export function _0x754615490A029508(): number;

  /**
  * Checks some commerce stuff
  */
  export function _0x155467ACA0F55705(): number;

  export function cloudDeleteMemberFile(p0: string): number;

  export function cloudHasRequestCompleted(handle: number): boolean;

  export function cloudDidRequestSucceed(handle: number): boolean;

  /**
  * Downloads prod.cloud.rockstargames.com/titles/gta5/[platform]/check.json
  */
  export function cloudCheckAvailability(): void;

  export function cloudIsCheckingAvailability(): boolean;

  export function cloudGetAvailabilityCheckResult(): boolean;

  export function _0x8B0C2964BA471961(): any;

  export function _0x88B588B41FF7868E(): any;

  export function _0x67FC09BC554A75E5(): any;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function clearLaunchParams(): void;

  export function ugcCopyContent(p0: any, p1: any): [boolean, any, any];

  export function _0x9FEDF86898F100E9(): any;

  export function ugcHasCreateFinished(): boolean;

  export function _0x24E4E51FC16305F9(): any;

  export function ugcGetCreateResult(): any;

  export function ugcGetCreateContentId(): any;

  export function ugcClearCreateResult(): void;

  export function ugcQueryMyContent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): [boolean, any];

  export function _0x692D58DF40657E8C(p0: any, p1: any, p2: any, p3: any, p4: any, p5: boolean): [boolean, any];

  export function ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;

  export function ugcQueryByContentIds(data: any, count: number, latestVersion: boolean, contentTypeName: string): [boolean, any];

  export function ugcQueryRecentlyCreatedContent(offset: number, count: number, contentTypeName: string, p3: number): boolean;

  export function ugcGetBookmarkedContent(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function ugcGetMyContent(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function ugcGetFriendContent(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function ugcGetCrewContent(p0: any, p1: any, p2: any, p3: any, p4: any): [boolean, any, any];

  export function ugcGetGetByCategory(p0: any, p1: any, p2: any, p3: any, p4: any): [boolean, any, any];

  export function setBalanceAddMachine(contentId: string, contentTypeName: string): boolean;

  export function setBalanceAddMachines(data: any, dataCount: number, contentTypeName: string): [boolean, any];

  export function _0xA7862BC5ED1DFD7E(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function _0x97A770BEEF227E2B(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function _0x5324A0E3E4CE3570(p0: any, p1: any, p2: any, p3: any): [boolean, any, any];

  export function ugcCancelQuery(): void;

  export function ugcIsGetting(): boolean;

  export function ugcHasGetFinished(): boolean;

  export function ugcDidGetSucceed(): any;

  export function _0xC87E740D9F3872CC(): any;

  export function ugcGetQueryResult(): any;

  export function ugcGetContentNum(): any;

  export function ugcGetContentTotal(): any;

  export function ugcGetContentHash(): number;

  export function ugcClearQueryResults(): void;

  export function ugcGetContentUserId(p0: number): string;

  export function _0x584770794D758C18(p0: any, p1: any): [boolean, any];

  export function _0x8C8D2739BA44AF0F(p0: any): boolean;

  export function ugcGetContentUserName(p0: any): any;

  export function _0xAEAB987727C5A8A4(p0: any): boolean;

  export function ugcGetContentCategory(p0: number): number;

  /**
  * Return the mission id of a job.
  */
  export function ugcGetContentId(p0: number): string;

  /**
  * Return the root content id of a job.
  */
  export function ugcGetRootContentId(p0: number): string;

  export function ugcGetContentName(p0: any): any;

  export function ugcGetContentDescriptionHash(p0: any): number;

  export function ugcGetContentPath(p0: number, p1: number): string;

  export function ugcGetContentUpdatedDate(p0: any, p1: any): [void, any];

  export function ugcGetContentFileVersion(p0: any, p1: any): any;

  export function _0x1D610EB0FEA716D9(p0: number): boolean;

  export function _0x7FCC39C46C3C03BD(p0: number): boolean;

  export function ugcGetContentLanguage(p0: any): any;

  export function ugcGetContentIsPublished(p0: any): boolean;

  export function ugcGetContentIsVerified(p0: any): boolean;

  export function ugcGetContentRating(p0: any, p1: any): any;

  export function ugcGetContentRatingCount(p0: any, p1: any): any;

  export function ugcGetContentRatingPositiveCount(p0: any, p1: any): any;

  export function ugcGetContentRatingNegativeCount(p0: any, p1: any): any;

  export function ugcGetContentHasPlayerRecord(p0: any): boolean;

  export function ugcGetContentHasPlayerBookmarked(p0: any): boolean;

  export function ugcRequestContentDataFromIndex(p0: number, p1: number): number;

  export function ugcRequestContentDataFromParams(contentTypeName: string, contentId: string, p2: number, p3: number, p4: number): number;

  export function ugcRequestCachedDescription(p0: number): number;

  export function _0x2D5DC831176D0114(p0: any): boolean;

  export function _0xEBFA8D50ADDC54C4(p0: any): boolean;

  export function _0x162C23CA83ED0A62(p0: any): boolean;

  export function ugcGetCachedDescription(p0: any, p1: any): any;

  export function _0x5A34CD9C3C5BEC44(p0: any): boolean;

  export function _0x68103E2247887242(): void;

  export function ugcPublish(contentId: string, baseContentId: string, contentTypeName: string): boolean;

  export function ugcSetBookmarked(contentId: string, bookmarked: boolean, contentTypeName: string): boolean;

  export function ugcSetDeleted(p0: any, p1: boolean, p2: any): [boolean, any, any];

  export function _0x45E816772E93A9DB(): any;

  export function ugcHasModifyFinished(): boolean;

  export function _0x793FF272D5B365F4(): any;

  export function ugcGetModifyResult(): any;

  export function ugcClearModifyResult(): void;

  export function _0xB746D20B17F2A229(p0: any, p1: any): [boolean, any, any];

  export function _0x63B406D7884BFA95(): any;

  export function _0x4D02279C83BE69FE(): any;

  export function ugcGetCreatorNum(): any;

  export function ugcPoliciesMakePrivate(p0: any): boolean;

  export function ugcClearOfflineQuery(): void;

  export function ugcSetQueryDataFromOffline(p0: boolean): void;

  export function _0xFD75DABC0957BF33(p0: boolean): void;

  export function ugcIsLanguageSupported(p0: any): boolean;

  export function facebookSetHeistComplete(heistName: string, cashEarned: number, xpEarned: number): boolean;

  export function facebookSetCreateCharacterComplete(): boolean;

  export function facebookSetMilestoneComplete(milestoneId: number): boolean;

  export function facebookIsSendingData(): boolean;

  export function facebookDoUnkCheck(): boolean;

  export function facebookIsAvailable(): boolean;

  export function textureDownloadRequest(PlayerHandle: number, FilePath: string, Name: string, p3: boolean): [number, number];

  export function titleTextureDownloadRequest(FilePath: string, Name: string, p2: boolean): number;

  export function ugcTextureDownloadRequest(p0: any, p1: any, p2: any, p3: any, p4: any, p5: boolean): [any, any, any];

  export function textureDownloadRelease(p0: number): void;

  export function textureDownloadHasFailed(p0: number): boolean;

  export function textureDownloadGetName(p0: number): string;

  /**
  * 0 = succeeded
  * 1 = pending
  * 2 = failed
  */
  export function getStatusOfTextureDownload(p0: number): number;

  /**
  * Returns true if profile setting 901 is set to true and sets it to false.
  * NETWORK_C*
  */
  export function _0x60EDD13EB3AC1FF3(): boolean;

  /**
  * Returns true if the NAT type is Strict (3) and a certain number of connections have failed.
  */
  export function networkShouldShowConnectivityTroubleshooting(): boolean;

  export function networkIsCableConnected(): boolean;

  export function networkGetRosPrivilege9(): boolean;

  export function networkHaveRosSocialClubPriv(): boolean;

  export function networkHaveRosBannedPriv(): boolean;

  export function networkHaveRosCreateTicketPriv(): boolean;

  export function networkHaveRosMultiplayerPriv(): boolean;

  export function networkHaveRosLeaderboardWritePriv(): boolean;

  /**
  * @param index is always 18 in scripts
  */
  export function networkHasRosPrivilege(index: number): boolean;

  export function networkHasRosPrivilegeEndDate(privilege: number, banType: number, timeData: any): [boolean, number, any];

  export function networkGetRosPrivilege24(): boolean;

  export function networkGetRosPrivilege25(): boolean;

  export function _0x36391F397731595D(p0: any): any;

  export function _0xDEB2B99A1AF1A2A6(p0: any): any;

  export function _0x9465E683B12D3F6B(): void;

  /**
  * NETWORK_S*
  */
  export function _0xCA59CCAE5D01E4CE(): void;

  /**
  * Returns true if dinput8.dll is present in the game directory.
  * You will get following error message if that is true: "You are attempting to access GTA Online servers with an altered version of the game."
  */
  export function networkHasGameBeenAltered(): boolean;

  export function networkUpdatePlayerScars(): void;

  /**
  * NETWORK_D*
  * Probably NETWORK_DISABLE_*
  */
  export function _0xC505036A35AFD01B(toggle: boolean): void;

  export function networkAllowLocalEntityAttachment(entity: number, toggle: boolean): void;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x6BFF5F84102DF80A(player: number): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0x5C497525F803486B(): void;

  export function _0x6FB7BB3607D27FA2(): any;

  export function _0x45A83257ED02D9BC(): void;

  /**
  * NETWORK_IS_*
  */
  export function _0x16D3D49902F697BB(player: number): boolean;

  export function _0xD414BE129BB81B32(player: number): number;

  /**
  * alias 0xD414BE129BB81B32
  */
  export function _0x0E3A041ED6AC2B45(player: number): number;

  /**
  * NETWORK_GET_*
  */
  export function _0x350C23949E43686C(player: number): number;

  export function networkGetNumUnackedForPlayer(player: number): number;

  export function networkGetUnreliableResendCountForPlayer(player: number): number;

  /**
  * NETWORK_GET_*
  */
  export function networkGetOldestResendCountForPlayer(player: number): number;

  export function networkReportMyself(): void;

  /**
  * NETWORK_GET_*
  */
  export function _0x64D779659BC37B19(entity: number): Vector3;

  /**
  * Returns the coordinates of another player.
  * @returns Does not work if you enter your own player id as p0 (will return `(0.0, 0.0, 0.0)` in that case).
  */
  export function networkGetPlayerCoords(player: number): Vector3;

  /**
  * NETWORK_GET_*
  */
  export function _0x33DE49EDF4DDE77A(entity: number): Vector3;

  /**
  * NETWORK_GET_P*
  */
  export function _0xAA5FAFCD2C5F5E47(entity: number): Vector3;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0xAEDF1BC1C133D6E3(): any;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x2555CF7DA5473794(): any;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x6FD992C4A1C1B986(): any;

  export function _0xDB663CC9FF3407A9(player: number): number;

  export function createObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;

  export function createObjectNoOffset(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): number;

  /**
  * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
  */
  export function deleteObject(object: number): [void, number];

  export function placeObjectOnGroundProperly(object: number): boolean;

  export function placeObjectOnGroundProperly2(object: number): boolean;

  export function _0xAFE24E4D29249E4A(object: number, p1: number, p2: number, p3: boolean): boolean;

  /**
  * Returns true if the object has finished moving.
  * If false, moves the object towards the specified X, Y and Z coordinates with the specified X, Y and Z speed.
  * See also: https://gtagmodding.com/opcode-database/opcode/034E/
  * @returns Has to be looped until it returns true.
  */
  export function slideObject(object: number, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;

  export function setObjectTargettable(object: number, targettable: boolean): void;

  export function setObjectSomething(object: number, p1: boolean): void;

  /**
  * Has 8 params in the latest patches.
  * @param isMission - if true doesn't return mission objects
  * @returns isMission - if true doesn't return mission objects
  */
  export function getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: number, isMission: boolean, p6: boolean, p7: boolean): number;

  export function hasObjectBeenBroken(object: number, p1: any): boolean;

  export function hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: number, p5: any): boolean;

  export function hasClosestObjectOfTypeBeenCompletelyDestroyed(x: number, y: number, z: number, radius: number, modelHash: number, p5: boolean): boolean;

  export function _0x2542269291C6AC84(p0: any): any;

  export function getObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3;

  export function getCoordsAndRotationOfClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: number, outPosition: Vector3, outRotation: Vector3, rotationOrder: number): [any, Vector3, Vector3];

  /**
  * Hardcoded to not work in multiplayer.
  * Used to lock/unlock doors to interior areas of the game.
  * (Possible) Door Types:
  * pastebin.com/9S2m3qA4
  * 225 door types, model names and coords found in stripclub.c4:
  * pastebin.com/gywnbzsH
  * get door info: pastebin.com/i14rbekD
  * @param locked means that the heading is locked.
  * @param heading is either 1, 0 or -1 in the scripts. Means default closed(0) or opened either into(1) or out(-1) of the interior.
  * @param p6 is always 0.
  */
  export function setStateOfClosestDoorOfType(type: number, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;

  /**
  * locked is 0 if door is unlocked
  * locked is 1 if door is found and unlocked.
  * -------------
  * the locked bool is either 0(unlocked)(false) or 1(locked)(true)
  * @param locked is 0 if no door is found
  */
  export function getStateOfClosestDoorOfType(type: number, x: number, y: number, z: number, locked: boolean, heading: number): [void, boolean, number];

  /**
  * Hardcoded not to work in multiplayer environments.
  * When you set locked to 0 the door open and to 1 the door close
  * OBJECT::_9B12F9A24FABEDB0(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 0, 0.0, 50.0, 0);  //door open
  * OBJECT::_9B12F9A24FABEDB0(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 1, 0.0, 50.0, 0);  //door close
  */
  export function doorControl(modelHash: number, x: number, y: number, z: number, locked: boolean, xRotMult: number, yRotMult: number, zRotMult: number): void;

  export function _0x006E4B040ED37EC3(p0: any): void;

  /**
  * If scriptDoor is true, register the door on the script handler host (note: there's a hardcap on the number of script IDs that can be added to the system at a given time). If scriptDoor and isLocal are both false, the door is considered to be in a "Persists w/o netobj" state.
  * door hashes normally look like PROP_[int]_DOOR_[int] for interior doors and PROP_BUILDING_[int]_DOOR_[int] exterior doors but you can just make up your own hash if you want
  * All doors need to be registered with ADD_DOOR_TO_SYSTEM before they can be manipulated with the door natives and the easiest way to get door models is just find the door in codewalker.
  * Example: AddDoorToSystem("PROP_43_DOOR_0", "hei_v_ilev_fh_heistdoor2", -1456.818, -520.5037, 69.67043, 0, 0, 0)
  * @param doorHash has to be unique. scriptDoor false; relies upon getNetworkGameScriptHandler. isLocal On true disables the creation CRequestDoorEvent's in DOOR_SYSTEM_SET_DOOR_STATE.
  * @param p5 only set to true in single player native scripts.
  */
  export function addDoorToSystem(doorHash: number, modelHash: number, x: number, y: number, z: number, p5: boolean, scriptDoor: boolean, isLocal: boolean): void;

  /**
  * CDoor and CDoorSystemData still internally allocated (and their associations between doorHash, modelHash, and coordinates).
  * Only its NetObj removed and flag ``*(v2 + 192) |= 8u`` (1604 retail) toggled.
  */
  export function removeDoorFromSystem(doorHash: number): void;

  /**
  * `requestDoor` on true, and when door system is configured to, i.e., "persists w/o netobj", generate a CRequestDoorEvent.
  * `forceUpdate` on true, forces an update on the door system (same path as netObjDoor_applyDoorStuff)
  * Door lock states:
  * 0: UNLOCKED
  * 1: LOCKED
  * 2: DOORSTATE_FORCE_LOCKED_UNTIL_OUT_OF_AREA
  * 3: DOORSTATE_FORCE_UNLOCKED_THIS_FRAME
  * 4: DOORSTATE_FORCE_LOCKED_THIS_FRAME
  * 5: DOORSTATE_FORCE_OPEN_THIS_FRAME
  * 6: DOORSTATE_FORCE_CLOSED_THIS_FRAME
  * @returns Lockstates not applied and CNetObjDoor's not created until DOOR_SYSTEM_GET_IS_PHYSICS_LOADED returns true.
  */
  export function doorSystemSetDoorState(doorHash: number, state: number, requestDoor: boolean, forceUpdate: boolean): void;

  export function doorSystemGetDoorState(doorHash: number): number;

  export function doorSystemGetDoorPendingState(doorHash: number): number;

  /**
  * Includes networking check: ownership vs. or the door itself **isn't** networked.
  * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
  */
  export function doorSystemSetAutomaticRate(doorHash: number, rate: number, requestDoor: boolean, forceUpdate: boolean): void;

  /**
  * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
  */
  export function doorSystemSetAutomaticDistance(doorHash: number, distance: number, requestDoor: boolean, forceUpdate: boolean): void;

  /**
  * Sets the ajar angle of a door.
  * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
  * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
  */
  export function doorSystemSetOpenRatio(doorHash: number, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;

  export function _0xE851471AEFC3374F(p0: any): any;

  export function doorSystemGetOpenRatio(doorHash: number): number;

  /**
  * Includes networking check: ownership vs. or the door itself **isn't** networked.
  * `forceUpdate` on true invokes DOOR_SYSTEM_SET_DOOR_STATE otherwise requestDoor is unused.
  */
  export function doorSystemSetSpringRemoved(doorHash: number, removed: boolean, requestDoor: boolean, forceUpdate: boolean): void;

  /**
  * Includes networking check: ownership vs. or the door itself **isn't** networked.
  */
  export function doorSystemSetHoldOpen(doorHash: number, toggle: boolean): void;

  /**
  * Some property related to gates. Native name between ``DOOR_SYSTEM_SET_AUTOMATIC_RATE`` and ``DOOR_SYSTEM_SET_DOOR_STATE``.
  */
  export function _0xA85A21582451E951(doorHash: number, p1: boolean): void;

  /**
  * if (OBJECT::IS_DOOR_REGISTERED_WITH_SYSTEM(doorHash))
  * {
  * OBJECT::REMOVE_DOOR_FROM_SYSTEM(doorHash);
  * }
  */
  export function isDoorRegisteredWithSystem(doorHash: number): boolean;

  export function isDoorClosed(doorHash: number): boolean;

  export function _0xC7F29CA00F46350E(p0: boolean): void;

  /**
  * Clears the fields sets by 0xC7F29CA00F46350E (1604 retail: 0x1424A7A10, 0x1424A7A11) and iterates over the global CDoor's bucket-list.
  * Related to its "Pre-networked state"?
  */
  export function _0x701FDA1E82076BA4(): void;

  export function doorSystemGetIsPhysicsLoaded(p0: any): boolean;

  /**
  * Search radius: 0.5
  */
  export function doorSystemFindExistingDoor(x: number, y: number, z: number, modelHash: number, outDoorHash: number): [boolean, number];

  export function isGarageEmpty(garageHash: number, p1: boolean, p2: number): boolean;

  export function isPlayerEntirelyInsideGarage(garageHash: number, player: number, p2: number, p3: number): boolean;

  export function isPlayerPartiallyInsideGarage(garageHash: number, player: number, p2: number): boolean;

  export function areEntitiesEntirelyInsideGarage(garageHash: number, p1: boolean, p2: boolean, p3: boolean, p4: any): boolean;

  export function isAnyEntityEntirelyInsideGarage(garageHash: number, p1: boolean, p2: boolean, p3: boolean, p4: any): boolean;

  /**
  * Despite the name, it does work for any entity type.
  */
  export function isObjectEntirelyInsideGarage(garageHash: number, entity: number, p2: number, p3: number): boolean;

  /**
  * Despite the name, it does work for any entity type.
  */
  export function isObjectPartiallyInsideGarage(garageHash: number, entity: number, p2: number): boolean;

  /**
  * CLEAR_*
  */
  export function clearGarageArea(garageHash: number, isNetwork: boolean): void;

  /**
  * CLEAR_*
  */
  export function _0x190428512B240692(garageHash: number, vehicles: boolean, peds: boolean, objects: boolean, isNetwork: boolean): void;

  /**
  * Sets a flag. A valid id is 0x157DC10D
  * SET_FLAG_??
  */
  export function _0x659F9D71F52843F8(id: number, toggle: boolean): void;

  export function enableSavingInGarage(garageHash: number, toggle: boolean): void;

  export function _0x66A49D021870FE88(): void;

  /**
  * @param p5 is usually 0.
  */
  export function doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: number, p5: boolean): boolean;

  /**
  * An angled area is an X-Z oriented rectangle with three parameters:
  * 1. origin: the mid-point along a base edge of the rectangle;
  * 2. extent: the mid-point of opposite base edge on the other Z;
  * 3. width: the length of the base edge; (named derived from logging strings ``CNetworkRoadNodeWorldStateData``).
  * 1. golf_mp https://i.imgur.com/JhsQAK9.png
  * 2. am_taxi https://i.imgur.com/TJWCZaT.jpg
  * @param width extent)``), its orthonormal, and the width, e.g:
  */
  export function isPointInAngledArea(xPos: number, yPos: number, zPos: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, debug: boolean, includeZ: boolean): boolean;

  /**
  * Overrides the climbing/blocking flags of the object, used in the native scripts mostly for "prop_dock_bouy_*"
  */
  export function setObjectCanClimbOn(object: number, toggle: boolean): void;

  /**
  * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
  * Other parameters seem to be unknown.
  * @param p2 seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
  * @param p3 seems similar to p2
  * @param p4 makes obj fall slower the higher the value
  * @param p5 similar to p4
  */
  export function setObjectPhysicsParams(object: number, weight: number, p2: number, p3: number, p4: number, p5: number, gravity: number, p7: number, p8: number, p9: number, p10: number, buoyancy: number): void;

  export function getObjectFragmentDamageHealth(p0: any, p1: boolean): number;

  export function setActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: number, toggle: boolean): void;

  export function isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;

  export function isObjectNearPoint(objectHash: number, x: number, y: number, z: number, range: number): boolean;

  export function removeObjectHighDetailModel(object: number): void;

  export function _0xE7E4C198B0185900(p0: number, p1: any, p2: boolean): void;

  export function _0xE05F6AEEFEB0BB02(p0: any, p1: any, p2: any): void;

  export function _0xF9C1681347C8BD15(object: number): void;

  export function trackObjectVisibility(object: number): void;

  export function isObjectVisible(object: number): boolean;

  export function _0xC6033D32241F6FB5(object: number, toggle: boolean): void;

  export function _0xEB6F1A9B5510A5D2(p0: any, p1: boolean): void;

  export function setUnkGlobalBoolRelatedToDamage(value: boolean): void;

  /**
  * Requires a component_at_*_flsh to be attached to the weapon object
  */
  export function setCreateWeaponObjectLightSource(object: number, toggle: boolean): void;

  /**
  * Example:
  * OBJECT::GET_RAYFIRE_MAP_OBJECT(-809.9619750976562, 170.919, 75.7406997680664, 3.0, "des_tvsmash");
  */
  export function getRayfireMapObject(x: number, y: number, z: number, radius: number, name: string): number;

  /**
  * Defines the state of a destructible object.
  * Use the GET_RAYFIRE_MAP_OBJECT native to find an object's handle with its name / coords.
  * State 4 == Beginning of the animation
  * State 6 == Start animation
  * State 9 == End of the animation
  * @param state 2 == object just spawned
  */
  export function setStateOfRayfireMapObject(object: number, state: number): void;

  /**
  * Get a destructible object's state.
  * Substract 1 to get the real state.
  * See SET_STATE_OF_RAYFIRE_MAP_OBJECT to see the different states
  * @returns For example, if the object just spawned (state 2), the native will return 3.
  */
  export function getStateOfRayfireMapObject(object: number): number;

  /**
  * Returns true if a destructible object with this handle exists, false otherwise.
  */
  export function doesRayfireMapObjectExist(object: number): boolean;

  /**
  * `object`: The des-object handle to get the animation progress from.
  * Return value is a float between 0.0 and 1.0, 0.0 is the beginning of the animation, 1.0 is the end. Value resets to 0.0 instantly after reaching 1.0.
  */
  export function getRayfireMapObjectAnimPhase(object: number): number;

  /**
  * Pickup hashes: pastebin.com/8EuSv2r1
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function createPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: number): number;

  /**
  * Pickup hashes: pastebin.com/8EuSv2r1
  * flags:
  * 8 (1 << 3): place on ground
  * 512 (1 << 9): spin around
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function createPickupRotate(pickupHash: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: any, p10: boolean, modelHash: number): number;

  export function _0x394CD08E31313C28(): void;

  export function _0x826D1EE4D1CAFC78(p0: any, p1: any): void;

  /**
  * Used for doing money drop
  * Pickup hashes: pastebin.com/8EuSv2r1
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function createAmbientPickup(pickupHash: number, posX: number, posY: number, posZ: number, flags: number, value: number, modelHash: number, p7: boolean, p8: boolean): number;

  export function _0x1E3F1B1B891A2AAA(p0: any, p1: any): void;

  /**
  * Pickup hashes: pastebin.com/8EuSv2r1
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function createPortablePickup(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): number;

  /**
  * CREATE_*
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function createPortablePickup2(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): number;

  export function attachPortablePickupToPed(pickupObject: number, ped: number): void;

  export function detachPortablePickupFromPed(pickupObject: number): void;

  export function hidePickup(pickupObject: number, toggle: boolean): void;

  export function setMaxNumPortablePickupsCarriedByPlayer(modelHash: number, p1: number): void;

  export function _0x78857FC65CADB909(p0: boolean): void;

  export function getSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): Vector3;

  /**
  * Adds an area that seems to be related to pickup physics behavior.
  * Max amount of areas is 10. Only works in multiplayer.
  * ADD_*
  */
  export function _0xD4A7A435B3710D05(x: number, y: number, z: number, radius: number): void;

  /**
  * Clears all areas created by 0xD4A7A435B3710D05
  * CLEAR_*
  */
  export function _0xB7C6D80FB371659A(): void;

  export function getPickupCoords(pickup: number): Vector3;

  export function _0x8DCA505A5C196F05(p0: any, p1: any): void;

  /**
  * Pickup hashes: pastebin.com/8EuSv2r1
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function removeAllPickupsOfType(pickupHash: number): void;

  export function hasPickupBeenCollected(pickup: number): boolean;

  export function removePickup(pickup: number): void;

  /**
  * Spawns one or more money pickups.
  * Example:
  * CREATE_MONEY_PICKUPS(x, y, z, 1000, 3, 0x684a97ae);
  * Spawns 3 spray cans that'll collectively give $1000 when picked up. (Three spray cans, each giving $334, $334, $332 = $1000).
  * ==============================================
  * Max is 2000 in MP. So if you put the amount to 20, but the value to $400,000 eg. They will only be able to pickup 20 - $2,000 bags. So, $40,000
  * @param x The X-component of the world position to spawn the money pickups at.
  * @param y The Y-component of the world position to spawn the money pickups at.
  * @param z The Z-component of the world position to spawn the money pickups at.
  * @param value The combined value of the pickups (in dollars).
  * @param amount The number of pickups to spawn.
  * @param model The model to use, or 0 for default money model.
  */
  export function createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: number): void;

  export function doesPickupExist(pickup: number): boolean;

  export function doesPickupObjectExist(pickupObject: number): boolean;

  export function getPickupObject(pickup: number): number;

  export function isObjectAPortablePickup(object: number): boolean;

  export function isObjectAPickup(object: number): boolean;

  /**
  * Pickup hashes: pastebin.com/8EuSv2r1
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function doesPickupOfTypeExistInArea(pickupHash: number, x: number, y: number, z: number, radius: number): boolean;

  export function setPickupRegenerationTime(pickup: number, duration: number): void;

  export function forcePickupRegenerate(p0: any): void;

  /**
  * Disabling/enabling a player from getting pickups. From the scripts:
  * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
  * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
  * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 1);
  * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
  * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 0);
  * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 1);
  * SET_PLAYER_*
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function toggleUsePickupsForPlayer(player: number, pickupHash: number, toggle: boolean): void;

  /**
  * Maximum amount of pickup models that can be disallowed is 30.
  * SET_LOCAL_PLAYER_*
  */
  export function setLocalPlayerCanUsePickupsWithThisModel(modelHash: number, toggle: boolean): void;

  /**
  * A*
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function _0xFDC07C58E8AAB715(pickupHash: number): void;

  export function setTeamPickupObject(object: number, p1: any, p2: boolean): void;

  export function preventCollectionOfPortablePickup(object: number, p1: boolean, p2: boolean): void;

  export function _0x0596843B34B95CE5(p0: any, p1: any): void;

  export function _0xA08FE5E49BDC39DD(p0: any, p1: number, p2: boolean): void;

  export function _0x62454A641B41F3C5(p0: any): void;

  export function _0x39A5FB7EAF150840(p0: any, p1: any): void;

  export function _0xDB41D07A45A6D4B7(p0: any): any;

  export function setPickupGenerationRangeMultiplier(multiplier: number): void;

  export function getPickupGenerationRangeMultiplier(): number;

  export function _0x31F924B53EADDF65(p0: boolean): void;

  export function setPickupUncollectable(p0: any, p1: any): void;

  export function _0x858EC9FD25DE04AA(p0: any, p1: any): void;

  export function setPickupHiddenWhenUncollectable(p0: any, p1: any): void;

  export function _0x8881C98A31117998(p0: any, p1: any): void;

  export function _0x8CFF648FBD7330F1(p0: any): void;

  export function _0x46F3ADD1E2D5BAF2(p0: any, p1: any): void;

  export function _0x641F272B52E2F0F8(p0: any, p1: any): void;

  /**
  * Sets some bit of pickup
  * SET_PICKUP_*
  */
  export function _0x4C134B4DF76025D0(pickup: number, toggle: boolean): void;

  /**
  * Sets some value of pickup
  * SET_PICKUP_*
  */
  export function _0xAA059C615DE9DD03(pickup: number, toggle: boolean): void;

  export function _0xF92099527DB8E2A7(p0: any, p1: any): void;

  /**
  * CLEAR_*
  */
  export function _0xA2C1F5E92AFE49ED(): void;

  export function _0x762DB2D380B48D04(p0: any): void;

  /**
  * draws circular marker at pos
  * -1 = none
  * 0 = red
  * 1 = green
  * 2 = blue
  * 3 = green larger
  * 4 = nothing
  * 5 = green small
  */
  export function highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;

  /**
  * SET_PICKUP_*
  */
  export function _0x7813E8B8C4AE4799(pickup: number): void;

  /**
  * Sets some pickup flag?
  * SET_PICKUP_*
  */
  export function _0xBFFE53AE7E67FCDC(pickup: number, toggle: boolean): void;

  /**
  * Sets entity+38 to C (when false) or 0xFF3f (when true)
  * SET_ENTITY_??
  */
  export function _0xD05A3241B9A86F19(entity: number, toggle: boolean): void;

  export function _0xB2D0BDE54F0E8E5A(object: number, toggle: boolean): void;

  /**
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function getWeaponTypeFromPickupType(pickupHash: number): number;

  /**
  * Returns the pickup hash for the given weapon hash
  */
  export function getPickupHashFromWeapon(weaponHash: number): number;

  export function isPickupWeaponObjectValid(object: number): boolean;

  export function getObjectTextureVariation(object: number): number;

  /**
  * enum ObjectPaintVariants
  * {
  * Pacific = 0,
  * Azure = 1,
  * Nautical = 2,
  * Continental = 3,
  * Battleship = 4,
  * Intrepid = 5,
  * Uniform = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0x971DA0055324D033
  */
  export function setObjectTextureVariation(object: number, textureVariation: number): void;

  export function setTextureVariationOfClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: number, textureVariation: number): boolean;

  export function _0x31574B1B41268673(p0: any, p1: any): void;

  export function setObjectLightColor(object: number, p1: boolean, r: number, g: number, b: number): any;

  /**
  * GET_OBJECT_??
  */
  export function _0xADF084FB8F075D06(object: number): boolean;

  /**
  * SET_OBJECT_*
  */
  export function _0x3B2FD68DB5F8331C(object: number, toggle: boolean): void;

  export function setObjectStuntPropSpeedup(object: number, p1: any): void;

  export function setObjectStuntPropDuration(object: number, duration: number): void;

  /**
  * returns pickup hash.
  * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
  */
  export function getPickupHash(pickupHash: number): number;

  export function setForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;

  /**
  * is this like setting is as no longer needed?
  */
  export function markObjectForDeletion(object: number): void;

  export function _0x8CAAB2BD3EA58BD4(p0: any): void;

  export function _0x63ECF581BC70E363(p0: any, p1: any): void;

  /**
  * Activate the physics to: "xs_prop_arena_{flipper,wall,bollard,turntable,pit}"
  */
  export function setEnableArenaPropPhysics(object: number, toggle: boolean, p2: number): void;

  export function setEnableArenaPropPhysicsOnPed(object: number, toggle: boolean, p2: number, ped: number): void;

  /**
  * Sets some bit of object
  * SET_OBJECT_*
  */
  export function _0x734E1714D077DA9A(object: number, toggle: boolean): void;

  /**
  * Sets some bit of object
  * SET_OBJECT_*
  */
  export function _0x1A6CBB06E2D0D79D(object: number, p1: boolean): void;

  export function getIsArenaPropPhysicsDisabled(object: number, p1: any): boolean;

  export function _0x3BD770D281982DB5(p0: any, p1: any): any;

  /**
  * Sets some flag of object
  * SET_OBJECT_*
  */
  export function _0x1C57C94A6446492A(object: number, toggle: boolean): void;

  /**
  * Sets some bit of object
  * SET_OBJECT_*
  */
  export function _0xB5B7742424BD4445(object: number, toggle: boolean): void;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isControlEnabled(padIndex: number, control: number): boolean;

  /**
  * Returns whether a control is currently pressed.
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isControlPressed(padIndex: number, control: number): boolean;

  /**
  * Returns whether a control is currently _not_ pressed.
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isControlReleased(padIndex: number, control: number): boolean;

  /**
  * Returns whether a control was newly pressed since the last check.
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isControlJustPressed(padIndex: number, control: number): boolean;

  /**
  * Returns whether a control was newly released since the last check.
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isControlJustReleased(padIndex: number, control: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function getControlValue(padIndex: number, control: number): number;

  /**
  * Returns the value of GET_CONTROL_VALUE normalized (i.e. a real number value between -1 and 1)
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function getControlNormal(padIndex: number, control: number): number;

  export function _0x5B73C77D9EB66E24(p0: boolean): void;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @returns Seems to return values between -1 and 1 for controls like gas and steering.
  */
  export function getControlUnboundNormal(padIndex: number, control: number): number;

  /**
  * This is for simulating player input.
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @param amount is a float value from 0 - 1
  */
  export function setControlNormal(padIndex: number, control: number, amount: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isDisabledControlPressed(padIndex: number, control: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isDisabledControlReleased(padIndex: number, control: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isDisabledControlJustPressed(padIndex: number, control: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isDisabledControlJustReleased(padIndex: number, control: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @param control - c# works with (int)GTA.Control.CursorY / (int)GTA.Control.CursorX and returns the mouse movement (additive).
  * @returns control - c# works with (int)GTA.Control.CursorY / (int)GTA.Control.CursorX and returns the mouse movement (additive).
  */
  export function getDisabledControlNormal(padIndex: number, control: number): number;

  /**
  * The "disabled" variant of _0x5B84D09CEC5209C5.
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function getDisabledControlUnboundNormal(padIndex: number, control: number): number;

  export function _0xD7D22F5592AED8BA(p0: number): number;

  /**
  * Used to be known as _GET_LAST_INPUT_METHOD & _IS_INPUT_DISABLED
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isUsingKeyboard(padIndex: number): boolean;

  /**
  * Used to be known as _IS_INPUT_JUST_DISABLED
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function isUsingKeyboard2(padIndex: number): boolean;

  export function setCursorLocation(x: number, y: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @returns Hardcoded to return false.
  */
  export function _0x23F09EADC01449D6(padIndex: number): boolean;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function _0x6CD79468A1E595C6(padIndex: number): boolean;

  /**
  * formerly called _GET_CONTROL_ACTION_NAME incorrectly
  * p2 is unused variable in function.
  * EG:
  * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 201, 1) INPUT_FRONTEND_ACCEPT (e.g. Enter button)
  * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 202, 1) INPUT_FRONTEND_CANCEL (e.g. ESC button)
  * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 51, 1) INPUT_CONTEXT (e.g. E button)
  * gtaforums.com/topic/819070-c-draw-instructional-buttons-scaleform-movie/#entry1068197378
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @param p2 appears to always be true.
  */
  export function getControlInstructionalButton(padIndex: number, control: number, p2: boolean): string;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function getControlGroupInstructionalButton(padIndex: number, controlGroup: number, p2: boolean): string;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function setControlLightEffectColor(padIndex: number, red: number, green: number, blue: number): void;

  export function _0xCB0360EFEFB2580D(padIndex: number): void;

  /**
  * appears to be a hash collision, though it does do what it says
  * example:
  * SET_PAD_SHAKE(0, 100, 200);
  * @param padIndex always seems to be 0
  * @param duration in milliseconds
  * @param frequency should range from about 10 (slow vibration) to 255 (very fast)
  */
  export function setPadShake(padIndex: number, duration: number, frequency: number): void;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x14D29BB12D47F68C(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function stopPadShake(padIndex: number): void;

  export function _0xF239400E16C23E08(p0: any, p1: any): void;

  export function _0xA0CEFCEA390AAB9B(p0: any): void;

  export function isLookInverted(): boolean;

  /**
  * Used with IS_LOOK_INVERTED() and negates its affect.
  * --
  * Not sure how the person above got that description, but here's an actual example:
  * if (PAD::_GET_LAST_INPUT_METHOD(2)) {
  * if (a_5) {
  * if (PAD::IS_LOOK_INVERTED()) {
  * a_3 *= -1;
  * }
  * if (PAD::_E1615EC03B3BB4FD()) {
  * See NativeDB for reference: http://natives.altv.mp/#/0xE1615EC03B3BB4FD
  */
  export function _0xE1615EC03B3BB4FD(): boolean;

  /**
  * Returns the local player's targeting mode. See PLAYER::SET_PLAYER_TARGETING_MODE.
  */
  export function getLocalPlayerAimState(): number;

  /**
  * Same behavior as GET_LOCAL_PLAYER_AIM_STATE but only used on the PC version.
  */
  export function getLocalPlayerAimState2(): number;

  export function _0x25AAA32BDC98F2A3(): any;

  /**
  * Returns profile setting 225.
  */
  export function getIsUsingAlternateDriveby(): boolean;

  /**
  * Returns profile setting 17.
  */
  export function getAllowMovementWhileZoomed(): boolean;

  export function setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function setInputExclusive(padIndex: number, control: number): void;

  /**
  * Control values from the decompiled scripts: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
  * 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,5
  * 4,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,
  * 79,80,81,82,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,103,105,
  * 107,108,109,110,111,112,113,114,115,116,117,118,119,123,126,129,130,131,132,
  * 133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,
  * 153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,171,172
  * ,177,187,188,189,190,195,196,199,200,201,202,203,205,207,208,209,211,212,213, 217,219,220,221,225,226,230,234,235,236,237,238,239,240,241,242,243,244,257,
  * 261,262,263,264,265,270,271,272,273,274,278,279,280,281,282,283,284,285,286,
  * See NativeDB for reference: http://natives.altv.mp/#/0xFE99B66D079CF6BC
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @param control values and meaning: github.com/crosire/scripthookvdotnet/blob/dev_v3/source/scripting/Controls.cs
  */
  export function disableControlAction(padIndex: number, control: number, disable: boolean): void;

  /**
  * Control values from the decompiled scripts:
  * 0,1,2,3,4,5,6,8,9,10,11,14,15,16,17,19,21,22,24,25,26,30,31,32,33,34,35,36,
  * 37,44,46,47,59,60,65,68,69,70,71,72,73,74,75,76,79,80,81,82,86,95,98,99,100
  * ,101,114,140,141,143,172,173,174,175,176,177,178,179,180,181,187,188,189,19
  * 0,195,196,197,198,199,201,202,203,204,205,206,207,208,209,210,217,218,219,2
  * 20,221,225,228,229,230,231,234,235,236,237,238,239,240,241,242,245,246,257,
  * 261,262,263,264,286,287,288,289,337,338,339,340,341,342,343
  * INPUTGROUP_MOVE
  * INPUTGROUP_LOOK
  * See NativeDB for reference: http://natives.altv.mp/#/0x351220255D64C155
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  * @param control values and meaning: github.com/crosire/scripthookvdotnet/blob/dev/source/scripting/Controls.hpp
  */
  export function enableControlAction(padIndex: number, control: number, enable: boolean): void;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function disableAllControlActions(padIndex: number): void;

  /**
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function enableAllControlActions(padIndex: number): void;

  /**
  * Used in carsteal3 script with p0 = "Carsteal4_spycar".
  * S*
  */
  export function switchToInputMappingScheme(name: string): boolean;

  /**
  * Same as 0x3D42B92563939375
  * S*
  */
  export function switchToInputMappingScheme2(name: string): boolean;

  /**
  * S*
  */
  export function resetInputMappingScheme(): void;

  /**
  * A*
  * @param padIndex 0 (PLAYER_CONTROL), 1 (unk) and 2 (unk) used in the scripts.
  */
  export function disableInputGroup(padIndex: number): void;

  /**
  * When nodeEnabled is set to false, all nodes in the area get disabled.
  * If it's true, `GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns false.
  * @returns `GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns true afterwards.
  */
  export function setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, nodeEnabled: boolean, unknown2: boolean): void;

  /**
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  * @param unknown3 is related to `SEND_SCRIPT_WORLD_STATE_EVENT > CNetworkRoadNodeWorldStateData` in networked environments.
  */
  export function setRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, unknown1: boolean, unknown2: boolean, unknown3: boolean): void;

  export function setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean, p7: any): void;

  /**
  * 1 = 1 = B02_IsFootpath
  * 2 = 4 = !B15_InteractionUnk
  * 4 = 0x20 = !B14_IsInterior
  * 8 = 0x40 = !B07_IsWater
  * 16 = 0x200 = B17_IsFlatGround
  * When onGround == true outPosition is a position located on the nearest pavement.
  * When a safe coord could not be found the result of a function is false and outPosition == Vector3.Zero.
  * In the scripts these flags are used: 0, 14, 12, 16, 20, 21, 28. 0 is most commonly used, then 16.
  * 16 works for me, 0 crashed the script.
  * @param flags are:
  */
  export function getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, outPosition: Vector3, flags: number): [boolean, Vector3];

  /**
  * FYI: When falling through the map (or however you got under it) you will respawn when your player ped's height is <= -200.0 meters (I think you all know this) and when in a vehicle you will actually respawn at the closest vehicle node.
  * ----------
  * Vector3 nodePos;
  * GET_CLOSEST_VEHICLE_NODE(x,y,z,&nodePos,...)
  * 0x40400000 (3.0), 0
  * p5 can also be 100.0 and p6 can be 2.5:
  * PATHFIND::GET_CLOSEST_VEHICLE_NODE(a_0, &v_5, v_9, 100.0, 2.5)
  * Known node types: simple path/asphalt road, only asphalt road, water, under the map at always the same coords.
  * The node types follows a pattern. For example, every fourth node is of the type water i.e. 3, 7, 11, 15, 19, 23, 27, 31, 35, 39... 239. Could not see any difference between nodes within certain types.
  * See NativeDB for reference: http://natives.altv.mp/#/0x240A18690AE96513
  * @param nodeType is either 0, 1 or 8. 1 means any path/road. 0 means node in the middle of the closest main (asphalt) road.
  */
  export function getClosestVehicleNode(x: number, y: number, z: number, outPosition: Vector3, nodeType: number, p5: number, p6: number): [boolean, Vector3];

  /**
  * Get the closest vehicle node to a given position, unknown1 = 3.0, unknown2 = 0
  */
  export function getClosestMajorVehicleNode(x: number, y: number, z: number, outPosition: Vector3, unknown1: number, unknown2: number): [boolean, Vector3];

  /**
  * p5, p6 and p7 seems to be about the same as p4, p5 and p6 for GET_CLOSEST_VEHICLE_NODE. p6 and/or p7 has something to do with finding a node on the same path/road and same direction(at least for this native, something to do with the heading maybe). Edit this when you find out more.
  * Known node types: simple path/asphalt road, only asphalt road, water, under the map at always the same coords.
  * The node types follows a pattern. For example, every fourth node is of the type water i.e. 3, 7, 11, 15, 19, 23, 27, 31, 35, 39... 239. Could not see any difference between nodes within certain types.
  * Starting at 2, every fourth node is under the map, always same coords.
  * Same with only asphalt road (0, 4, 8, etc) and simple path/asphalt road (1, 5, 9, etc).
  * gtaforums.com/topic/843561-pathfind-node-types
  * Example of usage, moving vehicle to closest path/road:
  * Vector3 coords = ENTITY::GET_ENTITY_COORDS(playerVeh, true);
  * Vector3 closestVehicleNodeCoords;
  * See NativeDB for reference: http://natives.altv.mp/#/0xFF071FB798B803B0
  * @param nodeType is either 1 or 12. 1 means any path/road. 12, 8, 0 means node in the middle of the closest main (asphalt) road.
  * @param p6 is always 3.0
  * @param p7 is always 0.
  */
  export function getClosestVehicleNodeWithHeading(x: number, y: number, z: number, outPosition: Vector3, outHeading: number, nodeType: number, p6: number, p7: number): [boolean, Vector3, number];

  export function getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3, unknown1: any, unknown2: any, unknown3: any): [boolean, Vector3];

  /**
  * Returns the id.
  */
  export function getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;

  /**
  * Get the nth closest vehicle node and its heading. (unknown2 = 9, unknown3 = 3.0, unknown4 = 2.5)
  */
  export function getNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3, outHeading: number, unknown1: any, unknown2: number, unknown3: number, unknown4: number): [boolean, Vector3, number, any];

  export function getNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3, outHeading: number, p6: any, p7: number, p8: number): [number, Vector3, number];

  /**
  * @param y pathfind
  * @param p10 always equals 3.0
  * @param p11 always equals 0
  */
  export function getNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, outPosition: Vector3, outHeading: number, nodetype: number, p10: number, p11: any): [boolean, Vector3, number];

  /**
  * MulleDK19: Gets the density and flags of the closest node to the specified position.
  * @param density is a value between 0 and 15, indicating how busy the road is.
  * @param flags is a bit field.
  */
  export function getVehicleNodeProperties(x: number, y: number, z: number, density: number, flags: number): [boolean, number, number];

  /**
  * Returns true if the id is non zero.
  */
  export function isVehicleNodeIdValid(vehicleNodeId: number): boolean;

  /**
  * Calling this with an invalid node id, will crash the game.
  * Note that IS_VEHICLE_NODE_ID_VALID simply checks if nodeId is not zero. It does not actually ensure that the id is valid.
  * @returns Eg. IS_VEHICLE_NODE_ID_VALID(1) will return true, but will crash when calling GET_VEHICLE_NODE_POSITION().
  */
  export function getVehicleNodePosition(nodeId: number, outPosition: Vector3): [void, Vector3];

  /**
  * Returns false for nodes that aren't used for GPS routes.
  * Example:
  * Nodes in Fort Zancudo and LSIA are false
  */
  export function getVehicleNodeIsGpsAllowed(nodeID: number): boolean;

  /**
  * Normal roads where plenty of Peds spawn will return false
  * @returns Returns true when the node is Offroad. Alleys, some dirt roads, and carparks return true.
  */
  export function getVehicleNodeIsSwitchedOff(nodeID: number): boolean;

  /**
  * @param y seems to be always 1.0f in the scripts
  */
  export function getClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p5: Vector3, p6: Vector3, p7: any, p8: any, p9: number, p10: boolean): [any, Vector3, Vector3, any, any, number];

  /**
  * Toggles a global boolean, name is probably a hash collision but describes its functionality.
  */
  export function setAllPathsCacheBoundingstruct(toggle: boolean): void;

  /**
  * Activates Cayo Perico path nodes if passed `1`. GPS navigation will start working, maybe more stuff will change, not sure. It seems if you try to unload (pass `0`) when close to the island, your game might crash.
  */
  export function setAiGlobalPathNodesType(type: number): void;

  /**
  * ARE_*
  */
  export function areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;

  /**
  * Used internally for long range tasks
  */
  export function requestPathsPreferAccurateBoundingstruct(x1: number, y1: number, x2: number, y2: number): boolean;

  /**
  * missing a last parameter int p6
  */
  export function setRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): void;

  /**
  * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
  * bool p7 - always 1
  */
  export function setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: any): void;

  export function setAmbientPedRangeMultiplierThisFrame(multiplier: number): void;

  export function _0xAA76052DDA9BFC3E(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function setPedPathsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, outPosition: Vector3, nodeId: number): [boolean, Vector3, number];

  /**
  * Determines the name of the street which is the closest to the given coordinates.
  * Note: the names are returned as hashes, the strings can be returned using the function HUD::GET_STREET_NAME_FROM_HASH_KEY.
  * @param x the coordinates of the street
  * @param y the coordinates of the street
  * @param streetName - returns a hash to the name of the street the coords are on
  * @param crossingRoad - if the coordinates are on an intersection, a hash to the name of the crossing road
  * @returns streetName - returns a hash to the name of the street the coords are on
  */
  export function getStreetNameAtCoord(x: number, y: number, z: number, streetName: number, crossingRoad: number): [void, number, number];

  /**
  * 0 = This happens randomly during the drive for seemingly no reason but if you consider that this native is only used in trevor3, it seems to mean "Next frame, stop whatever's being said and tell the player the direction."
  * 1 = Route is being calculated or the player is going in the wrong direction
  * 2 = Please Proceed the Highlighted Route
  * 3 = In (distToNxJunction) Turn Left
  * 4 = In (distToNxJunction) Turn Right
  * 5 = In (distToNxJunction) Keep Straight
  * 6 = In (distToNxJunction) Turn Sharply To The Left
  * 7 = In (distToNxJunction) Turn Sharply To The Right
  * return value set to 0 always
  * @param y Route is being recalculated or the navmesh is confusing. This happens randomly during the drive but consistently at {2044.0358, 2996.6116, 44.9717} if you face towards the bar and the route needs you to turn right. In that particular case, it could be a bug with how the turn appears to be 270 deg. CCW instead of "right." Either way, this seems to be the engine saying "I don't know the route right now."
  * @param p3 is 0 in the only game script occurrence (trevor3) but 1 doesn't seem to make a difference
  * @param distToNxJunction seems to be the distance in metres * 10.0f
  */
  export function generateDirectionsToCoord(x: number, y: number, z: number, p3: boolean, direction: number, p5: number, distToNxJunction: number): [number, number, number, number];

  export function setIgnoreNoGpsFlag(toggle: boolean): void;

  /**
  * See: SET_BLIP_ROUTE
  */
  export function setIgnoreSecondaryRouteNodes(toggle: boolean): void;

  export function setGpsDisabledZone(x1: number, y1: number, z1: number, x2: number, y2: number, z3: number): void;

  export function getGpsBlipRouteLength(): number;

  export function _0xF3162836C28F9DA5(p0: any, p1: any, p2: any, p3: any): any;

  export function getGpsBlipRouteFound(): boolean;

  export function getRoadSidePointWithHeading(x: number, y: number, z: number, heading: number, outPosition: Vector3): [boolean, Vector3];

  export function getPointOnRoadSide(x: number, y: number, z: number, p3: number, outPosition: Vector3): [boolean, Vector3];

  /**
  * Gets a value indicating whether the specified position is on a road.
  * The vehicle parameter is not implemented (ignored).
  * -MulleDK19
  */
  export function isPointOnRoad(x: number, y: number, z: number, vehicle: number): boolean;

  /**
  * Gets the next zone that has been disabled using SET_GPS_DISABLED_ZONE_AT_INDEX.
  */
  export function getNextGpsDisabledZoneIndex(): number;

  /**
  * Disables the GPS route displayed on the minimap while within a certain zone (area). When in a disabled zone and creating a waypoint, the GPS route is not shown on the minimap until you are outside of the zone. When disabled, the direct distance is shown on minimap opposed to distance to travel. Seems to only work before setting a waypoint.
  * You can clear the disabled zone with CLEAR_GPS_DISABLED_ZONE_AT_INDEX.
  * **Setting a waypoint at the same coordinate:**
  * Disabled Zone: https://i.imgur.com/P9VUuxM.png
  * Enabled Zone (normal): https://i.imgur.com/BPi24aw.png
  */
  export function setGpsDisabledZoneAtIndex(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, index: number): void;

  /**
  * Clears a disabled GPS route area from a certain index previously set using `SET_GPS_DISABLED_ZONE_AT_INDEX`.
  */
  export function clearGpsDisabledZoneAtIndex(index: number): void;

  export function addNavmeshRequiredRegion(x: number, y: number, radius: number): void;

  export function removeNavmeshRequiredRegions(): void;

  /**
  * IS_*
  */
  export function isNavmeshRequiredRegionOwnedByAnyThread(): boolean;

  export function disableNavmeshInArea(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function areAllNavmeshRegionsLoaded(): boolean;

  /**
  * Returns whether navmesh for the region is loaded. The region is a rectangular prism defined by it's top left deepest corner to it's bottom right shallowest corner.
  * If you can re-word this so it makes more sense, please do. I'm horrible with words sometimes...
  */
  export function isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

  export function _0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): any;

  export function addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: any): any;

  export function updateNavmeshBlockingObject(p0: any, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any): void;

  export function removeNavmeshBlockingObject(p0: any): void;

  export function doesNavmeshBlockingObjectExist(p0: any): boolean;

  /**
  * Returns CGameWorldHeightMap's maximum Z value at specified point (grid node).
  */
  export function getHeightmapTopZForPosition(x: number, y: number): number;

  /**
  * Returns CGameWorldHeightMap's maximum Z among all grid nodes that intersect with the specified rectangle.
  */
  export function getHeightmapTopZForArea(x1: number, y1: number, x2: number, y2: number): number;

  /**
  * Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).
  */
  export function getHeightmapBottomZForPosition(x: number, y: number): number;

  /**
  * Returns CGameWorldHeightMap's minimum Z among all grid nodes that intersect with the specified rectangle.
  */
  export function getHeightmapBottomZForArea(x1: number, y1: number, x2: number, y2: number): number;

  /**
  * Calculates the travel distance between a set of points.
  * Doesn't seem to correlate with distance on gps sometimes.
  * @returns This function returns the value 100000.0 over long distances, seems to be a failure mode result, potentially occurring when not all path nodes are loaded into pathfind.
  */
  export function calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

  /**
  * https://alloc8or.re/gta5/doc/enums/ePedType.txt
  * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
  */
  export function createPed(pedType: number, modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;

  /**
  * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
  */
  export function deletePed(ped: number): [void, number];

  /**
  * Example of Cloning Your Player:
  * CLONE_PED(PLAYER_PED_ID(), GET_ENTITY_HEADING(PLAYER_PED_ID()), 0, 1);
  */
  export function clonePed(ped: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;

  /**
  * Used one time in fmmc_launcher.c instead of CLONE_PED because ?
  */
  export function clonePedEx(ped: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean, p4: any): number;

  /**
  * Copies ped's components and props to targetPed.
  */
  export function clonePedToTarget(ped: number, targetPed: number): void;

  export function clonePedToTargetEx(ped: number, targetPed: number, p2: any): void;

  /**
  * Gets a value indicating whether the specified ped is in the specified vehicle.
  * @returns If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
  */
  export function isPedInVehicle(ped: number, vehicle: number, atGetIn: boolean): boolean;

  export function isPedInModel(ped: number, modelHash: number): boolean;

  /**
  * Gets a value indicating whether the specified ped is in any vehicle.
  * @returns If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
  */
  export function isPedInAnyVehicle(ped: number, atGetIn: boolean): boolean;

  /**
  * xyz - relative to the world origin.
  */
  export function isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

  /**
  * Gets a value indicating whether this ped's health is below its injured threshold.
  * The default threshold is 100.
  */
  export function isPedInjured(ped: number): boolean;

  /**
  * Returns whether the specified ped is hurt.
  */
  export function isPedHurt(ped: number): boolean;

  /**
  * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
  * @returns If the handle is invalid, the function returns true.
  */
  export function isPedFatallyInjured(ped: number): boolean;

  /**
  * I suggest to remove "OR_DYING" part, because it does not detect dying phase.
  * That's what the devs call it, cry about it.
  * lol
  * @param p1 is always passed 1 in the scripts.
  * @returns Seems to consistently return true if the ped is dead.
  */
  export function isPedDeadOrDying(ped: number, p1: boolean): boolean;

  export function isConversationPedDead(ped: number): boolean;

  export function isPedAimingFromCover(ped: number): boolean;

  /**
  * Returns whether the specified ped is reloading.
  */
  export function isPedReloading(ped: number): boolean;

  /**
  * Returns true if the given ped has a valid pointer to CPlayerInfo in its CPed class. That's all.
  */
  export function isPedAPlayer(ped: number): boolean;

  /**
  * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
  * @param pedType see CREATE_PED
  */
  export function createPedInsideVehicle(vehicle: number, pedType: number, modelHash: number, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number;

  export function setPedDesiredHeading(ped: number, heading: number): void;

  export function freezePedCameraRotation(ped: number): void;

  /**
  * @param angle is ped's view cone
  */
  export function isPedFacingPed(ped: number, otherPed: number, angle: number): boolean;

  /**
  * A.) Swinging a random melee attack (including pistol-whipping)
  * B.) Reacting to being hit by a melee attack (including pistol-whipping)
  * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
  * You don't have to be holding the melee-targetting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
  * @returns Notes: The function only returns true while the ped is: 
  */
  export function isPedInMeleeCombat(ped: number): boolean;

  /**
  * @returns Returns true if the ped doesn't do any movement. If the ped is being pushed forwards by using APPLY_FORCE_TO_ENTITY for example, the function returns false.
  */
  export function isPedStopped(ped: number): boolean;

  export function isPedShootingInArea(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;

  export function isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;

  /**
  * Returns whether the specified ped is shooting.
  */
  export function isPedShooting(ped: number): boolean;

  /**
  * @param accuracy = 0-100, 100 being perfectly accurate
  */
  export function setPedAccuracy(ped: number, accuracy: number): void;

  export function getPedAccuracy(ped: number): number;

  /**
  * SET_A*
  */
  export function _0x87DDEB611B329A9C(multiplier: number): void;

  export function isPedModel(ped: number, modelHash: number): boolean;

  /**
  * Forces the ped to fall back and kills it.
  * It doesn't really explode the ped's head but it kills the ped
  */
  export function explodePedHead(ped: number, weaponHash: number): void;

  /**
  * Judging purely from a quick disassembly, if the ped is in a vehicle, the ped will be deleted immediately. If not, it'll be marked as no longer needed. - very elegant..
  */
  export function removePedElegantly(ped: number): [void, number];

  /**
  * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
  */
  export function addArmourToPed(ped: number, amount: number): void;

  /**
  * Sets the armor of the specified ped.
  * @param ped The Ped to set the armor of.
  * @param amount A value between 0 and 100 indicating the value to set the Ped's armor to.
  */
  export function setPedArmour(ped: number, amount: number): void;

  /**
  * Seat_Index: [-1 is driver seat, -2 first free passenger seat]
  * Moreinfo of Seat Index
  * DriverSeat = -1
  * Passenger = 0
  * Left Rear = 1
  * RightRear = 2
  * @param ped The ped to warp.
  * @param vehicle The vehicle to warp the ped into.
  */
  export function setPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;

  export function setPedAllowVehiclesOverride(ped: number, toggle: boolean): void;

  export function canCreateRandomPed(unk: boolean): boolean;

  /**
  * vb.net
  * Dim ped_handle As Integer
  * With Game.Player.Character
  * Dim pos As Vector3 = .Position + .ForwardVector * 3
  * ped_handle = Native.Function.Call(Of Integer)(Hash.CREATE_RANDOM_PED, pos.X, pos.Y, pos.Z)
  * End With
  * Ped will not act until SET_PED_AS_NO_LONGER_NEEDED is called.
  * @returns Creates a Ped at the specified location, returns the Ped Handle.  
  */
  export function createRandomPed(posX: number, posY: number, posZ: number): number;

  export function createRandomPedAsDriver(vehicle: number, returnHandle: boolean): number;

  export function canCreateRandomDriver(): boolean;

  export function canCreateRandomBikeRider(): boolean;

  export function setPedMoveAnimsBlendOut(ped: number): void;

  export function setPedCanBeDraggedOut(ped: number, toggle: boolean): void;

  /**
  * SET_PED_ALLOW*
  * The one time this is set to true seems to do with when you fail the mission.
  * @param toggle was always false except in one instance (b678).
  */
  export function _0xF2BEBCDFAFDAA19E(toggle: boolean): void;

  /**
  * Returns true/false if the ped is/isn't male.
  */
  export function isPedMale(ped: number): boolean;

  /**
  * Returns true/false if the ped is/isn't humanoid.
  */
  export function isPedHuman(ped: number): boolean;

  /**
  * If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.
  * @returns Gets the vehicle the specified Ped is in. Returns 0 if the ped is/was not in a vehicle.
  */
  export function getVehiclePedIsIn(ped: number, includeLastVehicle: boolean): number;

  /**
  * Resets the value for the last vehicle driven by the Ped.
  */
  export function resetPedLastVehicle(ped: number): void;

  export function setPedDensityMultiplierThisFrame(multiplier: number): void;

  export function setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;

  export function _0x5A7F62FDA59759BD(): void;

  export function setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;

  /**
  * The distance between these points, is the diagonal of a box (remember it's 3D).
  */
  export function setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

  export function clearPedNonCreationArea(): void;

  /**
  * Something regarding ped population.
  */
  export function _0x4759CC730F947C81(): void;

  /**
  * @returns Same function call as PED::GET_MOUNT, aka just returns 0
  */
  export function isPedOnMount(ped: number): boolean;

  /**
  * void __fastcall ped__get_mount(NativeContext *a1)
  * {
  * NativeContext *v1; // rbx@1
  * v1 = a1;
  * GetAddressOfPedFromScriptHandle(a1->Args->Arg1);
  * v1->Returns->Item1= 0;
  * }
  * @returns Function just returns 0
  */
  export function getMount(ped: number): number;

  /**
  * Gets a value indicating whether the specified ped is on top of any vehicle.
  * Return 1 when ped is on vehicle.
  * Return 0 when ped is not on a vehicle.
  */
  export function isPedOnVehicle(ped: number): boolean;

  export function isPedOnSpecificVehicle(ped: number, vehicle: number): boolean;

  /**
  * Maximum possible amount of money on MP is 2000. ~JX
  * -----------------------------------------------------------------------------
  * Maximum amount that a ped can theoretically have is 65535 (0xFFFF) since the amount is stored as an unsigned short (uint16_t) value.
  */
  export function setPedMoney(ped: number, amount: number): void;

  export function getPedMoney(ped: number): number;

  export function _0xFF4803BC019852D9(p0: number, p1: any): void;

  export function _0x6B0E6172C9A4D902(p0: boolean): void;

  export function _0x9911F4A24485F653(p0: boolean): void;

  /**
  * Example: Headshotting a player no longer one shots them. Instead they will take the same damage as a torso shot.
  * @param ped no longer takes critical damage modifiers if set to FALSE.
  */
  export function setPedSuffersCriticalHits(ped: number, toggle: boolean): void;

  /**
  * SET_PED_*
  */
  export function _0xAFC976FD0580C7B3(ped: number, toggle: boolean): void;

  /**
  * Detect if ped is sitting in the specified vehicle
  * [True/False]
  */
  export function isPedSittingInVehicle(ped: number, vehicle: number): boolean;

  /**
  * Detect if ped is in any vehicle
  * [True/False]
  */
  export function isPedSittingInAnyVehicle(ped: number): boolean;

  export function isPedOnFoot(ped: number): boolean;

  export function isPedOnAnyBike(ped: number): boolean;

  export function isPedPlantingBomb(ped: number): boolean;

  export function getDeadPedPickupCoords(ped: number, p1: number, p2: number): Vector3;

  export function isPedInAnyBoat(ped: number): boolean;

  export function isPedInAnySub(ped: number): boolean;

  export function isPedInAnyHeli(ped: number): boolean;

  export function isPedInAnyPlane(ped: number): boolean;

  export function isPedInFlyingVehicle(ped: number): boolean;

  export function setPedDiesInWater(ped: number, toggle: boolean): void;

  export function setPedDiesInSinkingVehicle(ped: number, toggle: boolean): void;

  export function getPedArmour(ped: number): number;

  export function setPedStayInVehicleWhenJacked(ped: number, toggle: boolean): void;

  export function setPedCanBeShotInVehicle(ped: number, toggle: boolean): void;

  export function getPedLastDamageBone(ped: number, outBone: number): [boolean, number];

  export function clearPedLastDamageBone(ped: number): void;

  export function setAiWeaponDamageModifier(value: number): void;

  export function resetAiWeaponDamageModifier(): void;

  export function setAiMeleeWeaponDamageModifier(modifier: number): void;

  export function resetAiMeleeWeaponDamageModifier(): void;

  export function _0x2F3C3D9F50681DE4(p0: any, p1: boolean): void;

  export function setPedCanBeTargetted(ped: number, toggle: boolean): void;

  export function setPedCanBeTargettedByTeam(ped: number, team: number, toggle: boolean): void;

  export function setPedCanBeTargettedByPlayer(ped: number, player: number, toggle: boolean): void;

  export function _0x061CB768363D6424(ped: number, toggle: boolean): void;

  export function _0xFD325494792302D7(ped: number, toggle: boolean): void;

  export function isPedInAnyPoliceVehicle(ped: number): boolean;

  export function forcePedToOpenParachute(ped: number): void;

  export function isPedInParachuteFreeFall(ped: number): boolean;

  export function isPedFalling(ped: number): boolean;

  export function isPedJumping(ped: number): boolean;

  export function _0x412F1364FA066CFB(p0: any): any;

  export function _0x451D05012CCEC234(p0: any): any;

  export function isPedClimbing(ped: number): boolean;

  export function isPedVaulting(ped: number): boolean;

  export function isPedDiving(ped: number): boolean;

  export function isPedJumpingOutOfVehicle(ped: number): boolean;

  /**
  * IS_PED_*
  * Returns true if the ped is currently opening a door (CTaskOpenDoor).
  */
  export function isPedOpeningADoor(ped: number): boolean;

  /**
  * Returns:
  * -1: Normal
  * 0: Wearing parachute on back
  * 1: Parachute opening
  * 2: Parachute open
  * 3: Falling to doom (e.g. after exiting parachute)
  * Normal means no parachute?
  */
  export function getPedParachuteState(ped: number): number;

  /**
  * -1: no landing
  * 0: landing on both feet
  * 1: stumbling
  * 2: rolling
  * 3: ragdoll
  */
  export function getPedParachuteLandingType(ped: number): number;

  export function setPedParachuteTintIndex(ped: number, tintIndex: number): void;

  export function getPedParachuteTintIndex(ped: number, outTintIndex: number): [void, number];

  export function setPedReserveParachuteTintIndex(ped: number, p1: any): void;

  export function createParachuteBagObject(ped: number, p1: boolean, p2: boolean): number;

  /**
  * @returns This is the SET_CHAR_DUCKING from GTA IV, that makes Peds duck. This function does nothing in GTA V. It cannot set the ped as ducking in vehicles, and IS_PED_DUCKING will always return false.
  */
  export function setPedDucking(ped: number, toggle: boolean): void;

  export function isPedDucking(ped: number): boolean;

  export function isPedInAnyTaxi(ped: number): boolean;

  export function setPedIdRange(ped: number, value: number): void;

  export function setPedHighlyPerceptive(ped: number, toggle: boolean): void;

  export function _0x2F074C904D85129E(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  /**
  * SET_PED_*
  * Has most likely to do with some shooting attributes as it sets the float which is in the same range as shootRate.
  */
  export function _0xEC4B4B3B9908052A(ped: number, unk: number): void;

  export function _0x733C87D4CE22BEA2(p0: any): void;

  export function setPedSeeingRange(ped: number, value: number): void;

  export function setPedHearingRange(ped: number, value: number): void;

  export function setPedVisualFieldMinAngle(ped: number, value: number): void;

  export function setPedVisualFieldMaxAngle(ped: number, value: number): void;

  /**
  * This native refers to the field of vision the ped has below them, starting at 0 degrees. The angle value should be negative.
  * -90f should let the ped see 90 degrees below them, for example.
  */
  export function setPedVisualFieldMinElevationAngle(ped: number, angle: number): void;

  /**
  * This native refers to the field of vision the ped has above them, starting at 0 degrees. 90f would let the ped see enemies directly above of them.
  */
  export function setPedVisualFieldMaxElevationAngle(ped: number, angle: number): void;

  export function setPedVisualFieldPeripheralRange(ped: number, range: number): void;

  export function setPedVisualFieldCenterAngle(ped: number, angle: number): void;

  export function getPedVisualFieldCenterAngle(ped: number): number;

  /**
  * @param p1 is usually 0 in the scripts. action is either 0 or a pointer to "DEFAULT_ACTION".
  */
  export function setPedStealthMovement(ped: number, p1: boolean, action: string): void;

  /**
  * Returns whether the entity is in stealth mode
  */
  export function getPedStealthMovement(ped: number): boolean;

  /**
  * Creates a new ped group.
  * Groups can contain up to 8 peds.
  * The parameter is unused.
  * Returns a handle to the created group, or 0 if a group couldn't be created.
  */
  export function createGroup(unused: number): number;

  export function setPedAsGroupLeader(ped: number, groupId: number): void;

  export function setPedAsGroupMember(ped: number, groupId: number): void;

  /**
  * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
  * Only works in singleplayer
  */
  export function setPedCanTeleportToGroupLeader(pedHandle: number, groupHandle: number, toggle: boolean): void;

  export function removeGroup(groupId: number): void;

  export function removePedFromGroup(ped: number): void;

  export function isPedGroupMember(ped: number, groupId: number): boolean;

  export function isPedHangingOnToVehicle(ped: number): boolean;

  /**
  * Sets the range at which members will automatically leave the group.
  */
  export function setGroupSeparationRange(groupHandle: number, separationRange: number): void;

  /**
  * @param ped will stay on the ground after being stunned for at lest ms time. (in milliseconds)
  */
  export function setPedMinGroundTimeForStungun(ped: number, ms: number): void;

  export function isPedProne(ped: number): boolean;

  /**
  * @param target is usually 0 in the scripts because it gets the ped id during the task sequence. For instance: PED::IS_PED_IN_COMBAT(l_42E[414], PLAYER::PLAYER_PED_ID()) // armenian2.ct4: 43794
  * @returns Checks to see if ped and target are in combat with eachother. Only goes one-way: if target is engaged in combat with ped but ped has not yet reacted, the function will return false until ped starts fighting back.
  */
  export function isPedInCombat(ped: number, target: number): boolean;

  export function canPedInCombatSeeTarget(ped: number, target: number): boolean;

  export function isPedDoingDriveby(ped: number): boolean;

  export function isPedJacking(ped: number): boolean;

  export function isPedBeingJacked(ped: number): boolean;

  /**
  * @param p1 is always 0
  */
  export function isPedBeingStunned(ped: number, p1: number): boolean;

  export function getPedsJacker(ped: number): number;

  export function getJackTarget(ped: number): number;

  export function isPedFleeing(ped: number): boolean;

  /**
  * @param exceptUseWeapon is nearly always 0 in the scripts.
  */
  export function isPedInCover(ped: number, exceptUseWeapon: boolean): boolean;

  export function isPedInCoverFacingLeft(ped: number): boolean;

  export function isPedInHighCover(ped: number): boolean;

  export function isPedGoingIntoCover(ped: number): boolean;

  /**
  * @param i could be time. Only example in the decompiled scripts uses it as -1.
  */
  export function setPedPinnedDown(ped: number, pinned: boolean, i: number): any;

  export function getSeatPedIsTryingToEnter(ped: number): number;

  export function getVehiclePedIsTryingToEnter(ped: number): number;

  /**
  * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
  * Is best to check if the Ped is dead before asking for its killer.
  */
  export function getPedSourceOfDeath(ped: number): number;

  /**
  * Returns the hash of the weapon/model/object that killed the ped.
  */
  export function getPedCauseOfDeath(ped: number): number;

  export function getPedTimeOfDeath(ped: number): number;

  export function _0x5407B7288D0478B7(p0: any): number;

  export function _0x336B3D200AB007CB(p0: any, p1: number, p2: number, p3: number, p4: number): any;

  export function setPedRelationshipGroupDefaultHash(ped: number, hash: number): void;

  export function setPedRelationshipGroupHash(ped: number, hash: number): void;

  /**
  * Sets the relationship between two groups. This should be called twice (once for each group).
  * 0 = Companion
  * 1 = Respect
  * 2 = Like
  * 3 = Neutral
  * 4 = Dislike
  * 5 = Hate
  * 255 = Pedestrians
  * Example:
  * See NativeDB for reference: http://natives.altv.mp/#/0xBF25EB89375A37AD
  * @param relationship types:
  */
  export function setRelationshipBetweenGroups(relationship: number, group1: number, group2: number): void;

  /**
  * Clears the relationship between two groups. This should be called twice (once for each group).
  * 0 = Companion
  * 1 = Respect
  * 2 = Like
  * 3 = Neutral
  * 4 = Dislike
  * 5 = Hate
  * 255 = Pedestrians
  * (Credits: Inco)
  * See NativeDB for reference: http://natives.altv.mp/#/0x5E29243FB56FC6D4
  * @param relationship types:
  */
  export function clearRelationshipBetweenGroups(relationship: number, group1: number, group2: number): void;

  /**
  * @returns Can't select void. This function returns nothing. The hash of the created relationship group is output in the second parameter.
  */
  export function addRelationshipGroup(name: string, groupHash: number): [any, number];

  export function removeRelationshipGroup(groupHash: number): void;

  export function doesRelationshipGroupExist(groupHash: number): boolean;

  /**
  * Gets the relationship between two peds. This should be called twice (once for each ped).
  * Relationship types:
  * 0 = Companion
  * 1 = Respect
  * 2 = Like
  * 3 = Neutral
  * 4 = Dislike
  * 5 = Hate
  * 255 = Pedestrians
  * See NativeDB for reference: http://natives.altv.mp/#/0xEBA5AD3A0EAF7121
  */
  export function getRelationshipBetweenPeds(ped1: number, ped2: number): number;

  export function getPedRelationshipGroupDefaultHash(ped: number): number;

  export function getPedRelationshipGroupHash(ped: number): number;

  /**
  * Gets the relationship between two groups. This should be called twice (once for each group).
  * Relationship types:
  * 0 = Companion
  * 1 = Respect
  * 2 = Like
  * 3 = Neutral
  * 4 = Dislike
  * 5 = Hate
  * 255 = Pedestrians
  * See NativeDB for reference: http://natives.altv.mp/#/0x9E6B70061662AE5C
  */
  export function getRelationshipBetweenGroups(group1: number, group2: number): number;

  export function _0x5615E0C5EB2BC6E2(p0: any, p1: any): void;

  /**
  * Does something with ped relationships
  */
  export function _0xAD27D957598E49E9(ped: number, p1: any, p2: number, hash: number, p4: any, p5: any): void;

  export function setPedCanBeTargetedWithoutLos(ped: number, toggle: boolean): void;

  export function setPedToInformRespectedFriends(ped: number, radius: number, maxFriends: number): void;

  export function isPedRespondingToEvent(ped: number, event: any): boolean;

  export function getPedEventData(ped: number, eventType: number, outData: any): [boolean, any];

  /**
  * FIRING_PATTERN_BURST_FIRE = 0xD6FF6D61 ( 1073727030 )
  * FIRING_PATTERN_BURST_FIRE_IN_COVER = 0x026321F1 ( 40051185 )
  * FIRING_PATTERN_BURST_FIRE_DRIVEBY = 0xD31265F2 ( -753768974 )
  * FIRING_PATTERN_FROM_GROUND = 0x2264E5D6 ( 577037782 )
  * FIRING_PATTERN_DELAY_FIRE_BY_ONE_SEC = 0x7A845691 ( 2055493265 )
  * FIRING_PATTERN_FULL_AUTO = 0xC6EE6B4C ( -957453492 )
  * FIRING_PATTERN_SINGLE_SHOT = 0x5D60E4E0 ( 1566631136 )
  * FIRING_PATTERN_BURST_FIRE_PISTOL = 0xA018DB8A ( -1608983670 )
  * FIRING_PATTERN_BURST_FIRE_SMG = 0xD10DADEE ( 1863348768 )
  * See NativeDB for reference: http://natives.altv.mp/#/0x9AC577F5A12AD8A9
  */
  export function setPedFiringPattern(ped: number, patternHash: number): void;

  /**
  * @param shootRate 0-1000
  */
  export function setPedShootRate(ped: number, shootRate: number): void;

  /**
  * @param combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
  */
  export function setCombatFloat(ped: number, combatType: number, p2: number): void;

  /**
  * p1 probably refers to the attributes configured in combatbehavior.meta. There are 13. Example:
  * <BlindFireChance value="0.1"/>
  * <WeaponShootRateModifier value="1.0"/>
  * <TimeBetweenBurstsInCover value="1.25"/>
  * <BurstDurationInCover value="2.0"/>
  * <TimeBetweenPeeks value="10.0"/>
  * <WeaponAccuracy value="0.18"/>
  * <FightProficiency value="0.8"/>
  * <StrafeWhenMovingChance value="1.0"/>
  * See NativeDB for reference: http://natives.altv.mp/#/0x52DFF8A10508090A
  * @param ped Ped Handle
  * @param p1 int i | 0 <= i <= 27
  */
  export function getCombatFloat(ped: number, p1: number): number;

  /**
  * @param unknown may be a BOOL representing whether or not the group even exists
  */
  export function getGroupSize(groupID: number, unknown: any, sizeInMembers: number): [void, any, number];

  export function doesGroupExist(groupId: number): boolean;

  /**
  * Returns the group id of which the specified ped is a member of.
  */
  export function getPedGroupIndex(ped: number): number;

  export function isPedInGroup(ped: number): boolean;

  export function getPlayerPedIsFollowing(ped: number): number;

  /**
  * 0: Default
  * 1: Circle Around Leader
  * 2: Alternative Circle Around Leader
  * 3: Line, with Leader at center
  */
  export function setGroupFormation(groupId: number, formationType: number): void;

  export function setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;

  export function resetGroupFormationDefaultSpacing(groupHandle: number): void;

  /**
  * Gets ID of vehicle player using. It means it can get ID at any interaction with vehicle. Enter\exit for example. And that means it is faster than GET_VEHICLE_PED_IS_IN but less safe.
  */
  export function getVehiclePedIsUsing(ped: number): number;

  export function getVehiclePedIsEntering(ped: number): number;

  /**
  * enable or disable the gravity of a ped
  * Examples:
  * PED::SET_PED_GRAVITY(Local_289[iVar0 20], 0x00000001);
  * @param ped :SET_PED_GRAVITY(PLAYER::PLAYER_PED_ID(), 0x00000001);
  */
  export function setPedGravity(ped: number, toggle: boolean): void;

  /**
  * damages a ped with the given amount
  */
  export function applyDamageToPed(ped: number, damageAmount: number, p2: boolean, p3: any): void;

  /**
  * GET_TIME_*
  */
  export function getTimeOfLastPedWeaponDamage(ped: number, weaponHash: number): number;

  export function setPedAllowedToDuck(ped: number, toggle: boolean): void;

  export function setPedNeverLeavesGroup(ped: number, toggle: boolean): void;

  /**
  * https://alloc8or.re/gta5/doc/enums/ePedType.txt
  */
  export function getPedType(ped: number): number;

  /**
  * @param ped vision
  */
  export function setPedAsCop(ped: number, toggle: boolean): void;

  /**
  * sets the maximum health of a ped
  * I think it's never been used in any script
  */
  export function setPedMaxHealth(ped: number, value: number): void;

  export function getPedMaxHealth(ped: number): number;

  export function setPedMaxTimeInWater(ped: number, value: number): void;

  export function setPedMaxTimeUnderwater(ped: number, value: number): void;

  export function _0x2735233A786B1BEF(ped: number, p1: number): void;

  /**
  * @param seatIndex must be <= 2
  */
  export function setPedVehicleForcedSeatUsage(ped: number, vehicle: number, seatIndex: number, flags: number, p4: any): void;

  export function clearAllPedVehicleForcedSeatUsage(ped: number): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0xB282749D5E028163(p0: any, p1: any): void;

  /**
  * @param state https://alloc8or.re/gta5/doc/enums/eKnockOffVehicle.txt
  */
  export function setPedCanBeKnockedOffVehicle(ped: number, state: number): void;

  export function canKnockPedOffVehicle(ped: number): boolean;

  export function knockPedOffVehicle(ped: number): void;

  export function setPedCoordsNoGang(ped: number, posX: number, posY: number, posZ: number): void;

  /**
  * from fm_mission_controller.c4 (variable names changed for clarity):
  * int groupID = PLAYER::GET_PLAYER_GROUP(PLAYER::PLAYER_ID());
  * PED::GET_GROUP_SIZE(group, &unused, &groupSize);
  * if (groupSize >= 1) {
  * . . . . for (int memberNumber = 0; memberNumber < groupSize; memberNumber++) {
  * . . . . . . . . //and so on
  * @param groupID PED::GET_PED_AS_GROUP_MEMBER(groupID, memberNumber);
  */
  export function getPedAsGroupMember(groupID: number, memberNumber: number): number;

  export function getPedAsGroupLeader(groupID: number): number;

  export function setPedKeepTask(ped: number, toggle: boolean): void;

  /**
  * SET_PED_ALLOW*
  */
  export function _0x49E50BDB8BA4DAB2(ped: number, toggle: boolean): void;

  export function isPedSwimming(ped: number): boolean;

  export function isPedSwimmingUnderWater(ped: number): boolean;

  /**
  * teleports ped to coords along with the vehicle ped is in
  */
  export function setPedCoordsKeepVehicle(ped: number, posX: number, posY: number, posZ: number): void;

  export function setPedDiesInVehicle(ped: number, toggle: boolean): void;

  export function setCreateRandomCops(toggle: boolean): void;

  export function setCreateRandomCopsNotOnScenarios(toggle: boolean): void;

  export function setCreateRandomCopsOnScenarios(toggle: boolean): void;

  export function canCreateRandomCops(): boolean;

  export function setPedAsEnemy(ped: number, toggle: boolean): void;

  export function setPedCanSmashGlass(ped: number, p1: boolean, p2: boolean): void;

  export function isPedInAnyTrain(ped: number): boolean;

  export function isPedGettingIntoAVehicle(ped: number): boolean;

  export function isPedTryingToEnterALockedVehicle(ped: number): boolean;

  /**
  * @param ped can not pull out a weapon when true
  */
  export function setEnableHandcuffs(ped: number, toggle: boolean): void;

  /**
  * Used with SET_ENABLE_HANDCUFFS in decompiled scripts. From my observations, I have noticed that while being ragdolled you are not able to get up but you can still run. Your legs can also bend.
  */
  export function setEnableBoundAnkles(ped: number, toggle: boolean): void;

  /**
  * Enables diving motion when underwater.
  */
  export function setEnableScuba(ped: number, toggle: boolean): void;

  /**
  * Setting ped to true allows the ped to shoot "friendlies".
  * p1 = true & p2 = false for able to aim at.
  * @param toggle = false & p2 = false for unable to aim at.
  * @param p2 set to true when toggle is also true seams to make peds permanently unable to aim at, even if you set p2 back to false.
  */
  export function setCanAttackFriendly(ped: number, toggle: boolean, p2: boolean): void;

  /**
  * Returns the ped's alertness (0-3).
  * Values :
  * 0 : Neutral
  * 1 : Heard something (gun shot, hit, etc)
  * 2 : Knows (the origin of the event)
  * 3 : Fully alerted (is facing the event?)
  * @returns If the Ped does not exist, returns -1.
  */
  export function getPedAlertness(ped: number): number;

  /**
  * @param value ranges from 0 to 3.
  */
  export function setPedAlertness(ped: number, value: number): void;

  export function setPedGetOutUpsideDownVehicle(ped: number, toggle: boolean): void;

  /**
  * EDIT 12/24/16:
  * p2 does absolutely nothing no matter what the value is.
  * List of movement clipsets:
  * Thanks to elsewhat for list.
  * "ANIM_GROUP_MOVE_BALLISTIC"
  * "ANIM_GROUP_MOVE_LEMAR_ALLEY"
  * "clipset@move@trash_fast_turn"
  * "FEMALE_FAST_RUNNER"
  * "missfbi4prepp1_garbageman"
  * See NativeDB for reference: http://natives.altv.mp/#/0xAF8A94EDE7712BEF
  * @param p2 is usually 1.0f
  */
  export function setPedMovementClipset(ped: number, clipSet: string, p2: number): void;

  /**
  * If p1 is 0.0, I believe you are back to normal.
  * If p1 is 1.0, it looks like you can only rotate the ped, not walk.
  * Using the following code to reset back to normal
  * @param ped :RESET_PED_MOVEMENT_CLIPSET(PLAYER::PLAYER_PED_ID(), 0.0);
  */
  export function resetPedMovementClipset(ped: number, p1: number): void;

  /**
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function setPedStrafeClipset(ped: number, clipSet: string): void;

  export function resetPedStrafeClipset(ped: number): void;

  export function setPedWeaponMovementClipset(ped: number, clipSet: string): void;

  export function resetPedWeaponMovementClipset(ped: number): void;

  export function setPedDriveByClipsetOverride(ped: number, clipset: string): void;

  export function clearPedDriveByClipsetOverride(ped: number): void;

  /**
  * Found in the b617d scripts:
  * SET_PED_MO*
  * @param ped :_9DBA107B4937F809(v_7, "trevor_heist_cover_2h");
  */
  export function setPedCoverClipsetOverride(ped: number, p1: string): void;

  /**
  * CLEAR_PED_*
  */
  export function clearPedCoverClipsetOverride(ped: number): void;

  /**
  * CLEAR_PED_*
  */
  export function _0x80054D7FCC70EEC6(ped: number): void;

  /**
  * PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, MISC::GET_HASH_KEY("MINI_PROSTITUTE_LOW_RESTRICTED_PASSENGER"));
  * PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, MISC::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT"));
  * PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, MISC::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT_REAR"));
  * PED::SET_PED_IN_VEHICLE_CONTEXT(l_95, MISC::GET_HASH_KEY("MISS_FAMILY2_JIMMY_BICYCLE"));
  * PED::SET_PED_IN_VEHICLE_CONTEXT(num3, MISC::GET_HASH_KEY("MISSFBI2_MICHAEL_DRIVEBY"));
  * PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("MISS_ARMENIAN3_FRANKLIN_TENSE"));
  * PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("MISSFBI5_TREVOR_DRIVING"));
  * @param ped :SET_PED_IN_VEHICLE_CONTEXT(l_128, MISC::GET_HASH_KEY("MINI_PROSTITUTE_LOW_PASSENGER"));
  */
  export function setPedInVehicleContext(ped: number, context: number): void;

  export function resetPedInVehicleContext(ped: number): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function isScriptedScenarioPedUsingConditionalAnim(ped: number, animDict: string, anim: string): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function setPedAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;

  export function clearPedAlternateWalkAnim(ped: number, p1: number): void;

  /**
  * 0 = idle
  * 1 = walk
  * 2 = running
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  * @param p5 = usually set to true
  */
  export function setPedAlternateMovementAnim(ped: number, stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;

  export function clearPedAlternateMovementAnim(ped: number, stance: number, p2: number): void;

  /**
  * From the scripts:
  * "ANIM_GROUP_GESTURE_MISS_FRA0");
  * PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),
  * "ANIM_GROUP_GESTURE_MISS_DocksSetup1");
  * @param ped :SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),
  */
  export function setPedGestureGroup(ped: number, animGroupGesture: string): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function getAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): Vector3;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function getAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): Vector3;

  /**
  * Ids
  * 0 - Head
  * 1 - Beard
  * 2 - Hair
  * 3 - Torso
  * 4 - Legs
  * 5 - Hands
  * 6 - Foot
  * 7 - ------
  * See NativeDB for reference: http://natives.altv.mp/#/0x67F3780DD425D4FC
  */
  export function getPedDrawableVariation(ped: number, componentId: number): number;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getNumberOfPedDrawableVariations(ped: number, componentId: number): number;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getPedTextureVariation(ped: number, componentId: number): number;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getNumberOfPedTextureVariations(ped: number, componentId: number, drawableId: number): number;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getNumberOfPedPropDrawableVariations(ped: number, propId: number): number;

  /**
  * Need to check behavior when drawableId = -1
  * - Doofy.Ass
  * GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(PLAYER.PLAYER_PED_ID(), 0, 5)
  * tick: scripts/addins/menu_execute.lua:51: attempt to call field 'GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS' (a nil value)
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  * @returns Why this function doesn't work and return nill value?
  */
  export function getNumberOfPedPropTextureVariations(ped: number, propId: number, drawableId: number): number;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getPedPaletteVariation(ped: number, componentId: number): number;

  export function _0x9E30E91FB03A2CAF(p0: any, p1: any): [boolean, any, any];

  /**
  * GET_*
  */
  export function _0x1E77FA7A62EE6C4C(p0: any): any;

  /**
  * GET_*
  */
  export function _0xF033419D1B81FAE8(p0: any): any;

  /**
  * Checks if the component variation is valid, this works great for randomizing components using loops.
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  * Full list of ped components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedComponentVariations.json
  */
  export function isPedComponentVariationValid(ped: number, componentId: number, drawableId: number, textureId: number): boolean;

  /**
  * enum PedVariationData
  * {
  * PED_VARIATION_FACE = 0,
  * PED_VARIATION_HEAD = 1,
  * PED_VARIATION_HAIR = 2,
  * PED_VARIATION_TORSO = 3,
  * PED_VARIATION_LEGS = 4,
  * PED_VARIATION_HANDS = 5,
  * PED_VARIATION_FEET = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0x262B14F48D29DE80
  * @param paletteId 0 to 3.
  */
  export function setPedComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  * @param p1 is always 0 in R* scripts.
  */
  export function setPedRandomComponentVariation(ped: number, p1: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function setPedRandomProps(ped: number): void;

  /**
  * Sets Ped Default Clothes
  */
  export function setPedDefaultComponentVariation(ped: number): void;

  export function setPedBlendFromParents(ped: number, p1: any, p2: any, p3: number, p4: number): void;

  /**
  * The "shape" parameters control the shape of the ped's face. The "skin" parameters control the skin tone. ShapeMix and skinMix control how much the first and second IDs contribute,(typically mother and father.) ThirdMix overrides the others in favor of the third IDs. IsParent is set for "children" of the player character's grandparents during old-gen character creation. It has unknown effect otherwise.
  * The IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.
  * !!!Can someone add working example for this???
  * try this:
  * headBlendData headData;
  * GET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), &headData);
  * SET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), headData.shapeFirst, headData.shapeSecond, headData.shapeThird, headData.skinFirst, headData.skinSecond
  * , headData.skinThird, headData.shapeMix, headData.skinMix, headData.skinThird, 0);
  * For more info please refer to this topic.
  * gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained
  */
  export function setPedHeadBlendData(ped: number, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;

  /**
  * The pointer is to a padded struct that matches the arguments to SET_PED_HEAD_BLEND_DATA(...). There are 4 bytes of padding after each field.
  * pass this struct in the second parameter
  * typedef struct
  * {
  * int shapeFirst, shapeSecond, shapeThird;
  * int skinFirst, skinSecond, skinThird;
  * float shapeMix, skinMix, thirdMix;
  * } headBlendData;
  */
  export function getPedHeadBlendData(ped: number, headBlendData: any): [boolean, any];

  /**
  * See SET_PED_HEAD_BLEND_DATA().
  */
  export function updatePedHeadBlendData(ped: number, shapeMix: number, skinMix: number, thirdMix: number): void;

  /**
  * Used for freemode (online) characters.
  * For some reason, the scripts use a rounded float for the index.
  * Indexes:
  * 1. black
  * 2. very light blue/green
  * 3. dark blue
  * 4. brown
  * 5. darker brown
  * 6. light brown
  * See NativeDB for reference: http://natives.altv.mp/#/0x50B56988B170AFDF
  */
  export function setPedEyeColor(ped: number, index: number): void;

  /**
  * @returns A getter for _SET_PED_EYE_COLOR. Returns -1 if fails to get.
  */
  export function getPedEyeColor(ped: number): number;

  /**
  * overlayID       Part                  Index, to disable
  * 0               Blemishes             0 - 23, 255
  * 1               Facial Hair           0 - 28, 255
  * 2               Eyebrows              0 - 33, 255
  * 3               Ageing                0 - 14, 255
  * 4               Makeup                0 - 74, 255
  * 5               Blush                 0 - 6, 255
  * 6               Complexion            0 - 11, 255
  * 7               Sun Damage            0 - 10, 255
  * See NativeDB for reference: http://natives.altv.mp/#/0x48F44967FA05CC1E
  * @param overlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
  */
  export function setPedHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void;

  /**
  * This might be the once removed native GET_PED_HEAD_OVERLAY.
  * @returns Likely a char, if that overlay is not set, e.i. "None" option, returns 255;
  */
  export function getPedHeadOverlayValue(ped: number, overlayID: number): number;

  /**
  * Used with freemode (online) characters.
  */
  export function getPedHeadOverlayNum(overlayID: number): number;

  /**
  * Used for freemode (online) characters.
  * Called after SET_PED_HEAD_OVERLAY().
  * @param colorType is 1 for eyebrows, beards, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
  */
  export function setPedHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;

  /**
  * Used for freemode (online) characters.
  */
  export function setPedHairColor(ped: number, colorID: number, highlightColorID: number): void;

  /**
  * Used for freemode (online) characters.
  */
  export function getNumHairColors(): number;

  export function getNumMakeupColors(): number;

  /**
  * Input: Haircolor index, value between 0 and 63 (inclusive).
  * Output: RGB values for the haircolor specified in the input.
  * This is used with the hair color swatches scaleform.
  * Use `_0x013E5CFC38CD5387` to get the makeup colors.
  */
  export function getPedHairRgbColor(hairColorIndex: number, outR: number, outG: number, outB: number): [void, number, number, number];

  /**
  * Input: Makeup color index, value between 0 and 63 (inclusive).
  * Output: RGB values for the makeup color specified in the input.
  * This is used with the makeup color swatches scaleform.
  * Use `_0x4852FC386E2E1BB5` to get the hair colors.
  */
  export function getPedMakeupRgbColor(makeupColorIndex: number, outR: number, outG: number, outB: number): [void, number, number, number];

  export function isPedHairColorValid2(colorId: number): boolean;

  export function _0xEA9960D07DADCF10(p0: any): number;

  export function isPedLipstickColorValid2(colorId: number): boolean;

  export function isPedBlushColorValid2(colorId: number): boolean;

  export function isPedHairColorValid(colorID: number): boolean;

  export function _0xAAA6A3698A69E048(p0: any): any;

  export function isPedLipstickColorValid(colorID: number): boolean;

  export function isPedBlushColorValid(colorID: number): boolean;

  export function isPedBodyBlemishValid(colorId: number): boolean;

  export function _0xC56FBF2F228E1DAC(modelHash: number, p1: any, p2: any): any;

  /**
  * Sets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0.
  * SET_PED_M*
  * Here is the list of names. It starts at 0 and runs in sequence
  * Face_Feature
  * Nose_Width
  * Nose_Peak_Hight
  * Nose_Peak_Lenght
  * Nose_Bone_High
  * Nose_Peak_Lowering
  * See NativeDB for reference: http://natives.altv.mp/#/0x71A5C1DBA060049E
  * @param index can be 0 - 19
  */
  export function setPedFaceFeature(ped: number, index: number, scale: number): void;

  export function hasPedHeadBlendFinished(ped: number): boolean;

  export function finalizeHeadBlend(ped: number): void;

  /**
  * Preview: https://gfycat.com/MaleRareAmazonparrot
  * @param id seems to vary from 0 to 3.
  */
  export function setHeadBlendPaletteColor(ped: number, r: number, g: number, b: number, id: number): void;

  export function disableHeadBlendPaletteColor(ped: number): void;

  /**
  * Used when calling SET_PED_HEAD_BLEND_DATA.
  * @param type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
  */
  export function getPedHeadBlendFirstIndex(type: number): number;

  /**
  * @param type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
  */
  export function getNumParentPedsOfType(type: number): number;

  /**
  * from extreme3.c4
  * @param ped :_39D55A620FCB6A3A(PLAYER::PLAYER_PED_ID(), 8, PED::GET_PED_DRAWABLE_VARIATION(PLAYER::PLAYER_PED_ID(), 8), PED::GET_PED_TEXTURE_VARIATION(PLAYER::PLAYER_PED_ID(), 8));
  * @param slot is probably componentId
  */
  export function setPedPreloadVariationData(ped: number, slot: number, drawableId: number, textureId: number): any;

  export function hasPedPreloadVariationDataFinished(ped: number): boolean;

  export function releasePedPreloadVariationData(ped: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function setPedPreloadPropData(ped: number, componentId: number, drawableId: number, TextureId: number): boolean;

  export function hasPedPreloadPropDataFinished(ped: number): boolean;

  export function releasePedPreloadPropData(ped: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getPedPropIndex(ped: number, componentId: number): number;

  /**
  * enum PedPropsData
  * {
  * PED_PROP_HATS = 0,
  * PED_PROP_GLASSES = 1,
  * PED_PROP_EARS = 2,
  * PED_PROP_WATCHES = 3,
  * };
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  * @param ped SET_PED_PROP_INDEX(playerPed, PED_PROP_HATS, GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS(playerPed, PED_PROP_HATS), GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(playerPed, PED_PROP_HATS, 0), TRUE);
  * @param componentId can be set to various things based on what category you're wanting to set
  */
  export function setPedPropIndex(ped: number, componentId: number, drawableId: number, TextureId: number, attach: boolean): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function knockOffPedProp(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function clearPedProp(ped: number, propId: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function clearAllPedProps(ped: number): void;

  export function dropAmbientProp(ped: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function getPedPropTextureIndex(ped: number, componentId: number): number;

  export function clearPedParachutePackVariation(ped: number): void;

  /**
  * This native sets a scuba mask for freemode models and an oxygen bottle for player_* models. It works on freemode and player_* models.
  */
  export function setPedScubaGearVariation(ped: number): void;

  /**
  * Removes the scubagear (for mp male: component id: 8, drawableId: 123, textureId: any) from peds. Does not play the 'remove scuba gear' animation, but instantly removes it.
  */
  export function clearPedScubaGearVariation(ped: number): void;

  export function _0xFEC9A3B1820F3331(p0: any): boolean;

  /**
  * works with TASK::TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS to make a ped completely oblivious to all events going on around him
  */
  export function setBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

  export function setPedBoundsOrientation(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

  /**
  * l_216 = RECSBRobber1
  * @param ped :REGISTER_TARGET(l_216, PLAYER::PLAYER_PED_ID()); from re_prisonbreak.txt.
  */
  export function registerTarget(ped: number, target: number): void;

  /**
  * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
  */
  export function registerHatedTargetsAroundPed(ped: number, radius: number): void;

  /**
  * Gets a random ped in the x/y/zRadius near the x/y/z coordinates passed.
  * Ped Types:
  * Any = -1
  * Player = 1
  * Male = 4
  * Female = 5
  * Cop = 6
  * Human = 26
  * SWAT = 27
  * See NativeDB for reference: http://natives.altv.mp/#/0x876046A8E3A4B71C
  */
  export function getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;

  /**
  * Gets the closest ped in a radius.
  * Ped Types:
  * Any ped = -1
  * Player = 1
  * Male = 4
  * Female = 5
  * Cop = 6
  * Human = 26
  * SWAT = 27
  * See NativeDB for reference: http://natives.altv.mp/#/0xC33AB876A77F8164
  * @param x 1  1  x  = return Ped you are using
  * @param p4 P5 P7 P8
  * @returns 1  0  x  x  = return nearest walking Ped
  */
  export function getClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, outPed: number, p7: boolean, p8: boolean, pedType: number): [boolean, number];

  /**
  * @returns Sets a value indicating whether scenario peds should be returned by the next call to a command that returns peds. Eg. GET_CLOSEST_PED.
  */
  export function setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;

  export function _0x03EA03AF85A85CB7(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: any): boolean;

  /**
  * Scripts use 0.2, 0.5 and 1.0. Value must be >= 0.0 && <= 1.0
  */
  export function setDriverRacingModifier(driver: number, modifier: number): void;

  /**
  * The function specifically verifies the value is equal to, or less than 1.0f. If it is greater than 1.0f, the function does nothing at all.
  */
  export function setDriverAbility(driver: number, ability: number): void;

  /**
  * range 0.0f - 1.0f
  */
  export function setDriverAggressiveness(driver: number, aggressiveness: number): void;

  /**
  * Prevents the ped from going limp.
  * [Example: Can prevent peds from falling when standing on moving vehicles.]
  */
  export function canPedRagdoll(ped: number): boolean;

  /**
  * Ragdoll Types:
  * **0**: CTaskNMRelax
  * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
  * **Else**: CTaskNMBalance
  * time1- Time(ms) Ped is in ragdoll mode; only applies to ragdoll types 0 and not 1.
  * time2- Unknown time, in milliseconds
  * ragdollType-
  * 0 : Normal ragdoll
  * 1 : Falls with stiff legs/body
  * See NativeDB for reference: http://natives.altv.mp/#/0xAE99FB955581844A
  * @param p4 Unused in TU27
  * @param p5 No idea. In R*'s scripts they are usually either "true, true, false" or "false, false, false".
  */
  export function setPedToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;

  /**
  * Return variable is never used in R*'s scripts.
  * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
  * x, y, and z are coordinates, most likely to where the ped will fall.
  * (Simplified) Example of the usage of the function from R*'s scripts:
  * @param ped :set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
  * @param p7 is probably the force of the fall, but untested, so I left the variable name the same.
  * @param p8 to p13 are always 0f in R*'s scripts.
  */
  export function setPedToRagdollWithFall(ped: number, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): boolean;

  /**
  * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
  */
  export function setPedRagdollOnCollision(ped: number, toggle: boolean): void;

  /**
  * @returns If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
  */
  export function isPedRagdoll(ped: number): boolean;

  export function isPedRunningRagdollTask(ped: number): boolean;

  export function setPedRagdollForceFall(ped: number): void;

  export function resetPedRagdollTimer(ped: number): void;

  export function setPedCanRagdoll(ped: number, toggle: boolean): void;

  export function isPedRunningMeleeTask(ped: number): boolean;

  export function isPedRunningMobilePhoneTask(ped: number): boolean;

  /**
  * Only called once in the scripts:
  * if (sub_1abd() && (!PED::_A3F3564A5B3646C0(l_8C))) {
  * if (sub_52e3("RESNA_CELLR", 0)) {
  * PED::SET_PED_CAN_PLAY_GESTURE_ANIMS(l_8C, 1);
  * PED::SET_PED_CAN_PLAY_AMBIENT_ANIMS(l_8C, 1);
  * PED::SET_PED_CAN_PLAY_VISEME_ANIMS(l_8C, 1, 0);
  * l_184 += 1;
  * }
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0xA3F3564A5B3646C0
  */
  export function _0xA3F3564A5B3646C0(ped: number): boolean;

  /**
  * Works for both player and peds, but some flags don't seem to work for the player (1, for example)
  * 1 - Blocks ragdolling when shot.
  * 2 - Blocks ragdolling when hit by a vehicle. The ped still might play a falling animation.
  * 4 - Blocks ragdolling when set on fire.
  * -----------------------------------------------------------------------
  * There seem to be 26 flags
  */
  export function setRagdollBlockingFlags(ped: number, flags: number): void;

  /**
  * There seem to be 26 flags
  */
  export function clearRagdollBlockingFlags(ped: number, flags: number): void;

  export function setPedAngledDefensiveArea(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;

  export function setPedSphereDefensiveArea(ped: number, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;

  export function setPedDefensiveSphereAttachedToPed(ped: number, target: number, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;

  export function setPedDefensiveSphereAttachedToVehicle(ped: number, target: number, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;

  export function setPedDefensiveAreaAttachedToPed(ped: number, attachPed: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean, p10: boolean): void;

  export function setPedDefensiveAreaDirection(ped: number, p1: number, p2: number, p3: number, p4: boolean): void;

  /**
  * @param ped will no longer get angry when you stay near him.
  */
  export function removePedDefensiveArea(ped: number, toggle: boolean): void;

  export function getPedDefensiveAreaPosition(ped: number, p1: boolean): Vector3;

  export function isPedDefensiveAreaActive(ped: number, p1: boolean): boolean;

  export function setPedPreferredCoverSet(ped: number, itemSet: any): void;

  export function removePedPreferredCoverSet(ped: number): void;

  /**
  * It will revive/cure the injured ped. The condition is ped must not be dead.
  * Upon setting and converting the health int, found, if health falls below 5, the ped will lay on the ground in pain(Maximum default health is 100).
  * This function is well suited there.
  */
  export function reviveInjuredPed(ped: number): void;

  /**
  * This function will simply bring the dead person back to life.
  * Try not to use it alone, since using this function alone, will make peds fall through ground in hell(well for the most of the times).
  * Instead, before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at.(For instance, Around 2 floats of Player's current position.)
  * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
  */
  export function resurrectPed(ped: number): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  * *untested but char *name could also be a hash for a localized string
  */
  export function setPedNameDebug(ped: number, name: string): void;

  /**
  * Gets the offset the specified ped has moved since the previous tick.
  * If worldSpace is true, the returned offset is relative to the world. That is, if the ped has moved 1 meter on the X axis and 5 meters on the Y axis, it'll return 1,5,0.
  * @returns If worldSpace is false, the returned offset is relative to the ped. That is, if the ped has moved 1 meter right and 5 meters forward, it'll return 1,5,0.
  */
  export function getPedExtractedDisplacement(ped: number, worldSpace: boolean): Vector3;

  export function setPedDiesWhenInjured(ped: number, toggle: boolean): void;

  export function setPedEnableWeaponBlocking(ped: number, toggle: boolean): void;

  /**
  * Actual name begins with 'S'
  * @param ped focus on this ped (also disables its collision). If doing this for your player ped, you'll still be able to drive the vehicle.
  * @param p1 was always 1 (true).
  */
  export function _0xF9ACF4A08098EA25(ped: number, p1: boolean): void;

  export function resetPedVisibleDamage(ped: number): void;

  export function applyPedBloodDamageByZone(ped: number, p1: any, p2: number, p3: number, p4: any): void;

  /**
  * Found one occurence in re_crashrescue.c4
  * - winject
  * @param ped :APPLY_PED_BLOOD(l_4B, 3, 0.0, 0.0, 0.0, "wound_sheet");
  */
  export function applyPedBlood(ped: number, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;

  export function applyPedBloodByZone(ped: number, p1: any, p2: number, p3: number, p4: any): [void, any];

  export function applyPedBloodSpecific(ped: number, p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: any): [void, any];

  /**
  * enum eDamageZone
  * {
  * DZ_Torso = 0,
  * DZ_Head,
  * DZ_LeftArm,
  * DZ_RightArm,
  * DZ_LeftLeg,
  * DZ_RightLeg,
  * };
  * See NativeDB for reference: http://natives.altv.mp/#/0x397C38AA7B4A5F83
  */
  export function applyPedDamageDecal(ped: number, damageZone: number, xOffset: number, yOffset: number, heading: number, scale: number, alpha: number, variation: number, fadeIn: boolean, decalName: string): void;

  /**
  * "SCR_TrevorTreeBang"
  * "HOSPITAL_0"
  * "HOSPITAL_1"
  * "HOSPITAL_2"
  * "HOSPITAL_3"
  * "HOSPITAL_4"
  * "HOSPITAL_5"
  * "HOSPITAL_6"
  * "HOSPITAL_7"
  * See NativeDB for reference: http://natives.altv.mp/#/0x46DF918788CB093F
  * @param damage Packs:
  */
  export function applyPedDamagePack(ped: number, damagePack: string, damage: number, mult: number): void;

  export function clearPedBloodDamage(ped: number): void;

  /**
  * Somehow related to changing ped's clothes.
  */
  export function clearPedBloodDamageByZone(ped: number, p1: number): void;

  export function hidePedBloodDamageByZone(ped: number, p1: any, p2: boolean): void;

  /**
  * @param p1 from 0 to 5 in the b617d scripts.
  * @param p2 "blushing" and "ALL" found in the b617d scripts.
  */
  export function clearPedDamageDecalByZone(ped: number, p1: number, p2: string): void;

  export function getPedDecorationsState(ped: number): number;

  export function _0x2B694AFCF64E6994(ped: number, p1: boolean): void;

  /**
  * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
  */
  export function clearPedWetness(ped: number): void;

  /**
  * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
  */
  export function setPedWetnessHeight(ped: number, height: number): void;

  /**
  * combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function
  */
  export function setPedWetnessEnabledThisFrame(ped: number): void;

  export function clearPedEnvDirt(ped: number): void;

  /**
  * @param sweat is set to 100.0 or 0.0 in the decompiled scripts.
  */
  export function setPedSweat(ped: number, sweat: number): void;

  /**
  * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
  * Example:
  * Entry inside "mpbeach_overlays.xml" -
  * <Item>
  * <uvPos x="0.500000" y="0.500000" />
  * <scale x="0.600000" y="0.500000" />
  * <rotation value="0.000000" />
  * <nameHash>FM_Hair_Fuzz</nameHash>
  * <txdHash>mp_hair_fuzz</txdHash>
  * See NativeDB for reference: http://natives.altv.mp/#/0x5F5D1665E352A839
  * @param ped :_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
  * @param collection - PedDecorationCollection filename hash
  * @param overlay - Item name hash
  */
  export function addPedDecorationFromHashes(ped: number, collection: number, overlay: number): void;

  /**
  * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
  */
  export function addPedDecorationFromHashesInCorona(ped: number, collection: number, overlay: number): void;

  /**
  * Returns the zoneID for the overlay if it is a member of collection.
  * enum ePedDecorationZone
  * {
  * ZONE_TORSO = 0,
  * ZONE_HEAD = 1,
  * ZONE_LEFT_ARM = 2,
  * ZONE_RIGHT_ARM = 3,
  * ZONE_LEFT_LEG = 4,
  * ZONE_RIGHT_LEG = 5,
  * See NativeDB for reference: http://natives.altv.mp/#/0x9FD452BFBE7A7A8B
  */
  export function getPedDecorationZoneFromHashes(collection: number, overlay: number): number;

  export function clearPedDecorations(ped: number): void;

  export function clearPedDecorationsLeaveScars(ped: number): void;

  /**
  * @returns Despite this function's name, it simply returns whether the specified handle is a Ped.
  */
  export function wasPedSkeletonUpdated(ped: number): boolean;

  /**
  * Gets the position of the specified bone of the specified ped.
  * @param ped The ped to get the position of a bone from.
  * @param boneId The ID of the bone to get the position from. This is NOT the index.
  * @param offsetX The X-component of the offset to add to the position relative to the bone's rotation.
  * @param offsetY The Y-component of the offset to add to the position relative to the bone's rotation.
  * @param offsetZ The Z-component of the offset to add to the position relative to the bone's rotation.
  */
  export function getPedBoneCoords(ped: number, boneId: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;

  /**
  * Creates a new NaturalMotion message.
  * If a message already exists, this function does nothing. A message exists until the point it has been successfully dispatched by GIVE_PED_NM_MESSAGE.
  * @param startImmediately If set to true, the character will perform the message the moment it receives it by GIVE_PED_NM_MESSAGE. If false, the Ped will get the message but won't perform it yet. While it's a boolean value, if negative, the message will not be initialized.
  * @param messageId The ID of the NaturalMotion message.
  */
  export function createNmMessage(startImmediately: boolean, messageId: number): void;

  /**
  * Sends the message that was created by a call to CREATE_NM_MESSAGE to the specified Ped.
  * If a message hasn't been created already, this function does nothing.
  * If the Ped is not ragdolled with Euphoria enabled, this function does nothing.
  * Call order:
  * SET_PED_TO_RAGDOLL
  * CREATE_NM_MESSAGE
  * GIVE_PED_NM_MESSAGE
  * Multiple messages can be chained. Eg. to make the ped stagger and swing his arms around, the following calls can be made:
  * SET_PED_TO_RAGDOLL(ped, 4000, 5000, 1, 1, 1, 0);
  * See NativeDB for reference: http://natives.altv.mp/#/0xB158DFCCC56E5C5B
  * @param ped SET_PED_TO_RAGDOLL(ped, 4000, 5000, 1, 1, 1, 0);
  */
  export function givePedNmMessage(ped: number): void;

  export function addScenarioBlockingArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): number;

  export function removeScenarioBlockingAreas(): void;

  export function removeScenarioBlockingArea(p0: any, p1: boolean): void;

  export function setScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: number): void;

  export function doesScenarioBlockingAreaExist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

  /**
  * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
  */
  export function isPedUsingScenario(ped: number, scenario: string): boolean;

  export function isPedUsingAnyScenario(ped: number): boolean;

  export function setPedPanicExitScenario(p0: any, p1: any, p2: any, p3: any): any;

  export function _0x9A77DFD295E29B09(p0: any, p1: boolean): void;

  export function _0x25361A96E0F7E419(p0: any, p1: any, p2: any, p3: any): any;

  export function _0xEC6935EBE0847B90(p0: any, p1: any, p2: any, p3: any): any;

  export function setPedShouldPlayNormalScenarioExit(ped: number): void;

  export function setPedShouldPlayImmediateScenarioExit(ped: number): void;

  export function setPedShouldPlayFleeScenarioExit(ped: number, p1: any, p2: any, p3: any): any;

  export function _0x425AECF167663F48(ped: number, p1: boolean): void;

  export function _0x5B6010B3CBC29095(p0: any, p1: boolean): void;

  export function _0xCEDA60A74219D064(p0: any, p1: boolean): void;

  export function _0xC30BDAEE47256C13(p0: any): any;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function playFacialAnim(ped: number, animName: string, animDict: string): void;

  /**
  * Clipsets:
  * facials@gen_female@base
  * facials@gen_male@base
  * facials@p_m_zero@base
  * Typically followed with SET_FACIAL_IDLE_ANIM_OVERRIDE:
  * mood_drunk_1
  * mood_stressed_1
  * mood_happy_1
  * mood_talking_1
  */
  export function setFacialClipsetOverride(ped: number, animDict: string): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function setFacialIdleAnimOverride(ped: number, animName: string, animDict: string): void;

  export function clearFacialIdleAnimOverride(ped: number): void;

  export function setPedCanPlayGestureAnims(ped: number, toggle: boolean): void;

  /**
  * @param p2 usually 0
  */
  export function setPedCanPlayVisemeAnims(ped: number, toggle: boolean, p2: boolean): void;

  export function setPedCanPlayInjuredAnims(ped: number, p1: boolean): void;

  export function setPedCanPlayAmbientAnims(ped: number, toggle: boolean): void;

  export function setPedCanPlayAmbientBaseAnims(ped: number, toggle: boolean): void;

  export function _0xC2EE020F5FB4DB53(ped: number): void;

  export function setPedCanArmIk(ped: number, toggle: boolean): void;

  export function setPedCanHeadIk(ped: number, toggle: boolean): void;

  export function setPedCanLegIk(ped: number, toggle: boolean): void;

  export function setPedCanTorsoIk(ped: number, toggle: boolean): void;

  export function setPedCanTorsoReactIk(ped: number, p1: boolean): void;

  export function _0x6647C5F6F5792496(ped: number, p1: boolean): void;

  export function setPedCanUseAutoConversationLookat(ped: number, toggle: boolean): void;

  export function isPedHeadtrackingPed(ped1: number, ped2: number): boolean;

  export function isPedHeadtrackingEntity(ped: number, entity: number): boolean;

  /**
  * This is only called once in the scripts.
  * sub_1CD9(&l_49, 0, getElem(3, &l_34, 4), "MICHAEL", 0, 1);
  * sub_1CA8("WORLD_HUMAN_SMOKING", 2);
  * PED::SET_PED_PRIMARY_LOOKAT(getElem(3, &l_34, 4), PLAYER::PLAYER_PED_ID());
  */
  export function setPedPrimaryLookat(ped: number, lookAt: number): void;

  export function setPedClothPackageIndex(p0: any, p1: any): void;

  export function setPedClothProne(p0: any, p1: any): void;

  export function _0xA660FAF550EB37E5(p0: any, p1: boolean): void;

  /**
  * Research help : pastebin.com/fPL1cSwB
  * New items added with underscore as first char
  * -----------------------------------------------------------------------
  * enum PedConfigFlags
  * {
  * PED_FLAG_CAN_FLY_THRU_WINDSCREEN = 32,
  * PED_FLAG_DIES_BY_RAGDOLL = 33,
  * PED_FLAG_NO_COLLISION = 52,
  * _PED_FLAG_IS_SHOOTING = 58,
  * See NativeDB for reference: http://natives.altv.mp/#/0x1913FE4CBF41C463
  */
  export function setPedConfigFlag(ped: number, flagId: number, value: boolean): void;

  /**
  * Known values:
  * PRF_PreventGoingIntoStillInVehicleState = 236 *(fanatic2.c)*
  * @param ped :SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
  */
  export function setPedResetFlag(ped: number, flagId: number, doReset: boolean): void;

  /**
  * if (GET_PED_CONFIG_FLAG(ped, 78, 1))
  * @param p2 is always 1 in the scripts.
  * @returns = returns true if ped is aiming/shooting a gun
  */
  export function getPedConfigFlag(ped: number, flagId: number, p2: boolean): boolean;

  export function getPedResetFlag(ped: number, flagId: number): boolean;

  export function setPedGroupMemberPassengerIndex(ped: number, index: number): void;

  export function setPedCanEvasiveDive(ped: number, toggle: boolean): void;

  /**
  * var num3;
  * if (PED::IS_PED_EVASIVE_DIVING(A_0, &num3) != 0)
  * if (ENTITY::IS_ENTITY_A_VEHICLE(num3) != 0)
  * @returns Presumably returns the Entity that the Ped is currently diving out of the way of.
  */
  export function isPedEvasiveDiving(ped: number, evadingEntity: number): [boolean, number];

  export function setPedShootsAtCoord(ped: number, x: number, y: number, z: number, toggle: boolean): void;

  /**
  * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
  */
  export function setPedModelIsSuppressed(modelHash: number, toggle: boolean): void;

  export function stopAnyPedModelBeingSuppressed(): void;

  export function setPedCanBeTargetedWhenInjured(ped: number, toggle: boolean): void;

  export function setPedGeneratesDeadBodyEvents(ped: number, toggle: boolean): void;

  export function blockPedDeadBodyShockingEvents(ped: number, toggle: boolean): void;

  export function _0x3E9679C1DFCF422C(p0: any, p1: any): void;

  export function setPedCanRagdollFromPlayerImpact(ped: number, toggle: boolean): void;

  /**
  * PoliceMotorcycleHelmet   1024
  * RegularMotorcycleHelmet   4096
  * FiremanHelmet 16384
  * PilotHeadset  32768
  * PilotHelmet   65536
  * --
  * @param helmetFlag is generally 4096 or 16384 in the scripts. p1 varies between 1 and 0.
  */
  export function givePedHelmet(ped: number, cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;

  export function removePedHelmet(ped: number, instantly: boolean): void;

  /**
  * IS_PED_*
  */
  export function _0x14590DDBEDB1EC85(ped: number): boolean;

  export function setPedHelmet(ped: number, canWearHelmet: boolean): void;

  export function setPedHelmetFlag(ped: number, helmetFlag: number): void;

  /**
  * List of component/props ID
  * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
  */
  export function setPedHelmetPropIndex(ped: number, propIndex: number, p2: boolean): void;

  export function setPedHelmetUnk(ped: number, p1: boolean, p2: number, p3: number): void;

  export function isPedHelmetUnk(ped: number): boolean;

  export function setPedHelmetTextureIndex(ped: number, textureIndex: number): void;

  /**
  * Returns true if the ped passed through the parenthesis is wearing a helmet.
  */
  export function isPedWearingHelmet(ped: number): boolean;

  /**
  * CLEAR_PED_*
  */
  export function _0x687C0B594907D2E8(ped: number): void;

  export function _0x451294E859ECC018(p0: any): any;

  export function _0x9D728C1E12BF5518(p0: any): any;

  export function _0xF2385935BFFD4D92(p0: any): boolean;

  export function setPedToLoadCover(ped: number, toggle: boolean): void;

  /**
  * It simply makes the said ped to cower behind cover object(wall, desk, car)
  * Peds flee attributes must be set to not to flee, first. Else, most of the peds, will just flee from gunshot sounds or any other panic situations.
  */
  export function setPedCanCowerInCover(ped: number, toggle: boolean): void;

  export function setPedCanPeekInCover(ped: number, toggle: boolean): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function setPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped: number, toggle: boolean): void;

  /**
  * "IK" stands for "Inverse kinematics." I assume this has something to do with how the ped uses his legs to balance. In the scripts, the second parameter is always an int with a value of 2, 0, or sometimes 1
  */
  export function setPedLegIkMode(ped: number, mode: number): void;

  export function setPedMotionBlur(ped: number, toggle: boolean): void;

  export function setPedCanSwitchWeapon(ped: number, toggle: boolean): void;

  export function setPedDiesInstantlyInWater(ped: number, toggle: boolean): void;

  /**
  * Only appears in lamar1 script.
  */
  export function _0x1A330D297AAC6BC1(ped: number, p1: number): void;

  export function stopPedWeaponFiringWhenDropped(ped: number): void;

  export function setScriptedAnimSeatOffset(ped: number, p1: number): void;

  /**
  * 0 - Stationary (Will just stand in place)
  * 1 - Defensive (Will try to find cover and very likely to blind fire)
  * 2 - Offensive (Will attempt to charge at enemy but take cover as well)
  * 3 - Suicidal Offensive (Will try to flank enemy in a suicidal attack)
  */
  export function setPedCombatMovement(ped: number, combatMovement: number): void;

  export function getPedCombatMovement(ped: number): number;

  /**
  * 100 would equal attack
  * less then 50ish would mean run away
  * Only the values 0, 1 and 2 occur in the decompiled scripts. Most likely refers directly to the values also described in combatbehaviour.meta:
  * 0: CA_Poor
  * 1: CA_Average
  * 2: CA_Professional
  * Tested this and got the same results as the first explanation here. Could not find any difference between 0, 1 and 2.
  */
  export function setPedCombatAbility(ped: number, p1: number): void;

  /**
  * Only the values 0, 1 and 2 occur in the decompiled scripts. Most likely refers directly to the values also described as AttackRange in combatbehaviour.meta:
  * 0: CR_Near
  * 1: CR_Medium
  * 2: CR_Far
  */
  export function setPedCombatRange(ped: number, p1: number): void;

  export function getPedCombatRange(ped: number): number;

  /**
  * These combat attributes seem to be the same as the BehaviourFlags from combatbehaviour.meta.
  * So far, these are the equivalents found:
  * enum CombatAttributes
  * {
  * BF_CanUseCover = 0,
  * BF_CanUseVehicles = 1,
  * BF_CanDoDrivebys = 2,
  * BF_CanLeaveVehicle = 3,
  * BF_CanFightArmedPedsWhenNotArmed = 5,
  * See NativeDB for reference: http://natives.altv.mp/#/0x9F7794730795E019
  */
  export function setPedCombatAttributes(ped: number, attributeIndex: number, enabled: boolean): void;

  /**
  * Only 1 and 2 appear in the scripts. combatbehaviour.meta seems to only have TLR_SearchForTarget for all peds, but we don't know if that's 1 or 2.
  */
  export function setPedTargetLossResponse(ped: number, responseType: number): void;

  export function isPedPerformingMeleeAction(ped: number): boolean;

  export function isPedPerformingStealthKill(ped: number): boolean;

  export function isPedPerformingDependentComboLimit(ped: number): boolean;

  export function isPedBeingStealthKilled(ped: number): boolean;

  export function getMeleeTargetForPed(ped: number): number;

  export function wasPedKilledByStealth(ped: number): boolean;

  export function wasPedKilledByTakedown(ped: number): boolean;

  export function wasPedKnockedOut(ped: number): boolean;

  /**
  * bit 15 (0x8000) = force cower
  */
  export function setPedFleeAttributes(ped: number, attributeFlags: number, enable: boolean): void;

  /**
  * @param p1 Only "CODE_HUMAN_STAND_COWER" found in the b617d scripts.
  */
  export function setPedCowerHash(ped: number, p1: string): void;

  /**
  * SET_PED_STE*
  */
  export function _0x2016C603D6B8987C(ped: number, toggle: boolean): void;

  export function setPedSteersAroundPeds(ped: number, toggle: boolean): void;

  export function setPedSteersAroundObjects(ped: number, toggle: boolean): void;

  export function setPedSteersAroundVehicles(ped: number, toggle: boolean): void;

  export function _0xA9B61A329BFDCBEA(p0: any, p1: boolean): void;

  export function setPedIncreasedAvoidanceRadius(ped: number): void;

  export function setPedBlocksPathingWhenDead(ped: number, toggle: boolean): void;

  export function _0xA52D5247A4227E14(p0: any): void;

  export function isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;

  export function forcePedAiAndAnimationUpdate(ped: number, p1: boolean, p2: boolean): void;

  export function isPedHeadingTowardsPosition(ped: number, x: number, y: number, z: number, p4: number): boolean;

  export function requestPedVisibilityTracking(ped: number): void;

  export function requestPedVehicleVisibilityTracking(ped: number, p1: boolean): void;

  /**
  * REQUEST_*
  */
  export function _0xCD018C591F94CB43(ped: number, p1: boolean): void;

  /**
  * REQUEST_*
  */
  export function _0x75BA1CB3B7D40CAF(ped: number, p1: boolean): void;

  /**
  * returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
  * Target needs to be tracked.. won't work otherwise.
  */
  export function isTrackedPedVisible(ped: number): boolean;

  /**
  * GET_*
  */
  export function _0x511F1A683387C7E2(ped: number): number;

  export function isPedTracked(ped: number): boolean;

  export function hasPedReceivedEvent(ped: number, eventId: number): boolean;

  export function canPedSeeHatedPed(ped1: number, ped2: number): boolean;

  export function _0x9C6A6C19B6C0C496(ped: number, p1: number): [boolean, number];

  export function _0x2DFC81C9B9608549(ped: number, p1: number): [boolean, number];

  /**
  * no bone= -1
  * boneIds:
  * SKEL_ROOT = 0x0,
  * SKEL_Pelvis = 0x2e28,
  * SKEL_L_Thigh = 0xe39f,
  * SKEL_L_Calf = 0xf9bb,
  * SKEL_L_Foot = 0x3779,
  * SKEL_L_Toe0 = 0x83c,
  * IK_L_Foot = 0xfedd,
  * See NativeDB for reference: http://natives.altv.mp/#/0x3F428D08BE5AAE31
  */
  export function getPedBoneIndex(ped: number, boneId: number): number;

  export function getPedRagdollBoneIndex(ped: number, bone: number): number;

  /**
  * Values look to be between 0.0 and 1.0
  * From decompiled scripts: 0.0, 0.6, 0.65, 0.8, 1.0
  * You are correct, just looked in IDA it breaks from the function if it's less than 0.0f or greater than 1.0f.
  */
  export function setPedEnveffScale(ped: number, value: number): void;

  export function getPedEnveffScale(ped: number): number;

  export function setEnablePedEnveffScale(ped: number, toggle: boolean): void;

  /**
  * In agency_heist3b.c4, its like this 90% of the time:
  * PED::SET_PED_ENVEFF_SCALE(ped, 1.0);
  * PED::_D69411AA0CEBF9E9(ped, 87, 81, 68);
  * PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);
  * and its like this 10% of the time:
  * PED::_110F526AB784111F(ped, 0.2);
  * PED::SET_PED_ENVEFF_SCALE(ped, 0.65);
  * PED::_D69411AA0CEBF9E9(ped, 74, 69, 60);
  * PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);
  * @param ped :_110F526AB784111F(ped, 0.099);
  */
  export function _0x110F526AB784111F(ped: number, p1: number): void;

  /**
  * Something related to the environmental effects natives.
  * In the "agency_heist3b" script, p1 - p3 are always under 100 - usually they are {87, 81, 68}. If SET_PED_ENVEFF_SCALE is set to 0.65 (instead of the usual 1.0), they use {74, 69, 60}
  */
  export function setPedEnveffColorModulator(ped: number, p1: number, p2: number, p3: number): void;

  /**
  * This native sets the emissive intensity for the given ped. It is used for different 'glow' levels on illuminated clothing.
  * Old name: _SET_PED_REFLECTION_INTENSITY
  * @param intensity 0.0f - 1.0f
  */
  export function setPedEmissiveIntensity(ped: number, intensity: number): void;

  /**
  * Old name: _GET_PED_REFLECTION_INTENSITY
  * Use 0x4E90D746056E273D to set the illuminated clothing glow intensity for a specific ped.
  * Returns a float between 0.0 and 1.0 representing the current illuminated clothing glow intensity.
  */
  export function getPedEmissiveIntensity(ped: number): number;

  export function isPedShaderEffectValid(ped: number): boolean;

  export function _0xE906EC930F5FE7C8(p0: any, p1: any): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0x1216E0BFA72CC703(p0: any, p1: any): void;

  /**
  * Enable/disable ped shadow (ambient occlusion). https://gfycat.com/thankfulesteemedgecko
  */
  export function setPedAoBlobRendering(ped: number, toggle: boolean): void;

  export function _0xB8B52E498014F5B0(ped: number): boolean;

  /**
  * @param roll and pitch 0
  * @param yaw to Ped.rotation
  * @param p6 always 2 (but it doesnt seem to matter...)
  */
  export function createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;

  export function createSynchronizedScene2(x: number, y: number, z: number, radius: number, object: number): number;

  /**
  * Returns true if a synchronized scene is running
  */
  export function isSynchronizedSceneRunning(sceneId: number): boolean;

  export function setSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;

  export function setSynchronizedScenePhase(sceneID: number, phase: number): void;

  export function getSynchronizedScenePhase(sceneID: number): number;

  export function setSynchronizedSceneRate(sceneID: number, rate: number): void;

  export function getSynchronizedSceneRate(sceneID: number): number;

  export function setSynchronizedSceneLooped(sceneID: number, toggle: boolean): void;

  export function isSynchronizedSceneLooped(sceneID: number): boolean;

  export function setSynchronizedSceneHoldLastFrame(sceneID: number, toggle: boolean): void;

  export function isSynchronizedSceneHoldLastFrame(sceneID: number): boolean;

  export function attachSynchronizedSceneToEntity(sceneID: number, entity: number, boneIndex: number): void;

  export function detachSynchronizedScene(sceneID: number): void;

  export function disposeSynchronizedScene(scene: number): void;

  /**
  * Some motionstate hashes are
  * 0xec17e58 (standing idle), 0xbac0f10b (nothing?), 0x3f67c6af (aiming with pistol 2-h), 0x422d7a25 (stealth), 0xbd8817db, 0x916e828c
  * and those for the strings
  * "motionstate_idle", "motionstate_walk", "motionstate_run", "motionstate_actionmode_idle", and "motionstate_actionmode_walk".
  * [31/03/2017] ins1de :
  * enum MotionState
  * {
  * StopRunning = -530524,
  * StopWalking = -668482597,
  * See NativeDB for reference: http://natives.altv.mp/#/0xF28965D04F570DCA
  * @param p2 Most common is 0, 0, 0); followed by 0, 1, 0); and 1, 1, 0); in the scripts. p4 is very rarely something other than 0.
  */
  export function forcePedMotionState(ped: number, motionStateHash: number, p2: boolean, p3: number, p4: boolean): boolean;

  /**
  * seems very related to aiming but GET_PED_CONFIG* to GET_PED_DECORATIONS* and no clue what it might be + no joaat to confirm
  */
  export function _0xF60165E1D2C5370B(ped: number, p1: any, p2: any): [boolean, any, any];

  export function setPedMaxMoveBlendRatio(ped: number, value: number): void;

  export function setPedMinMoveBlendRatio(ped: number, value: number): void;

  /**
  * Min: 0.00
  * Max: 10.00
  * Can be used in combo with fast run cheat.
  * When value is set to 10.00:
  * Sprinting without fast run cheat: 66 m/s
  * Sprinting with fast run cheat: 77 m/s
  * Needs to be looped!
  * Note: According to IDA for the Xbox360 xex, when they check bgt they seem to have the min to 0.0f, but the max set to 1.15f not 10.0f.
  */
  export function setPedMoveRateOverride(ped: number, value: number): void;

  export function _0x0B3E35AC043707D9(p0: any, p1: any): void;

  /**
  * Checks if the specified unknown flag is set in the ped's model.
  * The engine itself seems to exclusively check for flags 1 and 4 (Might be inlined code of the check that checks for other flags).
  * Game scripts exclusively check for flags 1 and 4.
  */
  export function _0x46B05BCAE43856B0(ped: number, flag: number): boolean;

  /**
  * Returns size of array, passed into the second variable.
  * See below for usage information.
  * This function actually requires a struct, where the first value is the maximum number of elements to return.  Here is a sample of how I was able to get it to work correctly, without yet knowing the struct format.
  * //Setup the array
  * const int numElements = 10;
  * const int arrSize = numElements * 2 + 2;
  * Any veh[arrSize];
  * //0 index is the size of the array
  * veh[0] = numElements;
  * See NativeDB for reference: http://natives.altv.mp/#/0xCFF869CBFA210D82
  */
  export function getPedNearbyVehicles(ped: number, sizeAndVehs: number): [number, number];

  /**
  * Return value is the number of peds found and added to the array passed.
  * -----------------------------------
  * To make this work in most menu bases at least in C++ do it like so,
  * Formatted Example: pastebin.com/D8an9wwp
  * -----------------------------------
  * Example: gtaforums.com/topic/789788-function-args-to-pedget-ped-nearby-peds/?p=1067386687
  * @param sizeAndPeds - is a pointer to an array. The array is filled with peds found nearby the ped supplied to the first argument.
  * @param ignore - ped type to ignore
  */
  export function getPedNearbyPeds(ped: number, sizeAndPeds: number, ignore: number): [number, number];

  export function haveAllStreamingRequestsCompleted(ped: number): boolean;

  export function isPedUsingActionMode(ped: number): boolean;

  /**
  * @param p2 is usually -1 in the scripts. action is either 0 or "DEFAULT_ACTION".
  */
  export function setPedUsingActionMode(ped: number, p1: boolean, p2: number, action: string): void;

  /**
  * @param name "MP_FEMALE_ACTION" found multiple times in the b617d scripts.
  */
  export function setMovementModeOverride(ped: number, name: string): void;

  /**
  * Overrides the ped's collision capsule radius for the current tick.
  * Must be called every tick to be effective.
  * Setting this to 0.001 will allow warping through some objects.
  */
  export function setPedCapsule(ped: number, value: number): void;

  /**
  * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
  */
  export function registerPedheadshot(ped: number): number;

  export function registerPedheadshot3(ped: number): number;

  /**
  * Similar to REGISTER_PEDHEADSHOT but creates a transparent background instead of black. Example: https://i.imgur.com/iHz8ztn.png
  */
  export function registerPedheadshotTransparent(ped: number): number;

  /**
  * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
  */
  export function unregisterPedheadshot(id: number): void;

  /**
  * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
  */
  export function isPedheadshotValid(id: number): boolean;

  /**
  * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
  */
  export function isPedheadshotReady(id: number): boolean;

  /**
  * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
  */
  export function getPedheadshotTxdString(id: number): string;

  export function requestPedheadshotImgUpload(id: number): boolean;

  export function releasePedheadshotImgUpload(id: number): void;

  export function isPedheadshotImgUploadAvailable(): boolean;

  export function hasPedheadshotImgUploadFailed(): boolean;

  export function hasPedheadshotImgUploadSucceeded(): boolean;

  export function setPedHeatscaleOverride(ped: number, heatScale: number): void;

  export function disablePedHeatscaleOverride(ped: number): void;

  export function spawnpointsStartSearch(p0: number, p1: number, p2: number, p3: number, p4: number, interiorFlags: number, scale: number, duration: number): void;

  export function spawnpointsStartSearchInAngledArea(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, interiorFlags: number, scale: number, duration: number): void;

  export function spawnpointsCancelSearch(): void;

  export function spawnpointsIsSearchActive(): boolean;

  export function spawnpointsIsSearchComplete(): boolean;

  export function spawnpointsIsSearchFailed(): boolean;

  export function spawnpointsGetNumSearchResults(): number;

  export function spawnpointsGetSearchResult(randomInt: number, x: number, y: number, z: number): [void, number, number, number];

  export function spawnpointsGetSearchResultFlags(p0: any, p1: any): [void, any];

  export function setIkTarget(ped: number, ikIndex: number, entityLookAt: number, boneLookAt: number, offsetX: number, offsetY: number, offsetZ: number, p7: any, blendInDuration: number, blendOutDuration: number): void;

  /**
  * FORCE_*
  */
  export function _0xED3C76ADFA6D07C4(ped: number): void;

  export function requestActionModeAsset(asset: string): void;

  export function hasActionModeAssetLoaded(asset: string): boolean;

  export function removeActionModeAsset(asset: string): void;

  export function requestStealthModeAsset(asset: string): void;

  export function hasStealthModeAssetLoaded(asset: string): boolean;

  export function removeStealthModeAsset(asset: string): void;

  export function setPedLodMultiplier(ped: number, multiplier: number): void;

  /**
  * SET_PED_CAN_*
  */
  export function _0xE861D0B05C7662B8(ped: number, p1: boolean, p2: number): void;

  export function setForceFootstepUpdate(ped: number, toggle: boolean): void;

  export function setForceStepType(ped: number, p1: boolean, type: number, p3: number): void;

  export function isAnyHostilePedNearPoint(ped: number, x: number, y: number, z: number, radius: number): boolean;

  export function _0x820E9892A77E97CD(p0: any, p1: any): void;

  export function _0x06087579E7AA85A9(p0: any, p1: any, p2: number, p3: number, p4: number, p5: number): boolean;

  /**
  * @param min and max are usually 100.0 and 200.0
  */
  export function setPopControlSphereThisFrame(x: number, y: number, z: number, min: number, max: number): void;

  export function _0xD33DAA36272177C4(ped: number): void;

  export function _0x711794453CFD692B(p0: any, p1: any): void;

  export function _0x83A169EABCDB10A2(p0: any, p1: any): void;

  export function _0x288DF530C92DAD6F(p0: any, p1: number): void;

  /**
  * IS_PED_*
  */
  export function _0x3795688A307E1EB6(Ped: number): boolean;

  export function _0x0F62619393661D6E(p0: any, p1: any, p2: any): void;

  export function _0xDFE68C4B787E1BFB(ped: number): void;

  export function setEnableScubaGearLight(ped: number, toggle: boolean): void;

  export function isScubaGearLightEnabled(ped: number): boolean;

  export function clearFacialClipsetOverride(ped: number): void;

  /**
  * SET_A*
  */
  export function _0xFAB944D4D481ACCB(ped: number, toggle: boolean): void;

  /**
  * Creates a rope at the specific position, that extends in the specified direction when not attached to any entities.
  * __
  * Add_Rope(pos.x,pos.y,pos.z,0.0,0.0,0.0,20.0,4,20.0,1.0,0.0,false,false,false,5.0,false,NULL)
  * When attached, Position<vector> does not matter
  * When attached, Angle<vector> does not matter
  * Rope Type:
  * 4 and bellow is a thick rope
  * 5 and up are small metal wires
  * 0 crashes the game
  * See NativeDB for reference: http://natives.altv.mp/#/0xE832D760399EB220
  * @param length Rope is forced to this length, generally best to keep this the same as your rope length.
  * @param windingSpeed - Speed the Rope is being winded, using native START_ROPE_WINDING. Set positive for winding and negative for unwinding.
  * @param rigid - If max length is zero, and this is set to false the rope will become rigid (it will force a specific distance, what ever length is, between the objects).
  * @param unkPtr - unknown ptr, always 0 in orig scripts
  */
  export function addRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, windingSpeed: number, p11: boolean, p12: boolean, rigid: boolean, p14: number, breakWhenShot: boolean, unkPtr: any): [number, any];

  export function deleteRope(ropeId: number): [void, number];

  export function deleteChildRope(ropeId: number): void;

  export function doesRopeExist(ropeId: number): [boolean, number];

  /**
  * ROPE_*
  */
  export function _0xA1AE736541B0FCA3(ropeId: number, p1: boolean): [void, number];

  export function ropeDrawShadowEnabled(ropeId: number, toggle: boolean): [void, number];

  /**
  * Rope presets can be found in the gamefiles. One example is "ropeFamily3", it is NOT a hash but rather a string.
  */
  export function loadRopeData(ropeId: number, rope_preset: string): void;

  export function pinRopeVertex(ropeId: number, vertex: number, x: number, y: number, z: number): void;

  export function unpinRopeVertex(ropeId: number, vertex: number): void;

  export function getRopeVertexCount(ropeId: number): number;

  /**
  * Attaches entity 1 to entity 2.
  */
  export function attachEntitiesToRope(ropeId: number, ent1: number, ent2: number, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: boolean, p11: boolean, p12: any, p13: any): [void, any, any];

  /**
  * The position supplied can be anywhere, and the entity should anchor relative to that point from it's origin.
  */
  export function attachRopeToEntity(ropeId: number, entity: number, x: number, y: number, z: number, p5: boolean): void;

  export function detachRopeFromEntity(ropeId: number, entity: number): void;

  export function ropeSetUpdatePinverts(ropeId: number): void;

  export function ropeSetUpdateOrder(ropeId: number, p1: any): void;

  /**
  * ROPE_*
  */
  export function _0x36CCB9BE67B970FD(ropeId: number, p1: boolean): void;

  /**
  * IS_*
  */
  export function _0x84DE3B5FB3E666F0(ropeId: number): [boolean, number];

  export function getRopeLastVertexCoord(ropeId: number): Vector3;

  export function getRopeVertexCoord(ropeId: number, vertex: number): Vector3;

  export function startRopeWinding(ropeId: number): void;

  export function stopRopeWinding(ropeId: number): void;

  export function startRopeUnwindingFront(ropeId: number): void;

  export function stopRopeUnwindingFront(ropeId: number): void;

  export function ropeConvertToSimple(ropeId: number): void;

  /**
  * Loads rope textures for all ropes in the current scene.
  */
  export function ropeLoadTextures(): void;

  export function ropeAreTexturesLoaded(): boolean;

  /**
  * Unloads rope textures for all ropes in the current scene.
  */
  export function ropeUnloadTextures(): void;

  export function doesRopeBelongToThisScript(ropeId: number): boolean;

  /**
  * Most likely ROPE_ATTACH_*
  */
  export function _0xBC0CE682D4D05650(ropeId: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;

  export function _0xB1B6216CA2E7B55E(p0: any, p1: boolean, p2: boolean): void;

  /**
  * ROPE_*
  */
  export function _0xB743F735C03D7810(ropeId: number, p1: number): void;

  export function ropeGetDistanceBetweenEnds(ropeId: number): number;

  /**
  * Forces a rope to a certain length.
  */
  export function ropeForceLength(ropeId: number, length: number): void;

  /**
  * Reset a rope to a certain length.
  */
  export function ropeResetLength(ropeId: number, length: number): void;

  export function applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;

  export function setDamping(entity: number, vertex: number, value: number): void;

  export function activatePhysics(entity: number): void;

  export function setCgoffset(entity: number, x: number, y: number, z: number): void;

  export function getCgoffset(entity: number): Vector3;

  export function setCgAtBoundcenter(entity: number): void;

  export function breakEntityGlass(entity: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: any, p10: boolean): void;

  /**
  * GET_*
  */
  export function getHasObjectFragInst(object: number): boolean;

  export function setDisableBreaking(object: number, toggle: boolean): void;

  /**
  * RESET_*
  */
  export function _0xCC6E963682533882(object: number): void;

  export function setDisableFragDamage(object: number, toggle: boolean): void;

  export function setEntityProofUnk(entity: number, toggle: boolean): void;

  /**
  * SET_*
  */
  export function _0x9EBD751E5787BAF2(p0: boolean): void;

  /**
  * Related to the lower-end of a vehicles fTractionCurve, e.g., from standing starts and acceleration from low/zero speeds.
  */
  export function setLaunchControlEnabled(toggle: boolean): void;

  /**
  * Gets the ped for a specified player index.
  */
  export function getPlayerPed(player: number): number;

  /**
  * Does the same like PLAYER::GET_PLAYER_PED
  */
  export function getPlayerPedScriptIndex(player: number): number;

  /**
  * Set the model for a specific Player. Be aware that this will destroy the current Ped for the Player and create a new one, any reference to the old ped should be reset
  * Make sure to request the model first and wait until it has loaded.
  */
  export function setPlayerModel(player: number, model: number): void;

  export function changePlayerPed(player: number, ped: number, p2: boolean, resetDamage: boolean): void;

  export function getPlayerRgbColour(player: number, r: number, g: number, b: number): [void, number, number, number];

  /**
  * Gets the number of players in the current session.
  * @returns If not multiplayer, always returns 1.
  */
  export function getNumberOfPlayers(): number;

  /**
  * Gets the player's team.
  * Does nothing in singleplayer.
  */
  export function getPlayerTeam(player: number): number;

  /**
  * Set player team on deathmatch and last team standing..
  */
  export function setPlayerTeam(player: number, team: number): void;

  export function getNumberOfPlayersInTeam(team: number): number;

  export function getPlayerName(player: number): string;

  /**
  * Remnant from GTA IV. Does nothing in GTA V.
  */
  export function getWantedLevelRadius(player: number): number;

  export function getPlayerWantedCentrePosition(player: number): Vector3;

  /**
  * # Predominant call signatures
  * # Parameter value ranges
  * P0: PLAYER::PLAYER_ID()
  * @param player :SET_PLAYER_WANTED_CENTRE_POSITION(PLAYER::PLAYER_ID(), ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1));
  * @param position ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1)
  * @param p2 Not set by any call
  */
  export function setPlayerWantedCentrePosition(player: number, position: Vector3, p2: boolean, p3: boolean): [void, Vector3];

  /**
  * Drft
  */
  export function getWantedLevelThreshold(wantedLevel: number): number;

  /**
  * Call SET_PLAYER_WANTED_LEVEL_NOW for immediate effect
  * disableNoMission-  Disables When Off Mission- appears to always be false
  * @param wantedLevel is an integer value representing 0 to 5 stars even though the game supports the 6th wanted level but no police will appear since no definitions are present for it in the game files
  */
  export function setPlayerWantedLevel(player: number, wantedLevel: number, disableNoMission: boolean): void;

  /**
  * @param p2 is always false in R* scripts
  */
  export function setPlayerWantedLevelNoDrop(player: number, wantedLevel: number, p2: boolean): void;

  /**
  * Forces any pending wanted level to be applied to the specified player immediately.
  * Call SET_PLAYER_WANTED_LEVEL with the desired wanted level, followed by SET_PLAYER_WANTED_LEVEL_NOW.
  * Second parameter is unknown (always false).
  */
  export function setPlayerWantedLevelNow(player: number, p1: boolean): void;

  export function arePlayerFlashingStarsAboutToDrop(player: number): boolean;

  export function arePlayerStarsGreyedOut(player: number): boolean;

  export function _0x7E07C78925D5FD96(p0: any): any;

  export function setDispatchCopsForPlayer(player: number, toggle: boolean): void;

  export function isPlayerWantedLevelGreater(player: number, wantedLevel: number): boolean;

  /**
  * PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.
  */
  export function clearPlayerWantedLevel(player: number): void;

  export function isPlayerDead(player: number): boolean;

  export function isPlayerPressingHorn(player: number): boolean;

  /**
  * SPC_AMBIENT_SCRIPT = (1 << 1),
  * SPC_CLEAR_TASKS = (1 << 2),
  * SPC_REMOVE_FIRES = (1 << 3),
  * SPC_REMOVE_EXPLOSIONS = (1 << 4),
  * SPC_REMOVE_PROJECTILES = (1 << 5),
  * SPC_DEACTIVATE_GADGETS = (1 << 6),
  * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
  * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
  * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
  * See NativeDB for reference: http://natives.altv.mp/#/0x8D32347D6D4C40A2
  */
  export function setPlayerControl(player: number, bHasControl: boolean, flags: number): void;

  export function getPlayerWantedLevel(player: number): number;

  export function setMaxWantedLevel(maxWantedLevel: number): void;

  /**
  * If toggle is set to false:
  * The police won't be shown on the (mini)map
  * If toggle is set to true:
  * The police will be shown on the (mini)map
  */
  export function setPoliceRadarBlips(toggle: boolean): void;

  /**
  * The player will be ignored by the police if toggle is set to true
  */
  export function setPoliceIgnorePlayer(player: number, toggle: boolean): void;

  /**
  * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
  */
  export function isPlayerPlaying(player: number): boolean;

  export function setEveryoneIgnorePlayer(player: number, toggle: boolean): void;

  export function setAllRandomPedsFlee(player: number, toggle: boolean): void;

  export function setAllRandomPedsFleeThisFrame(player: number): void;

  export function _0xDE45D1A1EF45EE61(player: number, toggle: boolean): void;

  /**
  * - This is called after SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
  */
  export function _0xC3376F42B1FACCC6(player: number): void;

  export function _0xFAC75988A7D078D3(player: number): void;

  export function setIgnoreLowPriorityShockingEvents(player: number, toggle: boolean): void;

  export function setWantedLevelMultiplier(multiplier: number): void;

  /**
  * Max value is 1.0
  */
  export function setWantedLevelDifficulty(player: number, difficulty: number): void;

  export function resetWantedLevelDifficulty(player: number): void;

  export function _0x49B856B1360C47C7(p0: any, p1: any, p2: any): void;

  export function _0x823EC8E82BA45986(p0: any): void;

  export function startFiringAmnesty(duration: number): void;

  /**
  * From am_armybase.ysc.c4:
  * PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(4), 36, PLAYER::GET_WANTED_LEVEL_THRESHOLD(4));
  * -----
  * This was taken from the GTAV.exe v1.334. The function is called sub_140592CE8. For a full decompilation of the function, see here: pastebin.com/09qSMsN7
  * -----
  * 1: Firearms possession
  * 2: Person running a red light ("5-0-5")
  * 3: Reckless driver
  * 4: Speeding vehicle (a "5-10")
  * See NativeDB for reference: http://natives.altv.mp/#/0xE9B09589827545E7
  * @param player :REPORT_CRIME(PLAYER::PLAYER_ID(), 37, PLAYER::GET_WANTED_LEVEL_THRESHOLD(1));
  */
  export function reportCrime(player: number, crimeType: number, wantedLvlThresh: number): void;

  /**
  * This was previously named as "RESERVE_ENTITY_EXPLODES_ON_HIGH_EXPLOSION_COMBO"
  * which is obviously incorrect.
  * Seems to only appear in scripts used in Singleplayer. p1 ranges from 2 - 46.
  * I assume this switches the crime type
  */
  export function switchCrimeType(player: number, p1: number): void;

  /**
  * Seems to only appear in scripts used in Singleplayer.
  * Always used like this in scripts
  * @param player :_BC9490CA15AEA8FB(PLAYER::PLAYER_ID());
  */
  export function _0xBC9490CA15AEA8FB(player: number): void;

  /**
  * This has been found in use in the decompiled files.
  */
  export function _0x4669B3ED80F24B4E(player: number): void;

  export function _0x2F41A3BAE005E5FA(p0: any, p1: any): void;

  /**
  * This has been found in use in the decompiled files.
  */
  export function _0xAD73CE5A09E42D12(player: number): void;

  export function _0x36F1B38855F2A8DF(player: number): void;

  export function reportPoliceSpottedPlayer(player: number): void;

  /**
  * PLAYER::0xBF6993C7(rPtr((&l_122) + 71)); // Found in decompilation
  * ***
  * In "am_hold_up.ysc" used once:
  * l_8d._f47 = MISC::GET_RANDOM_FLOAT_IN_RANGE(18.0, 28.0);
  * PLAYER::_B45EFF719D8427A6((l_8d._f47));
  */
  export function _0xB45EFF719D8427A6(p0: number): void;

  /**
  * 2 matches in 1 script - am_hold_up
  * Used in multiplayer scripts?
  */
  export function _0x0032A6DBA562C518(): void;

  export function canPlayerStartMission(player: number): boolean;

  export function isPlayerReadyForCutscene(player: number): boolean;

  export function isPlayerTargettingEntity(player: number, entity: number): boolean;

  /**
  * Assigns the handle of locked-on melee target to *entity that you pass it.
  * Returns false if no entity found.
  */
  export function getPlayerTargetEntity(player: number, entity: number): [boolean, number];

  /**
  * Gets a value indicating whether the specified player is currently aiming freely.
  */
  export function isPlayerFreeAiming(player: number): boolean;

  /**
  * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
  */
  export function isPlayerFreeAimingAtEntity(player: number, entity: number): boolean;

  /**
  * Returns TRUE if it found an entity in your crosshair within range of your weapon. Assigns the handle of the target to the *entity that you pass it.
  * Returns false if no entity found.
  */
  export function getEntityPlayerIsFreeAimingAt(player: number, entity: number): [boolean, number];

  /**
  * Affects the range of auto aim target.
  */
  export function setPlayerLockonRangeOverride(player: number, range: number): void;

  /**
  * Set whether this player should be able to do drive-bys.
  * "A drive-by is when a ped is aiming/shooting from vehicle. This includes middle finger taunts. By setting this value to false I confirm the player is unable to do all that. Tested on tick."
  */
  export function setPlayerCanDoDriveBy(player: number, toggle: boolean): void;

  /**
  * Sets whether this player can be hassled by gangs.
  */
  export function setPlayerCanBeHassledByGangs(player: number, toggle: boolean): void;

  /**
  * Sets whether this player can take cover.
  */
  export function setPlayerCanUseCover(player: number, toggle: boolean): void;

  /**
  * Gets the maximum wanted level the player can get.
  * Ranges from 0 to 5.
  */
  export function getMaxWantedLevel(): number;

  export function isPlayerTargettingAnything(player: number): boolean;

  export function setPlayerSprint(player: number, toggle: boolean): void;

  export function resetPlayerStamina(player: number): void;

  export function restorePlayerStamina(player: number, p1: number): void;

  export function getPlayerSprintStaminaRemaining(player: number): number;

  export function getPlayerSprintTimeRemaining(player: number): number;

  export function getPlayerUnderwaterTimeRemaining(player: number): number;

  export function _0xA0D3E4F7AAFB7E78(p0: any, p1: any): any;

  /**
  * Returns the group ID the player is member of.
  */
  export function getPlayerGroup(player: number): number;

  export function getPlayerMaxArmour(player: number): number;

  /**
  * Can the player control himself, used to disable controls for player for things like a cutscene.
  * ---
  * You can't disable controls with this, use SET_PLAYER_CONTROL(...) for this.
  */
  export function isPlayerControlOn(player: number): boolean;

  /**
  * Returns true when the player is not able to control the cam i.e. when running a benchmark test, switching the player or viewing a cutscene.
  * Note: I am not 100% sure if the native actually checks if the cam control is disabled but it seems promising.
  */
  export function isPlayerCamControlDisabled(): boolean;

  export function isPlayerScriptControlOn(player: number): boolean;

  /**
  * Returns TRUE if the player ('s ped) is climbing at the moment.
  */
  export function isPlayerClimbing(player: number): boolean;

  /**
  * Return true while player is being arrested / busted.
  * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
  * @returns If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
  */
  export function isPlayerBeingArrested(player: number, atArresting: boolean): boolean;

  export function resetPlayerArrestState(player: number): void;

  /**
  * Alternative: GET_VEHICLE_PED_IS_IN(PLAYER_PED_ID(), 1);
  */
  export function getPlayersLastVehicle(): number;

  /**
  * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
  */
  export function getPlayerIndex(): number;

  /**
  * @returns Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
  */
  export function intToPlayerindex(value: number): number;

  /**
  * --------------------------------------------------------
  * if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::INT_TO_PARTICIPANTINDEX(i)))
  * @returns Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
  */
  export function intToParticipantindex(value: number): number;

  export function getTimeSincePlayerHitVehicle(player: number): number;

  export function getTimeSincePlayerHitPed(player: number): number;

  export function getTimeSincePlayerDroveOnPavement(player: number): number;

  export function getTimeSincePlayerDroveAgainstTraffic(player: number): number;

  export function isPlayerFreeForAmbientTask(player: number): boolean;

  /**
  * Always returns 0 in story mode.
  * @returns This returns YOUR 'identity' as a Player type.
  */
  export function playerId(): number;

  /**
  * Returns current player ped
  */
  export function playerPedId(): number;

  /**
  * Does exactly the same thing as PLAYER_ID()
  */
  export function networkPlayerIdToInt(): number;

  export function hasForceCleanupOccurred(cleanupFlags: number): boolean;

  /**
  * used with 1,2,8,64,128 in the scripts
  */
  export function forceCleanup(cleanupFlags: number): void;

  /**
  * PLAYER::FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME("pb_prostitute", 1); // Found in decompilation
  */
  export function forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;

  export function forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;

  export function getCauseOfMostRecentForceCleanup(): number;

  export function setPlayerMayOnlyEnterThisVehicle(player: number, vehicle: number): void;

  export function setPlayerMayNotEnterAnyVehicle(player: number): void;

  /**
  * Achievements from 0-57
  * more achievements came with update 1.29 (freemode events update), I'd say that they now go to 60, but I'll need to check.
  */
  export function giveAchievementToPlayer(achievement: number): boolean;

  /**
  * For Steam.
  * @returns Does nothing and always returns false in the retail version of the game.
  */
  export function setAchievementProgress(achievement: number, progress: number): boolean;

  /**
  * For Steam.
  * @returns Always returns 0 in retail version of the game.
  */
  export function getAchievementProgress(achievement: number): number;

  export function hasAchievementBeenPassed(achievement: number): boolean;

  /**
  * Returns TRUE if the game is in online mode and FALSE if in offline mode.
  * This is an alias for NETWORK_IS_SIGNED_ONLINE.
  */
  export function isPlayerOnline(): boolean;

  export function isPlayerLoggingInNp(): boolean;

  /**
  * Purpose of the BOOL currently unknown.
  * Both, true and false, work
  */
  export function displaySystemSigninUi(unk: boolean): void;

  export function isSystemUiBeingDisplayed(): boolean;

  /**
  * Simply sets you as invincible (Health will not deplete).
  * Use 0x733A643B5B0C53C1 instead if you want Ragdoll enabled, which is equal to:
  * *(DWORD *)(playerPedAddress + 0x188) |= (1 << 9);
  */
  export function setPlayerInvincible(player: number, toggle: boolean): void;

  /**
  * Returns the Player's Invincible status.
  * bool IsPlayerInvincible(Player player)
  * {
  * auto addr = getScriptHandleBaseAddress(GET_PLAYER_PED(player));
  * if (addr)
  * {
  * DWORD flag = *(DWORD *)(addr + 0x188);
  * return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0xB721981B2B939E07
  * @returns This function will always return false if 0x733A643B5B0C53C1 is used to set the invincibility status. To always get the correct result, use this:
  */
  export function getPlayerInvincible(player: number): boolean;

  /**
  * @returns Always returns false.
  */
  export function _0xDCC07526B8EC45AF(player: number): boolean;

  export function setPlayerInvincibleKeepRagdollEnabled(player: number, toggle: boolean): void;

  /**
  * Found in "director_mode", "fm_bj_race_controler", "fm_deathmatch_controler", "fm_impromptu_dm_controler", "fm_race_controler", "gb_deathmatch".
  */
  export function _0xCAC57395B151135F(player: number, p1: boolean): void;

  export function removePlayerHelmet(player: number, p2: boolean): void;

  export function givePlayerRagdollControl(player: number, toggle: boolean): void;

  /**
  * Example from fm_mission_controler.ysc.c4:
  * All other decompiled scripts using this seem to be using the player id as the first parameter, so I feel the need to confirm it as so.
  * No need to confirm it says PLAYER_ID() so it uses PLAYER_ID() lol.
  * @param player :SET_PLAYER_LOCKON(PLAYER::PLAYER_ID(), 1);
  */
  export function setPlayerLockon(player: number, toggle: boolean): void;

  /**
  * Sets your targeting mode.
  * 0 = Assisted Aim - Full
  * 1 = Assisted Aim - Partial
  * 2 = Free Aim - Assisted
  * 3 = Free Aim
  */
  export function setPlayerTargetingMode(targetMode: number): void;

  export function setPlayerTargetLevel(targetLevel: number): void;

  /**
  * Returns profile setting 237.
  * GET_*
  */
  export function _0xB9CF1F793A9F1BF1(): boolean;

  /**
  * Returns profile setting 243.
  * GET_*
  */
  export function _0xCB645E85E97EA48B(): boolean;

  export function clearPlayerHasDamagedAtLeastOnePed(player: number): void;

  export function hasPlayerDamagedAtLeastOnePed(player: number): boolean;

  export function clearPlayerHasDamagedAtLeastOneNonAnimalPed(player: number): void;

  export function hasPlayerDamagedAtLeastOneNonAnimalPed(player: number): boolean;

  /**
  * This can be between 1.0f - 14.9f
  * You can change the max in IDA from 15.0. I say 15.0 as the function blrs if what you input is greater than or equal to 15.0 hence why it's 14.9 max default.
  */
  export function setAirDragMultiplierForPlayersVehicle(player: number, multiplier: number): void;

  /**
  * Swim speed multiplier.
  * Just call it one time, it is not required to be called once every tick. - Note copied from below native.
  * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and RUN_SPRINT below. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
  * @param multiplier goes up to 1.49
  */
  export function setSwimMultiplierForPlayer(player: number, multiplier: number): void;

  /**
  * Just call it one time, it is not required to be called once every tick.
  * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and SWIM above. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
  * @param multiplier goes up to 1.49 any value above will be completely overruled by the game and the multiplier will not take effect, this can be edited in memory however.
  */
  export function setRunSprintMultiplierForPlayer(player: number, multiplier: number): void;

  /**
  * Returns the time since the character was arrested in (ms) milliseconds.
  * example
  * var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_ARREST();
  * UI.DrawSubtitle(time.ToString());
  * if player has not been arrested, the int returned will be -1.
  */
  export function getTimeSinceLastArrest(): number;

  /**
  * Returns the time since the character died in (ms) milliseconds.
  * example
  * var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_DEATH();
  * UI.DrawSubtitle(time.ToString());
  * if player has not died, the int returned will be -1.
  */
  export function getTimeSinceLastDeath(): number;

  export function assistedMovementCloseRoute(): void;

  export function assistedMovementFlushRoute(): void;

  export function setPlayerForcedAim(player: number, toggle: boolean): void;

  export function setPlayerForcedZoom(player: number, toggle: boolean): void;

  export function setPlayerForceSkipAimIntro(player: number, toggle: boolean): void;

  /**
  * Inhibits the player from using any method of combat including melee and firearms.
  * NOTE: Only disables the firing for one frame
  */
  export function disablePlayerFiring(player: number, toggle: boolean): void;

  /**
  * Disables something. Used only once in R* scripts (freemode.ysc).
  * DISABLE_PLAYER_*
  */
  export function _0xB885852C39CC265D(): void;

  export function setDisableAmbientMeleeMove(player: number, toggle: boolean): void;

  /**
  * Default is 100. Use player id and not ped id. For instance: PLAYER::SET_PLAYER_MAX_ARMOUR(PLAYER::PLAYER_ID(), 100); // main_persistent.ct4
  */
  export function setPlayerMaxArmour(player: number, value: number): void;

  export function specialAbilityActivate(p0: any, p1: any): void;

  export function setSpecialAbility(player: number, p1: number, p2: any): void;

  export function specialAbilityDeplete(p0: any, p1: any): void;

  export function specialAbilityDeactivate(player: number, p1: any): void;

  export function specialAbilityDeactivateFast(player: number, p1: any): void;

  export function specialAbilityReset(player: number, p1: any): void;

  export function specialAbilityChargeOnMissionFailed(player: number, p1: any): void;

  /**
  * Every occurrence of p1 & p2 were both true.
  */
  export function specialAbilityChargeSmall(player: number, p1: boolean, p2: boolean, p3: any): void;

  /**
  * Only 1 match. Both p1 & p2 were true.
  */
  export function specialAbilityChargeMedium(player: number, p1: boolean, p2: boolean, p3: any): void;

  /**
  * 2 matches. p1 was always true.
  */
  export function specialAbilityChargeLarge(player: number, p1: boolean, p2: boolean, p3: any): void;

  /**
  * @param p1 appears to always be 1 (only comes up twice)
  */
  export function specialAbilityChargeContinuous(player: number, p1: number, p2: any): void;

  /**
  * @param p1 appears as 5, 10, 15, 25, or 30. p2 is always true.
  */
  export function specialAbilityChargeAbsolute(player: number, p1: number, p2: boolean, p3: any): void;

  /**
  * @param normalizedValue is from 0.0 - 1.0
  * @param p2 is always 1
  */
  export function specialAbilityChargeNormalized(player: number, normalizedValue: number, p2: boolean, p3: any): void;

  /**
  * Also known as _RECHARGE_SPECIAL_ABILITY
  */
  export function specialAbilityFillMeter(player: number, p1: boolean, p2: any): void;

  /**
  * @param p1 was always true.
  */
  export function specialAbilityDepleteMeter(player: number, p1: boolean, p2: any): void;

  export function specialAbilityLock(playerModel: number, p1: any): void;

  export function specialAbilityUnlock(playerModel: number, p1: any): void;

  export function isSpecialAbilityUnlocked(playerModel: number): boolean;

  export function isSpecialAbilityActive(player: number, p1: any): boolean;

  export function isSpecialAbilityMeterFull(player: number, p1: any): boolean;

  export function enableSpecialAbility(player: number, toggle: boolean, p2: any): void;

  export function isSpecialAbilityEnabled(player: number, p1: any): boolean;

  export function setSpecialAbilityMultiplier(multiplier: number): void;

  export function _0xFFEE8FA29AB9A18E(player: number, p1: any): void;

  /**
  * Appears once in "re_dealgonewrong"
  */
  export function _0x5FC472C501CCADB3(player: number): boolean;

  /**
  * Only 1 occurrence. p1 was 2.
  */
  export function _0xF10B44FD479D69F3(player: number, p1: number): boolean;

  /**
  * 2 occurrences in agency_heist3a. p1 was 0.7f then 0.4f.
  */
  export function _0xDD2620B7B9D16FF1(player: number, p1: number): boolean;

  /**
  * `findCollisionLand`: This teleports the player to land when set to true and will not consider the Z coordinate parameter provided by you. It will automatically put the Z coordinate so that you don't fall from sky.
  */
  export function startPlayerTeleport(player: number, x: number, y: number, z: number, heading: number, p5: boolean, findCollisionLand: boolean, p7: boolean): void;

  export function updatePlayerTeleport(player: number): boolean;

  /**
  * Disables the player's teleportation
  */
  export function stopPlayerTeleport(): void;

  export function isPlayerTeleportActive(): boolean;

  export function getPlayerCurrentStealthNoise(player: number): number;

  /**
  * `regenRate`: The recharge multiplier, a value between 0.0 and 1.0.
  * Use 1.0 to reset it back to normal
  */
  export function setPlayerHealthRechargeMultiplier(player: number, regenRate: number): void;

  export function getPlayerHealthRechargeLimit(player: number): number;

  export function setPlayerHealthRechargeLimit(player: number, limit: number): void;

  export function setPlayerFallDistance(p0: any, p1: any): void;

  /**
  * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
  * Based on tests, it is unlikely to be a multiplier.
  * modifier's min value is 0.1
  */
  export function setPlayerWeaponDamageModifier(player: number, modifier: number): void;

  /**
  * modifier's min value is 0.1
  */
  export function setPlayerWeaponDefenseModifier(player: number, modifier: number): void;

  /**
  * modifier's min value is 0.1
  */
  export function setPlayerWeaponDefenseModifier2(player: number, modifier: number): void;

  /**
  * modifier's min value is 0.1
  */
  export function setPlayerMeleeWeaponDamageModifier(player: number, modifier: number, p2: boolean): void;

  /**
  * modifier's min value is 0.1
  */
  export function setPlayerMeleeWeaponDefenseModifier(player: number, modifier: number): void;

  /**
  * modifier's min value is 0.1
  */
  export function setPlayerVehicleDamageModifier(player: number, modifier: number): void;

  /**
  * modifier's min value is 0.1
  */
  export function setPlayerVehicleDefenseModifier(player: number, modifier: number): void;

  /**
  * SET_PLAYER_MAX_*
  */
  export function _0x8D768602ADEF2245(player: number, p1: number): void;

  export function _0xD821056B9ACF8052(p0: any, p1: any): void;

  export function _0x31E90B8873A4CD3B(p0: any, p1: any): void;

  /**
  * Tints:
  * None = -1,
  * Rainbow = 0,
  * Red = 1,
  * SeasideStripes = 2,
  * WidowMaker = 3,
  * Patriot = 4,
  * Blue = 5,
  * Black = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0xA3D0E54541D9A5E5
  */
  export function setPlayerParachuteTintIndex(player: number, tintIndex: number): void;

  /**
  * Tints:
  * None = -1,
  * Rainbow = 0,
  * Red = 1,
  * SeasideStripes = 2,
  * WidowMaker = 3,
  * Patriot = 4,
  * Blue = 5,
  * Black = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0x75D3F7A1B0D9B145
  */
  export function getPlayerParachuteTintIndex(player: number, tintIndex: number): [void, number];

  /**
  * Tints:
  * None = -1,
  * Rainbow = 0,
  * Red = 1,
  * SeasideStripes = 2,
  * WidowMaker = 3,
  * Patriot = 4,
  * Blue = 5,
  * Black = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0xAF04C87F5DC1DF38
  */
  export function setPlayerReserveParachuteTintIndex(player: number, index: number): void;

  /**
  * Tints:
  * None = -1,
  * Rainbow = 0,
  * Red = 1,
  * SeasideStripes = 2,
  * WidowMaker = 3,
  * Patriot = 4,
  * Blue = 5,
  * Black = 6,
  * See NativeDB for reference: http://natives.altv.mp/#/0xD5A016BC3C09CF40
  */
  export function getPlayerReserveParachuteTintIndex(player: number, index: number): [void, number];

  /**
  * tints 0- 13
  * 0 - unkown
  * 1 - unkown
  * 2 - unkown
  * 3 - unkown
  * 4 - unkown
  */
  export function setPlayerParachutePackTintIndex(player: number, tintIndex: number): void;

  export function getPlayerParachutePackTintIndex(player: number, tintIndex: number): [void, number];

  export function setPlayerHasReserveParachute(player: number): void;

  export function getPlayerHasReserveParachute(player: number): boolean;

  export function setPlayerCanLeaveParachuteSmokeTrail(player: number, enabled: boolean): void;

  export function setPlayerParachuteSmokeTrailColor(player: number, r: number, g: number, b: number): void;

  export function getPlayerParachuteSmokeTrailColor(player: number, r: number, g: number, b: number): [void, number, number, number];

  /**
  * example:
  * wouldnt the flag be the seatIndex?
  * @param player :SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS(PLAYER::PLAYER_ID(), 6);
  * @param flags 0-6
  */
  export function setPlayerResetFlagPreferRearSeats(player: number, flags: number): void;

  export function setPlayerNoiseMultiplier(player: number, multiplier: number): void;

  /**
  * Values around 1.0f to 2.0f used in game scripts.
  */
  export function setPlayerSneakingNoiseMultiplier(player: number, multiplier: number): void;

  export function canPedHearPlayer(player: number, ped: number): boolean;

  /**
  * This is to make the player walk without accepting input from INPUT.
  * C# Example :
  * Function.Call(Hash.SIMULATE_PLAYER_INPUT_GAIT, Game.Player, 1.0f, 100, 1.0f, 1, 0); //Player will go forward for 100ms
  * @param gaitType is in increments of 100s. 2000, 500, 300, 200, etc.
  * @param p4 is always 1 and p5 is always 0.
  */
  export function simulatePlayerInputGait(player: number, amount: number, gaitType: number, speed: number, p4: boolean, p5: boolean): void;

  export function resetPlayerInputGait(player: number): void;

  export function setAutoGiveParachuteWhenEnterPlane(player: number, toggle: boolean): void;

  export function setAutoGiveScubaGearWhenExitVehicle(player: number, toggle: boolean): void;

  export function setPlayerStealthPerceptionModifier(player: number, value: number): void;

  /**
  * IS_*
  */
  export function _0x690A61A6D13583F6(player: number): boolean;

  export function _0x9EDD76E87D5D51BA(player: number): void;

  export function setPlayerSimulateAiming(player: number, toggle: boolean): void;

  export function setPlayerClothPinFrames(player: number, p1: number): void;

  /**
  * Every occurrence was either 0 or 2.
  */
  export function setPlayerClothPackageIndex(index: number): void;

  /**
  * 6 matches across 4 scripts. 5 occurrences were 240. The other was 255.
  */
  export function setPlayerClothLockCounter(value: number): void;

  /**
  * Only 1 match. ob_sofa_michael.
  * PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND(-804.5928f, 173.1801f, 71.68436f, 0f, 0f, 0.590625f, 1f, 0.7f);1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
  */
  export function playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

  /**
  * 1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
  */
  export function playerDetachVirtualBound(): void;

  export function hasPlayerBeenSpottedInStolenVehicle(player: number): boolean;

  /**
  * Returns true if an unk value is greater than 0.0f
  */
  export function isPlayerBattleAware(player: number): boolean;

  /**
  * var num3 = PLAYER::GET_PLAYER_PED(l_2171); // proof l_2171 is a player
  * var num17 = PLAYER::0x9DF75B2A(l_2171, 100, 0); // l_2171
  * .ysc:
  * if (PLAYER::GET_PLAYER_WANTED_LEVEL(l_6EF) < v_4) { // l_6EF is a player
  * PLAYER::SET_PLAYER_WANTED_LEVEL(l_6EF, v_4, 0); // l_6EF
  * PLAYER::SET_PLAYER_WANTED_LEVEL_NOW(l_6EF, 0); // l_6EF
  * } else {
  * PLAYER::_4669B3ED80F24B4E(l_6EF); // l_6EF
  * HUD::_BA8D65C1C65702E5(1);
  * See NativeDB for reference: http://natives.altv.mp/#/0xBC0753C9CA14B506
  */
  export function _0xBC0753C9CA14B506(player: number, p1: number, p2: boolean): boolean;

  /**
  * Appears only 3 times in the scripts, more specifically in michael1.ysc
  * -
  * This can be used to prevent dying if you are "out of the world"
  */
  export function extendWorldBoundaryForPlayer(x: number, y: number, z: number): void;

  export function resetWorldBoundaryForPlayer(): void;

  /**
  * Returns true if the player is riding a train.
  */
  export function isPlayerRidingTrain(player: number): boolean;

  export function hasPlayerLeftTheWorld(player: number): boolean;

  export function setPlayerLeavePedBehind(player: number, toggle: boolean): void;

  /**
  * @param p1 was always 5.
  * @param p4 was always false.
  */
  export function setPlayerParachuteVariationOverride(player: number, p1: number, p2: any, p3: any, p4: boolean): void;

  export function clearPlayerParachuteVariationOverride(player: number): void;

  /**
  * example:
  * @param player :SET_PLAYER_PARACHUTE_MODEL_OVERRIDE(PLAYER::PLAYER_ID(), 0x73268708);
  */
  export function setPlayerParachuteModelOverride(player: number, model: number): void;

  export function clearPlayerParachuteModelOverride(player: number): void;

  export function setPlayerParachutePackModelOverride(player: number, model: number): void;

  export function clearPlayerParachutePackModelOverride(player: number): void;

  export function disablePlayerVehicleRewards(player: number): void;

  /**
  * Used with radios:
  * void sub_cf383(auto _a0) {
  * if ((a_0)==1) {
  * if (MISC::IS_BIT_SET((g_240005._f1), 3)) {
  * PLAYER::_2F7CEB6520288061(0);
  * AUDIO::SET_AUDIO_FLAG("AllowRadioDuringSwitch", 0);
  * AUDIO::SET_MOBILE_PHONE_RADIO_STATE(0);
  * AUDIO::SET_AUDIO_FLAG("MobileRadioInGame", 0);
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0x2F7CEB6520288061
  */
  export function _0x2F7CEB6520288061(p0: boolean): void;

  export function setPlayerBluetoothState(player: number, state: boolean): void;

  export function isPlayerBluetoothEnable(player: number): boolean;

  /**
  * DISABLE_*
  */
  export function _0x5501B7A5CDB79D37(player: number): void;

  export function getPlayerFakeWantedLevel(player: number): number;

  export function _0x55FCC0C390620314(p0: any, p1: any, p2: any): void;

  export function _0x2382AB11450AE7BA(p0: any, p1: any): void;

  export function _0x6E4361FF3E8CD7CA(p0: any): any;

  /**
  * Unsets playerPed+330 if the current weapon has certain flags.
  */
  export function _0x237440E46D918649(p0: any): void;

  export function setPlayerHomingRocketDisabled(p0: any, p1: any): void;

  /**
  * ADD_*
  */
  export function _0x9097EB6D4BB9A12A(player: number, entity: number): void;

  /**
  * REMOVE_*
  */
  export function _0x9F260BFB59ADBCA3(player: number, entity: number): void;

  export function _0x7BAE68775557AE0B(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  /**
  * Resets values set by 0x70A382ADEC069DD3
  * _RESET_VOIP_*
  */
  export function _0x7148E0F43D11F0D9(): void;

  /**
  * Might be voip related
  * _SET_VOIP_*
  */
  export function _0x70A382ADEC069DD3(coordX: number, coordY: number, coordZ: number): void;

  export function _0x48621C9FCA3EBD28(p0: number): void;

  export function _0x81CBAE94390F9F89(): void;

  export function _0x13B350B8AD0EEE10(): void;

  export function _0x293220DA1B46CEBC(p0: number, p1: number, p2: number): void;

  /**
  * -This function appears to be deprecated/ unused. Tracing the call internally leads to a _nullsub -
  * first one seems to be a string of a mission name, second one seems to be a bool/toggle
  * @param p1 was always 0.
  */
  export function _0x208784099002BC30(missionNameLabel: string, p1: any): void;

  /**
  * This disable the recording feature and has to be called every frame.
  */
  export function stopRecordingThisFrame(): void;

  export function _0xF854439EFBB3B583(): void;

  /**
  * This will disable the ability to make camera changes in R* Editor.
  * RE*
  */
  export function disableRockstarEditorCameraChanges(): void;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x66972397E0757E7A(p0: number, p1: number, p2: number): void;

  /**
  * Starts recording a replay.
  * If mode is 0, turns on action replay.
  * If mode is 1, starts recording.
  * If already recording a replay, does nothing.
  */
  export function startRecording(mode: number): void;

  /**
  * Stops recording and saves the recorded clip.
  */
  export function stopRecordingAndSaveClip(): void;

  /**
  * Stops recording and discards the recorded clip.
  */
  export function stopRecordingAndDiscardClip(): void;

  export function saveRecordingClip(): boolean;

  /**
  * mov al, cs:g_bIsRecordingGameplay // byte_141DD0CD0 in b944
  * retn
  * @returns Checks if you're recording, returns TRUE when you start recording (F1) or turn on action replay (F2)
  */
  export function isRecording(): boolean;

  export function _0xDF4B952F7D381B95(): any;

  export function _0x4282E08174868BE3(): any;

  export function _0x33D47E85B476ABCD(p0: boolean): boolean;

  /**
  * Does nothing (it's a nullsub).
  */
  export function _0x7E2BD3EF6C205F09(p0: string, p1: boolean): void;

  /**
  * Returns a bool if interior rendering is disabled, if yes, all "normal" rendered interiors are invisible
  */
  export function isInteriorRenderingDisabled(): boolean;

  /**
  * Disables some other rendering (internal)
  */
  export function _0x5AD3932DAEB1E5D3(): void;

  export function _0xE058175F8EAFE79A(p0: boolean): void;

  /**
  * Sets (almost, not sure) all Rockstar Editor values (bIsRecording etc) to 0.
  */
  export function resetEditorValues(): void;

  /**
  * Please note that you will need to call DO_SCREEN_FADE_IN after exiting the Rockstar Editor when you call this.
  */
  export function activateRockstarEditor(): void;

  export function requestScript(scriptName: string): void;

  export function setScriptAsNoLongerNeeded(scriptName: string): void;

  /**
  * Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.
  */
  export function hasScriptLoaded(scriptName: string): boolean;

  export function doesScriptExist(scriptName: string): boolean;

  /**
  * formerly _REQUEST_STREAMED_SCRIPT
  */
  export function requestScriptWithNameHash(scriptHash: number): void;

  export function setScriptWithNameHashAsNoLongerNeeded(scriptHash: number): void;

  export function hasScriptWithNameHashLoaded(scriptHash: number): boolean;

  export function doesScriptWithNameHashExist(scriptHash: number): boolean;

  export function terminateThread(threadId: number): void;

  export function isThreadActive(threadId: number): boolean;

  export function getNameOfThread(threadId: number): string;

  /**
  * Starts a new iteration of the current threads.
  * Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)
  */
  export function scriptThreadIteratorReset(): void;

  export function scriptThreadIteratorGetNextThreadId(): number;

  export function getIdOfThisThread(): number;

  export function terminateThisThread(): void;

  /**
  * Gets the number of instances of the specified script is currently running.
  * if (program)
  * v3 = rage::scrProgram::GetNumRefs(program) - 1;
  * return v3;
  * @returns Actually returns numRefs - 1.
  */
  export function getNumberOfReferencesOfScriptWithNameHash(scriptHash: number): number;

  export function getThisScriptName(): string;

  export function getHashOfThisScriptName(): number;

  /**
  * @param eventGroup 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
  */
  export function getNumberOfEvents(eventGroup: number): number;

  /**
  * @param eventGroup 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
  */
  export function getEventExists(eventGroup: number, eventIndex: number): boolean;

  /**
  * @param eventGroup 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
  */
  export function getEventAtIndex(eventGroup: number, eventIndex: number): number;

  /**
  * @param eventGroup 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
  */
  export function getEventData(eventGroup: number, eventIndex: number, argStruct: number, argStructSize: number): [boolean, number];

  /**
  * @param eventGroup 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
  */
  export function triggerScriptEvent(eventGroup: number, args: number, argCount: number, bit: number): [void, number];

  export function shutdownLoadingScreen(): void;

  export function setNoLoadingScreen(toggle: boolean): void;

  export function getNoLoadingScreen(): boolean;

  export function _0xB1577667C3708F9B(): void;

  /**
  * Returns true if bit 0 in GtaThread+0x154 is set.
  * BG_*
  */
  export function _0x836B62713E0534CA(): boolean;

  /**
  * Sets bit 1 in GtaThread+0x154
  * BG_*
  */
  export function _0x760910B49D2B98EA(): void;

  /**
  * Hashed version of 0x9D5A25BADB742ACD.
  */
  export function bgStartContextHash(contextHash: number): void;

  /**
  * Hashed version of 0xDC2BACD920D0A0DD.
  */
  export function bgEndContextHash(contextHash: number): void;

  /**
  * Inserts the given context into the background scripts context map.
  */
  export function bgStartContext(contextName: string): void;

  /**
  * Deletes the given context from the background scripts context map.
  */
  export function bgEndContext(contextName: string): void;

  /**
  * BG_*
  */
  export function _0x0F6F1EBBC4E1D5E6(scriptIndex: number, p1: string): boolean;

  /**
  * BG_*
  */
  export function _0x22E21FBCFC88C149(scriptIndex: number, p1: string): number;

  /**
  * BG_*
  */
  export function _0x829CD22E043A2577(p0: number): number;

  /**
  * Asynchronously starts a line-of-sight (raycast) world probe shape test.
  * @param p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used.
  * @returns Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.
  */
  export function startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;

  /**
  * Does the same as 0x7EE9F5D83DD4F90E, except blocking until the shape test completes.
  */
  export function startExpensiveSynchronousShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;

  export function startShapeTestBoundingBox(entity: number, flags1: number, flags2: number): number;

  export function startShapeTestBox(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: any, flags: number, entity: number, p12: any): number;

  export function startShapeTestBound(entity: number, flags1: number, flags2: number): number;

  /**
  * Raycast from point to point, where the ray has a radius.
  * vehicles=10
  * peds =12
  * Iterating through flags yields many ped / vehicle/ object combinations
  * @param entity is an entity to ignore
  * @param p9 = 7, but no idea what it does
  */
  export function startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: number): number;

  export function startShapeTestSweptSphere(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: any): number;

  /**
  * In its only usage in game scripts its called with flag set to 511, entity to player_ped_id and flag2 set to 7
  * @returns Actual name starts with START_SHAPE_TEST_??? and it returns a ShapeTest handle that can be used with GET_SHAPE_TEST_RESULT.
  */
  export function startShapeTestSurroundingCoords(pVec1: Vector3, pVec2: Vector3, flag: number, entity: number, flag2: number): [number, Vector3, Vector3];

  /**
  * Returns the result of a shape test: 0 if the handle is invalid, 1 if the shape test is still pending, or 2 if the shape test has completed, and the handle should be invalidated.
  * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
  */
  export function getShapeTestResult(shapeTestHandle: number, hit: boolean, endCoords: Vector3, surfaceNormal: Vector3, entityHit: number): [number, boolean, Vector3, Vector3, number];

  /**
  * Returns the result of a shape test, also returning the material of any touched surface.
  * When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.
  * @returns Unless the return value is 2, the other return values are undefined.
  */
  export function getShapeTestResultIncludingMaterial(shapeTestHandle: number, hit: boolean, endCoords: Vector3, surfaceNormal: Vector3, materialHash: number, entityHit: number): [number, boolean, Vector3, Vector3, number, number];

  /**
  * Invalidates the entity handle passed by removing the fwScriptGuid from the entity. This should be used when receiving an ambient entity from shape testing natives, but can also be used for other natives returning an 'irrelevant' entity handle.
  */
  export function releaseScriptGuidFromEntity(entityHit: number): void;

  export function scInboxGetTotalNumMessages(): number;

  export function scInboxMessageInit(p0: number): number;

  export function isScInboxValid(p0: number): boolean;

  export function scInboxMessagePop(p0: number): boolean;

  export function scInboxMessageGetDataInt(p0: number, context: string, out: number): [boolean, number];

  export function scInboxMessageGetDataBool(p0: number, p1: string): boolean;

  export function scInboxMessageGetDataString(p0: number, context: string, out: string): boolean;

  export function scInboxMessageDoApply(p0: number): boolean;

  export function scInboxMessageGetString(p0: number): string;

  export function scInboxMessagePushGamerToEventRecipList(networkHandle: number): [void, number];

  export function scInboxMessageSendUgcStatUpdateEvent(data: any): [void, any];

  export function scInboxMessageGetUgcdata(p0: any, p1: any): [boolean, any];

  export function scInboxMessageSendBountyPresenceEvent(data: any): [boolean, any];

  export function scInboxMessageGetBountyData(index: number, outData: any): [boolean, any];

  export function scInboxGetEmails(offset: number, limit: number): void;

  export function _0x16DA8172459434AA(): any;

  export function _0x7DB18CA8CAD5B098(): any;

  export function _0x4737980E8A283806(p0: number, p1: any): [boolean, any];

  export function _0x44ACA259D67651DB(p0: any, p1: any): [void, any];

  export function scEmailMessagePushGamerToRecipList(networkHandle: number): [void, number];

  export function scEmailMessageClearRecipList(): void;

  export function _0x116FB94DC4B79F17(p0: string): void;

  export function _0x07DBD622D9533857(p0: any): any;

  export function setHandleRockstarMessageViaScript(toggle: boolean): void;

  export function isRockstarMessageReadyForScript(): boolean;

  export function rockstarMessageGetString(): string;

  export function scPresenceAttrSetInt(attrHash: number, value: number): boolean;

  export function scPresenceAttrSetFloat(attrHash: number, value: number): boolean;

  export function scPresenceAttrSetString(attrHash: number, value: string): boolean;

  export function _0x487912FD248EFDDF(p0: any, p1: number): boolean;

  export function _0xC85A7127E7AD02AA(): any;

  export function _0xA770C8EEC6FB2AC5(): any;

  /**
  * sfink: from scripts:
  * func_720(socialclub::_0x8416FE4E4629D7D7("bIgnoreCheaterOverride"));
  * func_719(socialclub::_0x8416FE4E4629D7D7("bIgnoreBadSportOverride"));
  */
  export function scGetIsProfileAttributeSet(name: string): boolean;

  export function _0x7FFCBFEE44ECFABF(): any;

  export function _0x2D874D4AE612A65F(): any;

  /**
  * Starts a task to check an entered string for profanity on the ROS/Social Club services.
  * See also: 1753344C770358AE, 82E4A58BABC15AE7.
  */
  export function scProfanityCheckString(string: string, token: number): [boolean, number];

  export function scProfanityCheckUgcString(string: string, token: number): [boolean, number];

  export function scProfanityGetCheckIsValid(token: number): boolean;

  export function scProfanityGetCheckIsPending(token: number): boolean;

  export function scProfanityGetStringPassed(token: number): boolean;

  export function scProfanityGetStringStatus(token: number): number;

  export function _0xF6BAAAF762E1BF40(p0: string, p1: number): [boolean, number];

  export function _0xF22CA0FD74B80E7A(p0: any): boolean;

  export function _0x9237E334F6E43156(p0: any): any;

  export function _0x700569DBA175A77C(p0: any): any;

  export function _0x1D4446A62D35B0D0(p0: any, p1: any): any;

  export function _0x2E89990DDFF670C3(p0: any, p1: any): any;

  export function _0xD0EE05FE193646EA(p0: any, p1: any, p2: any): [boolean, any, any, any];

  export function _0x1989C6E6F67E76A8(p0: any, p1: any, p2: any): [boolean, any, any, any];

  export function _0x07C61676E5BB52CD(p0: any): any;

  export function _0x8147FFF6A718E1AD(p0: any): any;

  export function _0x0F73393BAC7E6730(p0: any, p1: number): [boolean, any, number];

  export function _0xD302E99EDF0449CF(p0: any): any;

  export function _0x5C4EBFFA98BDB41C(p0: any): any;

  export function _0xFF8F3A92B75ED67A(): any;

  export function _0x4ED9C8D6DA297639(): any;

  export function _0x710BCDA8071EDED1(): any;

  export function _0x50A8A36201DBF83E(): any;

  export function _0x9DE5D2F723575ED0(): any;

  export function _0xC2C97EA97711D1AE(): any;

  export function _0x450819D8CF90C416(): any;

  export function _0x4A7D6E727F941747(p0: any): [any, any];

  export function _0xE75A4A2E5E316D86(): any;

  export function _0x2570E26BE63964E3(): any;

  export function _0x1D12A56FC95BE92E(): any;

  export function _0x33DF47CC0642061B(): any;

  export function _0xA468E0BE12B12C70(): any;

  export function _0x8CC469AB4D349B7C(p0: number, p1: string, p2: any): [boolean, any];

  export function _0xC5A35C73B68F3C49(): any;

  export function _0x699E4A5C8C893A18(p0: number, p1: string, p2: any): [boolean, any];

  export function _0x19853B5B17D77BCA(p0: any, p1: any): [boolean, any];

  export function _0x6BFB12CE158E3DD4(p0: any): boolean;

  export function _0xFE4C1D0D3B9CC17E(p0: any, p1: any): boolean;

  export function _0xD8122C407663B995(): any;

  export function _0x3001BEF2FECA3680(): boolean;

  export function _0x92DA6E70EF249BD1(p0: string, p1: number): [boolean, number];

  export function _0x675721C9F644D161(): void;

  export function _0xE4F6E8D07A2F0F51(p0: any): any;

  /**
  * Fills some 0x30 sized struct
  */
  export function _0x8A4416C0DB05FA66(p0: any): boolean;

  export function _0xEA95C0853A27888E(): void;

  /**
  * Returns the nickname of the logged-in Rockstar Social Club account.
  */
  export function scGetNickname(): string;

  export function _0x225798743970412B(p0: number): [boolean, number];

  /**
  * Same as HAS_ACHIEVEMENT_BEEN_PASSED
  */
  export function scGetHasAchievementBeenPassed(achievement: number): boolean;

  /**
  * Example:
  * for (v_2 = 0; v_2 <= 4; v_2 += 1) {
  * STATS::STAT_CLEAR_SLOT_FOR_RELOAD(v_2);
  * }
  */
  export function statClearSlotForReload(statSlot: number): any;

  export function statLoad(p0: number): boolean;

  export function statSave(p0: number, p1: boolean, p2: number, p3: any): boolean;

  /**
  * STAT_SET_*
  */
  export function _0x5688585E6D563CD8(p0: number): void;

  export function statLoadPending(p0: any): boolean;

  export function statSavePending(): boolean;

  export function statSavePendingOrRequested(): boolean;

  export function statDeleteSlot(p0: any): any;

  export function statSlotIsLoaded(p0: any): boolean;

  export function _0x7F2C4CDF2E82DF4C(p0: any): boolean;

  export function _0xE496A53BA5F50A56(p0: any): any;

  export function statSetBlockSaves(toggle: boolean): void;

  export function _0x6A7F19756F1A9016(): boolean;

  export function _0x7E6946F68A38B74F(p0: any): boolean;

  export function _0xA8733668D1047B51(p0: any): void;

  /**
  * STAT_LOAD_*
  */
  export function _0xECB41AC6AB754401(): boolean;

  export function _0x9B4BD21D69B1E609(): void;

  export function _0xC0E0D686DDFC6EAE(): any;

  /**
  * Example:
  * STATS::STAT_SET_INT(MISC::GET_HASH_KEY("MPPLY_KILLS_PLAYERS"), 1337, true);
  */
  export function statSetInt(statName: number, value: number, save: boolean): boolean;

  /**
  * Example:
  * STATS::STAT_SET_FLOAT(MISC::GET_HASH_KEY("MP0_WEAPON_ACCURACY"), 66.6f, true);
  */
  export function statSetFloat(statName: number, value: number, save: boolean): boolean;

  /**
  * Example:
  * STATS::STAT_SET_BOOL(MISC::GET_HASH_KEY("MPPLY_MELEECHLENGECOMPLETED"), trur, true);
  */
  export function statSetBool(statName: number, value: boolean, save: boolean): boolean;

  /**
  * The following values have been found in the decompiled scripts:
  * "RC_ABI1"
  * "RC_ABI2"
  * "RC_BA1"
  * "RC_BA2"
  * "RC_BA3"
  * "RC_BA3A"
  * "RC_BA3C"
  * "RC_BA4"
  * See NativeDB for reference: http://natives.altv.mp/#/0x17695002FD8B2AE0
  */
  export function statSetGxtLabel(statName: number, value: string, save: boolean): boolean;

  /**
  * 'value' is a structure to a structure, 'numFields' is how many fields there are in said structure (usually 7).
  * The structure looks like this:
  * int year
  * int month
  * int day
  * int hour
  * int minute
  * int second
  * int millisecond
  * The decompiled scripts use TIME::GET_POSIX_TIME to fill this structure.
  */
  export function statSetDate(statName: number, value: any, numFields: number, save: boolean): [boolean, any];

  export function statSetString(statName: number, value: string, save: boolean): boolean;

  export function statSetPos(statName: number, x: number, y: number, z: number, save: boolean): boolean;

  export function statSetMaskedInt(statName: number, p1: any, p2: any, p3: number, save: boolean): boolean;

  export function statSetUserId(statName: number, value: string, save: boolean): boolean;

  /**
  * @param p1 always true.
  */
  export function statSetCurrentPosixTime(statName: number, p1: boolean): boolean;

  /**
  * @param p2 appears to always be -1
  */
  export function statGetInt(statHash: number, outValue: number, p2: number): [boolean, number];

  export function statGetFloat(statHash: number, outValue: number, p2: any): [boolean, number];

  export function statGetBool(statHash: number, outValue: boolean, p2: any): [boolean, boolean];

  export function statGetDate(statHash: number, p1: any, p2: any, p3: any): [boolean, any];

  /**
  * @param p1 is always -1 in the script files
  */
  export function statGetString(statHash: number, p1: number): string;

  export function statGetPos(p0: any, p1: any, p2: any, p3: any, p4: any): [boolean, any, any, any];

  export function statGetMaskedInt(p0: any, p1: any, p2: any, p3: any, p4: any): [boolean, any];

  /**
  * @returns Needs more research. Seems to return "STAT_UNKNOWN" if no such user id exists.
  */
  export function statGetUserId(p0: any): string;

  export function statGetLicensePlate(statName: number): string;

  export function statSetLicensePlate(statName: number, str: string): boolean;

  export function statIncrement(statName: number, value: number): void;

  export function _0x5A556B229A169402(): boolean;

  export function _0xB1D2BB1E1631F5B1(): boolean;

  export function _0xBED9F5693F34ED17(statName: number, p1: number, outValue: number): [boolean, number];

  /**
  * STATS::0x343B27E2(0);
  * STATS::0x343B27E2(1);
  * STATS::0x343B27E2(2);
  * STATS::0x343B27E2(3);
  * STATS::0x343B27E2(4);
  * STATS::0x343B27E2(5);
  * STATS::0x343B27E2(6);
  * STATS::0x343B27E2(7);
  * Identical in ingamehud & maintransition.
  */
  export function _0x26D7399B9587FE89(p0: number): void;

  /**
  * STATS::0xE3247582(0);
  * STATS::0xE3247582(1);
  * STATS::0xE3247582(2);
  * STATS::0xE3247582(3);
  * STATS::0xE3247582(4);
  * STATS::0xE3247582(5);
  * STATS::0xE3247582(6);
  */
  export function _0xA78B8FA58200DA56(p0: number): void;

  export function statGetNumberOfDays(statName: number): number;

  export function statGetNumberOfHours(statName: number): number;

  export function statGetNumberOfMinutes(statName: number): number;

  export function statGetNumberOfSeconds(statName: number): number;

  /**
  * Does not take effect immediately, unfortunately.
  * @param profileSetting seems to only be 936, 937 and 938 in scripts
  */
  export function statSetProfileSettingValue(profileSetting: number, value: number): void;

  /**
  * Needs more research. Possibly used to calculate the "mask" when calling "STAT_SET_BOOL_MASKED"?
  */
  export function statGetPackedBoolMask(p0: number): number;

  /**
  * Needs more research. Possibly used to calculate the "mask" when calling "STAT_SET_MASKED_INT"?
  */
  export function statGetPackedIntMask(p0: number): number;

  export function getPackedBoolStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;

  export function getPackedIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;

  export function getPackedTitleUpdateBoolStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;

  export function getPackedTitleUpdateIntStatKey(index: number, spStat: boolean, charStat: boolean, character: number): number;

  /**
  * Needs more research. Gets the stat name of a masked bool?
  * "_NGPSTAT_BOOL"
  * "_NGTATPSTAT_BOOL"
  * "_NGDLCPSTAT_BOOL"
  * "_DLCBIKEPSTAT_BOOL"
  * "_DLCGUNPSTAT_BOOL"
  * "_GUNTATPSTAT_BOOL"
  * "_DLCSMUGCHARPSTAT_BOOL"
  * "_GANGOPSPSTAT_BOOL"
  * See NativeDB for reference: http://natives.altv.mp/#/0xBA52FF538ED2BC71
  * @param section - values used in the decompiled scripts:
  */
  export function getNgstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;

  /**
  * Needs more research. Gets the stat name of a masked int?
  * "_NGPSTAT_INT"
  * "_MP_NGPSTAT_INT"
  * "_MP_LRPSTAT_INT"
  * "_MP_APAPSTAT_INT"
  * "_MP_LR2PSTAT_INT"
  * "_MP_BIKEPSTAT_INT"
  * "_MP_IMPEXPPSTAT_INT"
  * "_MP_GUNRPSTAT_INT"
  * See NativeDB for reference: http://natives.altv.mp/#/0x2B4CDCA6F07FF3DA
  * @param section - values used in the decompiled scripts:
  */
  export function getNgstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;

  /**
  * @param p2 - Default value? Seems to be -1 most of the time.
  */
  export function statGetBoolMasked(statName: number, mask: number, p2: number): boolean;

  export function statSetBoolMasked(statName: number, value: boolean, mask: number, save: boolean): boolean;

  export function playstatsBackgroundScriptAction(action: string, value: number): void;

  export function playstatsNpcInvite(p0: any): [void, any];

  export function playstatsAwardXp(amount: number, type: number, category: number): void;

  export function playstatsRankUp(rank: number): void;

  export function playstatsStartOfflineMode(): void;

  export function _0xA071E0ED98F91286(p0: any, p1: any): void;

  export function _0xC5BE134EC7BA96A0(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function playstatsMissionStarted(p0: any, p1: any, p2: any, p3: boolean): [void, any];

  export function playstatsMissionOver(p0: any, p1: any, p2: any, p3: boolean, p4: boolean, p5: boolean): [void, any];

  export function playstatsMissionCheckpoint(p0: any, p1: any, p2: any, p3: any): [void, any];

  export function playstatsRandomMissionDone(name: string, p1: any, p2: any, p3: any): void;

  export function playstatsRosBet(amount: number, act: number, player: number, cm: number): void;

  export function playstatsRaceCheckpoint(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  /**
  * PLAYSTATS_*
  */
  export function _0x6DEE77AFF8C21BD1(playerAccountId: number, posixTime: number): [boolean, number, number];

  export function playstatsMatchStarted(p0: any, p1: any, p2: any): void;

  export function playstatsShopItem(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function playstatsCrateDrop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;

  export function playstatsCrateCreated(p0: number, p1: number, p2: number): void;

  export function playstatsHoldUp(p0: any, p1: any, p2: any, p3: any): void;

  export function playstatsImpExp(p0: any, p1: any, p2: any, p3: any): void;

  export function playstatsRaceToPoint(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  export function playstatsAcquiredHiddenPackage(p0: any): void;

  export function playstatsWebsiteVisited(scaleformHash: number, p1: number): void;

  export function playstatsFriendActivity(p0: any, p1: any): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function playstatsOddjobDone(p0: any, p1: any, p2: any): void;

  export function playstatsPropChange(p0: any, p1: any, p2: any, p3: any): void;

  export function playstatsClothChange(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  /**
  * This is a typo made by R*. It's supposed to be called PLAYSTATS_WEAPON_MOD_CHANGE.
  */
  export function playstatsWeaponModeChange(weaponHash: number, componentHashTo: number, componentHashFrom: number): void;

  export function playstatsCheatApplied(cheat: string): void;

  export function _0xF8C54A461C3E11DC(p0: any, p1: any, p2: any, p3: any): [void, any, any, any, any];

  export function _0xF5BB8DAC426A52C0(p0: any, p1: any, p2: any, p3: any): [void, any, any, any, any];

  export function _0xA736CF7FB7C5BFF4(p0: any, p1: any, p2: any, p3: any): [void, any, any, any, any];

  export function _0x14E0B2D1AD1044E0(p0: any, p1: any, p2: any, p3: any): [void, any, any, any, any];

  export function playstatsQuickfixTool(element: number, item: string): void;

  /**
  * longest time being ilde?
  */
  export function playstatsIdleKick(time: number): void;

  /**
  * PLAYSTATS_S*
  */
  export function _0xD1032E482629049E(p0: number): void;

  export function playstatsHeistSaveCheat(hash: number, p1: number): void;

  export function playstatsDirectorMode(p0: any): [void, any];

  export function playstatsAwardBadsport(id: number): void;

  export function playstatsPegasaircraft(modelHash: number): void;

  export function _0x6A60E43998228229(p0: any): void;

  export function _0xBFAFDB5FAAA5C5AB(p0: any): void;

  export function _0x8C9D11605E59D955(p0: any): void;

  export function _0x3DE3AA516FB126A4(p0: any): void;

  export function _0xBAA2F0490E146BE8(p0: any): void;

  export function _0x1A7CE7CD3E653485(p0: any): void;

  export function _0x419615486BBF1956(p0: any): void;

  export function _0x84DFC579C2FC214C(p0: any): void;

  export function _0x0A9C7F36E5D7B683(p0: any): void;

  export function _0x164C5FF663790845(p0: any): void;

  export function _0xEDBF6C9B0D2C65C8(p0: any): void;

  export function _0x6551B1F7F6CD46EA(p0: any): void;

  export function _0x2CD90358F67D0AA8(p0: any): void;

  export function playstatsPiMenuHideSettings(data: any): [void, any];

  export function leaderboardsGetNumberOfColumns(p0: any, p1: any): any;

  export function leaderboardsGetColumnId(p0: any, p1: any, p2: any): any;

  export function leaderboardsGetColumnType(p0: any, p1: any, p2: any): any;

  export function leaderboardsReadClearAll(): any;

  export function leaderboardsReadClear(p0: any, p1: any, p2: any): any;

  export function leaderboardsReadPending(p0: any, p1: any, p2: any): boolean;

  export function leaderboardsReadAnyPending(): boolean;

  export function leaderboardsReadSuccessful(p0: any, p1: any, p2: any): boolean;

  export function leaderboards2ReadFriendsByRow(p0: any, p1: any, p2: any, p3: boolean, p4: any, p5: any): [boolean, any, any];

  export function leaderboards2ReadByHandle(p0: any, p1: any): [boolean, any, any];

  export function leaderboards2ReadByRow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): [boolean, any, any, any, any];

  export function leaderboards2ReadByRank(p0: any, p1: any, p2: any): [boolean, any];

  export function leaderboards2ReadByRadius(p0: any, p1: any, p2: any): [boolean, any, any];

  export function leaderboards2ReadByScoreInt(p0: any, p1: any, p2: any): [boolean, any];

  export function leaderboards2ReadByScoreFloat(p0: any, p1: number, p2: any): [boolean, any];

  export function leaderboards2ReadRankPrediction(p0: any, p1: any, p2: any): [boolean, any, any, any];

  export function leaderboards2ReadByPlatform(p0: any, gamerHandleCsv: string, platformName: string): [boolean, any];

  export function _0xA0F93D5465B3094D(p0: any): [boolean, any];

  export function _0x71B008056E5692D6(): void;

  export function _0x34770B9CE0E03B91(p0: any, p1: any): [boolean, any];

  export function _0x88578F6EC36B4A3A(p0: any, p1: any): any;

  export function _0x38491439B6BA7F7D(p0: any, p1: any): number;

  export function leaderboards2WriteData(p0: any): [boolean, any];

  export function leaderboardsWriteAddColumn(p0: any, p1: any, p2: number): void;

  export function leaderboardsWriteAddColumnLong(p0: any, p1: any, p2: any): void;

  export function leaderboardsCacheDataRow(p0: any): [boolean, any];

  export function leaderboardsClearCacheData(): void;

  export function _0x8EC74CEB042E7CFF(p0: any): void;

  export function leaderboardsGetCacheExists(p0: any): boolean;

  export function leaderboardsGetCacheTime(p0: any): any;

  export function leaderboardsGetCacheNumberOfRows(p0: any): number;

  export function leaderboardsGetCacheDataRow(p0: any, p1: any, p2: any): [boolean, any];

  export function updateStatInt(statHash: number, value: number, p2: number): void;

  export function updateStatFloat(statHash: number, value: number, p2: number): void;

  export function _0x6483C25849031C4F(p0: any, p1: any, p2: any, p3: any): [void, any];

  /**
  * example from completionpercentage_controller.ysc.c4
  * if (STATS::_5EAD2BF6484852E4()) {
  * MISC::SET_BIT(g_17b95._f20df._ff10, 15);
  * STATS::_11FF1C80276097ED(0xe9ec4dd1, 200, 0);
  * }
  */
  export function _0x5EAD2BF6484852E4(): boolean;

  export function _0xC141B8917E0017EC(): void;

  export function _0xB475F27C6A994D65(): void;

  /**
  * Sets profile setting 939
  */
  export function _0xC67E2DA1CBE759E2(): void;

  /**
  * Sets profile setting 933
  */
  export function _0xF1A1803D3476F215(value: number): void;

  /**
  * Sets profile setting 934
  */
  export function _0x38BAAA5DD4C9D19F(value: number): void;

  /**
  * Sets profile setting 935
  */
  export function _0x55384438FC55AD8E(value: number): void;

  export function _0x723C1CE13FBFDB67(p0: any, p1: any): void;

  export function _0x0D01D20616FC73FB(p0: any, p1: any): void;

  export function _0x428EAF89E24F6C36(p0: any, p1: number): void;

  export function _0x047CBED6F6F8B63C(): void;

  export function leaderboards2WriteDataForEventType(p0: any, p1: any): [boolean, any, any];

  export function _0x6F361B8889A792A3(): void;

  export function _0xC847B43F369AC0B5(): void;

  /**
  * @param platformName must be one of the following: ps3, xbox360, ps4, xboxone
  */
  export function statMigrateSave(platformName: string): boolean;

  export function _0x9A62EC95AE10E011(): number;

  export function _0x4C89FE2BDEB3F169(): any;

  export function _0xC6E0E2616A7576BB(): any;

  export function _0x5BD5F255321C4AAF(p0: any): any;

  export function _0xDEAAF77EB3687E97(p0: any, p1: any): [any, any];

  export function statSaveMigrationStatusStart(): boolean;

  export function statGetSaveMigrationStatus(data: any): [number, any];

  export function statSaveMigrationCancel(): boolean;

  export function statGetCancelSaveMigrationStatus(): number;

  export function statSaveMigrationConsumeContentUnlock(contentId: number, srcPlatform: string, srcGamerHandle: string): boolean;

  export function statGetSaveMigrationConsumeContentUnlockStatus(p0: number): [number, number];

  export function _0x98E2BC1CA26287C3(): void;

  export function _0x629526ABA383BCAA(): void;

  export function _0xBE3DB208333D9844(): any;

  export function _0x33D72899E24C3365(p0: any, p1: any): any;

  export function _0xA761D4AC6115623D(): any;

  export function _0xF11F01D98113536A(p0: any): any;

  export function _0x8B9CDBD6C566C38C(): any;

  export function _0xE8853FBCE7D8D0D6(): any;

  export function _0xA943FD1722E11EFD(): any;

  export function _0x84A810B375E69C0E(): any;

  export function _0x9EC8858184CD253A(): any;

  export function _0xBA9749CC94C1FD85(): any;

  export function _0x55A8BECAF28A4EB7(): any;

  export function _0x32CAC93C9DE73D32(): any;

  export function _0xAFF47709F1D5DCCE(): any;

  export function _0x6E0A5253375C4584(): any;

  export function _0x1A8EA222F9C67DBB(p0: any): any;

  export function _0xF9F2922717B819EC(): any;

  export function _0x0B8B7F74BF061C6D(): any;

  /**
  * NETWORK_IS_*
  * @returns This function is hard-coded to always return 1.
  */
  export function _0xB3DA2606774A8E2D(): boolean;

  /**
  * Sets profile setting 866
  * SET_*
  */
  export function setHasContentUnlocksFlags(value: number): void;

  /**
  * Sets profile setting 501
  */
  export function setSaveMigrationTransactionId(transactionId: number): void;

  export function _0x6BC0ACD0673ACEBE(p0: any, p1: any, p2: any): void;

  export function _0x8D8ADB562F09A245(p0: any): void;

  export function _0xD1A1EE3B4FA8E760(p0: any): void;

  export function _0x88087EE1F28024AE(p0: any): void;

  export function _0xFCC228E07217FCAC(p0: any): void;

  export function _0x678F86D8FC040BDB(p0: any): void;

  export function _0xA6F54BB2FFCA35EA(p0: any): void;

  export function _0x5FF2C33B13A02A11(p0: any): void;

  export function _0x282B6739644F4347(p0: any): void;

  export function _0xF06A6F41CB445443(p0: any): void;

  export function _0x7B18DA61F6BAE9D5(p0: any): void;

  export function _0x06EAF70AE066441E(p0: any): void;

  export function _0x14EDA9EE27BD1626(p0: any): void;

  export function _0x930F504203F561C9(p0: any): void;

  export function _0xE3261D791EB44ACB(p0: any): void;

  export function _0x73001E34F85137F8(p0: any): void;

  export function _0x53CAE13E9B426993(p0: any): void;

  export function _0x7D36291161859389(p0: any): void;

  export function playstatsSpentPiCustomLoadout(amount: number): void;

  export function playstatsBuyContraband(data: any): [void, any];

  export function playstatsSellContraband(data: any): [void, any];

  export function playstatsDefendContraband(data: any): [void, any];

  export function playstatsRecoverContraband(data: any): [void, any];

  export function _0x60EEDC12AF66E846(p0: any): void;

  export function _0x3EBEAC6C3F81F6BD(p0: any): void;

  export function _0x96E6D5150DBF1C09(p0: any, p1: any, p2: any): void;

  export function _0xA3C53804BDB68ED2(p0: any, p1: any): void;

  export function _0x6BCCF9948492FD85(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function hiredLimo(p0: any, p1: any): void;

  export function orderedBossVehicle(p0: any, p1: any, vehicleHash: number): void;

  export function _0xD1C9B92BDD3F151D(p0: any, p1: any, p2: any): void;

  export function _0x44919CC079BB60BF(p0: any): void;

  export function _0x7033EEFD9B28088E(p0: any): void;

  export function _0xAA525DFF66BB82F5(p0: any, p1: any, p2: any): void;

  export function _0x015B03EE1C43E6EC(p0: any): void;

  /**
  * Allows CEventNetworkStuntPerformed to be triggered.
  */
  export function playstatsStuntPerformedEventAllowTrigger(): void;

  /**
  * Disallows CEventNetworkStuntPerformed to be triggered.
  */
  export function playstatsStuntPerformedEventDisallowTrigger(): void;

  export function _0xBF371CD2B64212FD(p0: any): void;

  export function _0x7D8BA05688AD64C7(p0: any): void;

  export function _0x0B565B0AAE56A0E8(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function _0x28ECB8AC2F607DB2(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function playstatsChangeMcEmblem(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0xCC25A4553DFBF9EA(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0xF534D94DFA2EAD26(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0xD558BEC0BBA7E8D2(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function playstatsEarnedMcPoints(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function _0x03C2EEBB04B3FB72(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function _0x8989CBD7B4E82534(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function _0x27AA1C973CACFE63(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  export function playstatsCopyRankIntoNewSlot(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  export function playstatsDupeDetection(data: any): [void, any];

  export function playstatsBanAlert(p0: number): void;

  export function playstatsGunrunMissionEnded(data: any): [void, any];

  export function _0xDAF80797FC534BEC(p0: any): void;

  export function _0x316DB59CD14C1774(p0: any): void;

  export function _0x2D7A9B577E72385E(p0: any): void;

  export function _0x830C3A44EB3F2CF9(p0: any): void;

  export function _0xB26F670685631727(p0: any, p1: any): void;

  export function _0xC14BD9F5337219B2(p0: any, p1: any): void;

  export function playstatsStoneHatchetEnd(data: any): [void, any];

  export function playstatsSmugMissionEnded(data: any): [void, any];

  export function playstatsH2FmprepEnd(data: any): [void, any];

  export function playstatsH2InstanceEnd(data: any, p1: any, p2: any, p3: any): [void, any];

  export function playstatsDarMissionEnd(data: any): [void, any];

  export function playstatsEnterSessionPack(data: any): [void, any];

  export function playstatsDroneUsage(p0: number, p1: number, p2: number): void;

  export function playstatsSpectatorWheelSpin(p0: number, p1: number, p2: number, p3: number): void;

  export function playstatsArenaWarSpectator(p0: number, p1: number, p2: number, p3: number, p4: number): void;

  export function playstatsArenaWarsEnded(data: any): [void, any];

  export function playstatsPassiveMode(p0: boolean, p1: number, p2: number, p3: number): void;

  export function playstatsCollectible(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  export function playstatsCasinoStoryMissionEnded(p0: any, p1: any): void;

  export function playstatsCasinoChip(p0: any): void;

  export function playstatsCasinoRoulette(p0: any): void;

  export function playstatsCasinoBlackjack(p0: any): void;

  export function playstatsCasinoThreecardpoker(p0: any): void;

  export function playstatsCasinoSlotmachine(p0: any): void;

  export function playstatsCasinoInsidetrack(p0: any): void;

  export function playstatsCasinoLuckyseven(p0: any): void;

  export function playstatsCasinoRouletteLight(p0: any): void;

  export function playstatsCasinoBlackjackLight(p0: any): void;

  export function playstatsCasinoThreecardpokerLight(p0: any): void;

  export function playstatsCasinoSlotmachineLight(p0: any): void;

  export function playstatsCasinoInsidetrackLight(p0: any): void;

  export function playstatsArcadegame(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function _0x4FCDBD3F0A813C25(p0: any, p1: any): void;

  export function playstatsCasinoMissionEnded(data: any): [void, any];

  export function _0xDFBD93BF2943E29B(p0: any): void;

  export function _0x92FC0EEDFAC04A14(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function _0x0077F15613D36993(p0: any, p1: any, p2: any, p3: any): void;

  export function _0xF9096193DF1F99D4(p0: any): void;

  export function _0x2E0259BABC27A327(p0: any): void;

  export function _0x53C31853EC9531FF(p0: any): void;

  export function _0x810B5FCC52EC7FF0(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x5BF29846C6527C54(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0xC03FAB2C2F92289B(p0: any): void;

  export function _0x5CDAED54B34B0ED0(p0: any): void;

  export function _0x4AFF7E02E485E92B(): void;

  export function _0xDFCDB14317A9B361(p0: any): void;

  export function _0xC1E963C58664B556(p0: any): void;

  export function _0x2FA3173480008493(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0xD4367D310F079DB0(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x4DC416F246A41FC8(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function _0x2818FF6638CB09DE(p0: any): void;

  export function _0xD6CA58B3B53A0F22(p0: any): void;

  export function loadAllObjectsNow(): void;

  export function loadScene(x: number, y: number, z: number): void;

  export function networkUpdateLoadScene(): boolean;

  export function isNetworkLoadingScene(): boolean;

  export function setInteriorActive(interiorID: number, toggle: boolean): void;

  /**
  * Request a model to be loaded into memory.
  */
  export function requestModel(model: number): void;

  export function requestMenuPedModel(model: number): void;

  /**
  * Checks if the specified model has loaded into memory.
  */
  export function hasModelLoaded(model: number): boolean;

  /**
  * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "V_FIB01_cur_elev");
  * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "limbo");
  * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BB, "V_Office_gnd_lifts");
  * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BB, "limbo");
  * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "v_fib01_jan_elev");
  * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "limbo");
  */
  export function requestModelsInRoom(interior: number, roomName: string): void;

  /**
  * Unloads model from memory
  */
  export function setModelAsNoLongerNeeded(model: number): void;

  /**
  * Check if model is in cdimage(rpf)
  */
  export function isModelInCdimage(model: number): boolean;

  /**
  * Returns whether the specified model exists in the game.
  */
  export function isModelValid(model: number): boolean;

  export function isModelAPed(model: number): boolean;

  /**
  * Returns whether the specified model represents a vehicle.
  */
  export function isModelAVehicle(model: number): boolean;

  export function requestCollisionAtCoord(x: number, y: number, z: number): void;

  export function requestCollisionForModel(model: number): void;

  export function hasCollisionForModelLoaded(model: number): boolean;

  /**
  * MulleDK19: Alias of REQUEST_COLLISION_AT_COORD.
  */
  export function requestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function doesAnimDictExist(animDict: string): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function requestAnimDict(animDict: string): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function hasAnimDictLoaded(animDict: string): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function removeAnimDict(animDict: string): void;

  /**
  * Starts loading the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function requestAnimSet(animSet: string): void;

  /**
  * Gets whether the specified animation set has finished loading. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
  * Animation set and clip set are synonymous.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function hasAnimSetLoaded(animSet: string): boolean;

  /**
  * Unloads the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
  * Animation set and clip set are synonymous.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function removeAnimSet(animSet: string): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function requestClipSet(clipSet: string): void;

  /**
  * Alias for HAS_ANIM_SET_LOADED.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function hasClipSetLoaded(clipSet: string): boolean;

  /**
  * Alias for REMOVE_ANIM_SET.
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * Full list of movement clipsets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/movementClipsetsCompact.json
  */
  export function removeClipSet(clipSet: string): void;

  /**
  * Exemple: REQUEST_IPL("TrevorsTrailerTrash");
  * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
  */
  export function requestIpl(iplName: string): void;

  /**
  * Removes an IPL from the map.
  * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
  * Example:
  * C#:
  * Function.Call(Hash.REMOVE_IPL, "trevorstrailertidy");
  * C++:
  * STREAMING::REMOVE_IPL("trevorstrailertidy");
  * @param iplName = Name of IPL you want to remove.
  */
  export function removeIpl(iplName: string): void;

  /**
  * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
  */
  export function isIplActive(iplName: string): boolean;

  export function setStreaming(toggle: boolean): void;

  /**
  * 0 - default
  * 1 - HeistIsland
  */
  export function loadGlobalWaterType(waterType: number): void;

  export function getGlobalWaterType(): number;

  export function setGamePausesForStreaming(toggle: boolean): void;

  export function setReducePedModelBudget(toggle: boolean): void;

  export function setReduceVehicleModelBudget(toggle: boolean): void;

  /**
  * This is a NOP function. It does nothing at all.
  */
  export function setDitchPoliceModels(toggle: boolean): void;

  export function getNumberOfStreamingRequests(): number;

  /**
  * maps script name (thread + 0xD0) by lookup via scriptfx.dat - does nothing when script name is empty
  */
  export function requestPtfxAsset(): void;

  export function hasPtfxAssetLoaded(): boolean;

  export function removePtfxAsset(): void;

  /**
  * From the b678d decompiled scripts:
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("core_snow");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("fm_mission_controler");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("proj_xmas_firework");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_apartment_mp");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_biolab_heist");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_fireworks");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_parachute");
  * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_wheelsmoke");
  * See NativeDB for reference: http://natives.altv.mp/#/0xB80D8756B4668AB6
  */
  export function requestNamedPtfxAsset(fxName: string): void;

  export function hasNamedPtfxAssetLoaded(fxName: string): boolean;

  export function removeNamedPtfxAsset(fxName: string): void;

  export function setVehiclePopulationBudget(p0: number): void;

  /**
  * Control how many new (ambient?) peds will spawn in the game world.
  * Range for p0 seems to be 0-3, where 0 is none and 3 is the normal level.
  */
  export function setPedPopulationBudget(p0: number): void;

  export function clearFocus(): void;

  /**
  * Override the area where the camera will render the terrain.
  * p3, p4 and p5 are usually set to 0.0
  */
  export function setFocusPosAndVel(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;

  /**
  * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
  */
  export function setFocusEntity(entity: number): void;

  export function isEntityFocus(entity: number): boolean;

  export function _0x0811381EF5062FEC(p0: number): void;

  /**
  * Possible p0 values:
  * "prologue"
  * "Prologue_Main"
  */
  export function setMapdatacullboxEnabled(name: string, toggle: boolean): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function _0x4E52E752C76E7E7A(p0: any): void;

  export function formatFocusHeading(x: number, y: number, z: number, rad: number, p4: any, p5: any): any;

  export function _0x1F3F018BC3AFA77C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any, p8: any): any;

  export function _0x0AD9710CEE2F590F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): any;

  export function _0x1EE7D8DF4425F053(p0: any): void;

  export function _0x7D41E9D2D17C5B2D(p0: any): any;

  export function _0x07C313F94746702C(p0: any): any;

  export function _0xBC9823AB80A3DCAC(): any;

  /**
  * `radius` value is usually between `3f` and `7000f` in original 1868 scripts.
  * `p7` is 0, 1, 2, 3 or 4 used in decompiled scripts, 0 is by far the most common.
  * Returns True if success, used only 7 times in decompiled scripts of 1868
  */
  export function newLoadSceneStart(posX: number, posY: number, posZ: number, offsetX: number, offsetY: number, offsetZ: number, radius: number, p7: number): boolean;

  /**
  * if (!sub_8f12("START LOAD SCENE SAFE")) {
  * if (CUTSCENE::GET_CUTSCENE_TIME() > 4178) {
  * STREAMING::_ACCFB4ACF53551B0(1973.845458984375, 3818.447265625, 32.43629837036133, 15.0, 2);
  * sub_8e9e("START LOAD SCENE SAFE", 1);
  * }
  * }
  * (Previously known as STREAMING::_NEW_LOAD_SCENE_START_SAFE)
  */
  export function newLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: any): boolean;

  export function newLoadSceneStop(): void;

  export function isNewLoadSceneActive(): boolean;

  export function isNewLoadSceneLoaded(): boolean;

  export function _0x71E7B2E657449AAD(): any;

  /**
  * // this enum comes directly from R* so don't edit this
  * enum ePlayerSwitchTypes
  * {
  * SWITCH_TYPE_AUTO,
  * SWITCH_TYPE_LONG,
  * SWITCH_TYPE_MEDIUM,
  * SWITCH_TYPE_SHORT
  * };
  * Use GET_IDEAL_PLAYER_SWITCH_TYPE for the best switch type.
  * See NativeDB for reference: http://natives.altv.mp/#/0xFAA23F2CBA159D67
  * @returns Note: DO NOT, use SWITCH_TYPE_LONG with flag 513. It leaves you stuck in the clouds. You'll have to call STOP_PLAYER_SWITCH() to return to your ped.
  */
  export function startPlayerSwitch(from: number, to: number, flags: number, switchType: number): void;

  export function stopPlayerSwitch(): void;

  /**
  * Returns true if the player is currently switching, false otherwise.
  * (When the camera is in the sky moving from Trevor to Franklin for example)
  */
  export function isPlayerSwitchInProgress(): boolean;

  export function getPlayerSwitchType(): number;

  export function getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

  export function getPlayerSwitchState(): number;

  export function getPlayerShortSwitchState(): number;

  /**
  * SET_PLAYER_*
  */
  export function _0x5F2013F8BC24EE69(p0: number): void;

  export function getPlayerSwitchJumpCutIndex(): number;

  export function setPlayerSwitchOutro(cameraCoordX: number, cameraCoordY: number, cameraCoordZ: number, camRotationX: number, camRotationY: number, camRotationZ: number, camFov: number, camFarClip: number, rotationOrder: number): void;

  /**
  * All names can be found in playerswitchestablishingshots.meta
  */
  export function setPlayerSwitchEstablishingShot(name: string): void;

  export function allowPlayerSwitchPan(): void;

  export function allowPlayerSwitchOutro(): void;

  export function allowPlayerSwitchAscent(): void;

  export function allowPlayerSwitchDescent(): void;

  export function isSwitchReadyForDescent(): boolean;

  export function enableSwitchPauseBeforeDescent(): void;

  export function disableSwitchOutroFx(): void;

  /**
  * doesn't act normally when used on mount chilliad
  * 2^n - Enabled Functionality:
  * 0 - Skip camera rotate up
  * 3 - Wait for SET_PLAYER_SWITCH_ESTABLISHING_SHOT / hang at last step. You will still need to run 0x74DE2E8739086740 to exit "properly" and then STOP_PLAYER_SWITCH
  * 6 - Invert Switch Direction (false = out, true = in)
  * 8 - Hang above ped
  * 0: 1 step towards ped
  * 1: 3 steps out from ped
  * 2: 1 step out from ped
  * 3: 1 step towards ped
  * @param flags is a bitflag:
  * @param switchType 0 - 3
  */
  export function switchOutPlayer(ped: number, flags: number, switchType: number): void;

  export function switchInPlayer(ped: number): void;

  /**
  * Probably IS_SWITCH_*
  */
  export function _0x933BBEEB8C61B5F4(): boolean;

  export function getPlayerSwitchInterpOutDuration(): number;

  export function _0x5B48A06DD0E792A5(): any;

  export function isSwitchSkippingDescent(): boolean;

  export function _0x1E9057A74FD73E23(): void;

  export function getLodscale(): number;

  /**
  * This allows you to override "extended distance scaling" setting. Needs to be called each frame.
  * Max scaling seems to be 200.0, normal is 1.0
  * See https://gfycat.com/DetailedHauntingIncatern
  */
  export function overrideLodscaleThisFrame(scaling: number): void;

  export function _0xBED8CA5FF5E04113(p0: number, p1: number, p2: number, p3: number): void;

  export function _0x472397322E92A856(): void;

  export function _0x40AEFD1A244741F2(p0: boolean): void;

  export function _0x03F1A106BDA7DD3E(): void;

  export function _0x95A7DABDDBB78AE7(iplName1: string, iplName2: string): void;

  export function _0x63EB2B972A218CAC(): void;

  export function _0xFB199266061F820A(): boolean;

  export function _0xF4A0DADB70F57FA6(): void;

  export function _0x5068F488DDB54DD8(): any;

  /**
  * This native is used to attribute the SRL that BEGIN_SRL is going to load. This is usually used for 'in-game' cinematics (not cutscenes but camera stuff) instead of SET_FOCUS_POS_AND_VEL because it loads a specific area of the map which is pretty useful when the camera moves from distant areas.
  * For instance, GTA:O opening cutscene.
  * https://pastebin.com/2EeKVeLA : a list of SRL found in srllist.meta
  * https://pastebin.com/zd9XYUWY here is the content of a SRL file opened with codewalker.
  */
  export function prefetchSrl(srl: string): void;

  /**
  * Returns true when the srl from BEGIN_SRL is loaded.
  */
  export function isSrlLoaded(): boolean;

  export function beginSrl(): void;

  /**
  * Clear the current srl and stop rendering the area selected by PREFETCH_SRL and started with BEGIN_SRL.
  */
  export function endSrl(): void;

  export function setSrlTime(p0: number): void;

  export function _0xEF39EE20C537E98C(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function _0xBEB2D9A1D9A8F55A(p0: any, p1: any, p2: any, p3: any): void;

  export function _0x20C6C7E4EB082A7F(p0: boolean): void;

  export function _0xF8155A7F03DDFC8E(p0: any): void;

  export function setHdArea(x: number, y: number, z: number, radius: number): void;

  export function clearHdArea(): void;

  export function initCreatorBudget(): void;

  export function shutdownCreatorBudget(): void;

  export function addModelToCreatorBudget(modelHash: number): boolean;

  export function removeModelFromCreatorBudget(modelHash: number): void;

  /**
  * 0.0 = no memory used
  * 1.0 = all memory used
  * Maximum model memory (as defined in common\data\missioncreatordata.meta) is 100 MiB
  * GET_*
  */
  export function getUsedCreatorModelMemoryPercentage(): number;

  /**
  * Enables the specified island. For more information, see islandhopper.meta
  */
  export function setIslandHopperEnabled(name: string, toggle: boolean): void;

  /**
  * Stand still (?)
  */
  export function taskPause(ped: number, ms: number): void;

  /**
  * Makes the specified ped stand still for (time) milliseconds.
  */
  export function taskStandStill(ped: number, time: number): void;

  /**
  * Definition is wrong. This has 4 parameters (Not sure when they were added. v350 has 2, v678 has 4).
  * flag1 = super jump, flag2 = do nothing if flag1 is false and doubles super jump height if flag1 is true.
  * @param ped Ped ped, bool unused
  * @param unused Ped ped, bool unused, bool flag1, bool flag2
  */
  export function taskJump(ped: number, unused: boolean, p2: any, p3: any): void;

  export function taskCower(ped: number, duration: number): void;

  /**
  * In the scripts, p3 was always -1.
  * Also facingPed can be 0 or -1 so ped will just raise hands up.
  * @param p3 seems to be duration or timeout of turn animation.
  */
  export function taskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;

  export function updateTaskHandsUpDuration(ped: number, duration: number): void;

  /**
  * The given ped will try to open the nearest door to 'seat'.
  * Example: telling the ped to open the door for the driver seat does not necessarily mean it will open the driver door, it may choose to open the passenger door instead if that one is closer.
  */
  export function taskOpenVehicleDoor(ped: number, vehicle: number, timeOut: number, seat: number, speed: number): void;

  /**
  * Usage of seat
  * -1 = driver
  * 0 = passenger
  * 1 = left back seat
  * 2 = right back seat
  * 3 = outside left
  * 4 = outside right
  * @param vehicle normal, 3
  * @param speed 1.0 = walk, 2.0 = run
  * @param flag 1 = normal, 3 = teleport to vehicle, 16 = teleport directly into vehicle
  * @param p6 is always 0
  */
  export function taskEnterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, flag: number, p6: any): void;

  /**
  * 0 = normal exit and closes door.
  * 1 = normal exit and closes door.
  * 16 = teleports outside, door kept closed.
  * 64 = normal exit and closes door, maybe a bit slower animation than 0.
  * 256 = normal exit but does not close the door.
  * 4160 = ped is throwing himself out, even when the vehicle is still.
  * 262144 = ped moves to passenger seat first, then exits normally
  * Others to be tried out: 320, 512, 131072.
  * @param flags from decompiled scripts:
  */
  export function taskLeaveVehicle(ped: number, vehicle: number, flags: number): void;

  export function taskGetOffBoat(ped: number, boat: number): void;

  export function taskSkyDive(ped: number, p1: boolean): void;

  /**
  * Second parameter is unused.
  * second parameter was for jetpack in the early stages of gta and the hard coded code is now removed
  */
  export function taskParachute(ped: number, p1: boolean, p2: boolean): void;

  /**
  * makes ped parachute to coords x y z. Works well with PATHFIND::GET_SAFE_COORD_FOR_PED
  */
  export function taskParachuteToTarget(ped: number, x: number, y: number, z: number): void;

  export function setParachuteTaskTarget(ped: number, x: number, y: number, z: number): void;

  export function setParachuteTaskThrust(ped: number, thrust: number): void;

  /**
  * Only appears twice in the scripts.
  * TASK::TASK_RAPPEL_FROM_HELI(PLAYER::PLAYER_PED_ID(), 0x41200000);
  * TASK::TASK_RAPPEL_FROM_HELI(a_0, 0x41200000);
  */
  export function taskRappelFromHeli(ped: number, p1: number): void;

  /**
  * info about driving modes: HTTP://gtaforums.com/topic/822314-guide-driving-styles/
  * ---------------------------------------------------------------
  * Passing P6 value as floating value didn't throw any errors, though unsure what is it exactly, looks like radius or something.
  * Here the e.g. code I used
  * Function.Call(Hash.TASK_VEHICLE_DRIVE_TO_COORD, Ped, Vehicle, Cor X, Cor Y, Cor Z, 30f, 1f, Vehicle.GetHashCode(), 16777216, 1f, true);
  * @param p10 though, it is mentioned as float, however, I used bool and set it to true, that too worked.
  */
  export function taskVehicleDriveToCoord(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, p6: any, vehicleModel: number, drivingMode: number, stopRange: number, p10: number): void;

  export function taskVehicleDriveToCoordLongrange(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;

  export function taskVehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;

  /**
  * @param timeout always -1
  * @param stoppingRange always 10.0
  * @param persistFollowing always 1
  */
  export function taskFollowToOffsetOfEntity(ped: number, entity: number, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean): void;

  export function taskGoStraightToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;

  export function taskGoStraightToCoordRelativeToEntity(entity1: number, entity2: number, p2: number, p3: number, p4: number, p5: number, p6: any): void;

  /**
  * Makes the specified ped achieve the specified heading.
  * pedHandle: The handle of the ped to assign the task to.
  * @param heading The desired heading.
  * @param timeout The time, in milliseconds, to allow the task to complete. If the task times out, it is cancelled, and the ped will stay at the heading it managed to reach in the time.
  */
  export function taskAchieveHeading(ped: number, heading: number, timeout: number): void;

  /**
  * MulleKD19: Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
  */
  export function taskFlushRoute(): void;

  /**
  * MulleKD19: Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
  * A maximum of 8 points can be added.
  */
  export function taskExtendRoute(x: number, y: number, z: number): void;

  /**
  * MulleKD19: Makes the ped go on the created point route.
  * int: Unknown. Can be 0, 1, 2 or 3.
  * Example:
  * TASK_FLUSH_ROUTE();
  * TASK_EXTEND_ROUTE(0f, 0f, 70f);
  * TASK_EXTEND_ROUTE(10f, 0f, 70f);
  * TASK_EXTEND_ROUTE(10f, 10f, 70f);
  * TASK_FOLLOW_POINT_ROUTE(GET_PLAYER_PED(), 1f, 0);
  * @param ped The ped to give the task to.
  * @param speed The speed to move at in m/s.
  */
  export function taskFollowPointRoute(ped: number, speed: number, unknown: number): void;

  /**
  * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
  * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
  * Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
  * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
  */
  export function taskGoToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void;

  /**
  * Makes the specified ped flee the specified distance from the specified position.
  */
  export function taskSmartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;

  /**
  * Makes a ped run away from another ped (fleeTarget).
  * @param distance = ped will flee this distance.
  * @param fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
  */
  export function taskSmartFleePed(ped: number, fleeTarget: number, distance: number, fleeTime: any, p4: boolean, p5: boolean): void;

  export function taskReactAndFleePed(ped: number, fleeTarget: number): void;

  export function taskShockingEventReact(ped: number, eventHandle: number): void;

  export function taskWanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;

  /**
  * Makes ped walk around the area.
  * set p1 to 10.0f and p2 to 10 if you want the ped to walk anywhere without a duration.
  */
  export function taskWanderStandard(ped: number, p1: number, p2: number): void;

  export function taskWanderSpecific(p0: any, p1: any, p2: any, p3: any): void;

  /**
  * Modes:
  * 0 - ignore heading
  * 1 - park forward
  * 2 - park backwards
  * Depending on the angle of approach, the vehicle can park at the specified heading or at its exact opposite (-180) angle.
  * @param radius seems to define how close the vehicle has to be -after parking- to the position for this task considered completed. If the value is too small, the vehicle will try to park again until it's exactly where it should be. 20.0 Works well but lower values don't, like the radius is measured in centimeters or something.
  */
  export function taskVehiclePark(ped: number, vehicle: number, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean): void;

  /**
  * known "killTypes" are: "AR_stealth_kill_knife" and "AR_stealth_kill_a".
  */
  export function taskStealthKill(killer: number, target: number, actionType: number, p3: number, p4: any): void;

  export function taskPlantBomb(ped: number, x: number, y: number, z: number, heading: number): void;

  /**
  * @param timeout 1.
  */
  export function taskFollowNavMeshToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: boolean, unk: number): void;

  export function taskFollowNavMeshToCoordAdvanced(ped: number, x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;

  export function setPedPathCanUseClimbovers(ped: number, Toggle: boolean): void;

  export function setPedPathCanUseLadders(ped: number, Toggle: boolean): void;

  export function setPedPathCanDropFromHeight(ped: number, Toggle: boolean): void;

  /**
  * Default modifier is 1.0, minimum is 0.0 and maximum is 10.0.
  */
  export function setPedPathClimbCostModifier(ped: number, modifier: number): void;

  export function setPedPathMayEnterWater(ped: number, mayEnterWater: boolean): void;

  export function setPedPathPreferToAvoidWater(ped: number, avoidWater: boolean): void;

  export function setPedPathAvoidFire(ped: number, avoidFire: boolean): void;

  /**
  * Needs to be looped! And yes, it does work and is not a hash collision.
  * Birds will try to reach the given height.
  */
  export function setGlobalMinBirdFlightHeight(height: number): void;

  /**
  * Return value of native is the same as GET_NAVMESH_ROUTE_RESULT
  * Looks like the native returns an int for the path's state:
  * 1 - ???
  * 2 - ???
  * 3 - Finished Generating
  * @returns Looks like the last parameter returns true if the path has been calculated, while the first returns the remaining distance to the end of the path.
  */
  export function getNavmeshRouteDistanceRemaining(ped: number, distanceRemaining: number, isPathReady: boolean): [number, number, boolean];

  /**
  * See GET_NAVMESH_ROUTE_DISTANCE_REMAINING for more details.
  */
  export function getNavmeshRouteResult(ped: number): number;

  /**
  * IS_*
  */
  export function _0x3E38E28A1D80DDF6(ped: number): boolean;

  /**
  * example from fm_mission_controller
  * TASK::TASK_GO_TO_COORD_ANY_MEANS(l_649, sub_f7e86(-1, 0), 1.0, 0, 0, 786603, 0xbf800000);
  */
  export function taskGoToCoordAnyMeans(ped: number, x: number, y: number, z: number, speed: number, p5: any, p6: boolean, walkingStyle: number, p8: number): void;

  export function taskGoToCoordAnyMeansExtraParams(ped: number, x: number, y: number, z: number, speed: number, p5: any, p6: boolean, walkingStyle: number, p8: number, p9: any, p10: any, p11: any, p12: any): void;

  export function taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: number, x: number, y: number, z: number, speed: number, p5: any, p6: boolean, walkingStyle: number, p8: number, p9: any, p10: any, p11: any, p12: any, p13: any): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  * float speed > normal speed is 8.0f
  * ----------------------
  * float speedMultiplier > multiply the playback speed
  * ----------------------
  * int duration: time in millisecond
  * ----------------------
  * -1 _ _ _ _ _ _ _> Default (see flag)
  * 0 _ _ _ _ _ _ _ > Not play at all
  * See NativeDB for reference: http://natives.altv.mp/#/0xEA47FE3719165B94
  */
  export function taskPlayAnim(ped: number, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;

  /**
  * It's similar to TASK_PLAY_ANIM, except the first 6 floats let you specify the initial position and rotation of the task. (Ped gets teleported to the position).
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function taskPlayAnimAdvanced(ped: number, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, animEnterSpeed: number, animExitSpeed: number, duration: number, flag: any, animTime: number, p14: any, p15: any): void;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function stopAnimTask(ped: number, animDictionary: string, animationName: string, p3: number): void;

  /**
  * From fm_mission_controller.c:
  * reserve_network_mission_objects(get_num_reserved_mission_objects(0) + 1);
  * vVar28 = {0.094f, 0.02f, -0.005f};
  * vVar29 = {-92.24f, 63.64f, 150.24f};
  * func_253(&uVar30, joaat("prop_ld_case_01"), Global_1592429.imm_34757[iParam1 <268>], 1, 1, 0, 1);
  * set_entity_lod_dist(net_to_ent(uVar30), 500);
  * attach_entity_to_entity(net_to_ent(uVar30), iParam0, get_ped_bone_index(iParam0, 28422), vVar28, vVar29, 1, 0, 0, 0, 2, 1);
  * Var31.imm_4 = 1065353216;
  * Var31.imm_5 = 1065353216;
  * See NativeDB for reference: http://natives.altv.mp/#/0x126EF75F1E17ABE5
  */
  export function taskScriptedAnimation(ped: number, p1: any, p2: any, p3: any, p4: number, p5: number): [void, any, any, any];

  export function playEntityScriptedAnim(p0: any, p1: any, p2: any, p3: any, p4: number, p5: number): [void, any, any, any];

  /**
  * Looks like p1 may be a flag, still need to do some research, though.
  */
  export function stopAnimPlayback(ped: number, p1: number, p2: boolean): void;

  export function setAnimWeight(p0: any, p1: number, p2: any, p3: any, p4: boolean): void;

  export function setAnimRate(p0: any, p1: number, p2: any, p3: boolean): void;

  export function setAnimLooped(p0: any, p1: boolean, p2: any, p3: boolean): void;

  /**
  * Example from the scripts:
  * TASK::TASK_PLAY_PHONE_GESTURE_ANIMATION(PLAYER::PLAYER_PED_ID(), v_3, v_2, v_4, 0.25, 0.25, 0, 0);
  * =========================================================
  * ^^ No offense, but Idk how that would really help anyone.
  * As for the animDict & animation, they're both store in a global in all 5 scripts. So if anyone would be so kind as to read that global and comment what strings they use. Thanks.
  * Known boneMaskTypes'
  * "BONEMASK_HEADONLY"
  * "BONEMASK_HEAD_NECK_AND_ARMS"
  * "BONEMASK_HEAD_NECK_AND_L_ARM"
  * See NativeDB for reference: http://natives.altv.mp/#/0x8FBB6758B3B3E9EC
  * @param p4 known args - 0.0f, 0.5f, 0.25f
  * @param p5 known args - 0.0f, 0.25f
  * @param p6 known args - 1 if a global if check is passed.
  * @param p7 known args - 1 if a global if check is passed.
  */
  export function taskPlayPhoneGestureAnimation(ped: number, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: boolean, p7: boolean): void;

  export function taskStopPhoneGestureAnimation(ped: number, p1: any): void;

  export function isPlayingPhoneGestureAnim(ped: number): boolean;

  export function getPhoneGestureAnimCurrentTime(ped: number): number;

  export function getPhoneGestureAnimTotalTime(ped: number): number;

  /**
  * Most probably plays a specific animation on vehicle. For example getting chop out of van etc...
  * Here's how its used -
  * TASK::TASK_VEHICLE_PLAY_ANIM(l_325, "rcmnigel1b", "idle_speedo");
  * TASK::TASK_VEHICLE_PLAY_ANIM(l_556[01], "missfra0_chop_drhome", "InCar_GetOutofBack_Speedo");
  * FYI : Speedo is the name of van in which chop was put in the mission.
  */
  export function taskVehiclePlayAnim(vehicle: number, animationSet: string, animationName: string): void;

  /**
  * @param p5 = 0, p6 = 2
  */
  export function taskLookAtCoord(entity: number, x: number, y: number, z: number, duration: number, p5: any, p6: any): void;

  /**
  * param3: duration in ms, use -1 to look forever
  * param4: using 2048 is fine
  * param5: using 3 is fine
  */
  export function taskLookAtEntity(ped: number, lookAt: number, duration: number, unknown1: number, unknown2: number): void;

  /**
  * Not clear what it actually does, but here's how script uses it -
  * if (OBJECT::HAS_PICKUP_BEEN_COLLECTED(...)
  * {
  * if(ENTITY::DOES_ENTITY_EXIST(PLAYER::PLAYER_PED_ID()))
  * {
  * TASK::TASK_CLEAR_LOOK_AT(PLAYER::PLAYER_PED_ID());
  * }
  * ...
  * }
  * See NativeDB for reference: http://natives.altv.mp/#/0x0F804F1DB19B9689
  * @param ped :_2208438012482A1A(l_3ED, 0, 0);
  */
  export function taskClearLookAt(ped: number): void;

  export function openSequenceTask(taskSequenceId: number): [void, number];

  export function closeSequenceTask(taskSequenceId: number): void;

  export function taskPerformSequence(ped: number, taskSequenceId: number): void;

  export function taskPerformSequenceLocally(ped: number, taskSequenceId: number): void;

  export function clearSequenceTask(taskSequenceId: number): [void, number];

  export function setSequenceToRepeat(taskSequenceId: number, repeat: boolean): void;

  /**
  * returned values:
  * 0 to 7 = task that's currently in progress, 0 meaning the first one.
  * -1 no task sequence in progress.
  */
  export function getSequenceProgress(ped: number): number;

  /**
  * Task index enum: https://alloc8or.re/gta5/doc/enums/eTaskTypeIndex.txt
  */
  export function getIsTaskActive(ped: number, taskIndex: number): boolean;

  /**
  * Gets the status of a script-assigned task.
  * @param taskHash https://alloc8or.re/gta5/doc/enums/eScriptTaskHash.txt
  */
  export function getScriptTaskStatus(ped: number, taskHash: number): number;

  /**
  * https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
  */
  export function getActiveVehicleMissionType(vehicle: number): number;

  /**
  * @param flags are the same flags used in TASK_LEAVE_VEHICLE
  */
  export function taskLeaveAnyVehicle(ped: number, p1: number, flags: number): void;

  export function taskAimGunScripted(ped: number, scriptTask: number, p2: boolean, p3: boolean): void;

  export function taskAimGunScriptedWithTarget(p0: any, p1: any, p2: number, p3: number, p4: number, p5: any, p6: boolean, p7: boolean): void;

  export function updateTaskAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;

  export function getClipSetForScriptedGunTask(p0: number): string;

  /**
  * @param duration the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
  */
  export function taskAimGunAtEntity(ped: number, entity: number, duration: number, p3: boolean): void;

  /**
  * @param duration the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
  */
  export function taskTurnPedToFaceEntity(ped: number, entity: number, duration: number): void;

  export function taskAimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;

  /**
  * Firing Pattern Hash Information: https://pastebin.com/Px036isB
  */
  export function taskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: number): void;

  /**
  * Makes the specified ped shuffle to the next vehicle seat.
  * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
  */
  export function taskShuffleToNextVehicleSeat(ped: number, vehicle: number, p2: any): void;

  export function clearPedTasks(ped: number): void;

  export function clearPedSecondaryTask(ped: number): void;

  export function taskEveryoneLeaveVehicle(vehicle: number): void;

  export function taskGotoEntityOffset(ped: number, p1: any, p2: any, x: number, y: number, z: number, duration: number): void;

  export function taskGotoEntityOffsetXy(p0: number, oed: number, duration: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): void;

  /**
  * @param duration in milliseconds
  */
  export function taskTurnPedToFaceCoord(ped: number, x: number, y: number, z: number, duration: number): void;

  /**
  * '1 - brake
  * '3 - brake + reverse
  * '4 - turn left 90 + braking
  * '5 - turn right 90 + braking
  * '6 - brake strong (handbrake?) until time ends
  * '7 - turn left + accelerate
  * '7 - turn right + accelerate
  * '9 - weak acceleration
  * '10 - turn left + restore wheel pos to center in the end
  * See NativeDB for reference: http://natives.altv.mp/#/0xC429DCEEB339E129
  */
  export function taskVehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;

  /**
  * @param missionType https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
  */
  export function taskVehicleMission(driver: number, vehicle: number, vehicleTarget: number, missionType: number, p4: number, p5: any, p6: number, p7: number, DriveAgainstTraffic: boolean): void;

  /**
  * See TASK_VEHICLE_MISSION
  */
  export function taskVehicleMissionPedTarget(ped: number, vehicle: number, pedTarget: number, missionType: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, DriveAgainstTraffic: boolean): void;

  /**
  * See TASK_VEHICLE_MISSION
  */
  export function taskVehicleMissionCoorsTarget(ped: number, vehicle: number, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, DriveAgainstTraffic: boolean): void;

  /**
  * Makes a ped follow the targetVehicle with <minDistance> in between.
  * note: minDistance is ignored if drivingstyle is avoiding traffic, but Rushed is fine.
  * -1 = behind
  * 0 = ahead
  * 1 = left
  * 2 = right
  * 3 = back left
  * 4 = back right
  * if the target is closer than noRoadsDistance, the driver will ignore pathing/roads and follow you directly.
  * Driving Styles guide: gtaforums.com/topic/822314-guide-driving-styles/
  * @param mode The mode defines the relative position to the targetVehicle. The ped will try to position its vehicle there.
  */
  export function taskVehicleEscort(ped: number, vehicle: number, targetVehicle: number, mode: number, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number): void;

  /**
  * Makes a ped in a vehicle follow an entity (ped, vehicle, etc.)
  * @param drivingStyle http://gtaforums.com/topic/822314-guide-driving-styles/
  */
  export function taskVehicleFollow(driver: number, vehicle: number, targetEntity: number, speed: number, drivingStyle: number, minDistance: number): void;

  /**
  * chases targetEnt fast and aggressively
  * --
  * Makes ped (needs to be in vehicle) chase targetEnt.
  */
  export function taskVehicleChase(driver: number, targetEnt: number): void;

  /**
  * 'targetSpeed':  The pilot will dip the nose AS MUCH AS POSSIBLE so as to reach this value AS FAST AS POSSIBLE.  As such, you'll want to modulate it as opposed to calling it via a hard-wired, constant #.
  * 'radius' isn't just "stop within radius of X of target" like with ground vehicles.  In this case, the pilot will fly an entire circle around 'radius' and continue to do so.
  * @param pilot explanatory.
  * @param entityToFollow you can provide a Vehicle entity or a Ped entity, the heli will protect them.
  * @param p4 is unused variable in the function.
  * @param altitude p7 appears to be a FlyingStyle enum.  Still investigating it as of this writing, but playing around with values here appears to result in different -behavior- as opposed to offsetting coordinates, altitude, target speed, etc.
  * @returns NOTE: If the pilot finds enemies, it will engage them until it kills them, but will return to protect the ped/vehicle given shortly thereafter.
  */
  export function taskVehicleHeliProtect(pilot: number, vehicle: number, entityToFollow: number, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number): void;

  /**
  * Flag 1: Aggressive ramming of suspect
  * Flag 2: Ram attempts
  * Flag 32: Stay back from suspect, no tactical contact. Convoy-like.
  * Flag 16: Ramming, seems to be slightly less aggressive than 1-2.
  * @param flag 8: Medium-aggressive boxing tactic with a bit of PIT
  */
  export function setTaskVehicleChaseBehaviorFlag(ped: number, flag: number, set: boolean): void;

  export function setTaskVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;

  /**
  * Ped pilot should be in a heli.
  * NOTE: If the pilot finds enemies, it will engage them, then remain there idle, not continuing to chase the Entity given.
  * @param entityToFollow can be a vehicle or Ped.
  * @param x 5.0, it tries to go below (if the EntityToFollow is a heli or plane)
  * @param y 5.0, it tries to go below (if the EntityToFollow is a heli or plane)
  */
  export function taskHeliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;

  export function taskPlaneChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;

  export function taskPlaneLand(pilot: number, plane: number, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;

  export function _0x6100B3CEFD43452E(p0: any): void;

  /**
  * Seems to stop the engine
  */
  export function clearVehicleTasks(vehicle: number): void;

  /**
  * CLEAR_*
  */
  export function _0x53DDC75BC3AC0A90(vehicle: number): void;

  export function taskPlaneGotoPreciseVtol(ped: number, vehicle: number, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  export function taskSubmarineGotoAndStop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  /**
  * Needs more research.
  * Default value of p13 is -1.0 or 0xBF800000.
  * Default value of p14 is 0.
  * Modified examples from "fm_mission_controller.ysc", line ~203551:
  * TASK::TASK_HELI_MISSION(ped, vehicle, 0, 0, posX, posY, posZ, 4, 1.0, -1.0, -1.0, 10, 10, 5.0, 0);
  * TASK::TASK_HELI_MISSION(ped, vehicle, 0, 0, posX, posY, posZ, 4, 1.0, -1.0, -1.0, 0, ?, 5.0, 4096);
  * int mode seams to set mission type 4 = coords target, 23 = ped target.
  * int 14 set to 32 = ped will land at destination.
  * My findings:
  * See NativeDB for reference: http://natives.altv.mp/#/0xDAD029E187A2BEB4
  */
  export function taskHeliMission(pilot: number, aircraft: number, targetVehicle: number, targetPed: number, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, maxSpeed: number, landingRadius: number, targetHeading: number, unk1: number, unk2: number, unk3: number, landingFlags: number): void;

  export function taskHeliEscortHeli(pilot: number, heli1: number, heli2: number, p3: number, p4: number, p5: number): void;

  /**
  * EXAMPLE USAGE:
  * Fly around target (Precautiously, keeps high altitude):
  * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, 200f);
  * Fly around target (Dangerously, keeps VERY low altitude):
  * Fly directly into target:
  * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -5000f);
  * EXPANDED INFORMATION FOR ADVANCED USAGE (custom pilot)
  * 'physicsSpeed': (THIS IS NOT YOUR ORDINARY SPEED PARAMETER: READ!!)
  * Think of this -first- as a radius value, not a true speed value.  The ACTUAL effective speed of the plane will be that of the maximum speed permissible to successfully fly in a -circle- with a radius of 'physicsSpeed'.  This also means that the plane must complete a circle before it can begin its "bombing run", its straight line pass towards the target.  p9 appears to influence the angle at which a "bombing run" begins, although I can't confirm yet.
  * See NativeDB for reference: http://natives.altv.mp/#/0x23703CD154E83B88
  * @param pilot 500f);
  */
  export function taskPlaneMission(pilot: number, aircraft: number, targetVehicle: number, targetPed: number, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, angularDrag: number, unk: number, targetHeading: number, maxZ: number, minZ: number, p13: any): void;

  export function taskPlaneTaxi(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;

  /**
  * You need to call PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS after TASK_BOAT_MISSION in order for the task to execute.
  * Working example
  * float vehicleMaxSpeed = VEHICLE::_GET_VEHICLE_MAX_SPEED(ENTITY::GET_ENTITY_MODEL(pedVehicle));
  * PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(pedDriver, 1);
  * P8 appears to be driving style flag - see gtaforums.com/topic/822314-guide-driving-styles/ for documentation
  */
  export function taskBoatMission(pedDriver: number, boat: number, p2: any, p3: any, x: number, y: number, z: number, p7: any, maxSpeed: number, drivingStyle: number, p10: number, p11: any): void;

  /**
  * Example:
  * TASK::TASK_DRIVE_BY(l_467[122], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
  * Needs working example. Doesn't seem to do anything.
  * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
  * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
  * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
  */
  export function taskDriveBy(driverPed: number, targetPed: number, targetVehicle: number, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: boolean, firingPattern: number): void;

  /**
  * For p1 & p2 (Ped, Vehicle). I could be wrong, as the only time this native is called in scripts is once and both are 0, but I assume this native will work like SET_MOUNTED_WEAPON_TARGET in which has the same exact amount of parameters and the 1st and last 3 parameters are right and the same for both natives.
  */
  export function setDrivebyTaskTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;

  export function clearDrivebyTaskUnderneathDrivingTask(ped: number): void;

  export function isDrivebyTaskUnderneathDrivingTask(ped: number): boolean;

  /**
  * Forces the ped to use the mounted weapon.
  * Returns false if task is not possible.
  */
  export function controlMountedWeapon(ped: number): boolean;

  /**
  * Note: Look in decompiled scripts and the times that p1 and p2 aren't 0. They are filled with vars. If you look through out that script what other natives those vars are used in, you can tell p1 is a ped and p2 is a vehicle. Which most likely means if you want the mounted weapon to target a ped set targetVehicle to 0 or vice-versa.
  */
  export function setMountedWeaponTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number, p6: any, p7: any): void;

  export function isMountedWeaponTaskUnderneathDrivingTask(ped: number): boolean;

  /**
  * Actually has 3 params, not 2.
  * @param ped Ped
  * @param p1 int (or bool?)
  * @param p2 int
  */
  export function taskUseMobilePhone(ped: number, p1: number, p2: any): void;

  export function taskUseMobilePhoneTimed(ped: number, duration: number): void;

  /**
  * @param p2 tend to be 16, 17 or 1
  * @param p3 to p7 tend to be 0.0
  */
  export function taskChatToPed(ped: number, target: number, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number): void;

  /**
  * -------------------------------
  * Driver = -1
  * Any = -2
  * Left-Rear = 1
  * Right-Front = 0
  * Right-Rear = 2
  * Extra seats = 3-14(This may differ from vehicle type e.g. Firetruck Rear Stand, Ambulance Rear)
  * @param seat Numbers
  */
  export function taskWarpPedIntoVehicle(ped: number, vehicle: number, seat: number): void;

  /**
  * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
  * Player player = PLAYER::PLAYER_ID();
  * PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);
  * //bg is an array of peds
  * TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
  * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
  * Firing Pattern Hash Information: https://pastebin.com/Px036isB
  * @param entity aimedentity;
  */
  export function taskShootAtEntity(entity: number, target: number, duration: number, firingPattern: number): void;

  /**
  * Climbs or vaults the nearest thing.
  */
  export function taskClimb(ped: number, unused: boolean): void;

  export function taskClimbLadder(ped: number, p1: number): void;

  export function taskRappelDownWall(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): void;

  export function _0x9D252648778160DF(p0: any): any;

  /**
  * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
  */
  export function clearPedTasksImmediately(ped: number): void;

  export function taskPerformSequenceFromProgress(p0: any, p1: any, p2: any, p3: any): void;

  /**
  * This native does absolutely nothing, just a nullsub
  */
  export function setNextDesiredMoveState(p0: number): void;

  export function setPedDesiredMoveBlendRatio(ped: number, p1: number): void;

  export function getPedDesiredMoveBlendRatio(ped: number): number;

  /**
  * eg
  * TASK::TASK_GOTO_ENTITY_AIMING(v_2, PLAYER::PLAYER_PED_ID(), 5.0, 25.0);
  * @param ped = Ped you want to perform this task.
  * @param target = the Entity they should aim at.
  * @param distanceToStopAt = distance from the target, where the ped should stop to aim.
  * @param StartAimingDist = distance where the ped should start to aim.
  */
  export function taskGotoEntityAiming(ped: number, target: number, distanceToStopAt: number, StartAimingDist: number): void;

  /**
  * @param p1 is always GET_HASH_KEY("empty") in scripts, for the rare times this is used
  */
  export function taskSetDecisionMaker(ped: number, p1: number): void;

  export function taskSetSphereDefensiveArea(p0: any, p1: number, p2: number, p3: number, p4: number): void;

  export function taskClearDefensiveArea(p0: any): void;

  export function taskPedSlideToCoord(ped: number, x: number, y: number, z: number, heading: number, p5: number): void;

  export function taskPedSlideToCoordHdgRate(ped: number, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;

  export function addCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: any, p5: any, p6: any, p7: boolean): number;

  export function removeCoverPoint(coverpoint: number): void;

  /**
  * Checks if there is a cover point at position
  */
  export function doesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): boolean;

  export function getScriptedCoverPointCoords(coverpoint: number): Vector3;

  /**
  * Makes the specified ped attack the target ped.
  * @param p2 should be 0
  * @param p3 should be 16
  */
  export function taskCombatPed(ped: number, targetPed: number, p2: number, p3: number): void;

  export function taskCombatPedTimed(p0: any, ped: number, p2: number, p3: any): void;

  export function taskSeekCoverFromPos(ped: number, x: number, y: number, z: number, duration: number, p5: boolean): void;

  export function taskSeekCoverFromPed(ped: number, target: number, duration: number, p3: boolean): void;

  export function taskSeekCoverToCoverPoint(p0: any, p1: any, p2: number, p3: number, p4: number, p5: any, p6: boolean): void;

  /**
  * from michael2:
  * appears to be shorter variation
  * from michael3:
  * TASK::TASK_SEEK_COVER_TO_COORDS(ped, -2231.011474609375, 263.6326599121094, 173.60195922851562, -1, 0);
  */
  export function taskSeekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: any, p8: boolean): void;

  export function taskPutPedDirectlyIntoCover(ped: number, x: number, y: number, z: number, timeout: any, p5: boolean, p6: number, p7: boolean, p8: boolean, p9: any, p10: boolean): void;

  export function taskExitCover(p0: any, p1: any, p2: number, p3: number, p4: number): void;

  /**
  * from armenian3.c4
  */
  export function taskPutPedDirectlyIntoMelee(ped: number, meleeTarget: number, p2: number, p3: number, p4: number, p5: boolean): void;

  /**
  * used in sequence task
  * both parameters seems to be always 0
  */
  export function taskToggleDuck(p0: boolean, p1: boolean): void;

  /**
  * From re_prisonvanbreak:
  * TASK::TASK_GUARD_CURRENT_POSITION(l_DD, 35.0, 35.0, 1);
  */
  export function taskGuardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;

  export function taskGuardAssignedDefensiveArea(p0: any, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): void;

  /**
  * @param p0 - Guessing PedID
  * @param p1 XYZ?
  * @param p2 XYZ?
  * @param p4 - ???
  * @param p5 - Maybe the size of sphere from XYZ?
  * @param p6 - ???
  * @param p7 XYZ again?
  * @param p8 XYZ again?
  * @param p10 - Maybe the size of sphere from second XYZ?
  */
  export function taskGuardSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: number, p9: number, p10: number): void;

  /**
  * @param scenarioName example: "WORLD_HUMAN_GUARD_STAND"
  */
  export function taskStandGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;

  export function setDriveTaskCruiseSpeed(driver: number, cruiseSpeed: number): void;

  export function setDriveTaskMaxCruiseSpeed(p0: any, p1: number): void;

  /**
  * This native is used to set the driving style for specific ped.
  * Driving styles id seems to be:
  * 786468
  * 262144
  * 786469
  * http://gtaforums.com/topic/822314-guide-driving-styles/
  */
  export function setDriveTaskDrivingStyle(ped: number, drivingStyle: number): void;

  export function addCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;

  export function removeAllCoverBlockingAreas(): void;

  /**
  * REMOVE_*
  */
  export function _0xFA83CA6776038F64(x: number, y: number, z: number): void;

  export function _0x1F351CF1C6475734(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;

  /**
  * Plays a scenario on a Ped at their current location.
  * ----
  * From "am_hold_up.ysc.c4" at line 339:
  * TASK::TASK_START_SCENARIO_IN_PLACE(NETWORK::NET_TO_PED(l_8D._f4), sub_adf(), 0, 1);
  * WORLD_HUMAN_SMOKING
  * WORLD_HUMAN_HANG_OUT_STREET
  * WORLD_HUMAN_STAND_MOBILE
  * This makes sense, as these are what I commonly see when going by a liquor store.
  * -------------------------
  * See NativeDB for reference: http://natives.altv.mp/#/0x142A02425FF02BD9
  * @param unkDelay - Usually 0 or -1, doesn't seem to have any effect. Might be a delay between sequences.
  * @param playEnterAnim - Plays the "Enter" anim if true, otherwise plays the "Exit" anim. Scenarios that don't have any "Enter" anims won't play if this is set to true.
  * @returns I'm unsure of what the last two parameters are, however sub_adf() randomly returns 1 of 3 scenarios, those being:
  */
  export function taskStartScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;

  /**
  * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
  * Also a few more listed at TASK::TASK_START_SCENARIO_IN_PLACE just above.
  * ---------------
  * The first parameter in every scenario has always been a Ped of some sort. The second like TASK_START_SCENARIO_IN_PLACE is the name of the scenario.
  * The next 4 parameters were harder to decipher. After viewing "hairdo_shop_mp.ysc.c4", and being confused from seeing the case in other scripts, they passed the first three of the arguments as one array from a function, and it looked like it was obviously x, y, and z.
  * I haven't seen the sixth parameter go to or over 360, making me believe that it is rotation, but I really can't confirm anything.
  * I have no idea what the last 3 parameters are, but I'll try to find out.
  * -going on the last 3 parameters, they appear to always be "0, 0, 1"
  * @param duration -1 also used in scrips
  * @param sittingScenario used for sitting scenarios
  * @param teleport teleports ped to position
  */
  export function taskStartScenarioAtPosition(ped: number, scenarioName: string, x: number, y: number, z: number, heading: number, duration: number, sittingScenario: boolean, teleport: boolean): void;

  /**
  * Updated variables
  * An alternative to TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP. Makes the ped walk to the scenario instead.
  */
  export function taskUseNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;

  export function taskUseNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: any): void;

  export function taskUseNearestScenarioChainToCoord(p0: any, p1: number, p2: number, p3: number, p4: number, p5: any): void;

  export function taskUseNearestScenarioChainToCoordWarp(p0: any, p1: number, p2: number, p3: number, p4: number, p5: any): void;

  export function doesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): boolean;

  export function doesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p3: any, p4: number, p5: boolean): [boolean, any];

  export function isScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;

  export function pedHasUseScenarioTask(ped: number): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function playAnimOnRunningScenario(ped: number, animDict: string, animName: string): void;

  /**
  * Occurrences in the b617d scripts:
  * "ARMY_GUARD",
  * "ARMY_HELI",
  * "Cinema_Downtown",
  * "Cinema_Morningwood",
  * "Cinema_Textile",
  * "City_Banks",
  * "Countryside_Banks",
  * "DEALERSHIP",
  * See NativeDB for reference: http://natives.altv.mp/#/0xF9034C136C9E00D3
  */
  export function doesScenarioGroupExist(scenarioGroup: string): boolean;

  /**
  * Occurrences in the b617d scripts:
  * "ARMY_GUARD",
  * "ARMY_HELI",
  * "BLIMP",
  * "Cinema_Downtown",
  * "Cinema_Morningwood",
  * "Cinema_Textile",
  * "City_Banks",
  * "Countryside_Banks",
  * See NativeDB for reference: http://natives.altv.mp/#/0x367A09DED4E05B99
  */
  export function isScenarioGroupEnabled(scenarioGroup: string): boolean;

  /**
  * Occurrences in the b617d scripts: pastebin.com/Tvg2PRHU
  */
  export function setScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;

  export function resetScenarioGroupsEnabled(): void;

  /**
  * Groups found in the scripts used with this native:
  * "AMMUNATION",
  * "QUARRY",
  * "Triathlon_1",
  * "Triathlon_2",
  * "Triathlon_3"
  */
  export function setExclusiveScenarioGroup(scenarioGroup: string): void;

  export function resetExclusiveScenarioGroup(): void;

  /**
  * Occurrences in the b617d scripts:
  * "PROP_HUMAN_SEAT_CHAIR",
  * "WORLD_HUMAN_DRINKING",
  * "WORLD_HUMAN_HANG_OUT_STREET",
  * "WORLD_HUMAN_SMOKING",
  * "WORLD_MOUNTAIN_LION_WANDER",
  * "WORLD_HUMAN_DRINKING"
  * Sometimes used together with MISC::IS_STRING_NULL_OR_EMPTY in the scripts.
  * @param scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.
  */
  export function isScenarioTypeEnabled(scenarioType: string): boolean;

  /**
  * seems to enable/disable specific scenario-types from happening in the game world.
  * Here are some scenario types from the scripts:
  * "WORLD_MOUNTAIN_LION_REST"
  * "WORLD_MOUNTAIN_LION_WANDER"
  * "DRIVE"
  * "WORLD_VEHICLE_POLICE_BIKE"
  * "WORLD_VEHICLE_POLICE_CAR"
  * "WORLD_VEHICLE_POLICE_NEXT_TO_CAR"
  * "WORLD_VEHICLE_DRIVE_SOLO"
  * See NativeDB for reference: http://natives.altv.mp/#/0xEB47EC4E34FB7EE1
  * @param scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.
  */
  export function setScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;

  export function resetScenarioTypesEnabled(): void;

  export function isPedActiveInScenario(ped: number): boolean;

  /**
  * Used only once (am_mp_property_int)
  * Related to CTaskAmbientClips.
  * @param ped was PLAYER_PED_ID()
  */
  export function isPedPlayingBaseClipInScenario(ped: number): boolean;

  /**
  * Appears only in fm_mission_controller and used only 3 times.
  * @param ped was always PLAYER_PED_ID()
  * @param p1 was always true
  * @param p2 was always true
  */
  export function setPedCanPlayAmbientIdles(ped: number, p1: boolean, p2: boolean): void;

  /**
  * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
  */
  export function taskCombatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: any): void;

  /**
  * Despite its name, it only attacks ONE hated target. The one closest hated target.
  * @param p2 seems to be always 0
  */
  export function taskCombatHatedTargetsAroundPed(ped: number, radius: number, p2: number): void;

  export function taskCombatHatedTargetsAroundPedTimed(p0: any, p1: number, p2: any, p3: any): void;

  /**
  * In every case of this native, I've only seen the first parameter passed as 0, although I believe it's a Ped after seeing tasks around it using 0. That's because it's used in a Sequence Task.
  * The last 3 parameters are definitely coordinates after seeing them passed in other scripts, and even being used straight from the player's coordinates.
  * ---
  * It seems that - in the decompiled scripts - this native was used on a ped who was in a vehicle to throw a projectile out the window at the player. This is something any ped will naturally do if they have a throwable and they are doing driveby-combat (although not very accurately).
  * It is possible, however, that this is how SWAT throws smoke grenades at the player when in cover.
  * ----------------------------------------------------
  * The first comment is right it definately is the ped as if you look in script finale_heist2b.c line 59628 in Xbox Scripts atleast you will see task_throw_projectile and the first param is Local_559[2 <14>] if you look above it a little bit line 59622 give_weapon_to_ped uses the same exact param Local_559[2 <14>] and we all know the first param of that native is ped. So it guaranteed has to be ped. 0 just may mean to use your ped by default for some reason.
  */
  export function taskThrowProjectile(ped: number, x: number, y: number, z: number, p4: any, p5: any): void;

  export function taskSwapWeapon(ped: number, p1: boolean): void;

  /**
  * The 2nd param (unused) is not implemented.
  * -----------------------------------------------------------------------
  * The only occurrence I found in a R* script ("assassin_construction.ysc.c4"):
  * if (((v_3 < v_4) && (TASK::GET_SCRIPT_TASK_STATUS(PLAYER::PLAYER_PED_ID(), 0x6a67a5cc) != 1)) && (v_5 > v_3)) {
  * TASK::TASK_RELOAD_WEAPON(PLAYER::PLAYER_PED_ID(), 1);
  * }
  */
  export function taskReloadWeapon(ped: number, unused: boolean): void;

  export function isPedGettingUp(ped: number): boolean;

  /**
  * The last parameter is always 0 for some reason I do not know. The first parameter is the pedestrian who will writhe to the pedestrian in the other parameter. The third paremeter is how long until the Writhe task ends. When the task ends, the ped will die. If set to -1, he will not die automatically, and the task will continue until something causes it to end. This can be being touched by an entity, being shot, explosion, going into ragdoll, having task cleared. Anything that ends the current task will kill the ped at this point.
  * MulleDK19: Third parameter does not appear to be time. The last parameter is not implemented (It's not used, regardless of value).
  * @param time Function.Call(Ped1, Ped2, Time, 0);
  */
  export function taskWrithe(ped: number, target: number, time: number, p3: number, p4: any, p5: any): void;

  /**
  * This native checks if a ped is on the ground, in pain from a (gunshot) wound.
  * Returns `true` if the ped is in writhe, `false` otherwise.
  */
  export function isPedInWrithe(ped: number): boolean;

  /**
  * patrolRoutes found in the b617d scripts:
  * "miss_Ass0",
  * "miss_Ass1",
  * "miss_Ass2",
  * "miss_Ass3",
  * "miss_Ass4",
  * "miss_Ass5",
  * "miss_Ass6",
  * "MISS_PATROL_6",
  * See NativeDB for reference: http://natives.altv.mp/#/0xA36BFB5EE89F3D82
  */
  export function openPatrolRoute(patrolRoute: string): void;

  export function closePatrolRoute(): void;

  /**
  * Example:
  * TASK::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", -193.4915, -2378.864990234375, 10.9719, -193.4915, -2378.864990234375, 10.9719, 3000);
  * p2, p3 and p4 is only one parameter sometimes in the scripts. Most likely a Vector3 hence p2, p3 and p4 are coordinates.
  * Examples:
  * TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_739[73], 0.0, 0.0, 0.0, 0);
  * TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_B0[1744]._f3, l_B0[1744]._f3, 2000);
  * p5, p6 and p7 are for example set to: 1599.0406494140625, 2713.392578125, 44.4309.
  * @param p0 is between 0 and 4 in the scripts.
  * @param p1 is "WORLD_HUMAN_GUARD_STAND" or "StandGuard".
  * @param p8 is an int, often random set to for example: MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000).
  */
  export function addPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;

  export function addPatrolRouteLink(p0: any, p1: any): void;

  export function createPatrolRoute(): void;

  /**
  * From the b617d scripts:
  * TASK::DELETE_PATROL_ROUTE("miss_merc0");
  * TASK::DELETE_PATROL_ROUTE("miss_merc1");
  * TASK::DELETE_PATROL_ROUTE("miss_merc2");
  * TASK::DELETE_PATROL_ROUTE("miss_dock");
  */
  export function deletePatrolRoute(patrolRoute: string): void;

  /**
  * After looking at some scripts the second parameter seems to be an id of some kind. Here are some I found from some R* scripts:
  * "miss_Tower_01" (this went from 01 - 10)
  * "miss_Ass0" (0, 4, 6, 3)
  * "MISS_PATROL_8"
  * I think they're patrol routes, but I'm not sure. And I believe the 3rd parameter is a BOOL, but I can't confirm other than only seeing 0 and 1 being passed.
  * As far as I can see the patrol routes names such as "miss_Ass0" have been defined earlier in the scripts. This leads me to believe we can defined our own new patrol routes by following the same approach.
  * From the scripts
  * TASK::OPEN_PATROL_ROUTE("miss_Ass0");
  * TASK::ADD_PATROL_ROUTE_NODE(0, "WORLD_HUMAN_GUARD_STAND", l_738[03], -139.4076690673828, -993.4732055664062, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
  * See NativeDB for reference: http://natives.altv.mp/#/0xBDA5DF49D080FE4E
  */
  export function taskPatrol(ped: number, p1: string, p2: any, p3: boolean, p4: boolean): void;

  /**
  * Makes the ped run to take cover
  */
  export function taskStayInCover(ped: number): void;

  /**
  * @param x offset in world coords from some entity.
  * @param y offset in world coords from some entity.
  */
  export function addVehicleSubtaskAttackCoord(ped: number, x: number, y: number, z: number): void;

  export function addVehicleSubtaskAttackPed(ped: number, ped2: number): void;

  export function taskVehicleShootAtPed(ped: number, target: number, p2: number): void;

  export function taskVehicleAimAtPed(ped: number, target: number): void;

  export function taskVehicleShootAtCoord(ped: number, x: number, y: number, z: number, p4: number): void;

  export function taskVehicleAimAtCoord(ped: number, x: number, y: number, z: number): void;

  /**
  * Differs from TASK_VEHICLE_DRIVE_TO_COORDS in that it will pick the shortest possible road route without taking one-way streets and other "road laws" into consideration.
  * WARNING:
  * A behaviorFlag value of 0 will result in a clunky, stupid driver!
  * Recommended settings:
  * If you simply want to have your driver move to a fixed location, call it only once, or, when necessary in the event of interruption.
  * If using this to continually follow a Ped who is on foot:  You will need to run this in a tick loop.  Call it in with the Ped's updated coordinates every 20 ticks or so and you will have one hell of a smart, fast-reacting NPC driver -- provided he doesn't get stuck.  If your update frequency is too fast, the Ped may not have enough time to figure his way out of being stuck, and thus, remain stuck.  One way around this would be to implement an "anti-stuck" mechanism, which allows the driver to realize he's stuck, temporarily pause the tick, unstuck, then resume the tick.
  * EDIT:  This is being discussed in more detail at http://gtaforums.com/topic/818504-any-idea-on-how-to-make-peds-clever-and-insanely-fast-c/
  * @param speed = 30.0f,
  * @param behaviorFlag = 156,
  * @param stoppingRange = 5.0f;
  */
  export function taskVehicleGotoNavmesh(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;

  /**
  * movement_speed: mostly 2f, but also 1/1.2f, etc.
  * firing_pattern: ${firing_pattern_full_auto}, 0xC6EE6B4C
  * @param p8 always false
  * @param p9 2f
  * @param p10 0.5f
  * @param p11 true
  * @param flags 0 / 512 / 513, etc.
  * @param p13 0
  */
  export function taskGoToCoordWhileAimingAtCoord(ped: number, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: any, p13: boolean, firingPattern: number): void;

  export function taskGoToCoordWhileAimingAtEntity(p0: any, p1: number, p2: number, p3: number, p4: any, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: any, p11: boolean, p12: any, p13: any): void;

  /**
  * The ped will walk or run towards goToLocation, aiming towards goToLocation or focusLocation (depending on the aimingFlag) and shooting if shootAtEnemies = true to any enemy in his path.
  * If the ped is closer than noRoadsDistance, the ped will ignore pathing/navmesh and go towards goToLocation directly. This could cause the ped to get stuck behind tall walls if the goToLocation is on the other side. To avoid this, use 0.0f and the ped will always use pathing/navmesh to reach his destination.
  * If the speed is set to 0.0f, the ped will just stand there while aiming, if set to 1.0f he will walk while aiming, 2.0f will run while aiming.
  * The ped will stop aiming when he is closer than distanceToStopAt to goToLocation.
  * I still can't figure out what unkTrue is used for. I don't notice any difference if I set it to false but in the decompiled scripts is always true.
  * Note: After some testing, using unkFlag = 16 (0x10) enables the use of sidewalks while moving towards goToLocation.
  * The aimingFlag takes 2 values: 0 to aim at the focusLocation, 1 to aim at where the ped is heading (goToLocation).
  * Example:
  * enum AimFlag
  * See NativeDB for reference: http://natives.altv.mp/#/0xA55547801EB331FC
  * @param unkFlag 0, 1, 5 (101 in binary) and 4097 (4096 + 1 or 1000000000001 in binary). For now, I don't know what behavior enable or disable this possible flag so I leave it at 0.
  */
  export function taskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: number, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, unkTrue: boolean, unkFlag: number, aimingFlag: number, firingPattern: number): void;

  export function taskGoToEntityWhileAimingAtCoord(p0: any, p1: any, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: boolean, p11: any): void;

  /**
  * If true, peds will shoot at Entity till it is dead.
  * If false, peds will just walk till they reach the entity and will cease shooting.
  */
  export function taskGoToEntityWhileAimingAtEntity(ped: number, entityToWalkTo: number, entityToAimAt: number, speed: number, shootatEntity: boolean, p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: number): void;

  /**
  * Makes the ped ragdoll like when falling from a great height
  */
  export function setHighFallTask(ped: number, p1: any, p2: any, p3: any): void;

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  * For a full list of the points, see here: goo.gl/wIH0vn
  * Max number of loaded recordings is 32.
  */
  export function requestWaypointRecording(name: string): void;

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  */
  export function getIsWaypointRecordingLoaded(name: string): boolean;

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  */
  export function removeWaypointRecording(name: string): void;

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  * @param points goo.gl/wIH0vn
  */
  export function waypointRecordingGetNumPoints(name: string, points: number): [boolean, number];

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  * For a full list of the points, see here: goo.gl/wIH0vn
  */
  export function waypointRecordingGetCoord(name: string, point: number, coord: Vector3): [boolean, Vector3];

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  */
  export function waypointRecordingGetSpeedAtPoint(name: string, point: number): number;

  /**
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  * For a full list of the points, see here: goo.gl/wIH0vn
  */
  export function waypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number, point: number): [boolean, number];

  export function taskFollowWaypointRecording(p0: any, p1: any, p2: any, p3: any, p4: any): void;

  export function isWaypointPlaybackGoingOnForPed(p0: any): boolean;

  export function getPedWaypointProgress(ped: number): number;

  export function getPedWaypointDistance(p0: any): number;

  export function setPedWaypointRouteOffset(p0: any, p1: any, p2: any, p3: any): any;

  export function getWaypointDistanceAlongRoute(p0: string, p1: number): number;

  export function waypointPlaybackGetIsPaused(p0: any): boolean;

  export function waypointPlaybackPause(p0: any, p1: boolean, p2: boolean): void;

  export function waypointPlaybackResume(p0: any, p1: boolean, p2: any, p3: any): void;

  export function waypointPlaybackOverrideSpeed(p0: any, p1: number, p2: boolean): void;

  export function waypointPlaybackUseDefaultSpeed(p0: any): void;

  export function useWaypointRecordingAsAssistedMovementRoute(name: string, p1: boolean, p2: number, p3: number): void;

  export function waypointPlaybackStartAimingAtPed(p0: any, p1: any, p2: boolean): void;

  export function waypointPlaybackStartAimingAtCoord(p0: any, p1: number, p2: number, p3: number, p4: boolean): void;

  export function waypointPlaybackStartShootingAtPed(p0: any, p1: any, p2: boolean, p3: any): void;

  export function waypointPlaybackStartShootingAtCoord(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any): void;

  export function waypointPlaybackStopAimingOrShooting(p0: any): void;

  /**
  * Routes: "1_FIBStairs", "2_FIBStairs", "3_FIBStairs", "4_FIBStairs", "5_FIBStairs", "5_TowardsFire", "6a_FIBStairs", "7_FIBStairs", "8_FIBStairs", "Aprtmnt_1", "AssAfterLift", "ATM_1", "coroner2", "coroner_stairs", "f5_jimmy1", "fame1", "family5b", "family5c", "Family5d", "family5d", "FIB_Glass1", "FIB_Glass2", "FIB_Glass3", "finaBroute1A", "finalb1st", "finalB1sta", "finalbround", "finalbroute2", "Hairdresser1", "jan_foyet_ft_door", "Jo_3", "Lemar1", "Lemar2", "mansion_1", "Mansion_1", "pols_1", "pols_2", "pols_3", "pols_4", "pols_5", "pols_6", "pols_7", "pols_8", "Pro_S1", "Pro_S1a", "Pro_S2", "Towards_case", "trev_steps", "tunrs1", "tunrs2", "tunrs3", "Wave01457s"
  */
  export function assistedMovementRequestRoute(route: string): void;

  export function assistedMovementRemoveRoute(route: string): void;

  export function assistedMovementIsRouteLoaded(route: string): boolean;

  export function assistedMovementSetRouteProperties(route: string, props: number): void;

  export function assistedMovementOverrideLoadDistanceThisFrame(dist: number): void;

  /**
  * task_vehicle_follow_waypoint_recording(Ped p0, Vehicle p1, string p2, int p3, int p4, int p5, int p6, float.x p7, float.Y p8, float.Z p9, bool p10, int p11)
  * p10 = bool (repeat?)
  * p11 = 1073741824
  * -khorio
  * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
  * @param WPRecording = Waypoint recording string (found in update\update.rpf\x64\levels\gta5\waypointrec.rpf
  * @param p3 = 786468
  * @param p4 = 0
  * @param p5 = 16
  * @param p6 = -1 (angle?)
  * @param p7 usually v3.zero
  */
  export function taskVehicleFollowWaypointRecording(ped: number, vehicle: number, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number): void;

  export function isWaypointPlaybackGoingOnForVehicle(vehicle: number): boolean;

  export function getVehicleWaypointProgress(vehicle: number): number;

  export function getVehicleWaypointTargetPoint(vehicle: number): number;

  export function vehicleWaypointPlaybackPause(vehicle: number): void;

  export function vehicleWaypointPlaybackResume(vehicle: number): void;

  export function vehicleWaypointPlaybackUseDefaultSpeed(vehicle: number): void;

  export function vehicleWaypointPlaybackOverrideSpeed(vehicle: number, speed: number): void;

  /**
  * I cant believe I have to define this, this is one of the best natives.
  * It makes the ped ignore basically all shocking events around it. Occasionally the ped may comment or gesture, but other than that they just continue their daily activities. This includes shooting and wounding the ped. And - most importantly - they do not flee.
  * Since it is a task, every time the native is called the ped will stop for a moment.
  */
  export function taskSetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

  /**
  * [30/03/2017] ins1de :
  * See FORCE_PED_MOTION_STATE
  * @param p2 always false
  */
  export function taskForceMotionState(ped: number, state: number, p2: boolean): void;

  /**
  * Example:
  * @param task :TASK_MOVE_NETWORK_BY_NAME(PLAYER::PLAYER_PED_ID(), "arm_wrestling_sweep_paired_a_rev3", 0.0f, true, "mini@arm_wrestling", 0);
  */
  export function taskMoveNetworkByName(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;

  /**
  * Example:
  * TASK::TASK_MOVE_NETWORK_ADVANCED_BY_NAME(PLAYER::PLAYER_PED_ID(), "minigame_tattoo_michael_parts", 324.13f, 181.29f, 102.6f, 0.0f, 0.0f, 22.32f, 2, 0, false, 0, 0);
  */
  export function taskMoveNetworkAdvancedByName(ped: number, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any, p9: number, p10: boolean, animDict: string, flags: number): void;

  /**
  * Used only once in the scripts (am_mp_nightclub)
  */
  export function taskMoveNetworkByNameWithInitParams(ped: number, p1: string, data: any, p3: number, p4: boolean, animDict: string, flags: number): [void, any];

  export function _0x29682E2CCF21E9B5(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any): void;

  export function isTaskMoveNetworkActive(ped: number): boolean;

  export function isTaskMoveNetworkReadyForTransition(ped: number): boolean;

  export function requestTaskMoveNetworkStateTransition(ped: number, name: string): boolean;

  /**
  * Used only once in the scripts (fm_mission_controller) like so:
  * TASK::_0xAB13A5565480B6D9(iLocal_3160, "Cutting");
  * SET_*
  */
  export function _0xAB13A5565480B6D9(ped: number, p1: string): any;

  export function getTaskMoveNetworkState(ped: number): string;

  export function _0x8423541E8B3A1589(p0: any, p1: any, p2: any): void;

  /**
  * -LcGamingHD
  * Example: TASK::_D5BB4025AE449A4E(PLAYER::PLAYER_PED_ID(), "Phase", 0.5);
  * @param ped - PLAYER::PLAYER_PED_ID();
  * @param signalName - "Phase", "Wobble", "x_axis","y_axis","introphase","speed".
  * @param value - From what i can see it goes up to 1f (maybe).
  */
  export function setTaskMoveNetworkSignalFloat(ped: number, signalName: string, value: number): void;

  export function setTaskMoveNetworkSignalFloat2(ped: number, signalName: string, value: number): void;

  export function _0x8634CEF2522D987B(ped: number, p1: string, value: number): void;

  export function setTaskMoveNetworkSignalBool(ped: number, signalName: string, value: boolean): void;

  export function getTaskMoveNetworkSignalFloat(ped: number, signalName: string): number;

  export function getTaskMoveNetworkSignalBool(ped: number, signalName: string): boolean;

  export function getTaskMoveNetworkEvent(ped: number, eventName: string): boolean;

  /**
  * @returns Doesn't actually return anything.
  */
  export function _0x0FFB3C758E8C07B9(ped: number, p1: boolean): any;

  export function isMoveBlendRatioStill(ped: number): boolean;

  export function isMoveBlendRatioWalking(ped: number): boolean;

  export function isMoveBlendRatioRunning(ped: number): boolean;

  export function isMoveBlendRatioSprinting(ped: number): boolean;

  export function isPedStill(ped: number): boolean;

  export function isPedWalking(ped: number): boolean;

  export function isPedRunning(ped: number): boolean;

  export function isPedSprinting(ped: number): boolean;

  /**
  * What's strafing?
  */
  export function isPedStrafing(ped: number): boolean;

  /**
  * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
  */
  export function taskSynchronizedScene(ped: number, scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: any): void;

  export function taskAgitatedAction(ped: number, ped2: number): void;

  /**
  * This function is called on peds in vehicles.
  * @param anim animation name
  * @param p2 "sweep_low", "sweep_med" or "sweep_high"
  * @param p3 "sweep_low", "sweep_med" or "sweep_high"
  * @param p5 no idea what it does but is usually -1
  */
  export function taskSweepAimEntity(ped: number, anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: number, p7: number, p8: number): void;

  export function updateTaskSweepAimEntity(ped: number, entity: number): void;

  export function taskSweepAimPosition(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: number, p7: number, p8: number, p9: number, p10: number): [void, any, any, any, any];

  export function updateTaskSweepAimPosition(p0: any, p1: number, p2: number, p3: number): void;

  /**
  * Example from "me_amanda1.ysc.c4":
  * TASK::TASK_ARREST_PED(l_19F  This is a Ped  , PLAYER::PLAYER_PED_ID());
  * Example from "armenian1.ysc.c4":
  * if (!PED::IS_PED_INJURED(l_B18[01])) {
  * TASK::TASK_ARREST_PED(l_B18[01], PLAYER::PLAYER_PED_ID());
  * }
  * I would love to have time to experiment to see if a player Ped can arrest another Ped. Might make for a good cop mod.
  * Looks like only the player can be arrested this way. Peds react and try to arrest you if you task them, but the player charater doesn't do anything if tasked to arrest another ped.
  */
  export function taskArrestPed(ped: number, target: number): void;

  export function isPedRunningArrestTask(ped: number): boolean;

  /**
  * @returns This function is hard-coded to always return 0.
  */
  export function isPedBeingArrested(ped: number): boolean;

  export function uncuffPed(ped: number): void;

  export function isPedCuffed(ped: number): boolean;

  /**
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  * @param p7 when set to true allows you to spawn vehicles under -100 z.
  */
  export function createVehicle(modelHash: number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, p7: boolean): number;

  /**
  * Deletes a vehicle.
  * eg how to use:
  * SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
  * DELETE_VEHICLE(&vehicle);
  * Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.
  * @param vehicle SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
  */
  export function deleteVehicle(vehicle: number): [void, number];

  /**
  * SET_VEHICLE_AL*
  */
  export function _0x7D6F9A3EF26136A0(vehicle: number, toggle: boolean, p2: boolean): void;

  /**
  * SET_VEHICLE_AL*
  */
  export function setVehicleCanBeLockedOn(vehicle: number, canBeLockedOn: boolean, unk: boolean): void;

  /**
  * Makes the vehicle accept no passengers.
  */
  export function setVehicleAllowNoPassengersLockon(veh: number, toggle: boolean): void;

  /**
  * GET_VEHICLE_*
  */
  export function _0xE6B0E8CFC3633BF0(vehicle: number): number;

  export function _0x6EAAEFC76ACC311F(p0: any): any;

  export function _0x407DC5E97DB1A4D3(p0: any, p1: any): void;

  export function isVehicleModel(vehicle: number, model: number): boolean;

  export function doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;

  /**
  * Creates a script vehicle generator at the given coordinates. Most parameters after the model hash are unknown.
  * Parameters:
  * @param x Generator position
  * @param y Generator position
  * @param z GET_ENTITY_COORDS(PLAYER_PED_ID(), 0);    CREATE_SCRIPT_VEHICLE_GENERATOR(coords.x, coords.y, coords.z, 1.0f, 5.0f, 3.0f, GET_HASH_KEY("adder"), -1. -1, -1, -1, -1, true, false, false, false, true, -1);
  * @param heading - Generator heading
  * @param p4 - Unknown (always 5.0)
  * @param p5 - Unknown (always 3.0)
  * @param modelHash - Vehicle model hash
  * @param p7 Unknown (always
  * @param p11 - Unknown (usually TRUE, only one instance of FALSE)
  * @param p12 Unknown (always FALSE)
  * @param p14 - Unknown (usally FALSE, only two instances of TRUE)
  * @param p15 - Unknown (always TRUE)
  * @param p16 - Unknown (always -1)
  */
  export function createScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: number, p7: number, p8: number, p9: number, p10: number, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: number): number;

  export function deleteScriptVehicleGenerator(vehicleGenerator: number): void;

  /**
  * Only called once in the decompiled scripts. Presumably activates the specified generator.
  */
  export function setScriptVehicleGenerator(vehicleGenerator: number, enabled: boolean): void;

  export function setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;

  export function setAllVehicleGeneratorsActive(): void;

  export function setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;

  /**
  * Related to car generators & CPlayerSwitchMgrLong
  * SET_VEHICLE_*
  * SET_VEHICLE_GENERATORS_EXPECTED_GAMEPLAY_PT ?
  */
  export function _0x9A75585FB2E54FAD(x: number, y: number, z: number, radius: number): void;

  /**
  * CLEAR_VEHICLE_*
  */
  export function _0x0A436B8643716D14(): void;

  /**
  * @param vehicle This has an additional param(Vehicle vehicle, float p1) which is always set to 5.0f in the b944 scripts.
  * @returns Sets a vehicle on the ground on all wheels.  Returns whether or not the operation was successful.
  */
  export function setVehicleOnGroundProperly(vehicle: number, p1: number): boolean;

  export function setVehicleUseCutsceneWheelCompression(p0: number, p1: boolean, p2: boolean, p3: boolean): any;

  export function isVehicleStuckOnRoof(vehicle: number): boolean;

  export function addVehicleUpsidedownCheck(vehicle: number): void;

  export function removeVehicleUpsidedownCheck(vehicle: number): void;

  /**
  * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
  * @returns For some vehicles it returns true if the current speed is <= 0.00039999999.
  */
  export function isVehicleStopped(vehicle: number): boolean;

  /**
  * @param vehicle 1) to also check for the driver
  */
  export function getVehicleNumberOfPassengers(vehicle: number): number;

  export function getVehicleMaxNumberOfPassengers(vehicle: number): number;

  /**
  * Returns max number of passengers (including the driver) for the specified vehicle model.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelNumberOfSeats(modelHash: number): number;

  export function isSeatWarpOnly(vehicle: number, seatIndex: number): boolean;

  export function isTurretSeat(vehicle: number, seatIndex: number): boolean;

  /**
  * Returns true if the vehicle has the FLAG_ALLOWS_RAPPEL flag set.
  */
  export function doesVehicleAllowRappel(vehicle: number): boolean;

  /**
  * Use this native inside a looped function.
  * Values:
  * - `0.0` = no vehicles on streets
  * - `1.0` = normal vehicles on streets
  */
  export function setVehicleDensityMultiplierThisFrame(multiplier: number): void;

  export function setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;

  export function setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;

  export function setDisableRandomTrainsThisFrame(toggle: boolean): void;

  export function setAmbientVehicleRangeMultiplierThisFrame(value: number): void;

  export function setFarDrawVehicles(toggle: boolean): void;

  export function setNumberOfParkedVehicles(value: number): void;

  /**
  * 0 - CARLOCK_NONE
  * 1 - CARLOCK_UNLOCKED
  * 2 - CARLOCK_LOCKED (locked)
  * 3 - CARLOCK_LOCKOUT_PLAYER_ONLY
  * 4 - CARLOCK_LOCKED_PLAYER_INSIDE (can get in, can't leave)
  * (maybe, these are leftovers from GTA:VC)
  * 5 - CARLOCK_LOCKED_INITIALLY
  * 6 - CARLOCK_FORCE_SHUT_DOORS
  * 7 - CARLOCK_LOCKED_BUT_CAN_BE_DAMAGED
  * See NativeDB for reference: http://natives.altv.mp/#/0xB664292EAECF7FA6
  */
  export function setVehicleDoorsLocked(vehicle: number, doorLockStatus: number): void;

  /**
  * @param destroyType is 1 for opens on damage, 2 for breaks on damage.
  */
  export function setVehicleDoorDestroyType(vehicle: number, doorIndex: number, destroyType: number): void;

  /**
  * if set to true, prevents vehicle sirens from having sound, leaving only the lights.
  */
  export function setVehicleHasMutedSirens(vehicle: number, toggle: boolean): void;

  export function setVehicleDoorsLockedForPlayer(vehicle: number, player: number, toggle: boolean): void;

  export function getVehicleDoorsLockedForPlayer(vehicle: number, player: number): boolean;

  /**
  * After some analysis, I've decided that these are what the parameters are.
  * We can see this being used in R* scripts such as "am_mp_property_int.ysc.c4":
  * l_11A1 = PED::GET_VEHICLE_PED_IS_IN(PLAYER::PLAYER_PED_ID(), 1);
  * ...
  * @param vehicle :SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS(l_11A1, 1);
  */
  export function setVehicleDoorsLockedForAllPlayers(vehicle: number, toggle: boolean): void;

  export function setVehicleDoorsLockedForNonScriptPlayers(vehicle: number, toggle: boolean): void;

  export function setVehicleDoorsLockedForTeam(vehicle: number, team: number, toggle: boolean): void;

  export function setVehicleDoorsLockedForUnk(vehicle: number, toggle: boolean): void;

  /**
  * SET_VEHICLE_*
  */
  export function _0x76D26A22750E849E(vehicle: number): void;

  /**
  * Explodes a selected vehicle.
  * BOOL isAudible = If explosion makes a sound.
  * BOOL isInvisible = If the explosion is invisible or not.
  * First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.
  * @param vehicle vehicle = Vehicle you want to explode.
  */
  export function explodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean): void;

  /**
  * Tested on the player's current vehicle. Unless you kill the driver, the vehicle doesn't loose control, however, if enabled, explodeOnImpact is still active. The moment you crash, boom.
  */
  export function setVehicleOutOfControl(vehicle: number, killDriver: boolean, explodeOnImpact: boolean): void;

  export function setVehicleTimedExplosion(vehicle: number, ped: number, toggle: boolean): void;

  export function addVehiclePhoneExplosiveDevice(vehicle: number): void;

  export function clearVehiclePhoneExplosiveDevice(): void;

  export function hasVehiclePhoneExplosiveDevice(): boolean;

  export function detonateVehiclePhoneExplosiveDevice(): void;

  /**
  * This is not tested - it's just an assumption.
  * - Nac
  * Doesn't seem to work.  I'll try with an int instead. --JT
  * Read the scripts, im dumpass.
  * if (!VEHICLE::IS_TAXI_LIGHT_ON(l_115)) {
  * VEHICLE::SET_TAXI_LIGHTS(l_115, 1);
  * }
  */
  export function setTaxiLights(vehicle: number, state: boolean): void;

  export function isTaxiLightOn(vehicle: number): boolean;

  /**
  * Full list of garages by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/garages.json
  * @param garageName example "Michael - Beverly Hills"
  */
  export function isVehicleInGarageArea(garageName: string, vehicle: number): boolean;

  /**
  * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
  * -------------------------------------------------------------------------
  * Use this to get the number of color indices: pastebin.com/RQEeqTSM
  * Note: minimum color index is 0, maximum color index is (numColorIndices - 1)
  * Full list of vehicle colors by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleColors.json
  * @param colorPrimary & colorSecondary are the paint index for the vehicle.
  */
  export function setVehicleColours(vehicle: number, colorPrimary: number, colorSecondary: number): void;

  /**
  * It switch to highbeam when p1 is set to true.
  */
  export function setVehicleFullbeam(vehicle: number, toggle: boolean): void;

  /**
  * @param toggle (toggle) was always 1 (true) except in one case in the b678 scripts.
  */
  export function setVehicleIsRacing(vehicle: number, toggle: boolean): void;

  /**
  * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
  */
  export function setVehicleCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): void;

  export function getVehicleCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): [void, number, number, number];

  export function clearVehicleCustomPrimaryColour(vehicle: number): void;

  export function getIsVehiclePrimaryColourCustom(vehicle: number): boolean;

  /**
  * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
  */
  export function setVehicleCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): void;

  export function getVehicleCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): [void, number, number, number];

  export function clearVehicleCustomSecondaryColour(vehicle: number): void;

  /**
  * Check if Vehicle Secondary is avaliable for customize
  */
  export function getIsVehicleSecondaryColourCustom(vehicle: number): boolean;

  /**
  * formerly known as _SET_VEHICLE_PAINT_FADE
  * The parameter fade is a value from 0-1, where 0 is fresh paint.
  */
  export function setVehicleEnveffScale(vehicle: number, fade: number): void;

  /**
  * formerly known as _GET_VEHICLE_PAINT_FADE
  * The result is a value from 0-1, where 0 is fresh paint.
  */
  export function getVehicleEnveffScale(vehicle: number): number;

  /**
  * Hardcoded to not work in multiplayer.
  */
  export function setCanResprayVehicle(vehicle: number, state: boolean): void;

  export function _0xAB31EF4DE6800CE9(p0: any, p1: any): void;

  /**
  * Sets a value that appears to affect door opening behavior when damaged.
  * SET_*
  */
  export function _0x1B212B26DD3C04DF(vehicle: number, toggle: boolean): void;

  export function forceSubmarineSurfaceMode(vehicle: number, toggle: boolean): void;

  export function _0xC67DB108A9ADE3BE(p0: any, p1: any): void;

  export function setSubmarineCrushDepths(vehicle: number, p1: boolean, depth1: number, depth2: number, depth3: number): void;

  export function getSubmarineIsBelowFirstCrushDepth(submarine: number): boolean;

  export function getSubmarineCrushDepthWarningState(submarine: number): number;

  export function _0xED5EDE9E676643C9(p0: any, p1: any): void;

  export function setBoatAnchor(vehicle: number, toggle: boolean): void;

  export function canAnchorBoatHere(vehicle: number): boolean;

  export function canAnchorBoatHere2(vehicle: number): boolean;

  export function setBoatFrozenWhenAnchored(vehicle: number, toggle: boolean): void;

  /**
  * No observed effect.
  */
  export function _0xB28B1FE5BFADD7F5(vehicle: number, p1: boolean): void;

  export function setBoatMovementResistance(vehicle: number, value: number): void;

  /**
  * IS_*
  */
  export function isBoatAnchoredAndFrozen(vehicle: number): boolean;

  export function setBoatSinksWhenWrecked(vehicle: number, toggle: boolean): void;

  export function setBoatIsSinking(p0: any): void;

  /**
  * Activate siren on vehicle (Only works if the vehicle has a siren).
  */
  export function setVehicleSiren(vehicle: number, toggle: boolean): void;

  export function isVehicleSirenOn(vehicle: number): boolean;

  export function isVehicleSirenAudioOn(vehicle: number): boolean;

  /**
  * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
  */
  export function setVehicleStrong(vehicle: number, toggle: boolean): void;

  export function removeVehicleStuckCheck(vehicle: number): void;

  export function getVehicleColours(vehicle: number, colorPrimary: number, colorSecondary: number): [void, number, number];

  /**
  * Has an additional BOOL parameter since version [???].
  * Check if a vehicle seat is free.
  * -1 being the driver seat.
  * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
  */
  export function isVehicleSeatFree(vehicle: number, seatIndex: number, p2: boolean): boolean;

  /**
  * If there is no ped in the seat, and the game considers the vehicle as ambient population, this will create a random occupant ped in the seat, which may be cleaned up by the game fairly soon if not marked as script-owned mission entity.
  * Seat indexes:
  * -1 = Driver
  * 0 = Front Right Passenger
  * 1 = Back Left Passenger
  * 2 = Back Right Passenger
  * 3 = Further Back Left Passenger (vehicles > 4 seats)
  * 4 = Further Back Right Passenger (vehicles > 4 seats)
  * etc.
  * If p2 is true it uses a different GetOccupant function.
  */
  export function getPedInVehicleSeat(vehicle: number, seatIndex: number, p2: boolean): number;

  export function getLastPedInVehicleSeat(vehicle: number, seatIndex: number): number;

  export function getVehicleLightsState(vehicle: number, lightsOn: boolean, highbeamsOn: boolean): [boolean, boolean, boolean];

  /**
  * '0 = wheel_lf / bike, plane or jet front
  * '1 = wheel_rf
  * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
  * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
  * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
  * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
  * '45 = 6 wheels trailer mid wheel left
  * '47 = 6 wheels trailer mid wheel right
  * @param wheelID used for 4 wheelers seem to be (0, 1, 4, 5)
  * @param completely - is to check if tire completely gone from rim.
  */
  export function isVehicleTyreBurst(vehicle: number, wheelID: number, completely: boolean): boolean;

  /**
  * SCALE: Setting the speed to 30 would result in a speed of roughly 60mph, according to speedometer.
  * You can convert meters/s to mph here:
  * http://www.calculateme.com/Speed/MetersperSecond/ToMilesperHour.htm
  * @param speed is in meters per second
  */
  export function setVehicleForwardSpeed(vehicle: number, speed: number): void;

  export function _0x6501129C9E0FFA05(p0: any, p1: any): void;

  /**
  * This native makes the vehicle stop immediately, as happens when we enter a MP garage.
  * . distance defines how far it will travel until stopping. Garage doors use 3.0.
  * . If killEngine is set to 1, you cannot resume driving the vehicle once it stops. This looks like is a bitmapped integer.
  */
  export function bringVehicleToHalt(vehicle: number, distance: number, duration: number, unknown: boolean): void;

  export function _0xDCE97BDF8A0EABC8(p0: any, p1: any): void;

  /**
  * Sets some bit of vehicle.
  * _SET_VEHICLE_*
  */
  export function _0x9849DE24FCF23CCC(vehicle: number, toggle: boolean): void;

  export function _0x8664170EF165C4A6(p0: any, p1: any): void;

  export function _0x7C06330BFDDA182E(p0: any): void;

  /**
  * Checks for value in vehicle
  * _IS_VEHICLE_*
  */
  export function _0xC69BB1D832A710EF(vehicle: number): boolean;

  /**
  * 0.0 = Lowest 1.0 = Highest. This is best to be used if you wanna pick-up a car since un-realistically on GTA V forklifts can't pick up much of anything due to vehicle mass. If you put this under a car then set it above 0.0 to a 'lifted-value' it will raise the car with no issue lol
  */
  export function setForkliftForkHeight(vehicle: number, height: number): void;

  export function isEntityAttachedToHandlerFrame(vehicle: number, entity: number): boolean;

  export function _0x62CA17B74C435651(vehicle: number): boolean;

  /**
  * Finds the vehicle that is carrying this entity with a handler frame.
  * @returns The model of the entity must be prop_contr_03b_ld or the function will return 0.
  */
  export function findVehicleCarryingThisEntity(entity: number): number;

  export function isHandlerFrameAboveContainer(vehicle: number, entity: number): boolean;

  export function _0x6A98C2ECF57FA5D4(vehicle: number, entity: number): void;

  export function detachContainerFromHandlerFrame(vehicle: number): void;

  export function _0x8AA9180DE2FEDD45(vehicle: number, p1: boolean): void;

  export function setBoatDisableAvoidance(vehicle: number, p1: boolean): void;

  export function isHeliLandingAreaBlocked(vehicle: number): boolean;

  /**
  * Used on helicopters and blimps during the CTaskVehicleLand task. Sets a value on the task to 10f
  */
  export function _0x107A473D7A6647A9(vehicle: number): void;

  export function setHeliTurbulenceScalar(vehicle: number, p1: number): void;

  /**
  * Initially used in Max Payne 3, that's why we know the name.
  */
  export function setCarBootOpen(vehicle: number): void;

  /**
  * to burst all tyres type it 8 times where p1 = 0 to 7.
  * '0 = wheel_lf / bike, plane or jet front
  * '1 = wheel_rf
  * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
  * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
  * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
  * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
  * '45 = 6 wheels trailer mid wheel left
  * '47 = 6 wheels trailer mid wheel right
  * @param p3 seems to be how much damage it has taken. 0 doesn't deflate them, 1000 completely deflates them.
  */
  export function setVehicleTyreBurst(vehicle: number, index: number, onRim: boolean, p3: number): void;

  /**
  * Closes all doors of a vehicle:
  */
  export function setVehicleDoorsShut(vehicle: number, closeInstantly: boolean): void;

  /**
  * Allows you to toggle bulletproof tires.
  */
  export function setVehicleTyresCanBurst(vehicle: number, toggle: boolean): void;

  export function getVehicleTyresCanBurst(vehicle: number): boolean;

  export function setVehicleWheelsCanBreak(vehicle: number, enabled: boolean): void;

  /**
  * 0 = Front Left Door
  * 1 = Front Right Door
  * 2 = Back Left Door
  * 3 = Back Right Door
  * 4 = Hood
  * 5 = Trunk
  * 6 = Back
  * 7 = Back2
  */
  export function setVehicleDoorOpen(vehicle: number, doorIndex: number, loose: boolean, openInstantly: boolean): void;

  export function _0x3B458DDB57038F08(p0: any, p1: any, p2: any): void;

  export function _0xA247F9EF01D8082E(p0: any): void;

  /**
  * 0 = Front Right Window
  * 1 = Front Left Window
  * 2 = Back Right Window
  * 3 = Back Left Window
  * 4 = Unknown
  * 5 = Unknown
  * 6 = Windscreen
  * 7 = Rear Windscreen
  */
  export function removeVehicleWindow(vehicle: number, windowIndex: number): void;

  /**
  * Roll down all the windows of the vehicle passed through the first parameter.
  */
  export function rollDownWindows(vehicle: number): void;

  /**
  * 0 = Front Right Window
  * 1 = Front Left Window
  * 2 = Back Right Window
  * 3 = Back Left Window
  */
  export function rollDownWindow(vehicle: number, windowIndex: number): void;

  /**
  * Window indexes:
  * 0 = Front Left Window
  * 1 = Front Right Window
  * 2 = Back Left Window
  * 3 = Back Right Window
  */
  export function rollUpWindow(vehicle: number, windowIndex: number): void;

  /**
  * `index` = 0 to 13
  * 0 = front right window
  * 1 = front left window
  * 2 = rear right window
  * 3 = rear left window
  * 4 = unsure
  * 5 = unsure
  * 6 = windowscreen
  * 7 = rear windowscreen
  * See NativeDB for reference: http://natives.altv.mp/#/0x9E5B5E4D2CCD2259
  */
  export function smashVehicleWindow(vehicle: number, index: number): void;

  /**
  * `index` = 0 to 13
  * 0 = front right window
  * 1 = front left window
  * 2 = rear right window
  * 3 = rear left window
  * 4 = unsure
  * 5 = unsure
  * 6 = windowscreen
  * 7 = rear windowscreen
  * See NativeDB for reference: http://natives.altv.mp/#/0x772282EBEB95E682
  */
  export function fixVehicleWindow(vehicle: number, index: number): void;

  /**
  * Detaches the vehicle's windscreen.
  * For further information, see : gtaforums.com/topic/859570-glass/#entry1068894566
  * Old name: _DETACH_VEHICLE_WINDSCREEN
  */
  export function popOutVehicleWindscreen(vehicle: number): void;

  export function ejectJb700Roof(vehicle: number, x: number, y: number, z: number): void;

  /**
  * set's if the vehicle has lights or not.
  * not an on off toggle.
  * p1 = 1 ;vehicle doesn't have lights, always off
  * p1 = 2 ;vehicle has always on lights
  * p1 = 3 ;or even larger like 4,5,... normal lights like =1
  * note1: when using =2 on day it's lowbeam,highbeam
  * but at night it's lowbeam,lowbeam,highbeam
  * note2: when using =0 it's affected by day or night for highbeams don't exist in daytime.
  * @param state = 0 ;vehicle normal lights, off then lowbeams, then highbeams
  */
  export function setVehicleLights(vehicle: number, state: number): void;

  export function setVehicleUsePlayerLightSettings(vehicle: number, toggle: boolean): void;

  /**
  * Determines how vehicle lights behave when toggled.
  * 0 = Default (Lights can be toggled between off, normal and high beams)
  * 1 = Lights Disabled (Lights are fully disabled, cannot be toggled)
  * 2 = Always On (Lights can be toggled between normal and high beams)
  * @param p1 can be either 0, 1 or 2.
  */
  export function setVehicleLightsMode(vehicle: number, p1: number): void;

  export function setVehicleAlarm(vehicle: number, state: boolean): void;

  export function startVehicleAlarm(vehicle: number): void;

  export function isVehicleAlarmActivated(vehicle: number): boolean;

  export function setVehicleInteriorlight(vehicle: number, toggle: boolean): void;

  /**
  * Sets some bit of vehicle
  * _SET_VEHICLE_*
  */
  export function _0x8821196D91FA2DE5(vehicle: number, toggle: boolean): void;

  /**
  * this value isn't capped afaik.
  * multiplier = 0.0 no lights
  * multiplier = 1.0 default game value
  * @param multiplier = brightness of head lights.
  */
  export function setVehicleLightMultiplier(vehicle: number, multiplier: number): void;

  export function attachVehicleToTrailer(vehicle: number, trailer: number, radius: number): void;

  /**
  * This is the proper way of attaching vehicles to the car carrier, it's what Rockstar uses. Video Demo: https://www.youtube.com/watch?v=2lVEIzf7bgo
  */
  export function attachVehicleOnToTrailer(vehicle: number, trailer: number, offsetX: number, offsetY: number, offsetZ: number, coordsX: number, coordsY: number, coordsZ: number, rotationX: number, rotationY: number, rotationZ: number, disableCollisions: number): void;

  export function stabiliseEntityAttachedToHeli(vehicle: number, entity: number, p2: number): void;

  export function detachVehicleFromTrailer(vehicle: number): void;

  export function isVehicleAttachedToTrailer(vehicle: number): boolean;

  export function setTrailerInverseMassScale(vehicle: number, p1: number): void;

  /**
  * in the decompiled scripts, seems to be always called on the vehicle right after being attached to a trailer.
  */
  export function setTrailerLegsRaised(vehicle: number): void;

  export function setTrailerLegsLowered(p0: any): void;

  /**
  * '0 = wheel_lf / bike, plane or jet front
  * '1 = wheel_rf
  * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
  * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
  * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
  * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
  * '45 = 6 wheels trailer mid wheel left
  * '47 = 6 wheels trailer mid wheel right
  * @param tyreIndex = 0 to 4 on normal vehicles
  */
  export function setVehicleTyreFixed(vehicle: number, tyreIndex: number): void;

  /**
  * Sets a vehicle's license plate text.  8 chars maximum.
  * Example:
  * Ped playerPed = PLAYER::PLAYER_PED_ID();
  * char *plateText = "KING";
  * VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT(veh, plateText);
  * @param vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);
  */
  export function setVehicleNumberPlateText(vehicle: number, plateText: string): void;

  /**
  * Returns the license plate text from a vehicle.  8 chars maximum.
  */
  export function getVehicleNumberPlateText(vehicle: number): string;

  /**
  * Returns the number of *types* of licence plates, enumerated below in SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX.
  */
  export function getNumberOfVehicleNumberPlates(): number;

  /**
  * Plates:
  * Blue/White - 0
  * Yellow/black - 1
  * Yellow/Blue - 2
  * Blue/White2 - 3
  * Blue/White3 - 4
  * Yankton - 5
  */
  export function setVehicleNumberPlateTextIndex(vehicle: number, plateIndex: number): void;

  /**
  * Returns the PlateType of a vehicle
  * Blue_on_White_1 = 3,
  * Blue_on_White_2 = 0,
  * Blue_on_White_3 = 4,
  * Yellow_on_Blue = 2,
  * Yellow_on_Black = 1,
  * North_Yankton = 5,
  */
  export function getVehicleNumberPlateTextIndex(vehicle: number): number;

  export function setRandomTrains(toggle: boolean): void;

  /**
  * Train models HAVE TO be loaded (requested) before you use this.
  * For variation 15 - request:
  * freight
  * freightcar
  * freightgrain
  * freightcont1
  * freightcont2
  * freighttrailer
  */
  export function createMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): number;

  /**
  * Toggles whether ambient trains can spawn on the specified track or not
  * `trackId` is the internal id of the train track to switch.
  * `state` is whether ambient trains can spawn or not
  * trackIds
  * 0 (`trains1.dat`) Main track around SA
  * 1 (`trains2.dat`) Davis Quartz Quarry branch
  * 2 (`trains3.dat`) Second track alongside live track along Roy Lewenstein Blv.
  * 3 (`trains4.dat`) Metro track circuit
  * 4 (`trains5.dat`) Branch in Mirror Park Railyard
  * See NativeDB for reference: http://natives.altv.mp/#/0xFD813BB7DB977F20
  */
  export function switchTrainTrack(trackId: number, state: boolean): void;

  /**
  * Only called once inside main_persitant with the parameters p0 = 0, p1 = 120000
  * @param trackIndex 0 - 26
  */
  export function setTrainTrackSpawnFrequency(trackIndex: number, frequency: number): void;

  export function deleteAllTrains(): void;

  export function setTrainSpeed(train: number, speed: number): void;

  export function setTrainCruiseSpeed(train: number, speed: number): void;

  export function setRandomBoats(toggle: boolean): void;

  export function setGarbageTrucks(toggle: boolean): void;

  /**
  * Maximum amount of vehicles with vehicle stuck check appears to be 16.
  */
  export function doesVehicleHaveStuckVehicleCheck(vehicle: number): boolean;

  /**
  * See REQUEST_VEHICLE_RECORDING
  */
  export function getVehicleRecordingId(recording: number, script: string): number;

  /**
  * Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
  * For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" (e.g., in native GET_TOTAL_DURATION_OF_VEHICLE_RECORDING_ID) corresponds to a unique identifier within the recording streaming module.
  * Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.
  */
  export function requestVehicleRecording(recording: number, script: string): void;

  /**
  * See REQUEST_VEHICLE_RECORDING
  */
  export function hasVehicleRecordingBeenLoaded(recording: number, script: string): boolean;

  /**
  * See REQUEST_VEHICLE_RECORDING
  */
  export function removeVehicleRecording(recording: number, script: string): void;

  export function getPositionOfVehicleRecordingIdAtTime(id: number, time: number): Vector3;

  /**
  * This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.
  * See REQUEST_VEHICLE_RECORDING
  */
  export function getPositionOfVehicleRecordingAtTime(recording: number, time: number, script: string): Vector3;

  export function getRotationOfVehicleRecordingIdAtTime(id: number, time: number): Vector3;

  /**
  * This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.
  * See REQUEST_VEHICLE_RECORDING
  */
  export function getRotationOfVehicleRecordingAtTime(recording: number, time: number, script: string): Vector3;

  export function getTotalDurationOfVehicleRecordingId(id: number): number;

  /**
  * See REQUEST_VEHICLE_RECORDING
  */
  export function getTotalDurationOfVehicleRecording(recording: number, script: string): number;

  /**
  * Distance traveled in the vehicles current recording.
  */
  export function getPositionInRecording(vehicle: number): number;

  /**
  * Can be used with GET_TOTAL_DURATION_OF_VEHICLE_RECORDING{_ID} to compute a percentage.
  */
  export function getTimePositionInRecording(vehicle: number): number;

  /**
  * See REQUEST_VEHICLE_RECORDING
  * @param p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).
  */
  export function startPlaybackRecordedVehicle(vehicle: number, recording: number, script: string, p3: boolean): void;

  /**
  * time, often zero and capped at 500, is related to SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER
  * @param flags requires further research, e.g., 0x4/0x8 are related to the AI driving task and 0x20 is internally set and interacts with dynamic entity components.
  */
  export function startPlaybackRecordedVehicleWithFlags(vehicle: number, recording: number, script: string, flags: number, time: number, drivingStyle: number): void;

  /**
  * Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.
  */
  export function forcePlaybackRecordedVehicleUpdate(vehicle: number, p1: boolean): void;

  export function stopPlaybackRecordedVehicle(vehicle: number): void;

  export function pausePlaybackRecordedVehicle(vehicle: number): void;

  export function unpausePlaybackRecordedVehicle(vehicle: number): void;

  export function isPlaybackGoingOnForVehicle(vehicle: number): boolean;

  export function isPlaybackUsingAiGoingOnForVehicle(vehicle: number): boolean;

  export function getCurrentPlaybackForVehicle(vehicle: number): number;

  export function skipToEndAndStopPlaybackRecordedVehicle(vehicle: number): void;

  export function setPlaybackSpeed(vehicle: number, speed: number): void;

  /**
  * AI abides by the provided driving style (e.g., stopping at red lights or waiting behind traffic) while executing the specificed vehicle recording.
  * 0x1F2E4E06DEA8992B is a related native that deals with the AI physics for such recordings.
  */
  export function startPlaybackRecordedVehicleUsingAi(vehicle: number, recording: number, script: string, speed: number, drivingStyle: number): void;

  /**
  * SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)
  */
  export function skipTimeInPlaybackRecordedVehicle(vehicle: number, time: number): void;

  /**
  * Identical to SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER with 0 as arguments for p1 and p3.
  */
  export function setPlaybackToUseAi(vehicle: number, drivingStyle: number): void;

  /**
  * @param time is number of milliseconds before reverting, zero for indefinitely.
  */
  export function setPlaybackToUseAiTryToRevertBackLater(vehicle: number, time: number, drivingStyle: number, p3: boolean): void;

  export function _0x5845066D8A1EA7F7(vehicle: number, x: number, y: number, z: number, p4: any): void;

  export function _0x796A877E459B99EA(p0: any, p1: number, p2: number, p3: number): void;

  export function _0xFAF2A78061FD9EF4(p0: any, p1: number, p2: number, p3: number): void;

  /**
  * A vehicle recording playback flag only used in jewelry_heist
  */
  export function _0x063AE2B2CC273588(vehicle: number, p1: boolean): void;

  export function explodeVehicleInCutscene(vehicle: number, p1: boolean): void;

  export function addVehicleStuckCheckWithWarp(p0: any, p1: number, p2: any, p3: boolean, p4: boolean, p5: boolean, p6: any): void;

  /**
  * seems to make the vehicle stop spawning naturally in traffic. Here's an essential example:
  * VEHICLE::SET_VEHICLE_MODEL_IS_SUPPRESSED(MISC::GET_HASH_KEY("taco"), true);
  * god I hate taco vans
  * Confirmed to work? Needs to be looped? Can not get it to work.
  */
  export function setVehicleModelIsSuppressed(model: number, suppressed: boolean): void;

  /**
  * Gets a random vehicle in a sphere at the specified position, of the specified radius.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  * @param x The X-component of the position of the sphere.
  * @param y The Y-component of the position of the sphere.
  * @param z The Z-component of the position of the sphere.
  * @param radius The radius of the sphere. Max is 9999.9004.
  * @param modelHash The vehicle model to limit the selection to. Pass 0 for any model.
  * @param flags The bitwise flags that modifies the behaviour of this function.
  */
  export function getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: number, flags: number): number;

  export function getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

  export function getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

  /**
  * Example usage
  * x, y, z: Position to get closest vehicle to.
  * radius: Max radius to get a vehicle.
  * It seems to return police cars for me, does not seem to return helicopters, planes or boats for some reason
  * Only returns non police cars and motorbikes with the flag set to 70 and modelHash to 0. ModelHash seems to always be 0 when not a modelHash in the scripts, as stated above.
  * These flags were found in the b617d scripts: 0,2,4,6,7,23,127,260,2146,2175,12294,16384,16386,20503,32768,67590,67711,98309,100359.
  * Converted to binary, each bit probably represents a flag as explained regarding another native here: gtaforums.com/topic/822314-guide-driving-styles
  * Conversion of found flags to binary: pastebin.com/kghNFkRi
  * At exactly 16384 which is 0100000000000000 in binary and 4000 in hexadecimal only planes are returned.
  * See NativeDB for reference: http://natives.altv.mp/#/0xF73EB622C4F1689B
  * @param modelHash Limit to vehicles with this model. 0 for any.
  * @param flags The bitwise flags altering the function's behaviour.
  * @returns Does not return police cars or helicopters.
  */
  export function getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: number, flags: number): number;

  /**
  * Corrected p1. it's basically the 'carriage/trailer number'. So if the train has 3 trailers you'd call the native once with a var or 3 times with 1, 2, 3.
  */
  export function getTrainCarriage(train: number, trailerNumber: number): number;

  export function deleteMissionTrain(train: number): [void, number];

  /**
  * @param p1 is always 0
  */
  export function setMissionTrainAsNoLongerNeeded(train: number, p1: boolean): [void, number];

  export function setMissionTrainCoords(train: number, x: number, y: number, z: number): void;

  export function isThisModelABoat(model: number): boolean;

  /**
  * Checks if model is a boat, then checks for FLAG_IS_JETSKI.
  */
  export function isThisModelAJetski(model: number): boolean;

  export function isThisModelAPlane(model: number): boolean;

  export function isThisModelAHeli(model: number): boolean;

  /**
  * To check if the model is an amphibious car, see gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-33#entry1069317363 (for build 944 and above only!)
  */
  export function isThisModelACar(model: number): boolean;

  export function isThisModelATrain(model: number): boolean;

  export function isThisModelABike(model: number): boolean;

  export function isThisModelABicycle(model: number): boolean;

  export function isThisModelAQuadbike(model: number): boolean;

  export function isThisModelAnAmphibiousCar(model: number): boolean;

  export function isThisModelAnAmphibiousQuadbike(model: number): boolean;

  /**
  * Equivalent of SET_HELI_BLADES_SPEED(vehicleHandle, 1.0f);
  * this native works on planes to?
  */
  export function setHeliBladesFullSpeed(vehicle: number): void;

  /**
  * Sets the speed of the helicopter blades in percentage of the full speed.
  * vehicleHandle: The helicopter.
  * @param speed The speed in percentage, 0.0f being 0% and 1.0f being 100%.
  */
  export function setHeliBladesSpeed(vehicle: number, speed: number): void;

  export function _0x99CAD8E7AFDB60FA(vehicle: number, p1: number, p2: number): void;

  /**
  * This has not yet been tested - it's just an assumption of what the types could be.
  */
  export function setVehicleCanBeTargetted(vehicle: number, state: boolean): void;

  /**
  * Related to locking the vehicle or something similar.
  * In the decompiled scripts, its always called after
  * VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS(a_0, 1);
  * VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_PLAYER(a_0, PLAYER::PLAYER_ID(), 0);
  * -->VEHICLE::_DBC631F109350B8C(a_0, 1);
  * @param vehicle :_SET_EXCLUSIVE_DRIVER(a_0, 0, 0);
  */
  export function _0xDBC631F109350B8C(vehicle: number, p1: boolean): void;

  export function setVehicleCanBeVisiblyDamaged(vehicle: number, state: boolean): void;

  export function setVehicleHasUnbreakableLights(vehicle: number, p1: boolean): void;

  export function _0x2311DD7159F00582(vehicle: number, p1: boolean): void;

  export function _0x065D03A9D6B2C6B5(p0: any, p1: any): void;

  /**
  * Dirt level 0..15
  */
  export function getVehicleDirtLevel(vehicle: number): number;

  /**
  * You can't use values greater than 15.0
  * You can see why here: pastebin.com/Wbn34fGD
  * Also, R* does (float)(rand() % 15) to get a random dirt level when generating a vehicle.
  */
  export function setVehicleDirtLevel(vehicle: number, dirtLevel: number): void;

  /**
  * GET_*
  * @returns Appears to return true if the vehicle has any damage, including cosmetically.
  */
  export function isVehicleDamaged(vehicle: number): boolean;

  /**
  * 0 = Front Left Door
  * 1 = Front Right Door
  * 2 = Back Left Door
  * 3 = Back Right Door
  * 4 = Hood
  * 5 = Trunk
  * 6 = Trunk2
  */
  export function isVehicleDoorFullyOpen(vehicle: number, doorIndex: number): boolean;

  /**
  * Starts or stops the engine on the specified vehicle.
  * from what I've tested when I do this to a helicopter the propellers turn off after the engine has started. so is there any way to keep the heli propellers on?
  * @param vehicle The vehicle to start or stop the engine on.
  * @param value true to turn the vehicle on; false to turn it off.
  * @param instantly if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
  * @param disableAutoStart If true, the system will prevent the engine from starting when the player got into it.
  */
  export function setVehicleEngineOn(vehicle: number, value: boolean, instantly: boolean, disableAutoStart: boolean): void;

  export function setVehicleUndriveable(vehicle: number, toggle: boolean): void;

  export function setVehicleProvidesCover(vehicle: number, toggle: boolean): void;

  /**
  * 0 = Front Left Door (driver door)
  * 1 = Front Right Door
  * 2 = Back Left Door
  * 3 = Back Right Door
  * 4 = Hood
  * 5 = Trunk
  * 6 = Trunk2
  * mostly use 0 and 1, very rare using 3 and 5
  * It seems it is an angle
  * See NativeDB for reference: http://natives.altv.mp/#/0xF2BFA0430F0A0FCB
  */
  export function setVehicleDoorControl(vehicle: number, doorIndex: number, speed: number, angle: number): void;

  export function setVehicleDoorLatched(vehicle: number, doorIndex: number, p2: boolean, p3: boolean, p4: boolean): void;

  /**
  * example in vb:
  * Public Shared Function Get_Vehicle_Door_Angle(Vehicle As Vehicle, Door As VehicleDoor) As Single
  * End Function
  * I'm Not MentaL
  * @returns         Return Native.Function.Call(Of Single)(Hash.GET_VEHICLE_DOOR_ANGLE_RATIO, Vehicle.Handle, Door)
  */
  export function getVehicleDoorAngleRatio(vehicle: number, door: number): number;

  export function getPedUsingVehicleDoor(vehicle: number, doorIndex: number): number;

  /**
  * 0 = Front Left Door
  * 1 = Front Right Door
  * 2 = Back Left Door
  * 3 = Back Right Door
  * 4 = Hood
  * 5 = Trunk
  * 6 = Trunk2
  */
  export function setVehicleDoorShut(vehicle: number, doorIndex: number, closeInstantly: boolean): void;

  /**
  * 0 = Front Right Door
  * 1 = Front Left Door
  * 2 = Back Right Door
  * 3 = Back Left Door
  * 4 = Hood
  * 5 = Trunk
  * Changed last paramater from CreateDoorObject To NoDoorOnTheFloor because when on false, the door object is created,and not created when on true...the former parameter name was counter intuitive...(by Calderon)
  * Calderon is a moron.
  */
  export function setVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void;

  export function setVehicleCanBreak(vehicle: number, toggle: boolean): void;

  export function doesVehicleHaveRoof(vehicle: number): boolean;

  export function _0xC4B3347BD68BD609(p0: any): void;

  export function _0xD3301660A57C9272(p0: any): void;

  export function _0xB9562064627FF9DB(p0: any, p1: any): void;

  export function isBigVehicle(vehicle: number): boolean;

  /**
  * Actually number of color combinations
  */
  export function getNumberOfVehicleColours(vehicle: number): number;

  /**
  * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
  * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
  */
  export function setVehicleColourCombination(vehicle: number, colorCombination: number): void;

  export function getVehicleColourCombination(vehicle: number): number;

  /**
  * `color`: is the paint index for the vehicle.
  * Paint index goes from 0 to 12.
  * Be aware that it only works on xenon lights. Example: https://i.imgur.com/yV3cpG9.png
  */
  export function setVehicleXenonLightsColor(vehicle: number, colorIndex: number): void;

  /**
  * Returns the headlight color index from the vehicle. Value between 0, 12.
  * Use _SET_VEHICLE_HEADLIGHTS_COLOUR to set the headlights color for the vehicle.
  * Must enable xenon headlights before it'll take affect.
  * Returns an int, value between 0-12 or 255 if no color is set.
  */
  export function getVehicleXenonLightsColor(vehicle: number): number;

  /**
  * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
  */
  export function setVehicleIsConsideredByPlayer(vehicle: number, toggle: boolean): void;

  export function _0xBE5C1255A1830FF5(vehicle: number, toggle: boolean): void;

  export function _0x9BECD4B9FEF3F8A6(vehicle: number, p1: boolean): void;

  export function _0x88BC673CA9E0AE99(vehicle: number, p1: boolean): void;

  export function _0xE851E480B814D4BA(vehicle: number, p1: boolean): void;

  /**
  * Not present in the retail version! It's just a nullsub.
  * @param p0 always true (except in one case)
  * @param successIndicator 0 if success, -1 if failed
  */
  export function getRandomVehicleModelInMemory(p0: boolean, modelHash: number, successIndicator: number): [void, number, number];

  /**
  * enum VehicleLockStatus = {
  * None = 0,
  * Unlocked = 1,
  * Locked = 2,
  * LockedForPlayer = 3,
  * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
  * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
  * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
  * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
  * }
  */
  export function getVehicleDoorLockStatus(vehicle: number): number;

  /**
  * Returns vehicle door destroy type previously set with _SET_VEHICLE_DOOR_DESTROY_TYPE
  */
  export function getVehicleDoorDestroyType(vehicle: number, doorIndex: number): number;

  /**
  * @param doorID starts at 0, not seeming to skip any numbers. Four door vehicles intuitively range from 0 to 3.
  */
  export function isVehicleDoorDamaged(veh: number, doorID: number): boolean;

  /**
  * Keeps Vehicle Doors/Hood/Trunk from breaking off
  */
  export function setVehicleDoorCanBreak(vehicle: number, doorIndex: number, isBreakable: boolean): void;

  export function isVehicleBumperBouncing(vehicle: number, frontBumper: boolean): boolean;

  export function isVehicleBumperBrokenOff(vehicle: number, front: boolean): boolean;

  /**
  * Usage:
  * public bool isCopInRange(Vector3 Location, float Range)
  * {
  * }
  * @returns             return Function.Call<bool>(Hash.IS_COP_PED_IN_AREA_3D, Location.X - Range, Location.Y - Range, Location.Z - Range, Location.X + Range, Location.Y + Range, Location.Z + Range);
  */
  export function isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;

  /**
  * Public Function isVehicleOnAllWheels(vh As Vehicle) As Boolean
  * End Function
  * @returns         Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_ON_ALL_WHEELS, vh)
  */
  export function isVehicleOnAllWheels(vehicle: number): boolean;

  /**
  * Returns `nMonetaryValue` from handling.meta for specific model.
  */
  export function getVehicleModelMonetaryValue(vehicleModel: number): number;

  export function getVehicleLayoutHash(vehicle: number): number;

  export function _0xA01BC64DD4BFBBAC(vehicle: number, p1: number): any;

  /**
  * makes the train all jumbled up and derailed as it moves on the tracks (though that wont stop it from its normal operations)
  */
  export function setRenderTrainAsDerailed(train: number, toggle: boolean): void;

  /**
  * They use the same color indexs as SET_VEHICLE_COLOURS.
  */
  export function setVehicleExtraColours(vehicle: number, pearlescentColor: number, wheelColor: number): void;

  export function getVehicleExtraColours(vehicle: number, pearlescentColor: number, wheelColor: number): [void, number, number];

  export function setVehicleInteriorColor(vehicle: number, color: number): void;

  export function getVehicleInteriorColor(vehicle: number, color: number): [void, number];

  export function setVehicleDashboardColor(vehicle: number, color: number): void;

  export function getVehicleDashboardColor(vehicle: number, color: number): [void, number];

  export function stopAllGarageActivity(): void;

  /**
  * This fixes a vehicle.
  * If the vehicle's engine's broken then you cannot fix it with this native.
  */
  export function setVehicleFixed(vehicle: number): void;

  /**
  * This fixes the deformation of a vehicle but the vehicle health doesn't improve
  */
  export function setVehicleDeformationFixed(vehicle: number): void;

  export function setVehicleCanEngineOperateOnFire(vehicle: number, toggle: boolean): void;

  export function setVehicleCanLeakOil(vehicle: number, toggle: boolean): void;

  export function setVehicleCanLeakPetrol(vehicle: number, toggle: boolean): void;

  export function setDisableVehiclePetrolTankFires(vehicle: number, toggle: boolean): void;

  export function setDisableVehiclePetrolTankDamage(vehicle: number, toggle: boolean): void;

  export function setDisableVehicleEngineFires(vehicle: number, toggle: boolean): void;

  /**
  * SET_VEHICLE_LI*
  */
  export function _0xC50CE861B55EAB8B(vehicle: number, p1: boolean): void;

  /**
  * sfink: sets bit in vehicle's structure, used by maintransition, fm_mission_controller, mission_race and a couple of other scripts. see dissassembly:
  * CVehicle *__fastcall sub_140CDAA10(signed int a1, char a2)
  * {
  * CVehicle *result; // rax@1
  * result = EntityAsCVehicle(a1);
  * if ( result )
  * {
  * result->field_886 &= 0xEFu;
  * result->field_886 |= 16 * (a2 & 1);
  * See NativeDB for reference: http://natives.altv.mp/#/0x6EBFB22D646FFC18
  * @returns     return result;
  */
  export function _0x6EBFB22D646FFC18(vehicle: number, p1: boolean): void;

  export function setDisablePretendOccupants(vehicle: number, toggle: boolean): void;

  export function removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: any): void;

  /**
  * Locks the vehicle's steering to the desired angle, explained below.
  * Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.
  * Steer bias:
  * -1.0 = full right
  * 0.0 = centered steering
  * 1.0 = full left
  */
  export function setVehicleSteerBias(vehicle: number, value: number): void;

  export function isVehicleExtraTurnedOn(vehicle: number, extraId: number): boolean;

  /**
  * Note: only some vehicle have extras
  * extra ids are from 1 - 9 depending on the vehicle
  * -------------------------------------------------
  * ^ not sure if outdated or simply wrong. Max extra ID for b944 is 14
  * -------------------------------------------------
  * not sure if it really should be a BOOL.
  * @param disable is not a on/off toggle. mostly 0 means on and 1 means off.
  */
  export function setVehicleExtra(vehicle: number, extraId: number, disable: boolean): void;

  /**
  * Checks via CVehicleModelInfo
  */
  export function doesExtraExist(vehicle: number, extraId: number): boolean;

  /**
  * @returns Checks if vehicle tyre at index exists. Also returns false if tyre was removed.
  */
  export function doesVehicleTyreExist(vehicle: number, tyreIndex: number): boolean;

  export function setConvertibleRoof(vehicle: number, p1: boolean): void;

  export function lowerConvertibleRoof(vehicle: number, instantlyLower: boolean): void;

  export function raiseConvertibleRoof(vehicle: number, instantlyRaise: boolean): void;

  /**
  * 0 -> up
  * 1 -> lowering down
  * 2 -> down
  * 3 -> raising up
  */
  export function getConvertibleRoofState(vehicle: number): number;

  /**
  * However, in launcher_carwash/carwash1/carwash2 scripts, p1 is true and is accompanied by DOES_VEHICLE_HAVE_ROOF
  * @param p1 is false almost always.
  */
  export function isVehicleAConvertible(vehicle: number, p1: boolean): boolean;

  /**
  * Transforms the `stormberg` to its "water vehicle" variant. If the vehicle is already in that state then the vehicle transformation audio will still play, but the vehicle won't change at all.
  */
  export function transformVehicleToSubmarine(vehicle: number, noAnimation: boolean): void;

  /**
  * Transforms the `stormberg` to its "road vehicle" variant. If the vehicle is already in that state then the vehicle transformation audio will still play, but the vehicle won't change at all.
  */
  export function transformSubmarineToVehicle(vehicle: number, noAnimation: boolean): void;

  export function getIsSubmarineVehicleTransformed(vehicle: number): boolean;

  /**
  * Is this for red lights only?  more testing required.
  */
  export function isVehicleStoppedAtTrafficLights(vehicle: number): boolean;

  /**
  * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
  * When `focusOnModel` set to `true`, the damage sphere will travel towards the vehicle from the given point, thus guaranteeing an impact
  * @param radius of effect damage applied in a sphere at impact location
  */
  export function setVehicleDamage(vehicle: number, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;

  export function _0x35BB21DE06784373(p0: any, p1: any): void;

  /**
  * Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.
  * Minimum: -4000
  * Maximum: 1000
  * -4000: Engine is destroyed
  * 0 and below: Engine catches fire and health rapidly declines
  * 300: Engine is smoking and losing functionality
  * 1000: Engine is perfect
  */
  export function getVehicleEngineHealth(vehicle: number): number;

  /**
  * 1000 is max health
  * Begins leaking gas at around 650 health
  * -------------------------
  * Minimum: -4000
  * Maximum: 1000
  * -4000: Engine is destroyed
  * 0 and below: Engine catches fire and health rapidly declines
  * 300: Engine is smoking and losing functionality
  * 1000: Engine is perfect
  * @param health 999.90002441406 appears to be minimum health, although nothing special occurs <
  */
  export function setVehicleEngineHealth(vehicle: number, health: number): void;

  /**
  * Works just like SET_VEHICLE_ENGINE_HEALTH, didn't saw any difference. But this native works only for planes.
  */
  export function setPlaneEngineHealth(vehicle: number, health: number): void;

  /**
  * 1000 is max health
  * Begins leaking gas at around 650 health
  * -999.90002441406 appears to be minimum health, although nothing special occurs
  */
  export function getVehiclePetrolTankHealth(vehicle: number): number;

  /**
  * 1000 is max health
  * Begins leaking gas at around 650 health
  * @param health 999.90002441406 appears to be minimum health, although nothing special occurs
  */
  export function setVehiclePetrolTankHealth(vehicle: number, health: number): void;

  /**
  * @param p1 can be anywhere from 0 to 3 in the scripts. p2 is generally somewhere in the 1000 to 10000 range.
  */
  export function isVehicleStuckTimerUp(vehicle: number, p1: number, p2: number): boolean;

  /**
  * The inner function has a switch on the second parameter. It's the stuck timer index.
  * Here's some pseudo code I wrote for the inner function:
  * void __fastcall NATIVE_RESET_VEHICLE_STUCK_TIMER_INNER(CUnknown* unknownClassInVehicle, int timerIndex)
  * {
  * switch (timerIndex)
  * {
  * case 0:
  * unknownClassInVehicle->FirstStuckTimer = (WORD)0u;
  * case 1:
  * See NativeDB for reference: http://natives.altv.mp/#/0xD7591B0065AFAA7A
  */
  export function resetVehicleStuckTimer(vehicle: number, nullAttributes: number): void;

  /**
  * p1 = check if vehicle is on fire
  * @param isOnFireCheck is always 0 in the scripts.
  */
  export function isVehicleDriveable(vehicle: number, isOnFireCheck: boolean): boolean;

  export function setVehicleHasBeenOwnedByPlayer(vehicle: number, owned: boolean): void;

  export function setVehicleNeedsToBeHotwired(vehicle: number, toggle: boolean): void;

  export function _0x9F3F689B814F2599(vehicle: number, p1: boolean): void;

  export function _0x4E74E62E0A97E901(vehicle: number, p1: boolean): void;

  /**
  * Sounds the horn for the specified vehicle.
  * Note: If a player is in the vehicle, it will only sound briefly.
  * @param vehicle The vehicle to activate the horn for.
  * @param duration The duration to sound the horn, in milliseconds.
  * @param mode The hash of "NORMAL" or "HELDDOWN". Can be 0.
  */
  export function startVehicleHorn(vehicle: number, duration: number, mode: number, forever: boolean): void;

  /**
  * If set to TRUE, it seems to suppress door noises and doesn't allow the horn to be continuous.
  * -Doesn't seem to suppress door noises for me, at least with the vehicle add-on I tried
  */
  export function setVehicleSilent(vehicle: number, toggle: boolean): void;

  /**
  * if true, axles won't bend.
  */
  export function setVehicleHasStrongAxles(vehicle: number, toggle: boolean): void;

  /**
  * Returns model name of vehicle in all caps. Needs to be displayed through localizing text natives to get proper display name.
  * -----------------------------------------------------------------------------------------------------------------------------------------
  * -----------------------------------------------------------------------------------------------------------------------------------------
  * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
  * Using HUD::_GET_LABEL_TEXT, you can get the localized name.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  * @returns While often the case, this does not simply return the model name of the vehicle (which could be hashed to return the model hash). Variations of the same vehicle may also use the same display name.
  */
  export function getDisplayNameFromVehicleModel(modelHash: number): string;

  /**
  * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  * @returns Will return a vehicle's manufacturer display label.
  */
  export function getMakeNameFromVehicleModel(modelHash: number): string;

  /**
  * The only example I can find of this function in the scripts, is this:
  * struct _s = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(rPtr((A_0) + 4), 1.21f, 6.15f, 0.3f);
  * -----------------------------------------------------------------------------------------------------------------------------------------
  * PC scripts:
  * v_5{3} = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(a_0._f1, 1.21, 6.15, 0.3);
  */
  export function getVehicleDeformationAtPos(vehicle: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;

  export function setVehicleLivery(vehicle: number, livery: number): void;

  /**
  * -1 = no livery
  */
  export function getVehicleLivery(vehicle: number): number;

  /**
  * Returns -1 if the vehicle has no livery
  */
  export function getVehicleLiveryCount(vehicle: number): number;

  /**
  * Used to set the tornado custom (convertible) rooftop livery.
  * Might work on other custom vehicles but im not sure what those might be, only confirmed it working with the tornado custom.
  * @param livery value that works for tornado custom is between 0 and 9 from what i can tell. Maybe 0-8 even.
  */
  export function setVehicleRoofLivery(vehicle: number, livery: number): void;

  /**
  * Returns index of the current vehicle's rooftop livery. A getter for _SET_VEHICLE_ROOF_LIVERY.
  */
  export function getVehicleRoofLivery(vehicle: number): number;

  /**
  * Returns a number of available rooftop liveries, or -1 if vehicle has no rooftop liveries available.
  */
  export function getVehicleRoofLiveryCount(vehicle: number): number;

  /**
  * Window indexes:
  * 0 = Front Right Window
  * 1 = Front Left Window
  * 2 = Back Right Window
  * 3 = Back Left Window
  * Those numbers go on for vehicles that have more than 4 doors with windows.
  * @returns This will return false if the window is broken, or rolled down.
  */
  export function isVehicleWindowIntact(vehicle: number, windowIndex: number): boolean;

  /**
  * @returns Appears to return false if any window is broken.
  */
  export function areAllVehicleWindowsIntact(vehicle: number): boolean;

  /**
  * Returns false if every seat is occupied.
  */
  export function areAnyVehicleSeatsFree(vehicle: number): boolean;

  export function resetVehicleWheels(vehicle: number, toggle: boolean): void;

  export function isHeliPartBroken(vehicle: number, p1: boolean, p2: boolean, p3: boolean): boolean;

  /**
  * Max 1000.
  * At 0 the main rotor will stall.
  */
  export function getHeliMainRotorHealth(vehicle: number): number;

  /**
  * Max 1000.
  * At 0 the tail rotor will stall.
  */
  export function getHeliTailRotorHealth(vehicle: number): number;

  /**
  * Max 1000.
  * At -100 both helicopter rotors will stall.
  */
  export function getHeliTailBoomHealth(vehicle: number): number;

  export function _0x4056EA1105F5ABD7(p0: any, p1: any): void;

  export function setHeliTailRotorHealth(vehicle: number, health: number): void;

  export function setHeliTailExplodeThrowDashboard(vehicle: number, p1: boolean): void;

  /**
  * NOTE: Debugging functions are not present in the retail version of the game.
  */
  export function setVehicleNameDebug(vehicle: number, name: string): void;

  /**
  * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
  */
  export function setVehicleExplodesOnHighExplosionDamage(vehicle: number, toggle: boolean): void;

  export function _0xD565F438137F0E10(p0: any, p1: any): void;

  export function _0x3441CAD2F2231923(vehicle: number, p1: boolean): void;

  export function setVehicleDisableTowing(vehicle: number, toggle: boolean): void;

  export function doesVehicleHaveLandingGear(vehicle: number): boolean;

  /**
  * Works for vehicles with a retractable landing gear
  * landing gear states:
  * 0: Deployed
  * 1: Closing
  * 2: Opening
  * 3: Retracted
  * what can I use to make the hydra thing forward?
  */
  export function controlLandingGear(vehicle: number, state: number): void;

  /**
  * Landing gear states:
  * 0: Deployed
  * 1: Closing (Retracting)
  * 2:(Landing gear state 2 is never used.)
  * 3: Opening (Deploying)
  * 4: Retracted
  * Returns the current state of the vehicles landing gear.
  */
  export function getLandingGearState(vehicle: number): number;

  export function isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;

  export function requestVehicleHighDetailModel(vehicle: number): void;

  export function removeVehicleHighDetailModel(vehicle: number): void;

  export function isVehicleHighDetail(vehicle: number): boolean;

  /**
  * REQUEST_VEHICLE_ASSET(GET_HASH_KEY(cargobob3), 3);
  * vehicle found that have asset's:
  * cargobob3
  * submersible
  * blazer
  */
  export function requestVehicleAsset(vehicleHash: number, vehicleAsset: number): void;

  export function hasVehicleAssetLoaded(vehicleAsset: number): boolean;

  export function removeVehicleAsset(vehicleAsset: number): void;

  /**
  * Sets how much the crane on the tow truck is raised, where 0.0 is fully lowered and 1.0 is fully raised.
  */
  export function setVehicleTowTruckArmPosition(vehicle: number, position: number): void;

  /**
  * HookOffset defines where the hook is attached. leave at 0 for default attachment.
  */
  export function attachVehicleToTowTruck(towTruck: number, vehicle: number, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;

  /**
  * First two parameters swapped. Scripts verify that towTruck is the first parameter, not the second.
  */
  export function detachVehicleFromTowTruck(towTruck: number, vehicle: number): void;

  export function detachVehicleFromAnyTowTruck(vehicle: number): boolean;

  /**
  * Scripts verify that towTruck is the first parameter, not the second.
  */
  export function isVehicleAttachedToTowTruck(towTruck: number, vehicle: number): boolean;

  export function getEntityAttachedToTowTruck(towTruck: number): number;

  export function setVehicleAutomaticallyAttaches(vehicle: number, p1: boolean, p2: any): any;

  /**
  * Sets the arm position of a bulldozer. Position must be a value between 0.0 and 1.0. Ignored when `p2` is set to false, instead incrementing arm position by 0.1 (or 10%).
  */
  export function setVehicleBulldozerArmPosition(vehicle: number, position: number, p2: boolean): void;

  export function setVehicleTankTurretPosition(vehicle: number, position: number, p2: boolean): void;

  export function _0x0581730AB9380412(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  export function _0x737E398138550FFF(p0: any, p1: any): void;

  export function _0x1093408B4B9D1146(p0: any, p1: number): void;

  export function disableVehicleTurretMovementThisFrame(p0: any): void;

  export function setVehicleFlightNozzlePosition(vehicle: number, angleRatio: number): void;

  export function setVehicleFlightNozzlePositionImmediate(vehicle: number, angle: number): void;

  export function getVehicleFlightNozzlePosition(plane: number): number;

  /**
  * True stops vtols from switching modes. Doesn't stop the sound though.
  */
  export function setDisableVehicleFlightNozzlePosition(vehicle: number, toggle: boolean): void;

  export function _0xA4822F1CF23F4810(outVec: Vector3, p1: any, outVec1: Vector3, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): [boolean, Vector3, Vector3];

  /**
  * On accelerating, spins the driven wheels with the others braked, so you don't go anywhere.
  */
  export function setVehicleBurnout(vehicle: number, toggle: boolean): void;

  /**
  * Returns whether the specified vehicle is currently in a burnout.
  * vb.net
  * Public Function isVehicleInBurnout(vh As Vehicle) As Boolean
  * End Function
  * @returns         Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_IN_BURNOUT, vh)
  */
  export function isVehicleInBurnout(vehicle: number): boolean;

  /**
  * Reduces grip significantly so it's hard to go anywhere.
  */
  export function setVehicleReduceGrip(vehicle: number, toggle: boolean): void;

  /**
  * Often used in conjunction with: SET_VEHICLE_REDUCE_GRIP
  * @param val is 0-3
  */
  export function setVehicleReduceTraction(vehicle: number, val: number): void;

  /**
  * Sets the turn signal enabled for a vehicle.
  * Set turnSignal to 1 for left light, 0 for right light.
  */
  export function setVehicleIndicatorLights(vehicle: number, turnSignal: number, toggle: boolean): void;

  export function setVehicleBrakeLights(vehicle: number, toggle: boolean): void;

  export function setVehicleHandbrake(vehicle: number, toggle: boolean): void;

  export function setVehicleBrake(vehicle: number, toggle: boolean): void;

  /**
  * INIT_VISIBLE_LATCH_POPULATION?
  */
  export function _0x48ADC8A773564670(): void;

  /**
  * HAS_*
  */
  export function _0x91D6DD290888CBAB(): boolean;

  export function _0x51DB102F4A3BA5E0(toggle: boolean): void;

  /**
  * Default:1000||This sets a value which is used when _0x51db102f4a3ba5e0(true) is called each frame.
  */
  export function _0xA4A9A4C40E615885(p0: number): void;

  /**
  * Gets the trailer of a vehicle and puts it into the trailer parameter.
  */
  export function getVehicleTrailerVehicle(vehicle: number, trailer: number): [boolean, number];

  /**
  * @param vehicle must be a plane
  */
  export function setVehicleUsesLargeRearRamp(vehicle: number, toggle: boolean): void;

  export function setVehicleRudderBroken(vehicle: number, toggle: boolean): void;

  export function setConvertibleRoofLatchState(vehicle: number, state: boolean): void;

  export function getVehicleEstimatedMaxSpeed(vehicle: number): number;

  export function getVehicleMaxBraking(vehicle: number): number;

  export function getVehicleMaxTraction(vehicle: number): number;

  /**
  * static - max acceleration
  */
  export function getVehicleAcceleration(vehicle: number): number;

  /**
  * Returns max speed (without mods) of the specified vehicle model in m/s.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelEstimatedMaxSpeed(modelHash: number): number;

  /**
  * Returns max braking of the specified vehicle model.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelMaxBraking(modelHash: number): number;

  /**
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelMaxBrakingMaxMods(modelHash: number): number;

  /**
  * Returns max traction of the specified vehicle model.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelMaxTraction(modelHash: number): number;

  /**
  * Returns the acceleration of the specified model.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelAcceleration(modelHash: number): number;

  /**
  * GET_VEHICLE_MODEL_*
  * 9.8 * thrust if air vehicle, else 0.38 + drive force?
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelEstimatedAgility(modelHash: number): number;

  /**
  * GET_VEHICLE_MODEL_*
  * Function pertains only to aviation vehicles.
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleModelMaxKnots(modelHash: number): number;

  /**
  * GET_VEHICLE_MODEL_*
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  * @returns called if the vehicle is a boat -- returns vecMoveResistanceX?
  */
  export function getVehicleModelMoveResistance(modelHash: number): number;

  export function getVehicleClassEstimatedMaxSpeed(vehicleClass: number): number;

  export function getVehicleClassMaxTraction(vehicleClass: number): number;

  export function getVehicleClassMaxAgility(vehicleClass: number): number;

  export function getVehicleClassMaxAcceleration(vehicleClass: number): number;

  export function getVehicleClassMaxBraking(vehicleClass: number): number;

  /**
  * ADD_*
  */
  export function addSpeedZoneForCoord(x: number, y: number, z: number, radius: number, speed: number, p5: boolean): number;

  /**
  * REMOVE_*
  */
  export function removeSpeedZone(speedzone: number): boolean;

  export function openBombBayDoors(vehicle: number): void;

  export function closeBombBayDoors(vehicle: number): void;

  /**
  * Returns true when the bomb bay doors of this plane are open. False if they're closed.
  */
  export function areBombBayDoorsOpen(aircraft: number): boolean;

  /**
  * @Author Nac
  * @returns Possibly: Returns whether the searchlight (found on police vehicles) is toggled on.
  */
  export function isVehicleSearchlightOn(vehicle: number): boolean;

  /**
  * Only works during nighttime.
  */
  export function setVehicleSearchlight(heli: number, toggle: boolean, canBeUsedByAI: boolean): void;

  export function doesVehicleHaveSearchlight(vehicle: number): boolean;

  export function _0x639431E895B9AA57(ped: number, vehicle: number, p2: boolean, p3: boolean, p4: boolean): boolean;

  export function getEntryPositionOfDoor(vehicle: number, doorIndex: number): Vector3;

  export function canShuffleSeat(vehicle: number, seatIndex: number): boolean;

  export function getNumModKits(vehicle: number): number;

  /**
  * Set modKit to 0 if you plan to call SET_VEHICLE_MOD. That's what the game does. Most body modifications through SET_VEHICLE_MOD will not take effect until this is set to 0.
  * Full list of vehicle mod kits and mods by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicleModKits.json
  */
  export function setVehicleModKit(vehicle: number, modKit: number): void;

  export function getVehicleModKit(vehicle: number): number;

  export function getVehicleModKitType(vehicle: number): number;

  /**
  * Returns an int
  * Wheel Types:
  * 0: Sport
  * 1: Muscle
  * 2: Lowrider
  * 3: SUV
  * 4: Offroad
  * 5: Tuner
  * 6: Bike Wheels
  * See NativeDB for reference: http://natives.altv.mp/#/0xB3ED1BFB4BE636DC
  */
  export function getVehicleWheelType(vehicle: number): number;

  /**
  * 0: Sport
  * 1: Muscle
  * 2: Lowrider
  * 3: SUV
  * 4: Offroad
  * 5: Tuner
  * 6: Bike Wheels
  * 7: High End
  */
  export function setVehicleWheelType(vehicle: number, WheelType: number): void;

  /**
  * 0: Normal
  * 1: Metallic
  * 2: Pearl
  * 3: Matte
  * 4: Metal
  * 5: Chrome
  */
  export function getNumModColors(paintType: number, p1: boolean): number;

  /**
  * 0: Normal
  * 1: Metallic
  * 2: Pearl
  * 3: Matte
  * 4: Metal
  * 5: Chrome
  * color: number of the color.
  * @param color https
  * @param pearlescentColor seems to always be 0.
  */
  export function setVehicleModColor1(vehicle: number, paintType: number, color: number, pearlescentColor: number): void;

  /**
  * Changes the secondary paint type and color
  * 0: Normal
  * 1: Metallic
  * 2: Pearl
  * 3: Matte
  * 4: Metal
  * 5: Chrome
  * color: number of the color
  * @param color https
  */
  export function setVehicleModColor2(vehicle: number, paintType: number, color: number): void;

  export function getVehicleModColor1(vehicle: number, paintType: number, color: number, pearlescentColor: number): [void, number, number, number];

  export function getVehicleModColor2(vehicle: number, paintType: number, color: number): [void, number, number];

  /**
  * returns a string which is the codename of the vehicle's currently selected primary color
  * @param p1 is always 0
  */
  export function getVehicleModColor1Name(vehicle: number, p1: boolean): string;

  /**
  * returns a string which is the codename of the vehicle's currently selected secondary color
  */
  export function getVehicleModColor2Name(vehicle: number): string;

  export function haveVehicleModsStreamedIn(vehicle: number): boolean;

  /**
  * In b944, there are 50 (0 - 49) mod types.
  * Sets the vehicle mod.
  * The vehicle must have a mod kit first.
  * Any out of range ModIndex is stock.
  * #Mod Type
  * Spoilers - 0
  * Front Bumper - 1
  * Rear Bumper - 2
  * Side Skirt - 3
  * See NativeDB for reference: http://natives.altv.mp/#/0x6AF0636DDEDCB6DD
  */
  export function setVehicleMod(vehicle: number, modType: number, modIndex: number, customTires: boolean): void;

  /**
  * In b944, there are 50 (0 - 49) mod types.
  * Returns -1 if the vehicle mod is stock
  */
  export function getVehicleMod(vehicle: number, modType: number): number;

  /**
  * @returns Only used for wheels(ModType = 23/24) Returns true if the wheels are custom wheels
  */
  export function getVehicleModVariation(vehicle: number, modType: number): boolean;

  /**
  * Returns how many possible mods a vehicle has for a given mod type
  */
  export function getNumVehicleMods(vehicle: number, modType: number): number;

  export function removeVehicleMod(vehicle: number, modType: number): void;

  /**
  * Toggles:
  * UNK17 - 17
  * Turbo - 18
  * UNK19 - 19
  * Tire Smoke - 20
  * UNK21 - 21
  * Xenon Headlights - 22
  */
  export function toggleVehicleMod(vehicle: number, modType: number, toggle: boolean): void;

  export function isToggleModOn(vehicle: number, modType: number): boolean;

  /**
  * Returns the text label of a mod type for a given vehicle
  * Use _GET_LABEL_TEXT to get the part name in the game's language
  */
  export function getModTextLabel(vehicle: number, modType: number, modValue: number): string;

  /**
  * Returns the name for the type of vehicle mod(Armour, engine etc)
  */
  export function getModSlotName(vehicle: number, modType: number): string;

  /**
  * Second Param = LiveryIndex
  * example
  * int count = VEHICLE::GET_VEHICLE_LIVERY_COUNT(veh);
  * for (int i = 0; i < count; i++)
  * {
  * const char* LiveryName = VEHICLE::GET_LIVERY_NAME(veh, i);
  * }
  * this example will work fine to fetch all names
  * for example for Sanchez we get
  * See NativeDB for reference: http://natives.altv.mp/#/0xB4C7A93837C91A1F
  */
  export function getLiveryName(vehicle: number, liveryIndex: number): string;

  export function getVehicleModModifierValue(vehicle: number, modType: number, modIndex: number): number;

  /**
  * Can be used for IS_DLC_VEHICLE_MOD and _0xC098810437312FFF
  */
  export function getVehicleModIdentifierHash(vehicle: number, modType: number, modIndex: number): number;

  export function preloadVehicleMod(p0: any, modType: number, p2: any): void;

  export function hasPreloadModsFinished(p0: any): boolean;

  export function releasePreloadMods(vehicle: number): void;

  /**
  * Sets the tire smoke's color of this vehicle.
  * Note:
  * setting r,g,b to 0 will give the car independance day tyre smoke
  * @param vehicle The vehicle that is the target of this method.
  * @param r The red level in the RGB color code.
  * @param g The green level in the RGB color code.
  * @param b The blue level in the RGB color code.
  */
  export function setVehicleTyreSmokeColor(vehicle: number, r: number, g: number, b: number): void;

  export function getVehicleTyreSmokeColor(vehicle: number, r: number, g: number, b: number): [void, number, number, number];

  /**
  * enum WindowTints
  * {
  * WINDOWTINT_NONE,
  * WINDOWTINT_PURE_BLACK,
  * WINDOWTINT_DARKSMOKE,
  * WINDOWTINT_LIGHTSMOKE,
  * WINDOWTINT_STOCK,
  * WINDOWTINT_LIMO,
  * WINDOWTINT_GREEN
  * };
  */
  export function setVehicleWindowTint(vehicle: number, tint: number): void;

  export function getVehicleWindowTint(vehicle: number): number;

  export function getNumVehicleWindowTints(): number;

  /**
  * What's this for? Primary and Secondary RGB have their own natives and this one doesn't seem specific.
  */
  export function getVehicleColor(vehicle: number, r: number, g: number, b: number): [void, number, number, number];

  /**
  * Some kind of flags.
  */
  export function _0xEEBFC7A7EFDC35B4(vehicle: number): number;

  /**
  * iVar3 = get_vehicle_cause_of_destruction(uLocal_248[iVar2]);
  * if (iVar3 == joaat("weapon_stickybomb"))
  * {
  * func_171(726);
  * iLocal_260 = 1;
  * }
  */
  export function getVehicleCauseOfDestruction(vehicle: number): number;

  /**
  * Sets some health value. Looks like it's used for helis.
  */
  export function _0x5EE5632F47AE9695(vehicle: number, health: number): void;

  /**
  * From the driver's perspective, is the left headlight broken.
  */
  export function getIsLeftVehicleHeadlightDamaged(vehicle: number): boolean;

  /**
  * From the driver's perspective, is the right headlight broken.
  */
  export function getIsRightVehicleHeadlightDamaged(vehicle: number): boolean;

  /**
  * Only ever used once in decompiled scripts: **am_pi_menu**:
  * Returns true if the engine is on fire, or if the vehicle engine health is < 0 and it **has been** on fire.
  * This usually returns true even if there are no visible flames yet (engine health > 0). However if you monitor engine health you'll see that it starts decreasing as soon as this returns true.
  * @returns It sometimes doesn't return true when the vehicle engine has been on fire, and has since been fixed. I'm not really sure what the exact conditions are.
  */
  export function isVehicleEngineOnFire(vehicle: number): boolean;

  export function modifyVehicleTopSpeed(vehicle: number, value: number): void;

  /**
  * To reset the max speed, set the `speed` value to `0.0` or lower.
  */
  export function setVehicleMaxSpeed(vehicle: number, speed: number): void;

  /**
  * Has something to do with trains. Always precedes SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED.
  * May be true that it can be used with trains not sure, but not specifically for trains. Go find Xbox360 decompiled scripts and search for 'func_1333' in freemode.c it isn't used just for trains. Thanks for the info tho.
  */
  export function _0x1CF38D529D7441D9(vehicle: number, toggle: boolean): void;

  export function _0x1F9FB66F3A3842D2(vehicle: number, p1: boolean): void;

  /**
  * Sets some bit and float of vehicle. float is >= 0
  * SET_VEHICLE_*
  */
  export function _0x59C3757B3B7408E8(vehicle: number, toggle: boolean, p2: number): void;

  export function addVehicleCombatAngledAvoidanceArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): any;

  export function removeVehicleCombatAvoidanceArea(p0: any): void;

  export function isAnyPassengerRappelingFromVehicle(vehicle: number): boolean;

  /**
  * <1.0 - Decreased torque
  * =1.0 - Default torque
  * >1.0 - Increased torque
  * Negative values will cause the vehicle to go backwards instead of forwards while accelerating.
  * This needs to be called every frame to take effect.
  * @param value - is between 0.2 and 1.8 in the decompiled scripts.
  */
  export function setVehicleCheatPowerIncrease(vehicle: number, value: number): void;

  export function _0x0AD9E8F87FF7C16F(p0: any, p1: boolean): void;

  /**
  * Sets the wanted state of this vehicle.
  */
  export function setVehicleIsWanted(vehicle: number, state: boolean): void;

  /**
  * Sets the boat boom position for the `TR3` trailer.
  * To get the current boom position ratio, use GET_BOAT_BOOM_POSITION_RATIO
  * @param ratio value is between `0.0` and `1.0`, where `0.0` is 90 degrees to the left of the boat, and `1.0` is just slightly to the right/back of the boat.
  */
  export function setBoatBoomPositionRatio(vehicle: number, ratio: number): void;

  /**
  * Same call as VEHICLE::_0x0F3B4D4E43177236
  */
  export function getBoatBoomPositionRatio2(vehicle: number, p1: boolean): void;

  export function getBoatBoomPositionRatio3(vehicle: number, p1: boolean): void;

  export function getBoatBoomPositionRatio(vehicle: number): number;

  export function disablePlaneAileron(vehicle: number, p1: boolean, p2: boolean): void;

  /**
  * Returns true when in a vehicle, false whilst entering/exiting.
  */
  export function getIsVehicleEngineRunning(vehicle: number): boolean;

  export function setVehicleUseAlternateHandling(vehicle: number, toggle: boolean): void;

  /**
  * Only works on bikes, both X and Y work in the -1 - 1 range.
  * Example with X -1/Y 1
  * http://i.imgur.com/TgIuAPJ.jpg
  * @param x forces the bike to turn left or right (-1, 1)
  * @param y forces the bike to lean to the left or to the right (-1, 1)
  */
  export function setBikeOnStand(vehicle: number, x: number, y: number): void;

  export function _0xAB04325045427AAE(vehicle: number, p1: boolean): void;

  /**
  * what does this do?
  */
  export function _0xCFD778E7904C255E(vehicle: number): void;

  export function setLastDrivenVehicle(vehicle: number): void;

  export function getLastDrivenVehicle(): number;

  export function clearLastDrivenVehicle(): void;

  export function setVehicleHasBeenDrivenFlag(vehicle: number, toggle: boolean): void;

  export function setTaskVehicleGotoPlaneMinHeightAboveTerrain(plane: number, height: number): void;

  export function setVehicleLodMultiplier(vehicle: number, multiplier: number): void;

  export function setVehicleCanSaveInGarage(vehicle: number, toggle: boolean): void;

  /**
  * Also includes some "turnOffBones" when vehicle mods are installed.
  */
  export function getVehicleNumberOfBrokenOffBones(vehicle: number): number;

  export function getVehicleNumberOfBrokenBones(vehicle: number): number;

  export function _0x4D9D109F63FEE1D4(p0: any, p1: boolean): void;

  /**
  * SET_VEHICLE_*
  */
  export function _0x279D50DE5652D935(vehicle: number, toggle: boolean): void;

  /**
  * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
  */
  export function copyVehicleDamages(sourceVehicle: number, targetVehicle: number): void;

  export function _0xF25E02CB9C5818F8(): void;

  export function setLightsCutoffDistanceTweak(distance: number): void;

  /**
  * Commands the driver of an armed vehicle (p0) to shoot its weapon at a target (p1). p3, p4 and p5 are the coordinates of the target. Example:
  * WEAPON::SET_CURRENT_PED_VEHICLE_WEAPON(pilot,MISC::GET_HASH_KEY("VEHICLE_WEAPON_PLANE_ROCKET"));                        VEHICLE::SET_VEHICLE_SHOOT_AT_TARGET(pilot, target, targPos.x, targPos.y, targPos.z);
  */
  export function setVehicleShootAtTarget(driver: number, entity: number, xTarget: number, yTarget: number, zTarget: number): void;

  export function getVehicleLockOnTarget(vehicle: number, entity: number): [boolean, number];

  export function setForceHdVehicle(vehicle: number, toggle: boolean): void;

  export function _0x182F266C2D9E2BEB(vehicle: number, p1: number): void;

  export function getVehiclePlateType(vehicle: number): number;

  /**
  * in script hook .net
  * Function.Call(Hash.TRACK_VEHICLE_VISIBILITY, v.Handle);
  * @param vehicle v = ...;
  */
  export function trackVehicleVisibility(vehicle: number): void;

  /**
  * must be called after TRACK_VEHICLE_VISIBILITY
  * it's not instant so probabilly must pass an 'update' to see correct result.
  */
  export function isVehicleVisible(vehicle: number): boolean;

  export function setVehicleGravity(vehicle: number, toggle: boolean): void;

  /**
  * Enable/Disables global slipstream physics
  */
  export function setEnableVehicleSlipstreaming(toggle: boolean): void;

  export function _0xF051D9BFB6BA39C0(p0: any): void;

  /**
  * Returns a float value between 0.0 and 3.0 related to its slipstream draft (boost/speedup).
  * GET_VEHICLE_*
  */
  export function getVehicleCurrentSlipstreamDraft(vehicle: number): number;

  /**
  * Returns true if the vehicle is being slipstreamed by another vehicle
  */
  export function isVehicleSlipstreamLeader(vehicle: number): boolean;

  export function setVehicleInactiveDuringPlayback(vehicle: number, toggle: boolean): void;

  export function setVehicleActiveDuringPlayback(p0: any, p1: boolean): void;

  /**
  * Returns false if the vehicle has the FLAG_NO_RESPRAY flag set.
  */
  export function isVehicleSprayable(vehicle: number): boolean;

  export function setVehicleEngineCanDegrade(vehicle: number, toggle: boolean): void;

  /**
  * Adds some kind of shadow to the vehicle.
  * -1 disables the effect.
  * DISABLE_*
  */
  export function setVehicleShadowEffect(vehicle: number, p1: number, p2: number): void;

  /**
  * Remove the weird shadow applied by _SET_VEHICLE_SHADOW_EFFECT.
  * ENABLE_*
  */
  export function removeVehicleShadowEffect(vehicle: number): void;

  export function isPlaneLandingGearIntact(plane: number): boolean;

  export function arePlanePropellersIntact(plane: number): boolean;

  export function _0x4C815EB175086F84(p0: any, p1: any): any;

  export function setVehicleCanDeformWheels(vehicle: number, toggle: boolean): void;

  export function isVehicleStolen(vehicle: number): boolean;

  export function setVehicleIsStolen(vehicle: number, isStolen: boolean): void;

  /**
  * This native sets the turbulence multiplier. It only works for planes.
  * 0.0 = no turbulence at all.
  * 1.0 = heavy turbulence.
  * Works by just calling it once, does not need to be called every tick.
  */
  export function setPlaneTurbulenceMultiplier(vehicle: number, multiplier: number): void;

  /**
  * ADD_A_MARKER_OVER_VEHICLE was a hash collision!!!
  * Can be used for planes only!
  */
  export function arePlaneWingsIntact(plane: number): boolean;

  /**
  * This native doesn't seem to do anything, might be a debug-only native.
  * Confirmed, it is a debug native.
  */
  export function _0xB264C4D2F2B0A78B(vehicle: number): void;

  export function detachVehicleFromCargobob(vehicle: number, cargobob: number): void;

  export function detachVehicleFromAnyCargobob(vehicle: number): boolean;

  export function detachEntityFromCargobob(cargobob: number, entity: number): any;

  export function isVehicleAttachedToCargobob(cargobob: number, vehicleAttached: number): boolean;

  /**
  * Returns attached vehicle (Vehicle in parameter must be cargobob)
  */
  export function getVehicleAttachedToCargobob(cargobob: number): number;

  export function getEntityAttachedToCargobob(p0: any): any;

  export function attachVehicleToCargobob(vehicle: number, cargobob: number, p2: number, x: number, y: number, z: number): void;

  export function attachEntityToCargobob(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;

  /**
  * Stops cargobob from beeing able to detach the attached vehicle.
  */
  export function setCargobobHookCanDetach(cargobob: number, toggle: boolean): void;

  export function _0x1F34B0626C594380(p0: any, p1: any): void;

  export function _0x2C1D8B3B19E517CC(p0: any, p1: any): any;

  /**
  * Gets the position of the cargobob hook, in world coords.
  */
  export function getCargobobHookPosition(cargobob: number): Vector3;

  /**
  * @returns Returns true only when the hook is active, will return false if the magnet is active
  */
  export function doesCargobobHavePickUpRope(cargobob: number): boolean;

  /**
  * Drops the Hook/Magnet on a cargobob
  * state
  * enum eCargobobHook
  * {
  * CARGOBOB_HOOK = 0,
  * CARGOBOB_MAGNET = 1,
  * };
  */
  export function createPickUpRopeForCargobob(cargobob: number, state: number): void;

  /**
  * Retracts the hook on the cargobob.
  * Note: after you retract it the natives for dropping the hook no longer work
  */
  export function removePickUpRopeForCargobob(cargobob: number): void;

  /**
  * min: 1.9f, max: 100.0f
  */
  export function setPickupRopeLengthForCargobob(cargobob: number, length1: number, length2: number, p3: boolean): void;

  export function _0xC0ED6438E6D39BA8(p0: any, p1: any, p2: any): void;

  export function setCargobobPickupRopeDampingMultiplier(p0: any, p1: any): void;

  export function setCargobobPickupRopeType(p0: any, p1: any): void;

  /**
  * @returns Returns true only when the magnet is active, will return false if the hook is active
  */
  export function doesCargobobHavePickupMagnet(cargobob: number): boolean;

  /**
  * Won't attract or magnetize to any helicopters or planes of course, but that's common sense.
  */
  export function setCargobobPickupMagnetActive(cargobob: number, isActive: boolean): void;

  export function setCargobobPickupMagnetStrength(cargobob: number, strength: number): void;

  export function setCargobobPickupMagnetEffectRadius(cargobob: number, p1: number): void;

  export function setCargobobPickupMagnetReducedFalloff(cargobob: number, p1: number): void;

  export function setCargobobPickupMagnetPullRopeLength(cargobob: number, p1: number): void;

  export function setCargobobPickupMagnetPullStrength(cargobob: number, p1: number): void;

  export function setCargobobPickupMagnetFalloff(vehicle: number, p1: number): void;

  export function setCargobobPickupMagnetReducedStrength(vehicle: number, cargobob: number): void;

  export function _0x9BDDC73CC6A115D4(vehicle: number, p1: boolean, p2: boolean): void;

  export function _0x56EB5E94318D3FB6(vehicle: number, p1: boolean): void;

  export function doesVehicleHaveWeapons(vehicle: number): boolean;

  /**
  * SET_VEHICLE_W* (next character is either H or I)
  */
  export function _0x2C4A1590ABF43E8B(vehicle: number, p1: boolean): void;

  /**
  * how does this work?
  */
  export function disableVehicleWeapon(disabled: boolean, weaponHash: number, vehicle: number, owner: number): void;

  export function isVehicleWeaponDisabled(weaponHash: number, vehicle: number, owner: number): boolean;

  export function _0xE05DD0E9707003A3(p0: any, p1: boolean): void;

  export function setVehicleActiveForPedNavigation(vehicle: number, toggle: boolean): void;

  /**
  * Returns an int
  * 0: Compacts
  * 1: Sedans
  * 2: SUVs
  * 3: Coupes
  * 4: Muscle
  * 5: Sports Classics
  * 6: Sports
  * 7: Super
  * See NativeDB for reference: http://natives.altv.mp/#/0x29439776AAA00A62
  * @param vehicle Classes:
  */
  export function getVehicleClass(vehicle: number): number;

  /**
  * For a full enum, see here : pastebin.com/i2GGAjY0
  * char buffer[128];
  * std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS_FROM_NAME (hash));
  * const char* className = HUD::_GET_LABEL_TEXT(buffer);
  * Full list of vehicles by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/vehicles.json
  */
  export function getVehicleClassFromName(modelHash: number): number;

  export function setPlayersLastVehicle(vehicle: number): void;

  export function setVehicleCanBeUsedByFleeingPeds(vehicle: number, toggle: boolean): void;

  export function _0xE5810AC70602F2F5(vehicle: number, p1: number): void;

  /**
  * Money pickups are created around cars when they explode. Only works when the vehicle model is a car. A single pickup is between 1 and 18 dollars in size. All car models seem to give the same amount of money.
  * youtu.be/3arlUxzHl5Y
  * i.imgur.com/WrNpYFs.jpg
  */
  export function setVehicleDropsMoneyWhenBlownUp(vehicle: number, toggle: boolean): void;

  /**
  * i.imgur.com/7XA14pX.png
  * Certain planes got jet engines.
  * @param vehicle :SET_VEHICLE_ENGINE_ON is not enough to start jet engines when not inside the vehicle. But with this native set to true it works: youtu.be/OK0ps2fDpxs
  */
  export function setVehicleJetEngineOn(vehicle: number, toggle: boolean): void;

  /**
  * Seems to copy some values in vehicle
  */
  export function _0x6A973569BA094650(vehicle: number, p1: any): void;

  /**
  * Use the "AIHandling" string found in handling.meta
  */
  export function setVehicleHandlingHashForAi(vehicle: number, hash: number): void;

  /**
  * Max value is 32767
  */
  export function setVehicleExtendedRemovalRange(vehicle: number, range: number): void;

  export function setVehicleSteeringBiasScalar(p0: any, p1: number): void;

  /**
  * value between 0.0 and 1.0
  */
  export function setHelicopterRollPitchYawMult(helicopter: number, multiplier: number): void;

  /**
  * Seems to be related to the metal parts, not tyres (like i was expecting lol)
  */
  export function setVehicleFrictionOverride(vehicle: number, friction: number): void;

  export function setVehicleWheelsCanBreakOffWhenBlowUp(vehicle: number, toggle: boolean): void;

  export function _0xF78F94D60248C737(vehicle: number, p1: boolean): boolean;

  /**
  * Previously named GET_VEHICLE_DEFORMATION_GET_TREE (hash collision)
  * from Decrypted Scripts I found
  * @param vehicle :SET_VEHICLE_CEILING_HEIGHT(l_BD9[22], 420.0);
  */
  export function setVehicleCeilingHeight(vehicle: number, height: number): void;

  export function _0x5E569EC46EC21CAE(vehicle: number, toggle: boolean): void;

  export function clearVehicleRouteHistory(vehicle: number): void;

  export function doesVehicleExistWithDecorator(decorator: string): boolean;

  /**
  * Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER
  * Likely SET_VEHICLE_ALLOW_*
  * Jenkins hash may be wrong, unsure at this time.
  * Toggles a flag related to SET_VEHICLE_EXCLUSIVE_DRIVER, however, doesn't enable that feature (or trigger script events related to it).
  */
  export function _0x41062318F23ED854(vehicle: number, toggle: boolean): void;

  /**
  * Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2
  * @param index 0 - 1
  */
  export function setVehicleExclusiveDriver(vehicle: number, ped: number, index: number): void;

  export function isPedExclusiveDriverOfVehicle(ped: number, vehicle: number, outIndex: number): [boolean, number];

  export function disablePlanePropeller(vehicle: number, p1: any): void;

  export function setVehicleForceAfterburner(vehicle: number, toggle: boolean): void;

  /**
  * R* used it to "remove" vehicle windows when "nightshark" had some mod, which adding some kind of armored windows. When enabled, you can't break vehicles glass. All your bullets wiil shoot through glass. You also will not able to break the glass with any other way (hitting and etc)
  */
  export function setDisableVehicleWindowCollisions(vehicle: number, toggle: boolean): void;

  export function _0x4AD280EB48B2D8E6(vehicle: number, togle: boolean): void;

  /**
  * Sets value for vehicle. Vehicle is a helicopter?
  * _SET_HELICOPTER_*
  */
  export function _0xB68CFAF83A02768D(vehicle: number, toggle: boolean): void;

  /**
  * Sets some float for vehicle (def -1f)
  * SET_VEHICLE_*
  */
  export function _0x0205F5365292D2EB(vehicle: number, p1: number): void;

  export function _0xCF9159024555488C(p0: any): void;

  /**
  * Toggles to render distant vehicles. They may not be vehicles but images to look like vehicles.
  */
  export function setDistantCarsEnabled(toggle: boolean): void;

  /**
  * Sets the color of the neon lights of the specified vehicle.
  * More info: pastebin.com/G49gqy8b
  */
  export function setVehicleNeonLightsColour(vehicle: number, r: number, g: number, b: number): void;

  /**
  * Sets some value for vehicle from array based on index
  * _SET_VEHICLE_*
  */
  export function _0xB93B2867F7B479D1(vehicle: number, index: number): void;

  /**
  * Gets the color of the neon lights of the specified vehicle.
  * See _SET_VEHICLE_NEON_LIGHTS_COLOUR (0x8E0A582209A62695) for more information
  */
  export function getVehicleNeonLightsColour(vehicle: number, r: number, g: number, b: number): [void, number, number, number];

  /**
  * Sets the neon lights of the specified vehicle on/off.
  * Indices:
  * 0 = Left
  * 1 = Right
  * 2 = Front
  * 3 = Back
  */
  export function setVehicleNeonLightEnabled(vehicle: number, index: number, toggle: boolean): void;

  /**
  * indices:
  * 0 = Left
  * 1 = Right
  * 2 = Front
  * 3 = Back
  */
  export function isVehicleNeonLightEnabled(vehicle: number, index: number): boolean;

  export function _0x35E0654F4BAD7971(p0: boolean): void;

  export function disableVehicleNeonLights(vehicle: number, toggle: boolean): void;

  export function _0xB088E9A47AE6EDD5(vehicle: number, p1: boolean): void;

  /**
  * REQUEST_VEHICLE_*
  */
  export function requestVehicleDashboardScaleformMovie(vehicle: number): void;

  /**
  * Seems related to vehicle health, like the one in IV.
  * Max 1000, min 0.
  * @param vehicle does not necessarily explode or become undrivable at 0.
  */
  export function getVehicleBodyHealth(vehicle: number): number;

  /**
  * p2 often set to 1000.0 in the decompiled scripts.
  */
  export function setVehicleBodyHealth(vehicle: number, value: number): void;

  /**
  * Outputs 2 Vector3's.
  * Scripts check if out2.x - out1.x > someshit.x
  * Could be suspension related, as in max suspension height and min suspension height, considering the natives location.
  */
  export function getVehicleSuspensionBounds(vehicle: number, out1: Vector3, out2: Vector3): [void, Vector3, Vector3];

  /**
  * Gets the height of the vehicle's suspension.
  * The higher the value the lower the suspension. Each 0.002 corresponds with one more level lowered.
  * 0.000 is the stock suspension.
  * 0.008 is Ultra Suspension.
  */
  export function getVehicleSuspensionHeight(vehicle: number): number;

  /**
  * Something to do with "high speed bump severity"?
  * if (!sub_87a46("SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER")) {
  * VEHICLE::_84FD40F56075E816(0.0);
  * sub_8795b("SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER", 1);
  * }
  */
  export function setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;

  export function getNumberOfVehicleDoors(vehicle: number): number;

  export function setHydraulicRaised(p0: any, p1: any): void;

  export function _0xA7DCDF4DED40A8F4(vehicle: number, p1: boolean): void;

  /**
  * 0 min 100 max
  * starts at 100
  * Seams to have health zones
  * Front of vehicle when damaged goes from 100-50 and stops at 50.
  * Rear can be damaged from 100-0
  * Only tested with two cars.
  * any idea how this differs from the first one?
  * --
  * example:
  * See NativeDB for reference: http://natives.altv.mp/#/0xB8EF61207C2393A9
  * @returns May return the vehicle health on a scale of 0.0 - 100.0 (needs to be confirmed)
  */
  export function getVehicleBodyHealth2(vehicle: number, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): number;

  /**
  * Only used like this:
  * if (VEHICLE::_D4C4642CB7F50B5D(ENTITY::GET_VEHICLE_INDEX_FROM_ENTITY_INDEX(v_3))) {
  * sub_157e9c(g_40001._f1868, 0);
  * }
  */
  export function _0xD4C4642CB7F50B5D(vehicle: number): boolean;

  export function _0xC361AA040D6637A8(vehicle: number, p1: boolean): void;

  export function setVehicleKersAllowed(vehicle: number, toggle: boolean): void;

  /**
  * Returns true if the vehicle has a kers boost (for instance the lectro or the vindicator)
  */
  export function getVehicleHasKers(vehicle: number): boolean;

  export function _0xE16142B94664DEFD(vehicle: number, p1: boolean): void;

  export function _0x26D99D5A82FD18E8(p0: any): void;

  /**
  * Works only on vehicles that support hydraulic.
  */
  export function setHydraulicWheelValue(vehicle: number, wheelId: number, value: number): void;

  export function setCamberedWheelsDisabled(p0: any, p1: any): void;

  export function setHydraulicWheelState(p0: any, p1: any): void;

  /**
  * Sets vehicle wheel hydraulic states transition. Known states:
  * 0 - reset
  * 1 - raise wheel (uses value arg, works just like _SET_VEHICLE_HYDRAULIC_WHEEL_VALUE)
  * 2 - jump using wheel
  */
  export function setHydraulicWheelStateTransition(vehicle: number, wheelId: number, state: number, value: number, p4: any): void;

  export function _0x5BA68A0840D546AC(p0: any, p1: any): any;

  /**
  * CLEAR_VEHICLE_*
  */
  export function _0x4419966C9936071A(vehicle: number): void;

  export function _0x870B8B7A766615C8(p0: any, p1: any, p2: any): void;

  export function _0x8533CAFDE1F0F336(p0: any): any;

  /**
  * SET_VEHICLE_D*
  */
  export function setVehicleDamageModifier(vehicle: number, p1: number): any;

  export function setVehicleUnkDamageMultiplier(vehicle: number, multiplier: number): void;

  export function _0xD4196117AF7BB974(p0: any, p1: any): any;

  export function _0xBB2333BB87DDD87F(p0: any, p1: any): void;

  export function _0x73561D4425A021A2(p0: any, p1: any): void;

  /**
  * Inverts vehicle's controls. So INPUT_VEH_ACCELERATE will be INPUT_VEH_BRAKE and vise versa (same for A/D controls)
  * Doesn't work for planes/helis.
  */
  export function setVehicleControlsInverted(vehicle: number, state: boolean): void;

  export function _0x7BBE7FF626A591FE(p0: any): void;

  export function _0x65B080555EA48149(p0: any): void;

  /**
  * SET_*
  */
  export function _0x428AD3E26C8D9EB0(vehicle: number, x: number, y: number, z: number, p4: number): void;

  /**
  * RESET_*
  * Resets the effect of 0x428AD3E26C8D9EB0
  */
  export function _0xE2F53F172B45EDE1(): void;

  export function _0xBA91D045575699AD(vehicle: number): boolean;

  export function _0x80E3357FDEF45C21(p0: any, p1: any): void;

  export function setVehicleRampLaunchModifier(p0: any, p1: any): void;

  export function getIsDoorValid(vehicle: number, doorIndex: number): boolean;

  export function setVehicleRocketBoostRefillTime(vehicle: number, seconds: number): void;

  export function getHasRocketBoost(vehicle: number): boolean;

  export function isVehicleRocketBoostActive(vehicle: number): boolean;

  export function setVehicleRocketBoostActive(vehicle: number, active: boolean): void;

  export function getHasRetractableWheels(vehicle: number): boolean;

  export function getIsWheelsLoweredStateActive(vehicle: number): boolean;

  export function raiseRetractableWheels(vehicle: number): void;

  export function lowerRetractableWheels(vehicle: number): void;

  /**
  * Returns true if the vehicle has the FLAG_JUMPING_CAR flag set.
  */
  export function getCanVehicleJump(vehicle: number): boolean;

  /**
  * Allows vehicles with the FLAG_JUMPING_CAR flag to jump higher (i.e. Ruiner 2000).
  */
  export function setUseHigherVehicleJumpForce(vehicle: number, toggle: boolean): void;

  /**
  * SET_C*
  */
  export function _0xB2E0C0D6922D31F2(vehicle: number, toggle: boolean): void;

  /**
  * Set vehicle's primary mounted weapon 2 ammo. For example, use it on APC.
  * For example, you can "remove" any vehicle weapon from any vehicle.
  * ammoAmount -1 = infinite ammo (default value for any spawned vehicle tho)
  */
  export function setVehicleWeaponCapacity(vehicle: number, weaponIndex: number, capacity: number): void;

  export function getVehicleWeaponCapacity(vehicle: number, weaponIndex: number): number;

  export function getVehicleHasParachute(vehicle: number): boolean;

  export function getVehicleCanActivateParachute(vehicle: number): boolean;

  export function setVehicleParachuteActive(vehicle: number, active: boolean): void;

  export function _0x3DE51E9C80B116CF(p0: any): any;

  export function setVehicleReceivesRampDamage(vehicle: number, toggle: boolean): void;

  export function setVehicleRampSidewaysLaunchMotion(p0: any, p1: any): void;

  export function setVehicleRampUpwardsLaunchMotion(p0: any, p1: any): void;

  export function _0x9D30687C57BAA0BB(p0: any): void;

  export function setVehicleWeaponsDisabled(p0: any, p1: any): void;

  export function _0x41290B40FA63E6DA(p0: any): void;

  /**
  * parachuteModel = 230075693
  */
  export function setVehicleParachuteModel(vehicle: number, modelHash: number): void;

  /**
  * colorIndex = 0 - 7
  */
  export function setVehicleParachuteTextureVariatiion(vehicle: number, textureVariation: number): void;

  export function _0x0419B167EE128F33(p0: any, p1: any): any;

  export function _0xF3B0E0AED097A3F5(p0: any, p1: any): any;

  export function _0xD3E51C0AB8C26EEE(p0: any, p1: any): any;

  export function getAllVehicles(vehsStruct: number): [number, number];

  export function _0x72BECCF4B829522E(p0: any, p1: any): void;

  export function _0x66E3AAFACE2D1EB8(p0: any, p1: any, p2: any): void;

  export function _0x1312DDD8385AEE4E(p0: any, p1: any): void;

  export function _0xEDBC8405B3895CC9(p0: any, p1: any): void;

  export function _0x26E13D440E7F6064(vehicle: number, value: number): void;

  export function _0x2FA2494B47FDD009(p0: any, p1: any): void;

  export function setVehicleRocketBoostPercentage(vehicle: number, percentage: number): void;

  /**
  * Set state to true to extend the wings, false to retract them.
  */
  export function setOppressorTransformState(vehicle: number, state: boolean): void;

  export function _0x78CEEE41F49F421F(p0: any, p1: any): void;

  export function _0xAF60E6A2936F982A(p0: any, p1: any): void;

  export function _0x430A7631A84C9BE7(p0: any): void;

  /**
  * Disables collision for this vehicle (maybe it also supports other entities, not sure).
  * Only world/building/fixed world objects will have their collisions disabled, props, peds, or any other entity still collides with the vehicle.
  * Example: https://streamable.com/6n45d5
  * Not sure if there is a native (and if so, which one) that resets the collisions.
  */
  export function disableVehicleWorldCollision(vehicle: number): void;

  /**
  * Sets some value for vehicle
  * SET_VEHICLE_*
  */
  export function _0x8235F1BEAD557629(vehicle: number, toggle: boolean): void;

  export function _0x9640E30A7F395E4B(vehicle: number, p1: any, p2: any, p3: any, p4: any): void;

  export function _0x0BBB9A7A8FFE931B(p0: any, p1: any, p2: any): void;

  /**
  * Stops the cargobob from being able to attach any vehicle
  */
  export function setCargobobHookCanAttach(vehicle: number, toggle: boolean): void;

  /**
  * Sets the amount of bombs that this vehicle has. As far as I know, this does _not_ impact vehicle weapons or the ammo of those weapons in any way, it is just a way to keep track of the amount of bombs in a specific plane.
  */
  export function setVehicleBombCount(vehicle: number, bombCount: number): void;

  /**
  * Gets the amount of bombs that this vehicle has. As far as I know, this does _not_ impact vehicle weapons or the ammo of those weapons in any way, it is just a way to keep track of the amount of bombs in a specific plane.
  */
  export function getVehicleBombCount(vehicle: number): number;

  /**
  * Similar to 0xF4B2ED59DEB5D774, this sets the amount of countermeasures that are present on this vehicle.
  * Use 0xF846AA63DF56B804 to get the current amount.
  */
  export function setVehicleCountermeasureCount(vehicle: number, counterMeasureCount: number): void;

  /**
  * Similar to `0xEA12BD130D7569A1`, this gets the amount of countermeasures that are present on this vehicle.
  * Use 0x9BDA23BF666F0855 to set the current amount.
  */
  export function getVehicleCountermeasureCount(vehicle: number): number;

  /**
  * Used on helicopters
  * SET_HELICOPTER_??
  */
  export function _0x0A3F820A9A9A9AC5(vehicle: number, x: number, y: number, z: number): void;

  /**
  * Used in decompiled scripts in combination with _GET_VEHICLE_SUSPENSION_BOUNDS
  * @param p7 is usually 2
  * @param p8 is usually 1
  */
  export function _0x51F30DB60626A20E(vehicle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: any): boolean;

  /**
  * Sets a flag on heli and another vehicle type.
  * _SET_VEHICLE_??
  */
  export function _0x97841634EF7DF1D6(vehicle: number, toggle: boolean): void;

  export function setVehicleHoverTransformRatio(vehicle: number, ratio: number): void;

  /**
  * According to decompiled scripts this should work with the `deluxo` and `oppressor2` vehicles.
  * I've only seen this work for `deluxo` though, can't figure out what it's supposed to do on `oppressor2`.
  * For the deluxo:
  * - Set `state` to `0.0`: Fully transform to a 'road' vehicle (non-hover mode).
  * - Set `state` to `1.0`: Fully transform to a 'flying' vehicle (hover mode).
  * If you set it to something like 0.5, then something [weird happens](https://streamable.com/p6wmr), you end up in some 50% hover mode, 50% not hover mode.
  * This doesn't need to be called every tick, just once and the vehicle will transform to that state at the usual transform speed. It'll just stop transforming when it reaches the state you provided.
  * Once this native is used then players will just be able to hit the vehicle transform key to toggle the transformation cycle; it won't block users from using the key.
  */
  export function setVehicleHoverTransformPercentage(vehicle: number, percentage: number): void;

  /**
  * It will override the ability to transform deluxo. For oppressor it will work just like 0x2D55FE374D5FDB91
  */
  export function setVehicleHoverTransformEnabled(vehicle: number, toggle: boolean): void;

  /**
  * Disables "wings" for some flying vehicles. Works only for oppressor _2_ and deluxo.
  * For deluxo it just immediately removes vehicle's "wings" and you will be not able to fly up.
  * For oppressor 2 it will remove wings right after you land. And you will not able to fly up anymore too.
  * But for opressor 2 you still can fly if you somehow get back in the air.
  */
  export function setVehicleHoverTransformActive(vehicle: number, toggle: boolean): void;

  export function _0x3A9128352EAC9E85(p0: any): any;

  /**
  * Native is significantly more complicated than simply generating a random vector & length.
  * The 'point' is either 400.0 or 250.0 units away from the Ped's current coordinates; and paths into functions like rage::grcViewport___IsSphereVisible
  */
  export function findRandomPointInSpace(ped: number): Vector3;

  /**
  * Only used with the "akula" in the decompiled native scripts.
  */
  export function setDeployHeliStubWings(vehicle: number, p1: boolean, p2: boolean): void;

  /**
  * Only used with the "akula" in the decompiled native scripts.
  */
  export function areHeliStubWingsDeployed(vehicle: number): boolean;

  /**
  * Sets some vehicle value
  * _SET_VEHICLE_?
  */
  export function _0xAA653AE61924B0A0(vehicle: number, toggle: boolean): void;

  /**
  * Toggles specific flag on turret
  */
  export function setVehicleTurretUnk(vehicle: number, index: number, toggle: boolean): void;

  export function setSpecialflightWingRatio(vehicle: number, ratio: number): void;

  /**
  * Disables turret movement when called in a loop. You can still fire and aim. You cannot shoot backwards though.
  */
  export function setDisableTurretMovementThisFrame(vehicle: number, turretId: number): void;

  /**
  * Sets some vehicle value to 1
  * SET_VEHICLE_??
  */
  export function _0x887FA38787DE8C72(vehicle: number): void;

  export function setUnkFloat0x104ForSubmarineVehicleTask(vehicle: number, value: number): void;

  export function setUnkBool0x102ForSubmarineVehicleTask(vehicle: number, value: boolean): void;

  /**
  * Does nothing. It's a nullsub.
  */
  export function _0x36DE109527A2C0C4(toggle: boolean): void;

  /**
  * Does nothing. It's a nullsub.
  */
  export function _0x82E0AC411E41A5B4(toggle: boolean): void;

  /**
  * Does nothing. It's a nullsub.
  */
  export function _0x99A05839C46CE316(toggle: boolean): void;

  export function getIsVehicleShuntBoostActive(vehicle: number): boolean;

  /**
  * GET_H*
  */
  export function _0xE8718FAF591FD224(vehicle: number): boolean;

  /**
  * Returns last vehicle that was rammed by the given vehicle using the shunt boost.
  */
  export function getLastRammedVehicle(vehicle: number): number;

  export function setDisableVehicleUnk(toggle: boolean): void;

  export function setVehicleNitroEnabled(vehicle: number, toggle: boolean, level: number, power: number, rechargeTime: number, disableSound: boolean): void;

  export function setVehicleWheelsDealDamage(vehicle: number, toggle: boolean): void;

  /**
  * Sets some global vehicle related bool
  */
  export function setDisableVehicleUnk2(toggle: boolean): void;

  export function _0x5BBCF35BF6E456F7(toggle: boolean): void;

  export function getDoesVehicleHaveTombstone(vehicle: number): boolean;

  /**
  * Disables detachable bumber from domnator4, dominator5, dominator6, see https://gfycat.com/SecondUnluckyGosling
  */
  export function hideVehicleTombstone(vehicle: number, toggle: boolean): void;

  /**
  * Returns whether this vehicle is currently disabled by an EMP mine.
  */
  export function getIsVehicleEmpDisabled(vehicle: number): boolean;

  export function _0x8F0D5BA1C2CC91D7(toggle: boolean): void;

  export function getTyreHealth(vehicle: number, wheelIndex: number): number;

  export function setTyreHealth(vehicle: number, wheelIndex: number, health: number): void;

  export function getTyreWearMultiplier(vehicle: number, wheelIndex: number): number;

  export function setTyreWearMultiplier(vehicle: number, wheelIndex: number, multiplier: number): void;

  export function _0xC970D0E0FC31D768(vehicle: number, wheelIndex: number, p2: number): void;

  export function _0xF8B49F5BA7F850E7(vehicle: number, p1: number): void;

  /**
  * This function set height to the value of z-axis of the water surface.
  * note: seems to return true when you are in water
  * @returns This function works with sea and lake. However it does not work with shallow rivers (e.g. raton canyon will return -100000.0f)
  */
  export function getWaterHeight(x: number, y: number, z: number, height: number): [boolean, number];

  export function getWaterHeightNoWaves(x: number, y: number, z: number, height: number): [boolean, number];

  export function testProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, result: Vector3): [boolean, Vector3];

  export function testProbeAgainstAllWater(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): boolean;

  export function testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: any, height: number): [boolean, number];

  /**
  * Sets the water height for a given position and radius.
  */
  export function modifyWater(x: number, y: number, radius: number, height: number): void;

  /**
  * Most likely ADD_CURRENT_*
  */
  export function addCurrentRise(x: number, y: number, z: number, radius: number, unk: number): number;

  /**
  * Most likely REMOVE_CURRENT_*
  * @param p0 is the handle returned from _0xFDBF4CDBC07E1706
  */
  export function removeCurrentRise(p0: number): void;

  /**
  * Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.
  * Works only ~200 meters around the player.
  */
  export function setDeepOceanScaler(intensity: number): void;

  /**
  * Gets the aggressiveness factor of the ocean waves.
  */
  export function getDeepOceanScaler(): number;

  export function _0x547237AA71AB44DE(p0: number): void;

  /**
  * Sets the waves intensity back to original (1.0 in most cases).
  */
  export function resetDeepOceanScaler(): void;

  /**
  * Enables laser sight on any weapon.
  * It doesn't work. Neither on tick nor OnKeyDown
  */
  export function enableLaserSightRendering(toggle: boolean): void;

  export function getWeaponComponentTypeModel(componentHash: number): number;

  /**
  * Returns the model of any weapon.
  * Can also take an ammo hash?
  * sub_6663a(&l_115B, WEAPON::GET_WEAPONTYPE_MODEL(${ammo_rpg}));
  */
  export function getWeapontypeModel(weaponHash: number): number;

  export function getWeapontypeSlot(weaponHash: number): number;

  export function getWeapontypeGroup(weaponHash: number): number;

  /**
  * Returns the amount of extra components the specified component has.
  * Returns -1 if the component isn't of type CWeaponComponentVariantModel.
  */
  export function getWeaponComponentVariantExtraComponentCount(componentHash: number): number;

  /**
  * Returns the model hash of the extra component at specified index.
  */
  export function getWeaponComponentVariantExtraComponentModel(componentHash: number, extraComponentIndex: number): number;

  export function setCurrentPedWeapon(ped: number, weaponHash: number, bForceInHand: boolean): void;

  /**
  * p2 is not implemented
  * disassembly said that?
  * @param p2 seems to be 1 most of the time.
  * @returns The return value seems to indicate returns true if the hash of the weapon object weapon equals the weapon hash.
  */
  export function getCurrentPedWeapon(ped: number, weaponHash: number, p2: boolean): [boolean, number];

  export function getCurrentPedWeaponEntityIndex(ped: number, p1: any): number;

  /**
  * @param p1 is always 0 in the scripts.
  */
  export function getBestPedWeapon(ped: number, p1: boolean): number;

  export function setCurrentPedVehicleWeapon(ped: number, weaponHash: number): boolean;

  /**
  * Example in VB
  * Public Shared Function GetVehicleCurrentWeapon(Ped As Ped) As Integer
  * Dim arg As New OutputArgument()
  * Native.Function.Call(Hash.GET_CURRENT_PED_VEHICLE_WEAPON, Ped, arg)
  * End Function
  * Usage:
  * If GetVehicleCurrentWeapon(Game.Player.Character) = -821520672 Then ...Do something
  * Note: -821520672 = VEHICLE_WEAPON_PLANE_ROCKET
  * @returns         Return arg.GetResult(Of Integer)()
  */
  export function getCurrentPedVehicleWeapon(ped: number, weaponHash: number): [boolean, number];

  /**
  * SET_PED_*
  */
  export function _0x50276EF8172F5F12(ped: number): void;

  /**
  * Checks if the ped is currently equipped with a weapon matching a bit specified using a bitwise-or in typeFlags.
  * Type flag bit values:
  * 1 = Melee weapons
  * 2 = Explosive weapons
  * 4 = Any other weapons
  * Not specifying any bit will lead to the native *always* returning 'false', and for example specifying '4 | 2' will check for any weapon except fists and melee weapons.
  * 6 returns true if you are equipped with any weapon except melee weapons.
  * 5 returns true if you are equipped with any weapon except the Explosives weapon group.
  * 4 returns true if you are equipped with any weapon except Explosives weapon group AND melee weapons.
  * See NativeDB for reference: http://natives.altv.mp/#/0x475768A975D5AD17
  * @returns 7 returns true if you are equipped with any weapon except your fists.
  */
  export function isPedArmed(ped: number, typeFlags: number): boolean;

  export function isWeaponValid(weaponHash: number): boolean;

  /**
  * Bool does not check if the weapon is current equipped, unfortunately.
  * @param p2 should be FALSE, otherwise it seems to always return FALSE
  * @returns p2 should be FALSE, otherwise it seems to always return FALSE
  */
  export function hasPedGotWeapon(ped: number, weaponHash: number, p2: boolean): boolean;

  export function isPedWeaponReadyToShoot(ped: number): boolean;

  export function getPedWeapontypeInSlot(ped: number, weaponSlot: number): number;

  /**
  * WEAPON::GET_AMMO_IN_PED_WEAPON(PLAYER::PLAYER_PED_ID(), a_0)
  * From decompiled scripts
  * Returns total ammo in weapon
  * GTALua Example :
  * natives.WEAPON.GET_AMMO_IN_PED_WEAPON(plyPed, WeaponHash)
  */
  export function getAmmoInPedWeapon(ped: number, weaponhash: number): number;

  export function addAmmoToPed(ped: number, weaponHash: number, ammo: number): void;

  export function setPedAmmo(ped: number, weaponHash: number, ammo: number, p3: boolean): void;

  export function setPedInfiniteAmmo(ped: number, toggle: boolean, weaponHash: number): void;

  export function setPedInfiniteAmmoClip(ped: number, toggle: boolean): void;

  export function _0x24C024BA8379A70A(p0: any, p1: any): void;

  export function giveWeaponToPed(ped: number, weaponHash: number, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;

  /**
  * Gives a weapon to PED with a delay, example:
  * WEAPON::GIVE_DELAYED_WEAPON_TO_PED(PED::PLAYER_PED_ID(), MISC::GET_HASH_KEY("WEAPON_PISTOL"), 1000, false)
  */
  export function giveDelayedWeaponToPed(ped: number, weaponHash: number, ammoCount: number, bForceInHand: boolean): void;

  /**
  * setting the last params to false it does that same so I would suggest its not a toggle
  */
  export function removeAllPedWeapons(ped: number, p1: boolean): void;

  /**
  * This native removes a specified weapon from your selected ped.
  * Weapon Hashes: pastebin.com/0wwDZgkF
  * Example:
  * C#:
  * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
  * C++:
  * WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
  * The code above removes the knife from the player.
  */
  export function removeWeaponFromPed(ped: number, weaponHash: number): void;

  /**
  * Hides the players weapon during a cutscene.
  */
  export function hidePedWeaponForScriptedCutscene(ped: number, toggle: boolean): void;

  /**
  * Has 5 parameters since latest patches.
  */
  export function setPedCurrentWeaponVisible(ped: number, visible: boolean, deselectWeapon: boolean, p3: boolean, p4: boolean): void;

  export function setPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;

  /**
  * It determines what weapons caused damage:
  * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
  * If you want to define any melee weapon, second parameter=0, third parameter=1.
  * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
  */
  export function hasPedBeenDamagedByWeapon(ped: number, weaponHash: number, weaponType: number): boolean;

  /**
  * Does NOT seem to work with HAS_PED_BEEN_DAMAGED_BY_WEAPON. Use CLEAR_ENTITY_LAST_WEAPON_DAMAGE and HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON instead.
  */
  export function clearPedLastWeaponDamage(ped: number): void;

  /**
  * It determines what weapons caused damage:
  * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
  * If you want to define any melee weapon, second parameter=0, third parameter=1.
  * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
  */
  export function hasEntityBeenDamagedByWeapon(entity: number, weaponHash: number, weaponType: number): boolean;

  export function clearEntityLastWeaponDamage(entity: number): void;

  export function setPedDropsWeapon(ped: number): void;

  export function setPedDropsInventoryWeapon(ped: number, weaponHash: number, xOffset: number, yOffset: number, zOffset: number, ammoCount: number): void;

  /**
  * @param p2 is mostly 1 in the scripts.
  */
  export function getMaxAmmoInClip(ped: number, weaponHash: number, p2: boolean): number;

  export function getAmmoInClip(ped: number, weaponHash: number, ammo: number): [boolean, number];

  export function setAmmoInClip(ped: number, weaponHash: number, ammo: number): boolean;

  export function getMaxAmmo(ped: number, weaponHash: number, ammo: number): [boolean, number];

  /**
  * Returns the max ammo for an ammo type. Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
  */
  export function getMaxAmmoByType(ped: number, ammoTypeHash: number, ammo: number): [boolean, number];

  /**
  * @param ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
  */
  export function addAmmoToPedByType(ped: number, ammoTypeHash: number, ammo: number): void;

  /**
  * @param ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
  */
  export function setPedAmmoByType(ped: number, ammoTypeHash: number, ammo: number): void;

  export function getPedAmmoByType(ped: number, ammoTypeHash: number): number;

  export function setPedAmmoToDrop(ped: number, p1: number): void;

  export function setPickupAmmoAmountScaler(p0: number): void;

  /**
  * Returns the current ammo type of the specified ped's specified weapon.
  * Use 0xF489B44DD5AF4BD9 if you always want AMMO_PISTOL.
  * @returns MkII magazines will change the return value, like Pistol MkII returning AMMO_PISTOL without any components and returning AMMO_PISTOL_TRACER after Tracer Rounds component is attached.
  */
  export function getPedAmmoTypeFromWeapon(ped: number, weaponHash: number): number;

  /**
  * Returns the base/default ammo type of the specified ped's specified weapon.
  * Use GET_PED_AMMO_TYPE_FROM_WEAPON if you want current ammo type (like AMMO_MG_INCENDIARY/AMMO_MG_TRACER while using MkII magazines) and use this if you want base ammo type. (AMMO_MG)
  */
  export function getPedAmmoTypeFromWeapon2(ped: number, weaponHash: number): number;

  /**
  * Pass ped. Pass address of Vector3.
  * The coord will be put into the Vector3.
  * @returns The return will determine whether there was a coord found or not.
  */
  export function getPedLastWeaponImpactCoord(ped: number, coords: Vector3): [boolean, Vector3];

  /**
  * p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").
  * @param p2 is always true.
  */
  export function setPedGadget(ped: number, gadgetHash: number, p2: boolean): void;

  /**
  * @param gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").
  */
  export function getIsPedGadgetEquipped(ped: number, gadgetHash: number): boolean;

  /**
  * Returns the hash of the weapon.
  * var num7 = WEAPON::GET_SELECTED_PED_WEAPON(num4);
  * sub_27D3(num7);
  * switch (num7)
  * {
  * case 0x24B17070:
  * Also see WEAPON::GET_CURRENT_PED_WEAPON. Difference?
  * -------------------------------------------------------------------------
  * @returns The difference is that GET_SELECTED_PED_WEAPON simply returns the ped's current weapon hash but GET_CURRENT_PED_WEAPON also checks the weapon object and returns true if the hash of the weapon object equals the weapon hash
  */
  export function getSelectedPedWeapon(ped: number): number;

  /**
  * WEAPON::EXPLODE_PROJECTILES(PLAYER::PLAYER_PED_ID(), func_221(0x00000003), 0x00000001);
  */
  export function explodeProjectiles(ped: number, weaponHash: number, p2: boolean): void;

  /**
  * If `explode` true, then removal is done through exploding the projectile. Basically the same as EXPLODE_PROJECTILES but without defining the owner ped.
  */
  export function removeAllProjectilesOfType(weaponHash: number, explode: boolean): void;

  export function getLockonDistanceOfCurrentPedWeapon(ped: number): number;

  export function getMaxRangeOfCurrentPedWeapon(ped: number): number;

  /**
  * Third Parameter = unsure, but pretty sure it is weapon hash
  * --> get_hash_key("weapon_stickybomb")
  * Fourth Parameter = unsure, almost always -1
  */
  export function hasVehicleGotProjectileAttached(driver: number, vehicle: number, weaponHash: number, p3: any): boolean;

  export function giveWeaponComponentToPed(ped: number, weaponHash: number, componentHash: number): void;

  export function removeWeaponComponentFromPed(ped: number, weaponHash: number, componentHash: number): void;

  export function hasPedGotWeaponComponent(ped: number, weaponHash: number, componentHash: number): boolean;

  export function isPedWeaponComponentActive(ped: number, weaponHash: number, componentHash: number): boolean;

  /**
  * Old name: _PED_SKIP_NEXT_RELOADING
  */
  export function refillAmmoInstantly(ped: number): boolean;

  /**
  * Forces a ped to reload only if they are able to; if they have a full magazine, they will not reload.
  */
  export function makePedReload(ped: number): boolean;

  /**
  * Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.
  * REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);
  */
  export function requestWeaponAsset(weaponHash: number, p1: number, p2: number): void;

  export function hasWeaponAssetLoaded(weaponHash: number): boolean;

  export function removeWeaponAsset(weaponHash: number): void;

  /**
  * Now has 8 params.
  */
  export function createWeaponObject(weaponHash: number, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, scale: number, p7: any, p8: any, p9: any): number;

  /**
  * (use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)
  * ${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
  */
  export function giveWeaponComponentToWeaponObject(weaponObject: number, addonHash: number): void;

  export function removeWeaponComponentFromWeaponObject(p0: any, p1: any): void;

  export function hasWeaponGotWeaponComponent(weapon: number, addonHash: number): boolean;

  export function giveWeaponObjectToPed(weaponObject: number, ped: number): void;

  export function doesWeaponTakeWeaponComponent(weaponHash: number, componentHash: number): boolean;

  /**
  * Unknown behavior when unarmed.
  * @returns Drops the current weapon and returns the object
  */
  export function getWeaponObjectFromPed(ped: number, p1: boolean): number;

  /**
  * GIVE_*
  */
  export function giveLoadoutToPed(ped: number, loadoutHash: number): void;

  /**
  * 0 - Normal
  * 1 - Green
  * 2 - Gold
  * 3 - Pink
  * 4 - Army
  * 5 - LSPD
  * 6 - Orange
  * 7 - Platinum
  * @param tintIndex can be the following:
  */
  export function setPedWeaponTintIndex(ped: number, weaponHash: number, tintIndex: number): void;

  export function getPedWeaponTintIndex(ped: number, weaponHash: number): number;

  export function setWeaponObjectTintIndex(weapon: number, tintIndex: number): void;

  export function getWeaponObjectTintIndex(weapon: number): number;

  export function getWeaponTintCount(weaponHash: number): number;

  /**
  * Colors:
  * 0 = Gray
  * 1 = Dark Gray
  * 2 = Black
  * 3 = White
  * 4 = Blue
  * 5 = Cyan
  * 6 = Aqua
  * 7 = Cool Blue
  * See NativeDB for reference: http://natives.altv.mp/#/0x9FE5633880ECD8ED
  */
  export function setPedWeaponLiveryColor(ped: number, weaponHash: number, camoComponentHash: number, colorIndex: number): void;

  /**
  * Returns -1 if camoComponentHash is invalid/not attached to the weapon.
  */
  export function getPedWeaponLiveryColor(ped: number, weaponHash: number, camoComponentHash: number): number;

  /**
  * Colors:
  * 0 = Gray
  * 1 = Dark Gray
  * 2 = Black
  * 3 = White
  * 4 = Blue
  * 5 = Cyan
  * 6 = Aqua
  * 7 = Cool Blue
  * See NativeDB for reference: http://natives.altv.mp/#/0x5DA825A85D0EA6E6
  */
  export function setWeaponObjectLiveryColor(weaponObject: number, camoComponentHash: number, colorIndex: number): void;

  /**
  * Returns -1 if camoComponentHash is invalid/not attached to the weapon object.
  */
  export function getWeaponObjectLiveryColor(weaponObject: number, camoComponentHash: number): number;

  /**
  * GET_PED_WEAPON_*
  */
  export function _0xA2C9AC24B4061285(ped: number, weaponHash: number): number;

  /**
  * SET_WEAPON_OBJECT_*
  */
  export function _0x977CA98939E82E4B(weaponObject: number, p1: number): void;

  /**
  * struct WeaponHudStatsData
  * {
  * BYTE hudDamage; // 0x0000
  * char _0x0001[0x7]; // 0x0001
  * BYTE hudSpeed; // 0x0008
  * char _0x0009[0x7]; // 0x0009
  * BYTE hudCapacity; // 0x0010
  * char _0x0011[0x7]; // 0x0011
  * BYTE hudAccuracy; // 0x0018
  * See NativeDB for reference: http://natives.altv.mp/#/0xD92C739EE34C9EBA
  */
  export function getWeaponHudStats(weaponHash: number, outData: any): [boolean, any];

  export function getWeaponComponentHudStats(componentHash: number, outData: number): [boolean, number];

  /**
  * @returns This native does not return damages of weapons from the melee and explosive group.
  */
  export function getWeaponDamage(weaponHash: number, componentHash: number): number;

  /**
  * Use it like this:
  * char cClipSize[32];
  * Hash cur;
  * if (WEAPON::GET_CURRENT_PED_WEAPON(playerPed, &cur, 1))
  * {
  * if (WEAPON::IS_WEAPON_VALID(cur))
  * {
  * int iClipSize = WEAPON::GET_WEAPON_CLIP_SIZE(cur);
  * sprintf_s(cClipSize, "ClipSize: %.d", iClipSize);
  * See NativeDB for reference: http://natives.altv.mp/#/0x583BE370B1EC6EB4
  * @returns // Returns the size of the default weapon component clip.
  */
  export function getWeaponClipSize(weaponHash: number): number;

  export function getWeaponTimeBetweenShots(weaponHash: number): number;

  export function setPedChanceOfFiringBlanks(ped: number, xBias: number, yBias: number): void;

  /**
  * Returns handle of the projectile.
  */
  export function setPedShootOrdnanceWeapon(ped: number, p1: number): number;

  export function requestWeaponHighDetailModel(weaponObject: number): void;

  /**
  * Changes the weapon damage output by the given multiplier value. Must be run every frame.
  */
  export function setWeaponDamageModifierThisFrame(weaponHash: number, damageMultiplier: number): void;

  /**
  * @param ped ped = The ped whose weapon you want to check.
  * @returns This native returns a true or false value.
  */
  export function isPedCurrentWeaponSilenced(ped: number): boolean;

  export function isFlashLightOn(ped: number): boolean;

  export function setFlashLightFadeDistance(distance: number): any;

  /**
  * Enables/disables flashlight on ped's weapon.
  */
  export function setFlashLightEnabled(ped: number, toggle: boolean): void;

  /**
  * Changes the selected ped aiming animation style.
  * Note : You must use GET_HASH_KEY!
  * Strings to use with GET_HASH_KEY :
  * "Ballistic",
  * "Default",
  * "Fat",
  * "Female",
  * "FirstPerson",
  * "FirstPersonAiming",
  * See NativeDB for reference: http://natives.altv.mp/#/0x1055AC3A667F09D9
  */
  export function setWeaponAnimationOverride(ped: number, animStyle: number): void;

  /**
  * 0=unknown (or incorrect weaponHash)
  * 1= no damage (flare,snowball, petrolcan)
  * 2=melee
  * 3=bullet
  * 4=force ragdoll fall
  * 5=explosive (RPG, Railgun, grenade)
  * 6=fire(molotov)
  * 8=fall(WEAPON_HELI_CRASH)
  * 10=electric
  * See NativeDB for reference: http://natives.altv.mp/#/0x3BE0BB12D25FB305
  */
  export function getWeaponDamageType(weaponHash: number): number;

  export function _0xE4DCEC7FD5B739A5(ped: number): void;

  /**
  * @returns this returns if you can use the weapon while using a parachute
  */
  export function canUseWeaponOnParachute(weaponHash: number): boolean;

  /**
  * Both coordinates are from objects in the decompiled scripts. Native related to 0xECDC202B25E5CF48 p1 value. The only weapon hash used in the decompiled scripts is weapon_air_defence_gun. These two natives are used by the yacht script, decompiled scripts suggest it and the weapon hash used (valkyrie's rockets) are also used by yachts.
  */
  export function createAirDefenseSphere(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number, weaponHash: number): number;

  export function createAirDefenseArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, weaponHash: number): number;

  export function removeAirDefenseZone(zoneId: number): boolean;

  export function removeAllAirDefenseZones(): void;

  export function setPlayerAirDefenseZoneFlag(player: number, zoneId: number, enable: boolean): void;

  export function isAnyAirDefenseZoneInsideSphere(x: number, y: number, z: number, radius: number, outZoneId: number): [boolean, number];

  export function fireAirDefenseWeapon(zoneId: number, x: number, y: number, z: number): void;

  export function doesAirDefenseZoneExist(zoneId: number): boolean;

  /**
  * Disables selecting the given weapon. Ped isn't forced to put the gun away. However you can't reselect the weapon if you holster then unholster. Weapon is also grayed out on the weapon wheel.
  */
  export function setCanPedEquipWeapon(ped: number, weaponHash: number, toggle: boolean): void;

  /**
  * Disable all weapons. Does the same as 0xB4771B9AAF4E68E4 except for all weapons.
  */
  export function setCanPedEquipAllWeapons(ped: number, toggle: boolean): void;

  export function getZoneAtCoords(x: number, y: number, z: number): number;

  /**
  * 'zoneName' corresponds to an entry in 'popzone.ipl'.
  * AIRP = Los Santos International Airport
  * ALAMO = Alamo Sea
  * ALTA = Alta
  * ARMYB = Fort Zancudo
  * BANHAMC = Banham Canyon Dr
  * BANNING = Banning
  * BEACH = Vespucci Beach
  * BHAMCA = Banham Canyon
  * See NativeDB for reference: http://natives.altv.mp/#/0x98CD1D2934B76CC1
  */
  export function getZoneFromNameId(zoneName: string): number;

  export function getZonePopschedule(zoneId: number): number;

  /**
  * AIRP = Los Santos International Airport
  * ALAMO = Alamo Sea
  * ALTA = Alta
  * ARMYB = Fort Zancudo
  * BANHAMC = Banham Canyon Dr
  * BANNING = Banning
  * BEACH = Vespucci Beach
  * BHAMCA = Banham Canyon
  * BRADP = Braddock Pass
  * See NativeDB for reference: http://natives.altv.mp/#/0xCD90657D4C30E1CA
  */
  export function getNameOfZone(x: number, y: number, z: number): string;

  export function setZoneEnabled(zoneId: number, toggle: boolean): void;

  /**
  * cellphone range 1- 5 used for signal bar in iFruit phone
  */
  export function getZoneScumminess(zoneId: number): number;

  /**
  * Only used once in the decompiled scripts. Seems to be related to scripted vehicle generators.
  * Modified example from "am_imp_exp.c4", line 6406:
  * popSchedules[0] = ZONE::GET_ZONE_POPSCHEDULE(ZONE::GET_ZONE_AT_COORDS(891.3, 807.9, 188.1));
  * etc.
  * 
  * ZONE::OVERRIDE_POPSCHEDULE_VEHICLE_MODEL(popSchedules[index], vehicleHash);
  * STREAMING::REQUEST_MODEL(vehicleHash);
  */
  export function overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: number): void;

  /**
  * Only used once in the decompiled scripts. Seems to be related to scripted vehicle generators.
  * Modified example from "am_imp_exp.c4", line 6418:
  * popSchedules[0] = ZONE::GET_ZONE_POPSCHEDULE(ZONE::GET_ZONE_AT_COORDS(891.3, 807.9, 188.1));
  * etc.
  * 
  * STREAMING::SET_MODEL_AS_NO_LONGER_NEEDED(vehicleHash);
  * ZONE::CLEAR_POPSCHEDULE_OVERRIDE_VEHICLE_MODEL(popSchedules[index]);
  */
  export function clearPopscheduleOverrideVehicleModel(scheduleId: number): void;

  /**
  * Returns a hash representing which part of the map the given coords are located.
  * (Hash of) city -> -289320599
  * (Hash of) countryside -> 2072609373
  * C# Example :
  * Ped player = Game.Player.Character;
  * @param x Function.Call<Hash>(Hash.GET_HASH_OF_MAP_AREA_AT_COORDS, player.Position.X, player.Position.Y, player.Position.Z);
  * @param y Function.Call<Hash>(Hash.GET_HASH_OF_MAP_AREA_AT_COORDS, player.Position.X, player.Position.Y, player.Position.Z);
  * @returns Possible return values:
  */
  export function getHashOfMapAreaAtCoords(x: number, y: number, z: number): number;
}
