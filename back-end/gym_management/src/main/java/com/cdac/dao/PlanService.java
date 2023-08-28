package com.cdac.dao;

import java.util.List;

import com.cdac.pojos.Plan;
import com.cdac.pojos.User;

public interface PlanService {
	    Plan findById(int subplanId);
	    List<Plan>findAll();
	    Plan save(Plan pl);
	    Plan update(Plan pl);
	    void deleteById(int subplanId);
	  
}
