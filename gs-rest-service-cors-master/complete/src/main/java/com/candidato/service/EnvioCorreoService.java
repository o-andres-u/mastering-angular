package com.candidato.service;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.candidato.entity.Candidato;
import com.candidato.entity.Competencia;
import com.candidato.interfaces.IEnvioCorreoService;

@Service
public class EnvioCorreoService implements IEnvioCorreoService {

	@Autowired
	private JavaMailSender sender;

	@Value("${send.to.email}")
	private String toEmail;

	@Value("${send.text.email}")
	private String textEmail;

	@Value("${send.subject.email}")
	private String subjectEmail;
	
	@Value("${spring.file.storage}")
    private String location;
	
	@Value("${send.text.email}")
    private String emailBody;
	

	@Override
	@Async
	public void enviarEmail(Candidato candidato) {
		MimeMessage message = sender.createMimeMessage();

		MimeMessageHelper helper;
		try {
			helper = new MimeMessageHelper(message, true);
			String[] listaDestinatarios = toEmail.split(",");
			helper.setTo(listaDestinatarios);
			String msj = String.format(emailBody, candidato.getNombreApellidos(),candidato.getNumeroContacto(),candidato.isNivelIngles() ? "SI" : "NO", getCompetencias(candidato));
			helper.setText(msj, true);
			helper.setSubject(subjectEmail + candidato.getNombreApellidos());
			
			FileSystemResource file = new FileSystemResource(new File(location + File.separator +candidato.getHojaVida()));
			helper.addAttachment(file.getFilename(), file);
			
			sender.send(message);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	private String getCompetencias (Candidato candidato) {
		String competencias = "";
		if (candidato.getListaCompetencias()!= null) {			
			for (Competencia comp : candidato.getListaCompetencias()) {
				competencias += comp.getDescripcionCompetencia() + "<BR>";
			}
		}
		return competencias;
	}

}
