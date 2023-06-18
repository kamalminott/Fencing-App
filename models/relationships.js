const User = require('../models/user');
const UserProfile = require('../models/userProfile');
const Match = require('../models/match');
const MatchResult = require('../models/matchResult');
const MatchType = require('../models/matchType');
const ScoreUpdate = require('../models/scoreUpdates')
const Poule = require('../models/poule')
const Tableau = require('../models/tableau')

// Relationships
User.hasOne(UserProfile, { foreignKey: 'UserID' });
UserProfile.belongsTo(User, { foreignKey: 'UserID' });

User.hasMany(Match, { foreignKey: 'UserID' });
Match.belongsTo(User, { foreignKey: 'UserID' });

MatchType.hasMany(Match, { foreignKey: 'TypeID' });
Match.belongsTo(MatchType, { foreignKey: 'TypeID' });

Match.hasMany(MatchResult, { foreignKey: 'MatchID' });
MatchResult.belongsTo(Match, { foreignKey: 'MatchID' });

Match.hasMany(ScoreUpdate, { foreignKey: 'MatchID' });
ScoreUpdate.belongsTo(Match, { foreignKey: 'MatchID' });

Match.hasOne(Poule, { foreignKey: 'MatchID' });
Poule.belongsTo(Match, { foreignKey: 'MatchID' });

Match.hasOne(Tableau, { foreignKey: 'MatchID' });
Tableau.belongsTo(Match, { foreignKey: 'MatchID' });