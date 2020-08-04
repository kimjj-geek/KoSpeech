import argparse
import torch
import torchaudio
from torch import Tensor
from kospeech.data.audio.core import load_audio
from kospeech.utils import label_to_string, id2char, EOS_token


def parse_audio(audio_path: str, del_silence: bool = True) -> Tensor:
    signal = load_audio(audio_path, del_silence)

    feature_vector = torchaudio.compliance.kaldi.fbank(Tensor(signal).unsqueeze(0), num_mel_bins=80,
                                                       frame_length=20, frame_shift=10,
                                                       window_type='hamming').transpose(0, 1).numpy()
    feature_vector -= feature_vector.mean()

    feature_vector = Tensor(feature_vector).transpose(0, 1)

    return feature_vector


parser = argparse.ArgumentParser(description='Run Pretrain')
parser.add_argument('--audio_path', type=str, default='../pretrain/sample_audio.pcm')
parser.add_argument('--device', type=str, default='cuda')
opt = parser.parse_args()

feature_vector = parse_audio('audio_path', del_silence=True)
input_length = torch.IntTensor([len(feature_vector)])

model = torch.load('../pretrain/model.pt').to(opt.device)

output = model(feature_vector.unsqueeze(0), input_length, teacher_forcing_ratio=0.0, return_attns=False)
logit = torch.stack(output, dim=1).to(opt.device)
pred = logit.max(-1)[1]

sentence = label_to_string(pred.cpu().detach().numpy(), id2char, EOS_token)
print(sentence)
