Search.setIndex({docnames:["Checkpoint","Data","Decode","Etc","Evaluator","Model","Optim","Trainer","index","notes/Data-Analysis","notes/Preparation","notes/intro","notes/opts"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["Checkpoint.rst","Data.rst","Decode.rst","Etc.rst","Evaluator.rst","Model.rst","Optim.rst","Trainer.rst","index.rst","notes\\Data-Analysis.md","notes\\Preparation.md","notes\\intro.md","notes\\opts.md"],objects:{"kospeech.checkpoint":{checkpoint:[0,0,0,"-"]},"kospeech.checkpoint.checkpoint":{Checkpoint:[0,1,1,""]},"kospeech.checkpoint.checkpoint.Checkpoint":{get_latest_checkpoint:[0,2,1,""],load:[0,2,1,""],save:[0,2,1,""]},"kospeech.data":{data_loader:[1,0,0,"-"],label_loader:[1,0,0,"-"]},"kospeech.data.audio":{augment:[1,0,0,"-"],core:[1,0,0,"-"],feature:[1,0,0,"-"],parser:[1,0,0,"-"]},"kospeech.data.audio.augment":{NoiseInjector:[1,1,1,""],SpecAugment:[1,1,1,""]},"kospeech.data.audio.core":{load_audio:[1,3,1,""],split:[1,3,1,""]},"kospeech.data.audio.feature":{MFCC:[1,1,1,""],MelSpectrogram:[1,1,1,""],Spectrogram:[1,1,1,""]},"kospeech.data.audio.parser":{AudioParser:[1,1,1,""],SpectrogramParser:[1,1,1,""]},"kospeech.data.audio.parser.SpectrogramParser":{parse_audio:[1,2,1,""]},"kospeech.data.data_loader":{AudioDataLoader:[1,1,1,""],MultiDataLoader:[1,1,1,""],SpectrogramDataset:[1,1,1,""],load_data_list:[1,3,1,""],split_dataset:[1,3,1,""]},"kospeech.data.data_loader.AudioDataLoader":{run:[1,2,1,""]},"kospeech.data.data_loader.MultiDataLoader":{join:[1,2,1,""],start:[1,2,1,""]},"kospeech.data.data_loader.SpectrogramDataset":{augmentation:[1,2,1,""],get_item:[1,2,1,""],parse_transcript:[1,2,1,""],shuffle:[1,2,1,""]},"kospeech.data.label_loader":{load_label:[1,3,1,""],load_targets:[1,3,1,""]},"kospeech.decode":{ensemble:[2,0,0,"-"],search:[2,0,0,"-"]},"kospeech.decode.ensemble":{BasicEnsemble:[2,1,1,""],Ensemble:[2,1,1,""],WeightedEnsemble:[2,1,1,""]},"kospeech.decode.ensemble.BasicEnsemble":{forward:[2,2,1,""]},"kospeech.decode.ensemble.Ensemble":{forward:[2,2,1,""]},"kospeech.decode.ensemble.WeightedEnsemble":{forward:[2,2,1,""]},"kospeech.decode.search":{BeamSearch:[2,1,1,""],EnsembleSearch:[2,1,1,""],GreedySearch:[2,1,1,""]},"kospeech.evaluator":{evaluator:[4,0,0,"-"]},"kospeech.evaluator.evaluator":{Evaluator:[4,1,1,""]},"kospeech.evaluator.evaluator.Evaluator":{evaluate:[4,2,1,""]},"kospeech.metrics":{CharacterErrorRate:[3,1,1,""],ErrorRate:[3,1,1,""],WordErrorRate:[3,1,1,""]},"kospeech.metrics.CharacterErrorRate":{metric:[3,2,1,""]},"kospeech.metrics.WordErrorRate":{metric:[3,2,1,""]},"kospeech.model":{attention:[5,0,0,"-"],base:[5,0,0,"-"],beam_search:[5,0,0,"-"],conv:[5,0,0,"-"],decoder:[5,0,0,"-"],encoder:[5,0,0,"-"],las:[5,0,0,"-"],lm:[5,0,0,"-"]},"kospeech.model.attention":{LocationAwareAttention:[5,1,1,""],MultiHeadAttention:[5,1,1,""]},"kospeech.model.attention.LocationAwareAttention":{forward:[5,2,1,""]},"kospeech.model.attention.MultiHeadAttention":{forward:[5,2,1,""]},"kospeech.model.base":{BaseRNN:[5,1,1,""]},"kospeech.model.base.BaseRNN":{forward:[5,2,1,""]},"kospeech.model.beam_search":{BeamSearchDecoder:[5,1,1,""]},"kospeech.model.beam_search.BeamSearchDecoder":{forward:[5,2,1,""],get_length_penalty:[5,2,1,""]},"kospeech.model.conv":{CNNExtractor:[5,1,1,""],DeepSpeech2Extractor:[5,1,1,""],MaskConv:[5,1,1,""],VGGExtractor:[5,1,1,""]},"kospeech.model.conv.CNNExtractor":{forward:[5,2,1,""]},"kospeech.model.conv.DeepSpeech2Extractor":{forward:[5,2,1,""]},"kospeech.model.conv.MaskConv":{forward:[5,2,1,""],get_seq_lengths:[5,2,1,""]},"kospeech.model.conv.VGGExtractor":{forward:[5,2,1,""]},"kospeech.model.decoder":{Speller:[5,1,1,""]},"kospeech.model.decoder.Speller":{forward:[5,2,1,""],validate_args:[5,2,1,""]},"kospeech.model.encoder":{Listener:[5,1,1,""]},"kospeech.model.encoder.Listener":{forward:[5,2,1,""]},"kospeech.model.las":{ListenAttendSpell:[5,1,1,""]},"kospeech.model.las.ListenAttendSpell":{forward:[5,2,1,""]},"kospeech.model.lm":{RNNLanguageModel:[5,1,1,""]},"kospeech.model.lm.RNNLanguageModel":{forward:[5,2,1,""],forward_step:[5,2,1,""]},"kospeech.model_builder":{build_las:[3,3,1,""],build_listener:[3,3,1,""],build_model:[3,3,1,""],build_speller:[3,3,1,""]},"kospeech.optim":{loss:[6,0,0,"-"],lr_scheduler:[6,0,0,"-"],optimizer:[6,0,0,"-"]},"kospeech.optim.loss":{LabelSmoothingLoss:[6,1,1,""],Loss:[6,1,1,""],NLLLoss:[6,1,1,""],Perplexity:[6,1,1,""]},"kospeech.optim.loss.LabelSmoothingLoss":{forward:[6,2,1,""]},"kospeech.optim.loss.Loss":{eval_batch:[6,2,1,""],get_loss:[6,2,1,""],reset:[6,2,1,""]},"kospeech.optim.loss.NLLLoss":{eval_batch:[6,2,1,""],get_loss:[6,2,1,""]},"kospeech.optim.loss.Perplexity":{eval_batch:[6,2,1,""],get_loss:[6,2,1,""]},"kospeech.optim.lr_scheduler":{ExponentialDecayLR:[6,1,1,""],LearningRateScheduler:[6,1,1,""],RampUpLR:[6,1,1,""]},"kospeech.optim.optimizer":{Optimizer:[6,1,1,""]},"kospeech.opts":{build_eval_opts:[3,3,1,""],build_model_opts:[3,3,1,""],build_preprocess_opts:[3,3,1,""],build_train_opts:[3,3,1,""],print_eval_opts:[3,3,1,""],print_model_opts:[3,3,1,""],print_opts:[3,3,1,""],print_preprocess_opts:[3,3,1,""],print_train_opts:[3,3,1,""]},"kospeech.trainer":{supervised_trainer:[7,0,0,"-"]},"kospeech.trainer.supervised_trainer":{SupervisedTrainer:[7,1,1,""]},"kospeech.trainer.supervised_trainer.SupervisedTrainer":{train:[7,2,1,""],train_epoches:[7,2,1,""],validate:[7,2,1,""]},"kospeech.utils":{Logger:[3,1,1,""],check_envirionment:[3,3,1,""],label_to_string:[3,3,1,""]},"kospeech.utils.Logger":{debug:[3,2,1,""],info:[3,2,1,""]},kospeech:{metrics:[3,0,0,"-"],model_builder:[3,0,0,"-"],opts:[3,0,0,"-"],utils:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"000\uac1c\uc529\uc758":10,"000\uc2dc\uac04":10,"000\uc5ec\uba85\uc774":10,"092\uac1c\uc774\ubbc0\ub85c":9,"1000h":11,"123gb\ub85c":10,"124\uac1c\uc758":10,"1\ubc88\ub9cc":10,"1\ubc88\ubd80\ud130":10,"1\ubc88\uc529":10,"20\uc2dc\uac04\uc744":10,"20h":10,"28607\uac1c\ub85c":9,"2\uac1c\uc758":9,"300\uac1c":10,"300\uc5ec\uac1c\uc758":10,"30db":1,"3\uac1c\uc758":10,"3\ud559\ub144":10,"4\uac1c\uc758":10,"5\uac1c\uc758":10,"607\uac1c\uc758":9,"60\ub9cc\uac1c\uc758":9,"622545\ubc88\uae4c\uc9c0":10,"8\uac1c\uc758":10,"980\uc2dc\uac04\uc744":10,"980h":10,"\uac00":10,"\uac00\uaca9\uc5d0":9,"\uac00\ub2a5\ud558\uace0":10,"\uac00\ub2a5\ud558\ubbc0\ub85c":10,"\uac00\uc11c":9,"\uac00\uc131\ube44\uac00":9,"\uac00\uc838\uc640\uc8fc\ub294":10,"\uac00\uc9c0":10,"\uac01":10,"\uac01\uac01\uc758":9,"\uac04\ud22c\uc5b4":10,"\uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4":10,"\uac17":10,"\uac19\ub2e4":10,"\uac19\uc740":[9,10],"\uac19\uc774":10,"\uac1c\uc218\ub294":10,"\uac1c\uc218\ub97c":9,"\uac1c\uc218\uc758":10,"\uac1c\uc758":10,"\uac70\uae30":9,"\uac70\ucce4\ub2e4":10,"\uac74\uac00":10,"\uac81\ub098":9,"\uac83\uc740":9,"\uac83\uc744":[9,10],"\uac83\uc774":10,"\uac83\uc774\uae30":10,"\uac83\uc774\ub2e4":10,"\uac83\uc774\ub77c\uace0":10,"\uac83\uc785\ub2c8\ub2e4":9,"\uacb0\uacfc":[9,10],"\uacb0\uacfc\ub97c":9,"\uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4":9,"\uacbd\ub85c\ub97c":10,"\uacc4\uc0b0\ud574\uc8fc\uace0":10,"\uacc4\uc18d":9,"\uace0\ubbfc\ud588\ub2e4":10,"\uacfc\uc815\uc744":10,"\uad00\ub828":9,"\uad00\uc2ec\uc788\uc5c8\ub358":9,"\uad1e":10,"\uad6c\ubd84\ud574\uc8fc\uc5c8\ub2e4":10,"\uad6c\uc131\ub418\uc5b4":10,"\uad6c\uc131\ud588\ub2e4":10,"\uad6d\uac00\uc7a5\ud559\uae08":10,"\uadf8":[9,10],"\uadf8\ub798":9,"\uadf8\ub798\uc11c":10,"\uadf8\ub7ec\uae30":10,"\uadf8\ub7fc":10,"\uadf8\ub824\ubd24\uc2b5\ub2c8\ub2e4":9,"\uadf8\ub9ac\uace0":[9,10],"\uadfc\ub370":[9,10],"\uae00\uc740":10,"\uae00\uc785\ub2c8\ub2e4":10,"\uae00\uc790\ub97c":9,"\uae03":10,"\uae30\ub85d\ud55c":10,"\uae30\ubcf8":10,"\uae30\ubcf8\uc801\uc73c\ub85c":10,"\uae30\uc874":[9,10],"\uae30\uc900\uc73c\ub85c":9,"\uae38\uc774\uac00":9,"\uae38\uc774\ub97c":9,"\uae4c\uc9c0\ub294":10,"\uae4c\uc9c0\uc758":10,"\ub05d\ub0b4\uba74":10,"\ub098\ub234\uc2b5\ub2c8\ub2e4":9,"\ub098\ub3c4":9,"\ub098\uba38\uc9c0":10,"\ub0a8\uac8c\ub418\ub294\ub370":10,"\ub0b4\uc6a9\uc744":9,"\ub108\ubb34":9,"\ub118\uc5b4\uac00\ub294":9,"\ub123\uc5b4\uc900\ub2e4":10,"\ub123\uc5c8\uc73c\ubbc0\ub85c":10,"\ub178\uc774\uc988":10,"\ub178\uc774\uc988\uac00":10,"\ub180":9,"\ub294":10,"\ub2e4\ub154\ub358":10,"\ub2e4\ub8e8\uae30":9,"\ub2e4\uc2dc":10,"\ub2e4\uc6b4\ub85c\ub4dc":10,"\ub2e4\uc6b4\ubc1b\uc544\uc11c":9,"\ub2e4\uc74c":[9,10],"\ub2e4\uc74c\uacfc":[9,10],"\ub2e4\uc74c\uc73c\ub85c":[9,10],"\ub2e4\uc74c\uc740":10,"\ub2e8\uc704\ub85c":10,"\ub300\ud558\uc5ec":10,"\ub300\ud55c":10,"\ub300\ud574":10,"\ub354\ub4ec\ub294":10,"\ub370\uc774\ud130":[9,10],"\ub370\uc774\ud130\ub294":[9,10],"\ub370\uc774\ud130\ub85c":[9,10],"\ub370\uc774\ud130\ub97c":9,"\ub370\uc774\ud130\uc14b\uc5d0":10,"\ub370\uc774\ud130\uc14b\uc5d0\uc11c":10,"\ub370\uc774\ud130\uc14b\uc758":10,"\ub370\uc774\ud130\uc14b\uc774":10,"\ub370\uc774\ud130\uc758":9,"\ub3c4\uc911":9,"\ub418\uac8c":9,"\ub418\ub294":10,"\ub418\uba74":10,"\ub418\uc5b4":10,"\ub418\uc5b4\uc788\ub358":9,"\ub418\uc5c8\ub2e4":10,"\ub418\uc5c8\uc744":9,"\ub41c":9,"\ub41c\ub2e4":10,"\ub420":10,"\ub450":10,"\ub454":10,"\ub458\uc774":9,"\ub458\uc774\ub9cc":9,"\ub4a4":10,"\ub4e4\uc5b4\ubcf4\uac8c":10,"\ub4f1":10,"\ub4f1\uc744":10,"\ub4f1\uc758":10,"\ub4f1\uc7a5\ud558\ub294":10,"\ub4f1\uc7a5\ud55c":10,"\ub4f1\uc7a5\ud588\uace0":10,"\ub515\uc154\ub108\ub9ac":10,"\ub54c":10,"\ub54c\ubb38\uc5d0":[9,10],"\ub744\uc5b4\uc4f0\uae30\ub294":10,"\ub744\uc5b4\uc4f0\uae30\ub85c":10,"\ub79c\ub364\ud558\uac8c":10,"\ub808\uc774\ube14":10,"\ub808\uc774\ube14\ub85c":10,"\ub808\uc774\ube14\ub85c\uc758":10,"\ub808\uc774\ube14\ub9c1":10,"\ub808\uc774\ube14\uc740":10,"\ub808\uc774\ube14\uc744":10,"\ub808\uc774\ube14\uc774":[9,10],"\ub85c":10,"\ub85c\ub4dc\ud558\uaca0\uc2b5\ub2c8\ub2e4":9,"\ub85c\ub529\ud558\uc9c0\ub9cc":9,"\ub97c":10,"\ub9ac\uc2a4\ud2b8":10,"\ub9ac\uc2a4\ud2b8\ub85c":9,"\ub9ac\uc2a4\ud2b8\ub97c":10,"\ub9ac\uc2a4\ud2b8\uc5d0":[9,10],"\ub9c1\ud06c":10,"\ub9c1\ud06c\uc5d0\uc11c":10,"\ub9c8\uc9c0\ub9c9\uc5d0":10,"\ub9c8\ucce4\ub2e4":10,"\ub9cc\ub0ac\uc5c8\uc5b4":9,"\ub9cc\ub4dc\ub294":10,"\ub9cc\ub4e0":10,"\ub9cc\ub4e0\ub2e4":10,"\ub9cc\ub4e4\uace0":9,"\ub9cc\ub4e4\uc5b4":10,"\ub9cc\ub4e4\uc5b4\ub454":10,"\ub9cc\ub4e4\uc5b4\ubcf4\uc790":10,"\ub9cc\ub4e4\uc5b4\uc11c":9,"\ub9cc\ub4e4\uc5b4\uc900\ub2e4":10,"\ub9ce\ub2e4\uace0":9,"\ub9de\ucdb0\uc8fc\uae30":10,"\ub9de\ucdb0\uc8fc\ub294":10,"\ub9e4":9,"\uba3c\uc800":[9,10],"\uba54\uc11c\ub4dc\ub85c":10,"\ubaa8":10,"\ubaa8\ub450":10,"\ubaa8\ub4e0":10,"\ubaa8\uc544\uc11c":10,"\ubaa9\ud45c\uc600\uae30\uc5d0":10,"\ubaac":10,"\ubb38\uc758\uc0ac\ud56d":10,"\ubb38\uc790":10,"\ubb38\uc790\uac00":10,"\ubb38\uc790\ub294":10,"\ubb38\uc790\ub4e4\ub85c":10,"\ubb38\uc790\ub4e4\ub9cc":10,"\ubb38\uc790\ub4e4\uc740":10,"\ubb38\uc790\ub4e4\uc774":10,"\ubb38\uc790\ub85c":10,"\ubb38\uc790\ub85c\ub9cc":10,"\ubb38\uc790\ub97c":10,"\ubb38\uc790\uc5d0":10,"\ubb38\uc7a5":10,"\ubb38\uc7a5\uc744":10,"\ubb38\uc81c\uac00":10,"\ubbf8\ub9ac":[9,10],"\ubc0f":10,"\ubc14":10,"\ubc14\uafb8\uc5b4":10,"\ubc14\uafd4\ubcf4\uc790":10,"\ubc14\uafd4\uc8fc\uae30\uac00":10,"\ubc14\uafd4\uc8fc\ub824":10,"\ubc14\uafd4\uc8fc\uc5c8\ub2e4":10,"\ubc14\ud0d5\uc73c\ub85c":9,"\ubc18\ud658\ud588\ub2e4":10,"\ubc1b\uc544":10,"\ubc1b\uc73c\uba74\uc11c":10,"\ubc1c\uc0dd\ud558\uc5ec":9,"\ubc1c\uc131\ud55c":10,"\ubc1c\uc74c\uc73c\ub85c":10,"\ubc1c\uc74c\uc774":10,"\ubc1c\uc74c\uc804\uc0ac":10,"\ubc1c\uc74c\uc804\uc0ac\ub97c":10,"\ubc30\uc6cc\ubd24\uc5b4":10,"\ubc31":10,"\ubc88":9,"\ubc88\ud638\ub294":10,"\ubc88\ud638\ub97c":10,"\ubc8c\ub2e4":10,"\ubc8c\uba74":10,"\ubcc0\uc218\ub97c":10,"\ubcc0\ud658":10,"\ubcc0\ud658\uae4c\uc9c0":10,"\ubcc0\ud658\ub418\uc5c8\ub294\uc9c0":10,"\ubcc0\ud658\ub41c":10,"\ubcc0\ud658\uc744":10,"\ubcc0\ud658\uc774":9,"\ubcc0\ud658\ud574\ubcf4\uc790":10,"\ubcc0\ud658\ud574\uc8fc\uae30\ub9cc":10,"\ubcc0\ud658\ud574\uc8fc\ub294":10,"\ubcc0\ud658\ud588\ub2e4":10,"\ubcf4\uaca0\uc2b5\ub2c8\ub2e4":9,"\ubcf4\ub290\ub77c":9,"\ubcf4\uc2e4":9,"\ubcf4\uc558\uc2b5\ub2c8\ub2e4":9,"\ubcf4\uc774\uae34":10,"\ubcf8":10,"\ubd80\ud638\ub294":10,"\ubd80\ud638\ub77c\uace0":10,"\ubd84\uc11d":9,"\ubd84\uc11d\uc744":9,"\ubd84\uc11d\ud558\uae30":9,"\ubd84\uc11d\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4":9,"\ubd88\ub7ec\uc624\uace0":10,"\ubd99\ub294":10,"\ube61\uc140\uac78":10,"\ube68\ub9ac":9,"\ubfd0\ub354\ub7ec":10,"\uc0ac\uc2ed":10,"\uc0ac\uc6a9":10,"\uc0ac\uc6a9\ub41c":10,"\uc0ac\uc6a9\ud558\uace0":10,"\uc0ac\uc6a9\ud55c":10,"\uc0ac\uc6a9\ud560":10,"\uc0ad\uc81c":10,"\uc0bc":10,"\uc0bd\uc785\ud569\ub2c8\ub2e4":9,"\uc0c1\ub2f9\ud788":10,"\uc0c8\ub85c\uc6b4":9,"\uc0dd\uac01\ud558\uc5ec":10,"\uc0dd\uac01\ud588\uace0":10,"\uc0dd\uae38":10,"\uc0dd\uc18c\ud55c":10,"\uc0fe":10,"\uc11e\uc5b4\uc8fc\uae30":10,"\uc11e\uc5b4\uc900\ub2e4":10,"\uc11e\uc5ec\uc9c4":10,"\uc120\uc218\uac00":9,"\uc120\uc218\ub97c":9,"\uc120\ud0dd\ud558\uae30":10,"\uc131\uacf5\uc801\uc73c\ub85c":9,"\uc138\ubc00\ud558\uac8c":10,"\uc18c\ub9ac":10,"\uc18c\ub9ac\uc57c":10,"\uc218":[9,10],"\uc218\ub294":9,"\uc218\ub3d9\uc73c\ub85c":10,"\uc218\uc791\uc5c5\uc73c\ub85c":10,"\uc21c\uc11c\ub300\ub85c":10,"\uc21c\uc11c\ub85c":10,"\uc21c\uc11c\ub97c":10,"\uc22b\uc790":10,"\uc22b\uc790\ub07c\ub9ac\ub294":10,"\uc22b\uc790\ub808\uc774\ube14\ub85c":10,"\uc22b\uc790\ub808\uc774\ube14\uc5d0\uc11c":10,"\uc22b\uc790\ub85c":[9,10],"\uc22b\uc790\ub97c":10,"\uc27d\uac8c":9,"\uc2dc\uac04\uc744":9,"\uc2dc\uc791\ub418\uba74":9,"\uc2dc\ud000\uc2a4":9,"\uc2dc\ud0ac":10,"\uc2dc\ud0ac\uc218\uac00":10,"\uc2e0\uccad":10,"\uc2e0\ud638\ub85c\ubd80\ud130":10,"\uc2e4\uc81c\ub85c":10,"\uc2e4\ud589\ub410\ub2e4\uba74":9,"\uc2e4\ud589\uc2dc\ucf1c\uc11c":10,"\uc2ed":10,"\uc2fc":9,"\uc544":10,"\uc544\ub798\ubd80\ud130":10,"\uc544\uc608":10,"\uc544\uc6c3\ub77c\uc774\uc5b4\ub85c":9,"\uc548\uc5d0":10,"\uc548\uc5d0\ub294":10,"\uc54a\uc558\ub2e4":10,"\uc54a\uc744":10,"\uc560\ub9e4\ud588\ub2e4":10,"\uc57d":[9,10],"\uc5b4":9,"\uc5b4\ub5a0\ud55c":10,"\uc5b4\ub835\ub2e4\uace0":10,"\uc5b8\uae09\ub41c":10,"\uc5c4\uccad\ub098\uac8c":9,"\uc5c6\uc5b4\uc11c":10,"\uc5c6\uc5c8\uc5b4":9,"\uc5c6\uc73c\ubbc0\ub85c":10,"\uc5d0":10,"\uc5d0\ub7ec":10,"\uc5d0\ub7ec\uac00":9,"\uc5d0\uc11c":[9,10],"\uc5ec\ub7ec":9,"\uc5f0\ub77d\uc8fc\uc2dc\uba74":10,"\uc608\uce21":10,"\uc608\uce21\ud558\uae30":10,"\uc624\uace0":9,"\uc624\ub514\uc624":10,"\uc640":10,"\uc644\uc131\ub418\uc5c8\ub2e4":10,"\uc644\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4":9,"\uc6b0\ub9ac":10,"\uc6b0\ub9ac\uac00":10,"\uc6b0\ub9ac\ub294":10,"\uc6b0\ub9ac\ub3c4":9,"\uc6d0\ub798":9,"\uc6d0\ud558\ub294":10,"\uc704":10,"\uc704\uc5d0\uc11c":10,"\uc704\uc640":10,"\uc704\uc758":[9,10],"\uc704\ud558\uc5ec":10,"\uc704\ud55c":10,"\uc704\ud574":[9,10],"\uc704\ud574\uc11c":10,"\uc73c\ub85c":10,"\uc744":10,"\uc74c\uc131":10,"\uc74c\uc131\ub370\uc774\ud130":10,"\uc74c\uc131\uc2e0\ud638\ub9cc\uc73c\ub85c":10,"\uc74c\uc131\uc5d0":10,"\uc74c\uc131\uc778\uc2dd":10,"\uc758":10,"\uc758\ubbf8\uac00":10,"\uc774":[9,10],"\uc774\uacf3":9,"\uc774\ub54c":10,"\uc774\ub7ec\ud55c":10,"\uc774\ub807\uac8c":10,"\uc774\ub85c\uc368":10,"\uc774\ub8e8\uc5b4\uc838":[9,10],"\uc774\ub8e8\uc5b4\uc9c0\ub294":10,"\uc774\ub8e8\uc5b4\uc9c4":10,"\uc774\ubc31":10,"\uc774\uc0c1":10,"\uc774\uc0c1\uc778":9,"\uc774\uc5d0":10,"\uc774\uc6a9\ud558\uc5ec":10,"\uc774\uc6a9\ud574\uc11c":10,"\uc774\uc81c":10,"\uc774\ud574\ud560":10,"\uc77c":10,"\uc77c\uc815\ud55c":10,"\uc785\ub825\uc73c\ub85c":10,"\uc788\uac8c":10,"\uc788\uace0":10,"\uc788\ub294":10,"\uc788\ub294\uc9c0\ub97c":10,"\uc788\ub2e4":10,"\uc788\ub3c4\ub85d":10,"\uc788\uc2b5\ub2c8\ub2e4":[9,10],"\uc788\uc5c8\ub2e4":10,"\uc788\uc5c8\uc2b5\ub2c8\ub2e4":9,"\uc790\uc720\uc790\uc7ac\ub85c":10,"\uc791\uc5c5\uc5d0":10,"\uc791\uc5c5\uc740":10,"\uc791\uc5c5\uc758":10,"\uc791\uc5c5\ud588\uc2b5\ub2c8\ub2e4":10,"\uc798":10,"\uc7a1\uc544\uc8fc\ub294":10,"\uc7a1\uc74c":10,"\uc800\uc7a5\uc2dc\ucf1c":9,"\uc800\uc7a5\uc744":9,"\uc800\uc7a5\ud55c\ub2e4":10,"\uc800\uc7a5\ud574\ub480\ub358":9,"\uc800\uc7a5\ud574\uc900\ub2e4":10,"\uc800\ud76c":9,"\uc800\ud76c\uac00":9,"\uc804\ucc98\ub9ac":10,"\uc804\ucc98\ub9ac\ub97c":10,"\uc804\uccb4":10,"\uc815\ub3c4\ub97c":[9,10],"\uc815\ub3c4\uc758":9,"\uc815\uc0c1\uc801\uc73c\ub85c":[9,10],"\uc815\uc2e0\uc774":9,"\uc815\uc758\ud55c":10,"\uc815\uc758\ud574\ub454\ub2e4":10,"\uc815\uc758\ud574\ubcf4\uc790":10,"\uc815\uc758\ud574\uc8fc\uc5c8\ub2e4":10,"\uc815\uc758\ud588\ub2e4":10,"\uc815\uc758\ud588\uc2b5\ub2c8\ub2e4":9,"\uc815\ud655\ud558\uac8c":10,"\uc81c\uac70\ud55c":9,"\uc81c\uac70\ud574\uc900":10,"\uc81c\uacf5\ub418\ub294":10,"\uc81c\uacf5\ub41c":10,"\uc81c\uacf5\ud558\ub294":10,"\uc81c\uc678\ub97c":10,"\uc81c\uc678\ud558\uc600\ub2e4":10,"\uc81c\uc678\ud55c":10,"\uc870\uc6a9\ud55c":10,"\uc885\ub8cc\ub410\ub2e4\uba74":10,"\uc88b\uc544\ud588\uc5c8\uc5b4":9,"\uc8fc\ubaa9\ud588\ub2e4":10,"\uc900":10,"\uc904\uc774\uae30":9,"\uc904\uc77c":9,"\uc911":10,"\uc911\uc694\ud558\uc9c0":10,"\uc911\uc694\ud55c":10,"\uc918\uc57c":10,"\uc9c1\uc811":[9,10],"\uc9c4\ud589\uc744":10,"\uc9c4\ud589\ud558\uae30":10,"\uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4":9,"\ucc28\ub9ac\uba74\uc740":9,"\ucc28\uc9c0\ud588\ub294\ub370":10,"\ucc98\ub9ac":10,"\ucc98\ub9ac\ub97c":10,"\ucca0\uc790\uc804\uc0ac":10,"\ucd1d":10,"\ucd5c\ub300\ud55c":10,"\ucd94\uac00":10,"\ucd94\uac00\ud574":10,"\uce58\ub300\uc796\uc544":9,"\uce60":10,"\uce60\uc2ed":10,"\uce74\uc6b4\ud2b8\ud574":9,"\ucee4":10,"\ucef4\ud4e8\ud130\uac00":10,"\ucf54\ub4dc\uac00":9,"\ucf54\ub4dc\ub97c":10,"\ucf54\ub4dc\uc774\ub2e4":10,"\ud06c\uac8c":10,"\ud0c0\uac9f":10,"\ud0dc\uc2a4\ud06c\uc5d0\uc11c":10,"\ud14c\uc2a4\ud2b8":10,"\ud14c\uc2a4\ud2b8\ub370\uc774\ud130\ub85c":10,"\ud14c\uc2a4\ud2b8\uc6a9":10,"\ud14d\uc2a4\ud2b8":10,"\ud14d\uc2a4\ud2b8\ub294":10,"\ud14d\uc2a4\ud2b8\ub85c":10,"\ud14d\uc2a4\ud2b8\ub85c\ub294":10,"\ud14d\uc2a4\ud2b8\ub85c\uc758":10,"\ud14d\uc2a4\ud2b8\ub97c":10,"\ud14d\uc2a4\ud2b8\uc5d0\uc11c":10,"\ud150\ub370":9,"\ud1b5\ud574\uc11c":10,"\ud2b8\ub808\uc774\ub2dd":10,"\ud2b8\ub808\uc774\ub2dd\uc744":10,"\ud2b9\uc218":10,"\ud2b9\uc218\ubb38\uc790\uac00":10,"\ud2b9\uc218\ubb38\uc790\ub294":10,"\ud300\uc740":[9,10],"\ud30c\uc545\ub429\ub2c8\ub2e4":9,"\ud30c\uc545\ud574\uc57c\ud55c\ub2e4":10,"\ud30c\uc77c":[9,10],"\ud30c\uc77c\uacfc":10,"\ud30c\uc77c\ub4e4\ub85c\ub9cc":10,"\ud30c\uc77c\ub4e4\uc744":[9,10],"\ud30c\uc77c\ub85c":[9,10],"\ud30c\uc77c\uc5d0\uc11c":10,"\ud30c\uc77c\uc740":[9,10],"\ud30c\uc77c\uc744":[9,10],"\ud30c\uc77c\uc758":10,"\ud30c\uc77c\uc774":10,"\ud310\ub2e8\ub418\uc5b4":9,"\ud310\ub2e8\ub429\ub2c8\ub2e4":9,"\ud310\ub2e8\ud55c":9,"\ud328\uc158\uc1fc":9,"\ud37c\uc13c\ud2b8":10,"\ud37c\uc13c\ud2b8\uac00":10,"\ud3b8\uc758\ub97c":10,"\ud3ec\ub9f7\uc5d0":10,"\ud3ec\ub9f7\uc758":10,"\ud3ec\ud568\ub41c":10,"\ud3ec\ud568\ud558\uc5ec":10,"\ud3f4\ub354":10,"\ud3f4\ub354\uac00":10,"\ud3f4\ub354\ub85c":10,"\ud45c\uae30":10,"\ud45c\ucc98\ub7fc":10,"\ud45c\ud604":10,"\ud504\ub85c":10,"\ud53c\ud074":9,"\ud544\uc694\ud55c":10,"\ud544\ud130\ub9c1":10,"\ud544\ud130\ub9c1\ud558\uc9c0":10,"\ud544\ud130\ub9c1\ud574\uc8fc\ub294":10,"\ud558\ub098\uc758":10,"\ud558\ub098\ud558\ub098":10,"\ud558\ub294":10,"\ud558\ub294\ub370":10,"\ud558\uba74":10,"\ud558\uc2e4":10,"\ud559\ub144":10,"\ud559\uc2b5":[9,10],"\ud559\uc2b5\uc2dc\ub9c8\ub2e4":9,"\ud559\uc2b5\uc6a9":10,"\ud559\uc2b5\uc744":10,"\ud559\uc2b5\uc774":9,"\ud55c\uad6d\uc5b4":10,"\ud55c\uae00":10,"\ud55c\uae00\ub85c":[9,10],"\ud55c\ub2e4":10,"\ud55c\ubc88":9,"\ud560":10,"\ud568\uc218":10,"\ud568\uc218\ub4e4\uc744":10,"\ud568\uc218\ub97c":[9,10],"\ud568\uc218\uc774\ub2e4":10,"\ud574\ub2f9":[9,10],"\ud574\ub2f9\ud558\ub294":10,"\ud574\ub480\uc5c8\uc2b5\ub2c8\ub2e4":9,"\ud574\ubc84\ub9ac\uba74":10,"\ud574\ubcf4\uc790":10,"\ud574\uc11c":10,"\ud588\uc9c0\ub9cc":10,"\ud615\uc2dd\uc5d0":10,"\ud615\uc2dd\uc73c\ub85c":[9,10],"\ud615\ud0dc\ub85c":10,"\ud615\ud0dc\ub85c\uc758":10,"\ud655\ub960\uc774\ub77c\ub2c8":10,"\ud655\uc778\uc744":10,"\ud655\uc778\ud558\uace0":10,"\ud655\uc778\ud558\uae30":10,"\ud655\uc778\ud55c":10,"\ud655\uc778\ud560":9,"\ud655\uc778\ud574\ubd24\uc2b5\ub2c8\ub2e4":9,"\ud655\uc778\ud574\uc11c":10,"\ud655\uc778\ud588\ub2e4":10,"\ud658\uacbd\uc5d0\uc11c":10,"\ud658\uc601\ud569\ub2c8\ub2e4":10,"\ud6c4":10,"\ud6c4\uc5d0":10,"\ud6c8\ub828\ub370\uc774\ud130":10,"abstract":1,"b\ub9cc\uc744":10,"break":[9,10],"char":10,"class":[0,1,2,3,4,5,6,7],"csv\ud30c\uc77c\ub85c":9,"dataset\uc774":9,"default":[1,4,5,7,11,12],"dict\ub85c":10,"dict\ub97c":[9,10],"dict\uc640":10,"dict\uc778":9,"float":[1,5,6,7],"function":[0,1,2,3,5,6,7],"hub\uc5d0\uc11c":10,"id\ub85c":10,"id\ub97c":10,"import":[1,9,10,11],"int":[0,1,3,4,5,6,7,9,10],"labels\uc5d0":10,"lengths\ub77c\ub294":9,"new":[9,11],"num\uc73c\ub85c":10,"outlier\ub85c":9,"outlier\ub97c":9,"outlier\ub9cc\uc744":9,"outlier\uc774\uae30":9,"paths\ub97c":10,"paths\uc640":10,"plot\uc744":9,"return":[0,1,3,4,5,6,7,9,10],"scripts\uc5d0\ub294":9,"true":[1,3,5,6,10,11,12],"while":[2,5,6],And:11,E2E:11,For:[6,11],IDs:5,LAS:[0,5],The:[0,1,5,6,7,12],These:3,Used:5,Using:[10,11],_loss:6,abov:11,abs:[1,5],acc_loss:6,accumul:6,acoust:11,activ:[3,5,11,12],actual:5,adam:6,add:[1,5],added:1,adding:2,addit:[5,11],advanc:5,affin:11,after:[3,6,7,12],afterward:[2,5,6],aidata:10,aihub:[10,11],aihub_label:10,alexand:11,algirithm:11,algorithm:11,align:[5,11],all:[1,2,5,6,11],allow:[0,5,11],alpha:[5,11],also:11,although:[2,5,6],amax:1,ani:11,anytim:11,append:[9,10],appli:[1,5,6,11],appreci:11,approach:11,architectur:[8,11],architeutur:11,area:[1,12],arg:[0,1,2,5],argument:[1,5],argumentpars:1,arrai:9,art:[5,11],arxiv:[1,5],asctim:3,asr:11,attend:[3,5,11],attent:[8,11,12],attn:5,attn_mechan:[3,5,11,12],audio:[1,10,11],audio_path:[1,10],audiodataload:1,audiopars:1,augment:[8,11,12],augment_method:1,author:11,automat:[5,11],averag:6,awar:[5,11],bae:11,base:[6,8,11],base_path:10,basernn:5,basic:2,basicensembl:2,batch:[1,4,5,6,7,11,12],batch_first:11,batch_siz:[1,4,5,7,11,12],batchnorm2d:11,beam:[2,5,11,12],beam_search:5,beam_siz:[4,5],beamsearch:[2,8],beamsearchdecod:5,becaus:[1,5],becom:[5,12],been:0,befor:[8,12],begin:7,being:0,below:1,benefit:11,best:11,between:[1,3,11],bia:11,bidirect:[3,5,11,12],bigger:5,bin:9,blob:5,bool:[1,5,6,7],box:9,boxplot:9,bracket:10,bug:11,build:11,build_eval_opt:3,build_la:3,build_listen:3,build_model:3,build_model_opt:3,build_preprocess_opt:3,build_spel:3,build_train_opt:3,bxcxhx:5,calcuat:3,calcul:[5,6],call:[0,2,5,6],can:[2,6,11],care:[2,3,5,6],ceil_mod:11,cell:[5,12],cepstrum:1,cer:[7,12],ch_label:10,chang:5,channel:5,char2id:[1,9,10],char_list:10,charact:[1,2,3,5,7,12],charactererrorr:3,check:[3,11],check_envirion:3,checkout:11,checkpoint:[7,8,12],checkpoint_dir_nam:0,checkpoint_everi:[7,11,12],cheolhwang:11,choos:11,classfic:[5,6],classs:6,clean_data:9,clip:[6,12],close:10,clovaai:[5,11],clovacal:[5,11],cluster:0,cnn:[5,11],cnnextractor:5,code:1,coeffici:1,collabor:11,com:[1,5,6,10,11],combin:2,command:11,commonli:6,compil:10,complex:11,compon:11,composit:1,compris:11,comput:[2,3,5,6],concept:1,conda:11,confid:6,constantli:11,construct:3,contact:11,contain:[5,7,11],content:11,context:5,continu:10,contrast:11,contributor:5,conv2d:11,conv:8,convert:[3,5],convolut:5,copi:[0,6],copyright:5,core:[4,7,8],corpu:11,correspond:11,cp949:[9,10],cpu:[1,4,5,7],creat:[1,11],criterion:[0,6,7],csv:[1,2,9,10,11],ctc:5,cuda:[3,4,5,7,9,12],current:[0,7,11],custom:11,data3:11,data:[0,8],data_list:11,data_list_path:[1,11,12],data_load:[0,1,4,7],data_path:10,datafram:[9,10],dataload:8,dataset:[0,1,4,7,12],dataset_list:1,dataset_path:[1,11,12],datset:7,debug:3,decai:[6,12],decay_threshold:[7,11,12],decod:[3,4,5,8,11,12],decoder_output:5,deep:5,deepspeech2:[5,11],deepspeech2extractor:5,deepspeech:[5,11],def:[9,10],defin:[2,3,5,6],defulat:[5,12],del_sil:[1,11,12],delet:[1,11,12],delimit:9,deokjin:5,depend:6,describ:5,design:11,determin:[4,12],develop:11,devic:[3,4,5,6,7],dict:[1,3,9,10],dictionari:[1,5,10],dilat:11,dim:[2,6],dimens:[5,12],diment:6,directli:[1,2,3,5,6],directori:0,discuss:11,disk:0,dispatch:3,displai:10,distanc:3,distribut:[2,5,6],doc:[6,11],docstr:11,document:11,dot:[5,11],downstream:11,drawn:5,dropout:[5,11,12],dropout_p:[3,5],dump:9,dure:[0,3,5],e2e:[0,4,5,6,7],each:[5,6,11],easi:11,edit:3,effici:11,elif:10,elimin:1,els:10,elu:11,embed:11,emerg:11,enabl:11,encapsul:6,encod:[1,3,5,6,9,10,12],encoder_output:5,end:[1,3,5,10,11],english:5,ensembl:8,ensemblesearch:2,ensur:5,enumer:10,env:11,envirion:3,environ:11,eos_id:[1,3,5,9],eos_token:9,epoch:[0,7,12],epoch_time_step:7,eps:11,error:[3,7],errorr:3,especi:11,etc:[8,11],eval_batch:6,evalt:3,evalu:[6,8,11],evalutaion:11,everi:[2,4,5,6,12],exampl:[10,11],except:[1,10],execut:[3,9],exist:0,exp_decay_period:[7,11,12],expand:11,expect:[5,6],experi:[7,11],exponenti:[6,12],exponentialdecaylr:6,extens:11,extract:[1,12],extractor:[3,5,11,12],fals:[1,5,7,9,10,11,12],featur:[5,8,12],feature_extract_bi:[1,11,12],feedback:11,feel:11,field:[0,11],filanam:10,file:[0,1,11],file_pad:10,filenam:[1,3,9,10],filenum:10,filepath:10,filter:[10,12],find:11,fix:11,flag:[1,5,10,12],floattensor:[1,5],fname:10,follow:[0,1,5,11],forc:[5,7,11,12],format:[0,2,3,10],former:[2,5,6],formula:5,forward:[2,5,6],forward_step:5,fragment:1,frame:11,frame_length:1,framework:7,free:11,freq:[1,10,12],freq_list:10,freq_mask_num:[1,11,12],freq_mask_para:[1,11,12],frequenc:1,from:[0,1,5,6,10,12],full:0,funcnam:3,gener:11,get:[1,6,10],get_item:1,get_latest_checkpoint:0,get_length_penalti:5,get_loss:6,get_seq_length:5,github:[1,5,6,10,11],gitter:11,given:[4,5,6,7],gmail:[10,11],gpu:[11,12],gradient:[6,12],greedi:[4,11],greedysearch:2,ground:6,gru:[5,11,12],hangeul:3,hardtanh:5,has:[0,1,6,11,12],have:[1,5,11],head:[5,9,11,12],help:[7,11],here:11,hidden:[5,12],hidden_dim:[3,5,11,12],high:12,high_plateau_lr:[6,7,11,12],higher:[5,11],hook:[2,5,6],hop:1,hop_length:1,how:[1,6,12],html:6,http:[1,5,6,10,11],hub:10,hybrid:11,hyper:[1,12],hyperparamet:11,ibm:11,id2char:[1,3,9,10],id_list:10,identif:[1,3],idx:[1,10],ignor:[2,5,6],ignore_index:6,implement:[5,6,11],improv:[11,12],in_channel:5,in_featur:11,inconveni:11,index:[5,6,9,10],indic:[1,5,12],individu:6,infer:[3,5,11],inferenc:6,info:3,inform:[3,5,6,11],init_lr:[6,11,12],init_uniform:[3,11,12],initi:[0,6,12],inject:1,inplac:11,input:[1,2,5,6,7,12],input_dropout:11,input_length:[2,5,7],input_revers:[1,11,12],input_s:[3,5],input_var:5,instanc:[2,5,6],instanti:6,instead:[1,2,5,6],intefac:[1,3,5,6],integ:6,integr:11,interest:11,interfac:6,intro:8,introduc:11,inttensor:5,issu:[6,11],job:0,join:1,joint:[5,11],kaispeech:[9,10],kaldi:11,kei:9,kernel_s:11,key_attention_scor:5,key_sequence_symbol:5,kim:[5,11],kind:11,know:11,kodpeech:1,korean:[10,11],kospeech:[0,1,2,3,4,5,6,7],ksponscript:10,ksponscript_001348:10,ksponscript_:10,ksponspeech:[10,11],ksponspeech_:10,kwarg:[2,5],label:[1,3,6,9,11,12],label_df:10,label_freq:10,label_list:10,label_load:1,label_path:[1,9,11,12],label_smooth:[6,11,12],label_to_str:[3,9],labelload:8,labelsmoothingloss:6,languag:[6,8],language_model:5,las:[5,11],last:0,last_attn:5,later:0,latest:[0,7,12],latter:[2,5,6],layer:[5,12],learn:[6,11,12],learningrateschedul:6,least:0,len:[9,10],length:[1,5,9,10,12],less:12,let:11,level:[1,5,12],librari:[1,12],librosa:[1,11,12],licens:5,like:11,likelihood:6,limit:[1,12],linear:11,lineno:3,list:[0,1,3,5,6,7,12],listen:[3,8,11],listenattendspel:[8,11],listener_layer_s:[11,12],liu:11,live:11,load:[0,1,9,11,12],load_audio:1,load_data_list:1,load_label:[1,9,10],load_target:1,loader:[1,11,12],loc:[11,12],local:0,locat:[5,11],locationawareattent:5,log:[3,6],logarithm:6,logger:3,logic:6,logit:6,loop:0,loss:[0,7,8],low:[5,11,12],low_plateau_lr:[6,7,11,12],lr_schedul:6,lrschedul:8,lstm:[5,11,12],made:0,main:12,mainli:11,major:11,make:[0,1,11,12],manag:0,mandarin:5,mani:[1,11,12],mask:[1,5,6,12],mask_conv:[3,5],maskcnn:11,maskconv:5,master:[5,6,10],match:[1,4],matplotlib:[9,11],max_grad_norm:[6,11,12],max_len:[3,11,12],max_length:5,maximum:[1,5,12],maxpool2d:11,mean:[6,10],mechan:[5,11,12],mel:[1,12],melscal:1,melspectrogram:1,melspectrogramdataset:1,memmap:1,memori:9,messag:[3,6],method:[0,1,2,6,11,12],metric:8,mfc:1,mfcc:[1,11],min_length:5,min_teacher_forcing_ratio:[7,11,12],minimum:12,minor:11,mit:5,mode:[3,11,12],model:[0,2,3,4,6,7,8],model_build:3,model_nam:0,model_path:12,modelbuild:8,modul:[0,2,5,6,7,11],modular:11,momentum:11,much:11,multi:[1,5,11,12],multidataload:1,multiheadattent:[5,11],multipl:[2,6,11],must:2,n_mel:[1,11,12],n_mfcc:1,name:[0,6],naren:5,natur:11,ndarrai:3,need:[2,5,6,11],neg:6,network:[5,11],neural:[5,11],new_fnam:10,new_sent:10,next:9,nllloss:6,nois:[1,10,12],noise_aug:[1,11,12],noise_level:[1,11,12],noise_s:1,noiseaug:11,noiseinjector:1,noiseset_s:[1,11,12],none:[0,1,4,5,6,9,10,12],norm:[6,12],norm_term:6,normal:[1,6,11,12],note:8,now:11,num_class:[3,5,6],num_epoch:[7,11,12],num_head:[3,5,11,12],num_lay:[3,5,11],num_work:[1,4,7,11,12],number:[1,3,4,5,6,7,12],numpi:[1,3,9,11],object:[0,6],occur:1,offer:11,one:[0,1,2,3,5,6,7],onli:11,oom:9,open:[9,10,11],oper:11,opt:[1,8],optim:[0,7,8,11],option:[1,3,5,6,7,8,11],org:[1,5,6],organ:11,other:1,our:[1,11],out:9,out_featur:11,out_project:11,outlier:9,output:[5,6,9,10,11],output_len:5,over:5,overrid:[1,6],overridden:[2,5,6],own:6,pack:11,packag:[1,8],pad:[5,10,11],page:11,panda:[9,10,11],paper:[5,11],paradigm:11,paramet:[0,1,3,4,5,6,7,12],pars:[1,11],parse_audio:1,parse_transcript:1,parser:[3,8,11],pass:[2,3,5,6],path:[0,1,9,10,12],pattern:10,pcm:[1,10],pdf:5,penalti:5,pep:11,perform:[2,4,5,6],period:6,perplex:6,pickl:9,pip:11,pipelin:11,plateau:12,pleas:[6,11],plt:9,point:6,possibl:11,power:6,pre:3,precondit:0,predict:[2,5,11],prepar:8,preprocess:3,present:11,previou:5,previous:0,print:[3,7,10],print_eval_opt:3,print_everi:[4,7,11,12],print_model_opt:3,print_opt:3,print_preprocess_opt:3,print_train_opt:3,probabl:[5,6],problem:[1,11],proce:11,process:[1,3,5,11],processor:3,product:11,progress:[4,10,11,12],project:11,pronunci:11,propos:[1,5,11],provid:[1,2,3,5,6],publish:11,pyplot:9,python:11,pytorch:[3,5,6,11],q_len:5,queri:5,query_project:11,question:11,queue:[1,7],qute012:5,ramp:[6,12],rampup:12,rampup_period:[11,12],rampuplr:6,random:[5,10,12],randomli:1,rare:10,rare_in:10,rare_label:10,rate:[1,3,6,7,12],ratio:[6,7,12],raw:[1,10],raw_sent:10,read_csv:10,reader:9,readlin:10,recept:5,recip:[2,5,6],recognit:[1,5,10],recommend:[4,11],record:11,recurr:5,reduc:[11,12],ref:1,refer:[5,6,8],regard:[6,11],regist:[2,5,6],relat:0,report:11,repositori:10,repres:5,request:11,requir:11,reset:6,respons:11,result:[2,5,6,7,12],resum:[0,7,11,12],ret_dict:5,retain:1,revers:[1,10,12],rnn:[5,11,12],rnn_type:[3,5,11,12],rnnlanguagemodel:5,row:9,rtype:6,run:[0,1,2,5,6,7],same:6,sampl:[1,5,11,12],sample_r:[1,11,12],save:[0,2,3,7,11],save_dir:11,save_path:0,save_result_everi:[7,11,12],scale:[5,11],scaled_dot:11,scaleddotproductattent:11,schedul:[6,11],scheduler_period:6,score:5,script:[1,4,9],script_path:1,seaborn:9,sean:5,seannaren:[5,11],search:[5,8,11,12],seed:[11,12],sentenc:[1,3,5,9,10,12],sentence_mark:10,seo:5,separ:[3,11],seq2seq:[5,11],seq_len:5,seq_length:5,sequenc:[1,3,5,9,11],sequenti:[0,5,11],server:1,set:[1,7,11,12],setup:11,setuptool:11,seyoung:11,sgd:6,sh951011:[10,11],shape:[5,6],share:2,shorter:5,should:[2,5,6],show:9,shown:11,shuffl:[1,10],signal:[1,5],silenc:[1,11,12],silent:[2,5,6],simpl:[1,11],simpler:11,simultan:2,sinc:[2,5,6],singl:11,size:[1,4,5,7,12],size_averag:6,small:11,smaller:5,smooth:[5,6,11,12],sns:9,some:2,sooftwar:[5,10,11],soohwan:[5,11],soon:11,sort:10,sos_id:[1,3,5],sound:[1,10],sourc:[0,1,2,3,4,5,6,7],space:3,spec:[1,12],spec_aug:[1,11,12],specaug:[1,11],special:10,specifi:[5,12],spectrogram:[1,4,11,12],spectrogramdataset:[0,1,4,7],spectrogrampars:1,spectrum:1,speech:[1,5,10,11],speed:11,spell:[3,5,11],speller:[3,8,11],speller_layer_s:[11,12],split:[1,9,10],split_dataset:1,stage:11,start:[1,5,10,12],state:[0,5,11,12],step:[1,5,7],stft:1,store:[0,4,6,12],str:[0,1,3,5,6,9,10],stride:[1,11,12],string:3,strip:10,structur:11,studi:11,style:5,sub:[1,2,3,5,6,10],subclass:[2,5,6],subdirectori:0,sum:[2,6,9],supervis:7,supervised_train:7,supervisedtrain:8,support:[5,11],supported_rnn:5,suspend:0,symbol:[3,5],system:11,take:[2,5,6],target:[2,5,6,7,9],target_dict:[1,9],target_fnam:10,target_length:[7,9],target_path:10,task:5,teach:7,teacher:[5,11,12],teacher_forcing_ratio:[5,7,11,12],teacher_forcing_step:[7,11,12],tensor:[5,6],term:6,test1:10,test2:10,test:[1,10,12],test_data_list:10,test_df:10,test_dict:10,test_label:10,test_list:10,test_num:10,than:[5,12],thei:3,them:[2,5,6],thi:[1,2,3,5,6,11,12],those:0,thread:[1,11],thread_id:1,three:6,through:0,thruth:6,time:[0,1,5,7,11,12],time_mask_num:[1,11,12],time_mask_para:[1,11,12],timestamp:11,timestep:[4,5,6,7,12],titl:11,to_csv:[9,10],togeth:10,token:[1,3,5,6,9],top:[5,11],top_db:1,torch:[0,1,4,5,6,7],torchaudio:[11,12],torcn:6,total:7,total_num:10,tqdm:[10,11],track_running_stat:11,tradit:11,train:[0,1,3,4,6,7,8,9,11],train_batch_num:1,train_begin_tim:7,train_data_list:10,train_dataset_list:1,train_df:10,train_dict:10,train_epoch:7,train_ful:10,train_label:9,train_list:10,train_num:10,train_time_step:1,trainer:[0,8,11],trainer_st:11,trainer_state_nam:0,trainset:0,trainset_list:[0,1,7],trang:10,transcript:1,tree:10,tri:11,two:[3,11],txt:[10,11],type:[0,5,12],understand:11,uniformli:[5,12],updat:11,url:11,usag:[11,12],use:[1,2,3,5,6,11,12],use_beam_search:[11,12],use_bidirect:[11,12],use_cuda:[3,11,12],use_multi_gpu:12,used:[1,3,4,5,6,11,12],using:[0,1,2,5,7,11],usual:5,utf:[1,9,10],util:8,utter:5,v_len:5,valid:[0,1,5,7,12],valid_dataset:1,valid_ratio:[11,12],validate_arg:5,validset:[0,1,7],valu:[5,6,9,12],value_project:11,variabl:[0,5,6],varieti:11,variou:[1,3,11],version:[3,11],vgg:[5,11],vggextractor:[5,11],virtual:11,voic:11,wait:1,want:11,websit:11,weight:[2,6],weightedensembl:2,well:5,when:[0,5,6],where:5,whether:[1,4,5,12],which:[1,5,6,11,12],whose:5,wiki:11,window:[1,12],window_s:[1,11,12],within:[2,5,6],won:11,word:[3,6],worderrorr:3,work:11,worker:12,would:5,wrapper:6,write:[0,10],www:10,xxx:11,y_m_d_h_m_:0,year:11,you:[1,2,5,11],your:[6,11],yyyy_mm_dd_hh_mm_ss:11,zeroth:11,zip:[9,10]},titles:["Checkpoint","Data","Decode","Etc","Evaluator","Model","Optim","Trainer","Welcome to KoSpeech\u2019s documentation!","Data-Analysis","Preparation before Training","Intro","Options"],titleterms:{"function":10,"new":10,analysi:9,attent:5,augment:1,base:[5,10],beamsearch:5,befor:10,bracket_filt:10,charact:[10,11],checkpoint:[0,11],cite:11,code:11,contact:10,contribut:11,conv:5,core:1,creat:10,crr:11,data:[1,9,10,11],dataload:1,decod:2,document:8,ensembl:2,etc:3,eval:11,evalu:4,extern:11,featur:[1,11],filenum_pad:10,from:11,get:11,get_path:10,incorpor:11,infer:12,instal:11,intro:11,kospeech:[8,11],label:10,labelload:1,languag:[5,11],list:10,listen:5,listenattendspel:5,loss:6,lrschedul:6,main:11,metric:3,model:[5,11,12],modelbuild:3,new_target_dict:9,opt:3,optim:6,option:12,parser:1,perform:11,prepar:10,preprocess:[10,11,12],prerequisit:11,rate:11,recognit:11,refer:11,roadmap:11,run:11,search:2,sentence_filt:10,sentence_to_target:10,sourc:11,special_filt:10,speller:5,start:11,step:11,structur:10,style:11,supervisedtrain:7,target:10,target_to_sent:10,test:11,text:10,train:[10,12],trainer:7,troubleshoot:11,util:3,welcom:8}})